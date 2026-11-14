# ForYou — IT Solutions & Healthcare Technology

Official website project for **ForYou**, a technology company offering IT solutions, software engineering, systems integration, telehealth technology, medical devices, and Gum Arabic business services.

**Website status:** Local development  
**Technology:** React, Vite, JavaScript, CSS, Lucide React  
**Location:** Somerville, Massachusetts, USA

## 1. Website Overview

The ForYou website uses a modern, Apple-inspired product presentation with a clean interface, responsive layout, and an automatically rotating homepage slideshow.

The design is based on the approved ForYou homepage artwork. All approved product images must remain unchanged unless a new design is explicitly approved.

### Homepage Slideshow

The homepage displays four approved product images:

1. **IT Services**
2. **Medical Devices** — ForYou-branded ultrasound and ECG equipment
3. **ForYou Telehealth**
4. **Gum Arabic**

Slideshow functionality includes:

- Automatic transitions every five seconds
- Smooth fade animation
- Previous and next navigation arrows
- Slide indicator dots
- Play and pause controls
- Clickable images linking to the relevant website sections
- Responsive presentation for desktop and mobile

The original images are displayed without stretching or cropping. Because they are portrait-oriented product cards, they may not fill the entire widescreen slideshow area.

## 2. Website Sections

| Section | Description |
|---|---|
| Home | Automatic slideshow and featured product cards |
| About | Company introduction and business direction |
| IT Services | Software engineering, infrastructure, systems integration, and networking |
| Telehealth | ForYou Telehealth platform and connected clinical workflows |
| Medical Devices | Ultrasound, ECG, and other medical-device categories |
| Gum Arabic | Natural Acacia resin and commercial applications |
| Company Profile | Company information and profile inquiries |
| Contact | Business inquiries and company location |

## 3. Technology Stack

- React — User interface components
- Vite — Development server and production build
- JavaScript (JSX) — Application functionality
- CSS — Layout, animations, and responsive styling
- Lucide React — Interface icons

## 4. Project Structure

```text
foryou-website/
├── public/
│   └── images/
│       ├── IT Services.png
│       ├── Medical Devices.png
│       ├── ForYou Telehealth.png
│       └── Gum Arabic.png
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

The four image filenames above are the expected names used by the current website code. Verify the actual extensions if an image fails to load.

## 5. Installation

### Requirements

- Node.js
- npm
- Visual Studio Code or another code editor
- A modern web browser

### Open the project

```bash
cd C:\Users\babik\foryou-website
```

### Install dependencies

```bash
npm install
npm install lucide-react
```

### Start the development server

```bash
npm run dev
```

Open the localhost address displayed in the terminal, normally:

`http://localhost:5173/`

If port 5173 is already in use, Vite may select another port.

## 6. Production Build

To generate a production-ready version:

```bash
npm run build
```

The compiled website will be created in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## 7. Approved Image Policy

The website uses the approved ForYou images stored in `public/images/`.

**Important requirements:**

- Preserve the approved image designs.
- Do not substitute generic stock photographs.
- Do not reintroduce Interson branding.
- Use **ForYou** as the displayed brand.
- Use the exact product title **ForYou Telehealth**.
- Preserve the ultrasound and ECG equipment in the Medical Devices presentation.
- Keep Gum Arabic as an independent business category.

The current slideshow uses these image paths:

```jsx
"/images/IT Services.png"
"/images/Medical Devices.png"
"/images/ForYou Telehealth.png"
"/images/Gum Arabic.png"
```

## 8. Slideshow Configuration

The slideshow is implemented in `src/App.jsx`.

The rotation interval is:

```javascript
5000
```

This represents five seconds between automatic slide changes.

The slideshow can be paused, resumed, or navigated manually using the visible controls.

## 9. Medical Devices and Telehealth

ForYou Telehealth focuses on remote consultation, patient management, clinical documentation, vital signs, and medical-device workflows.

Medical-device categories include portable ultrasound, ECG, vital-sign monitors, digital stethoscopes, otoscopes, dermatoscopes, examination cameras, pulse oximeters, blood-pressure monitors, thermometers, and glucometers.

Device availability, regulatory status, and integration compatibility must be verified before making customer commitments. Not every listed device category is currently integrated or commercially available.

## 10. Gum Arabic

The Gum Arabic business section presents naturally sourced Acacia resin for potential commercial applications in food, pharmaceuticals, cosmetics, and industrial products.

Supplier arrangements, specifications, and product availability are subject to confirmation.

## 11. Company Information

**Brand:** ForYou  
**Legal entity:** ForYou LLC  
**Business focus:** IT Solutions & Healthcare Technology

**Address:**  
41 Jackson Road  
Somerville, MA 02145  
United States

## 12. Deployment

The project can be deployed to a static website hosting service supporting Vite production builds.

Potential options include GitHub Pages, Netlify, Vercel, or a conventional web-hosting provider.

Before publishing:

- Confirm all four approved images load correctly.
- Test the slideshow and navigation.
- Check mobile responsiveness.
- Confirm company contact information.
- Add the approved company profile when available.
- Verify product descriptions and availability claims.
- Connect the production domain and configure HTTPS.

## 13. Current Project Status

**Implemented in the supplied website code:**

- Responsive website layout
- Company navigation
- Automatic four-image slideshow
- Product cards using approved pictures
- IT Services section
- ForYou Telehealth section
- Medical Devices section
- Gum Arabic section
- Company Profile inquiry section
- Contact information section

**Pending verification or future work:**

- Test the full replacement code locally.
- Confirm all image filenames and extensions.
- Confirm the final appearance matches the approved design.
- Publish the website to production hosting.
- Add

## November 2, 2026 website update

- Preserved the original React/Vite website structure, responsive navigation, slider controls, and existing sections.
- Installed the seven user-approved image assets exactly as supplied, including the queue system and vital signs product artwork.
- Added Queue Management to the hero slideshow and navigation, plus a dedicated enterprise solution section.
- Replaced the broad medical-device tags with individual product cards and descriptions.
- ECG and intraoral dental camera have neutral placeholders until individual pictures are approved.
- Added an accessible product inquiry form with fields for name, work email, organization, country, phone, interest, and requirements.
- **The form does not send email yet.** It prepares and copies the inquiry; integrate a verified email backend or form service after the company mailbox is configured. Never claim a message was sent.
- The promotional visuals are approved marketing designs, not necessarily photographs of the exact manufactured configurations. Confirm technical specifications, branding permissions, and applicable regulatory requirements before publication.
- To run: `npm install`, then `npm run dev`. To test the production build: `npm run build`.


## November 4 approved design integration

- Header: approved 4U blue logo with success stairs and light, transparent background.
- Medical devices: GP-C01 convex and SP-L01 linear are separate cards with approved artwork.
- 12-Lead Wireless ECG follows these cards. Its original manufacturer image was not included in the supplied ZIP and could not be retrieved; it is deliberately not replaced by an unrelated image. Add the approved ECG asset once available and set `image` for the ECG entry in `src/App.jsx`. Confirm reuse permissions before publishing manufacturer imagery.
- Other site sections and approved imagery retained.

Run `npm install` then `npm run dev` (or `npm run build`).
