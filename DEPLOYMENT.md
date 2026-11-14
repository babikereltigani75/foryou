# Publish ForYou to GitHub Pages

1. Open a terminal in this folder and run `npm install` then `npm run build`.
2. Create a GitHub repository (for example `foryou-website`) and push this project to its `main` branch.
3. In GitHub, Settings > Pages, select **GitHub Actions** as the build/deployment source.
4. The included workflow builds and deploys the `dist` folder automatically on pushes to `main`.
5. In Pages > Custom domain, enter `4uforyou.com`.
6. At Namecheap Advanced DNS, add A records for host `@` to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`; add CNAME `www` to `<YOUR-GITHUB-USERNAME>.github.io`. Replace the placeholder with your actual GitHub username. Remove conflicting website records only; **preserve MX, SPF, DKIM and other email-related DNS records**.
7. After DNS verification, enable Enforce HTTPS in GitHub Pages. Test both `https://4uforyou.com` and `https://www.4uforyou.com`.

The inquiry form uses `mailto:` and opens a visitor's email client; the visitor must press Send. It does not send email automatically or store form submissions.
