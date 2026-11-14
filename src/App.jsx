
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Play,
  Pause,
  Laptop,
  Cloud,
  HeartPulse,
  Leaf,
  Monitor,
  ShieldCheck,
  Database,
  Stethoscope,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";
import "./App.css";

const slides = [
  {
    title: "IT Services",
    image: "/images/IT Services.png",
    href: "#services",
  },
  {
    title: "Medical Devices",
    image: "/images/Medical Devices.png",
    href: "#devices",
  },
  {
    title: "ForYou Telehealth",
    image: "/images/ForYou Telehealth.png",
    href: "#telehealth",
  },
  {
    title: "Queue Management",
    image: "/images/Queue System.png",
    href: "#queue-management",
  },
  {
    title: "Gum Arabic",
    image: "/images/Gum Arabic.png",
    href: "#gum-arabic",
  },
];

const navigation = [
  ["Home", "#home"],
  ["About", "#about"],
  ["IT Services", "#services"],
  ["Telehealth", "#telehealth"],
  ["Medical Devices", "#devices"],
  ["Queue Management", "#queue-management"],
  ["Gum Arabic", "#gum-arabic"],
  ["Company Profile", "#profile"],
  ["Contact", "#contact"],
];

const serviceCards = [
  {
    icon: Laptop,
    title: "Software Engineering",
    description:
      "Custom software, business applications, API development, and system modernization.",
  },
  {
    icon: Cloud,
    title: "IT Infrastructure",
    description:
      "Computer systems, networking, deployment, configuration, and technical support.",
  },
  {
    icon: Database,
    title: "Systems Integration",
    description:
      "Connecting software, hardware, databases, and operational workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Network & Security",
    description:
      "Network configuration, access management, and infrastructure reliability.",
  },
];

const medicalProducts = [
  {
    title: "GP-C01 — Convex USB Ultrasound Probe",
    image: "/images/GP-C01%20Convex%20Ultrasound.png",
    description: "Portable convex ultrasound probe for general-purpose examinations, including abdominal, pelvic, obstetric and musculoskeletal imaging.",
    specifications: ["Model: GP-C01", "Probe type: Convex", "Connection: USB", "Applications: Abdominal, OB/GYN, pelvic, eFAST and MSK"],
  },
  {
    title: "SP-L01 — Linear USB Ultrasound Probe",
    image: "/images/SP-L01%20Linear%20Ultrasound.png",
    description: "Portable linear ultrasound probe for small parts, superficial structures, vascular access and ultrasound-guided procedures.",
    specifications: ["Model: SP-L01", "Probe type: Linear", "Connection: USB", "Applications: Superficial structures, vascular access and guided procedures"],
  },
  {
    title: "12-Lead Wireless ECG",
    image: "/images/12-Lead.png",
    description: "Digital 12-lead electrocardiography for cardiac assessment and remote consultations. Request model-specific connectivity and software details.",
    specifications: ["ECG: 12-lead", "Connectivity: Wireless", "Applications: Cardiac assessment and remote consultations"],
  },
  {
    title: "Multipurpose Digital Medical Camera",
    image: "/images/Multipurpose Digital Medical Camera.png",
    description: "Portable examination camera with interchangeable lenses for otoscopy, dermatology and general clinical imaging.",
    specifications: ["Lens configuration: Interchangeable", "Applications: Otoscopy, dermatology and general clinical imaging"],
  },
  {
    title: "Spot-Check Vital Signs Monitor",
    image: "/images/Vital Signs Monitor.png",
    description: "Compact monitoring of non-invasive blood pressure (NIBP), oxygen saturation (SpO₂), pulse rate and body temperature.",
    specifications: ["Non-invasive blood pressure (NIBP)", "Oxygen saturation (SpO₂)", "Pulse rate", "Body temperature"],
  },
  {
    title: "Intraoral Dental Camera",
    image: "/images/Dental Camera.png",
    description: "Digital intraoral imaging for dental examinations and oral-health assessment. Ask us about available configurations.",
    specifications: ["Imaging: Digital intraoral", "Applications: Dental examinations and oral-health assessment"],
  },
];


function Brand({ showIcon = false }) {
  return (
    <a className="brand" href="#home" aria-label="ForYou homepage">
      {showIcon && <img className="brand-icon" src="/images/ForYou%204U%20Icon.png" alt="4U logo" />}
      <span className="brand-copy">
        <strong>ForYou</strong>
        <small>IT Solutions &amp; Healthcare Technology</small>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand showIcon />

        <nav
          className={`main-nav ${open ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          {navigation.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#contact">
          Get in Touch <ArrowRight size={17} />
        </a>

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

function Slideshow() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return undefined;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [playing]);

  const previous = () =>
    setActive(
      (current) => (current - 1 + slides.length) % slides.length
    );

  const next = () =>
    setActive((current) => (current + 1) % slides.length);

  return (
    <section
      id="home"
      className="hero"
      aria-label="ForYou featured products and services"
    >
      <div className="hero-slides">
        {slides.map((slide, index) => (
          <a
            key={slide.title}
            href={slide.href}
            className={`hero-slide ${
              active === index ? "is-active" : ""
            }`}
            aria-hidden={active !== index}
            tabIndex={active === index ? 0 : -1}
          >
            <img
              src={slide.image}
              alt={slide.title}
              draggable="false"
            />
          </a>
        ))}
      </div>

      <button
        type="button"
        className="hero-arrow hero-prev"
        onClick={previous}
        aria-label="Previous slide"
      >
        <ChevronLeft />
      </button>

      <button
        type="button"
        className="hero-arrow hero-next"
        onClick={next}
        aria-label="Next slide"
      >
        <ChevronRight />
      </button>

      <div className="hero-controls">
        <div className="hero-dots">
          {slides.map((slide, index) => (
            <button
              type="button"
              key={slide.title}
              onClick={() => setActive(index)}
              className={`hero-dot ${
                index === active ? "is-active" : ""
              }`}
              aria-label={`Show ${slide.title}`}
              aria-current={index === active ? "true" : undefined}
            />
          ))}
        </div>

        <button
          type="button"
          className="hero-play"
          onClick={() => setPlaying(!playing)}
          aria-label={playing ? "Pause slideshow" : "Play slideshow"}
        >
          {playing ? <Pause size={15} /> : <Play size={15} />}
        </button>
      </div>
    </section>
  );
}

function FeatureStrip() {
  const features = [
    {
      icon: Laptop,
      title: "Software Engineering",
      text: "Custom & Enterprise Solutions",
    },
    {
      icon: Cloud,
      title: "IT Infrastructure",
      text: "Cloud, Network & Security",
    },
    {
      icon: HeartPulse,
      title: "Telehealth Solutions",
      text: "Remote Care & Connected Devices",
    },
    {
      icon: Leaf,
      title: "Gum Arabic",
      text: "Natural, Versatile Ingredient",
    },
  ];

  return (
    <div className="feature-strip">
      {features.map(({ icon: Icon, title, text }) => (
        <div className="feature-item" key={title}>
          <Icon className="feature-icon" strokeWidth={1.8} />
          <div>
            <strong>{title}</strong>
            <span>{text}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProductGrid() {
  return (
    <>
    <style>{`
      .product-grid.aligned-product-grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 24px;
        width: 100%;
      }
      .aligned-product-grid .product-card { width: 100%; min-width: 0; }
      @media (max-width: 760px) {
        .product-grid.aligned-product-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
      }
      @media (max-width: 480px) {
        .product-grid.aligned-product-grid { grid-template-columns: 1fr; }
      }
    `}</style>
    <div className="product-grid aligned-product-grid">
      {slides.filter((slide) => slide.title !== "Queue Management").map((slide) => (
        <a
          className="product-card"
          key={slide.title}
          href={slide.href}
        >
          <img src={slide.image} alt={slide.title} loading="lazy" />
          {(slide.title === "Queue Management" || slide.title === "Gum Arabic") && (
            <span className="product-card-caption">
              {slide.title === "Queue Management" ? "Queue Management System" : "Premium Gum Arabic"}
            </span>
          )}
        </a>
      ))}
    </div>
    </>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="content-section about-section">
      <div className="section-container">
        <SectionHeading
          eyebrow="ABOUT FORYOU"
          title="Technology that connects people, systems, and possibilities."
          description="ForYou develops practical technology solutions across software engineering, IT infrastructure, connected healthcare, and international product services."
        />

        <div className="about-grid">
          <div className="about-panel">
            <Monitor size={34} />
            <h3>Technology Expertise</h3>
            <p>
              We combine software engineering, computer systems,
              infrastructure, and integration experience to support
              organizations and operational teams.
            </p>
          </div>

          <div className="about-panel">
            <Stethoscope size={34} />
            <h3>Connected Healthcare</h3>
            <p>
              Our telehealth direction brings together remote
              consultations, clinical workflows, and compatible
              medical devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ITServices() {
  return (
    <section id="services" className="content-section services-section">
      <div className="section-container">
        <SectionHeading
          eyebrow="IT SERVICES"
          title="IT solutions built around your business."
          description="From software applications to deployment and integration, ForYou focuses on dependable, practical solutions."
        />

        <div className="service-grid">
          {serviceCards.map(({ icon: Icon, title, description }) => (
            <article className="service-card" key={title}>
              <div className="service-icon">
                <Icon size={28} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Telehealth() {
  return (
    <section
      id="telehealth"
      className="content-section telehealth-section"
    >
      <div className="section-container two-column">
        <div>
          <span className="eyebrow">FORYOU TELEHEALTH</span>
          <h2>Connected healthcare with real devices.</h2>
          <p className="section-lead">
            ForYou Telehealth is designed to support remote clinical
            consultation and coordinated patient care through a
            connected digital workspace.
          </p>

          <div className="check-list">
            <span>Remote video consultation</span>
            <span>Patient and clinical visit management</span>
            <span>Clinical notes and documentation</span>
            <span>Vital signs and device-based imaging workflows</span>
            <span>Organization-based access and user roles</span>
          </div>

          <a className="primary-button" href="#contact">
            Discuss Telehealth <ArrowRight size={18} />
          </a>
        </div>

        <div className="section-image">
          <img
            src="/images/ForYou Telehealth.png"
            alt="ForYou Telehealth approved product visual"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function MedicalDevices() {
  return (
    <section id="devices" className="content-section devices-section">
      <div className="section-container">
        <SectionHeading
          eyebrow="MEDICAL DEVICES"
          title="Medical equipment for connected care."
          description="Explore our selected diagnostic device categories for clinical and remote-care workflows."
        />
        <div className="devices-feature">
          <div className="devices-image">
            <img src="/images/Medical Devices.png" alt="ForYou USB ultrasound and ECG product presentation" loading="lazy" />
          </div>
          <div className="devices-description">
            <h3>Connected diagnostic equipment</h3>
            <p>From portable ultrasound to vital signs and digital examination cameras, ForYou supports conversations about device selection and clinical workflows.</p>
            <p>Specifications, regulatory status and integration requirements are confirmed for each proposed configuration.</p>
            <a className="text-link" href="#contact">Request product information <ArrowRight size={18} /></a>
          </div>
        </div>
        <h3 className="subsection-title">Explore medical devices</h3>
        <div className="medical-product-grid">
          {medicalProducts.map((product) => (
            <article className="medical-product-card" key={product.title}>
              {product.image ? (
                <img src={product.image} alt={product.title} loading="lazy" />
              ) : (
                <div className="product-image-pending" aria-label="Product image awaiting approval">
                  <HeartPulse size={36} />
                  <span>Product image available upon request</span>
                </div>
              )}
              <div className="medical-product-copy">
                <h4>{product.title}</h4>
                <p>{product.description}</p>
                <h5 className="medical-spec-heading">Product characteristics</h5>
                <ul className="medical-spec-list">{product.specifications.map((spec) => <li key={spec}>{spec}</li>)}</ul>
                <p className="medical-spec-note">Detailed model-specific specifications and availability are confirmed upon inquiry.</p>
                <a href="#contact" className="text-link">Ask about this device <ArrowRight size={16}/></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function QueueManagement() {
  return (
    <section id="queue-management" className="content-section queue-section">
      <div className="section-container">
        <SectionHeading
          eyebrow="BUSINESS & ENTERPRISE SOLUTIONS"
          title="ForYou Smart Queue Management System"
          description="Organized customer flow for hospitals, banks, government service centers, and commercial facilities."
        />
        <div className="two-column queue-layout">
          <div className="section-image">
            <img src="/images/Queue System.png" alt="Approved ForYou Smart Queue Management System promotional visual" loading="lazy"/>
          </div>
          <div>
            <h3>Better service starts with an organized queue.</h3>
            <p>Explore self-service ticketing, customer calling, counter displays and central queue management with ForYou-branded equipment.</p>
            <div className="check-list">
              <span>Ticket dispensing and customer calling</span>
              <span>Counter and main queue displays</span>
              <span>Multi-language voice announcement customization</span>
              <span>Multiple service counters</span>
              <span>On-site configuration and technical support options</span>
            </div>
            <p className="small-note">Additional features, including appointment handling, reporting and multilingual interfaces, depend on the confirmed system configuration.</p>
            <a className="primary-button" href="#contact">Request Queue System Information <ArrowRight size={18}/></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function GumArabic() {
  return (
    <section id="gum-arabic" className="content-section gum-section">
      <div className="section-container">
        <div className="gum-intro">
          <span className="eyebrow gum-eyebrow">FORYOU · NATURAL INGREDIENTS</span>
          <h2>Premium Gum Arabic</h2>
          <p className="section-lead">Natural Origins. Global Applications.</p>
          <p>Explore our Gum Hashab and Gum Talha products for food, pharmaceutical, cosmetic, and industrial applications.</p>
        </div>
        <div className="gum-products">
          <article className="gum-product">
            <img src="/images/Gum Hashab 4U-GA-111.png" alt="Gum Hashab  4U/GA-111 — amber gum crystals on a green and gold product banner" loading="lazy" />
            <div className="gum-product-details"><h3>Gum Hashab</h3><p className="gum-model">4U/GA-111</p><p>Cleaned · Dried · Solid</p></div>
          </article>
          <article className="gum-product">
            <img src="/images/Gum Talha 4U-GA-116.png" alt="Gum Talha 4U/GA-116 — amber gum crystals on a green and gold product banner" loading="lazy" />
            <div className="gum-product-details"><h3>Gum Talha</h3><p className="gum-model">4U/GA-116</p><p>Cleaned · Dried · Solid</p></div>
          </article>
        </div>
        <div className="gum-specifications">
          <h3>Technical Specifications</h3>
          <p className="gum-spec-subtitle">Product characteristics and quality parameters</p>
          <div className="gum-spec-scroll">
            <table className="gum-spec-table">
              <thead><tr><th scope="col">Parameter</th><th scope="col">Gum Hashab <span>4U/GA-111</span></th><th scope="col">Gum Talha <span>4U/GA-116</span></th></tr></thead>
              <tbody>
                {[
                  ["Physical form", "Solid", "Solid"],
                  ["Grade", "Cleaned", "Cleaned"],
                  ["Style", "Dried", "Dried"],
                  ["Color of 20% solution", "Light amber", "Not specified"],
                  ["Viscosity of 20% solution", "70–110 cP", "Not specified"],
                  ["Specific rotation", "−45° to −60°", "−45° to −60°"],
                  ["Moisture", "15% max", "15% max"],
                  ["Protein", "0.7–1.0%", "0.7–1.0%"],
                  ["Nitrogen", "0.106–0.156%", "0.106–0.156%"],
                  ["Total ash", "4% max", "4% max"],
                  ["Acid-insoluble residue", "0.35% max", "0.35% max"],
                  ["Coliform", "Negative", "Negative"],
                  ["Salmonella", "Negative", "Negative"],
                  ["Starch or dextrin", "Negative", "Negative"],
                  ["Identification", "Positive", "Positive"],
                ].map(([parameter, hashab, talha]) => (
                  <tr key={parameter}><th scope="row">{parameter}</th><td>{hashab}</td><td>{talha}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="gum-inquiry"><p>Packaging available according to customer requirements.</p>
          <a className="primary-button gum-button" href="#contact">Inquire About Gum Arabic <ArrowRight size={18} /></a>
        </div>
      </div>
    </section>
  );
}

function CompanyProfile() {
  return (
    <section id="profile" className="content-section profile-section">
      <div className="section-container">
        <div className="profile-panel">
          <div>
            <span className="eyebrow">COMPANY PROFILE</span>
            <h2>Discover ForYou.</h2>
            <p>
              Learn about our technology services, connected
              healthcare solutions, medical-device interests,
              and Gum Arabic business direction.
            </p>
          </div>

          <a className="primary-button" href="#contact">
            Request Company Profile <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", organization: "",
    country: "", phone: "", interest: "", requirements: "",
  });
  const update = (key) => (event) => {
    setForm((current) => ({ ...current, [key]: event.target.value }));
  };
  const inquiryText = [
    `Product inquiry from ${form.firstName} ${form.lastName}`,
    "",
    `Work email: ${form.email}`,
    `Organization: ${form.organization || "Not provided"}`,
    `Country: ${form.country}`,
    `Phone: ${form.phone || "Not provided"}`,
    `Interest: ${form.interest}`,
    "",
    "Requirements:",
    form.requirements || "Not provided",
  ].join("\n");
  const submitInquiry = (event) => {
    event.preventDefault();
    const subject = `ForYou product inquiry — ${form.interest}`;
    const mailto = `mailto:info@4uforyou.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(inquiryText)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="content-section contact-section">
      <div className="section-container">
        <SectionHeading eyebrow="CONTACT" title="Request Product Information & Consultation"
          description="Tell us about your organization and the products or services you are interested in."/>
        <div className="contact-grid">
          <div className="contact-card">
            <MapPin size={28}/>
            <h3>ForYou LLC</h3>
            <p>41 Jackson Road<br/>Somerville, MA 02145<br/>United States</p>
            <Mail size={28}/>
            <h3>Business Inquiries</h3>
            <p>Email us at <a href="mailto:info@4uforyou.com">info@4uforyou.com</a>, or prepare an inquiry using the form.</p>
          </div>
          <form className="inquiry-form" onSubmit={submitInquiry}>
            <div className="form-two">
              <label>First name *<input required value={form.firstName} onChange={update("firstName")} autoComplete="given-name"/></label>
              <label>Last name *<input required value={form.lastName} onChange={update("lastName")} autoComplete="family-name"/></label>
            </div>
            <div className="form-two">
              <label>Work email *<input required type="email" value={form.email} onChange={update("email")} autoComplete="email"/></label>
              <label>Organization<input value={form.organization} onChange={update("organization")} autoComplete="organization"/></label>
            </div>
            <div className="form-two">
              <label>Country *<input required value={form.country} onChange={update("country")} autoComplete="country-name"/></label>
              <label>Phone<input type="tel" value={form.phone} onChange={update("phone")} autoComplete="tel"/></label>
            </div>
            <label>Product or service interest *
              <select required value={form.interest} onChange={update("interest")}>
                <option value="">Select an option</option>
                {["USB Ultrasound", "Wireless ECG", "Medical Camera", "Vital Signs Monitor", "Intraoral Dental Camera", "Queue Management System", "Telehealth Solutions", "IT Solutions", "Gum Arabic", "Other"].map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
            <label>Tell us about your requirements
              <textarea rows={5} value={form.requirements} onChange={update("requirements")} placeholder="Tell us what you need..."/>
            </label>
            <button type="submit" className="primary-button">Open Email to Send Inquiry <ArrowRight size={18}/></button>


          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Brand />
        <p>
          © {new Date().getFullYear()} ForYou LLC.
          All rights reserved.
        </p>
        <a href="#home">
          Back to top <ArrowRight size={16} />
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Slideshow />

        <div className="section-container">
          <FeatureStrip />
          <ProductGrid />
        </div>

        <About />
        <ITServices />
        <Telehealth />
        <MedicalDevices />
        <QueueManagement />
        <GumArabic />
        <CompanyProfile />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
