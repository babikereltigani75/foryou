// Cloudflare Worker: inquiry API. Set RESEND_API_KEY and VERIFIED_SENDER as secrets.
// Set ALLOWED_ORIGIN to https://4uforyou.com (or https://www.4uforyou.com).
const fields = ["firstName", "lastName", "email", "organization", "country", "phone", "interest", "requirements"];
const clean = (value, max = 2000) => String(value ?? "").trim().slice(0, max);
const escapeHtml = (value) => clean(value).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const allowed = (env.ALLOWED_ORIGINS || "https://4uforyou.com,https://www.4uforyou.com").split(",").map(x => x.trim());
    const headers = { "Content-Type": "application/json", "Cache-Control": "no-store", "Vary": "Origin" };
    if (allowed.includes(origin)) headers["Access-Control-Allow-Origin"] = origin;
    const reply = (code, message) => new Response(JSON.stringify({ message }), { status: code, headers });
    if (request.method === "OPTIONS") {
      if (!allowed.includes(origin)) return reply(403, "Forbidden");
      return new Response(null, { status: 204, headers: { ...headers, "Access-Control-Allow-Methods": "POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type" } });
    }
    if (request.method !== "POST") return reply(405, "Method not allowed");
    if (!allowed.includes(origin)) return reply(403, "Forbidden");
    if (Number(request.headers.get("Content-Length") || 0) > 12000) return reply(413, "Too large");
    let input;
    try { input = await request.json(); } catch { return reply(400, "Invalid JSON"); }
    if (!input || typeof input !== "object") return reply(400, "Invalid form");
    if (clean(input.website)) return reply(200, "Accepted"); // Honeypot
    const data = Object.fromEntries(fields.map(key => [key, clean(input[key], key === "requirements" ? 4000 : 250)]));
    if (!data.firstName || !data.lastName || !data.country || !data.interest || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return reply(400, "Please complete required fields");
    if (!env.RESEND_API_KEY || !env.VERIFIED_SENDER) return reply(503, "Email service not configured");
    const html = '<h2>New ForYou product inquiry</h2>' + fields.map(k => `<p><strong>${escapeHtml(k)}:</strong> ${escapeHtml(data[k]).replace(/\n/g, '<br>')}</p>`).join('');
    let result;
    try {
      result = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ from: env.VERIFIED_SENDER, to: ['info@4uforyou.com'], reply_to: data.email, subject: `ForYou product inquiry — ${data.interest}`, html }),
      });
    } catch { return reply(502, "Email service unavailable"); }
    if (!result.ok) return reply(502, "Email service rejected submission");
    return reply(200, "Accepted for delivery");
  },
};
