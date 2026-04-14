# Sriram Nandan Palaniswamy - Supply Chain Portfolio Website

A modern, responsive portfolio website showcasing the work and expertise of **Sriram Nandan Palaniswamy**, a supply chain professional with experience across **supply chain analytics, inventory planning, procurement analysis, supplier performance, and operational reporting**.

This portfolio is designed as a clean, recruiter-friendly static website that highlights project work, measurable business impact, technical skills, and career alignment for **Supply Chain Analyst**, **Inventory Analyst**, and **Procurement Analyst** roles.

## 🚀 Live Preview

Visit the live site at: `https://sriramportfolio.netlify.app/`  
or your deployed GitHub Pages / Netlify link here.

## ✨ Features

### Must-Have Features
- ✅ **Responsive Design** - Optimized for mobile, tablet, and desktop
- ✅ **Dark/Light Mode** - Theme toggle with professional color themes
- ✅ **Hero Section** - Clean portfolio landing section inspired by a modern dark tech style
- ✅ **About Section** - Professional summary and role positioning
- ✅ **Career Timeline** - Work experience and education timeline
- ✅ **Featured Projects** - 4 detailed supply chain case studies
- ✅ **Skills Section** - Supply chain, planning, procurement, and tools-based skills
- ✅ **Certifications Section** - Professional credentials and badges
- ✅ **Why Work With Me** - Value proposition cards
- ✅ **Metrics Dashboard** - KPI-style achievements and impact highlights
- ✅ **Roles I’m Targeting** - Role alignment for recruiter clarity
- ✅ **Contact Section** - Social links and contact form-ready layout
- ✅ **Static Deployment Ready** - Built for GitHub Pages / Netlify / Vercel

### Project Showcase
This portfolio includes four featured projects:

1. **Retail Demand Forecasting + S&OP Exception Dashboard**  
2. **Manufacturing Inventory Policy Optimizer (ROP + Safety Stock) + Service Simulation**  
3. **Supplier OTIF + Quality Scorecard + Late PO Risk Signals**  
4. **RFQ Landed Cost + Award Recommendation Engine**  

## 🛠 Tech Stack

### Frontend
- **React** - UI library
- **React Router DOM** - Routing
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library
- **Framer Motion** - Smooth animations and transitions
- **Chart.js / Recharts** - KPI and dashboard visuals

### Fonts
- **Satoshi / General Sans** - Headlines
- **Inter / Manrope** - Body text
- **JetBrains Mono** - Optional technical / KPI accents

### Deployment
- **GitHub Pages**
- **Netlify**
- **Vercel**

## 📁 Project Structure

```bash
sriramportfolio/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   │   ├── UI
|   |   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Timeline.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Certifications.jsx
│   │   ├── WhyWorkWithMe.jsx
│   │   ├── Metrics.jsx
│   │   ├── Roles.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── mock.js
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   ├── test/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── README.md
```

## 🎨 Customization Guide

### Updating Content

Most of the portfolio content is centralized in:

```bash
src/data/mock.js
```

You can update:
- personal information
- hero text
- about section content
- experience timeline
- featured projects
- skills
- certifications
- metrics
- role-targeting cards
- contact details

### Updating the Color Theme

Edit the theme variables in `src/index.css` or the main global stylesheet.

#### Professional Theme Example

**Dark Mode**
- Background: `#0F172A`
- Surface: `#162033`
- Card Background: `#1D2840`
- Primary Accent: `#2F6BFF`
- Secondary Accent: `#1F8A8A`
- Success / KPI Highlight: `#2E9E6F`
- Warning / Exception: `#D9A441`

**Light Mode**
- Background: `#F8FAFC`
- Surface: `#FFFFFF`
- Card Background: `#F1F5F9`
- Primary Accent: `#1D4ED8`
- Secondary Accent: `#0F766E`
- Success / KPI Highlight: `#15803D`
- Warning / Exception: `#B7791F`

### Adding or Updating Projects

Update the project data inside `src/data/mock.js`:

```javascript
export const projects = [
  {
    title: "Project Title",
    subtitle: "One-line subtitle",
    overview: "Longer description of the business problem and solution",
    impact: [
      { metric: "10–20%", label: "Forecast error reduction target" }
    ],
    features: ["Feature 1", "Feature 2", "Feature 3"],
    technologies: ["Python", "SQL", "Tableau"],
    cta: ["View Dashboard", "View Notebook"]
  }
];
```

### Adding a Photo

If you want to add a profile photo:
1. Place the image inside `public/assets/`
2. Update the hero or about component to load the image
3. Make sure the image is optimized for web

## 📧 Contact Section

The contact area is structured for a simple static contact form solution such as:
- Web3Forms
- Formspree

### Setup Steps:
1. Sign up for your chosen form service
2. Get your access key or endpoint
3. Replace the placeholder form action in `Contact.jsx`

## 🚀 Running the Project Locally

### Install dependencies
```bash
npm install
```

### Start the development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## 🚀 Deployment

This project is ready for static deployment.

### GitHub Pages
If using GitHub Pages:
- make sure the production build is generated correctly
- deploy the build output folder
- confirm the homepage/base path is configured properly

### Netlify
- connect the repo
- set build command to `npm run build`
- set publish directory to `dist`

### Vercel
- import repository
- use default React build settings
- deploy directly

## ✅ Content Update Checklist

When updating the portfolio, review these sections:

- [ ] Hero text
- [ ] About summary
- [ ] Work experience
- [ ] Education
- [ ] Projects
- [ ] Skills
- [ ] Certifications
- [ ] Metrics
- [ ] Role alignment
- [ ] Contact links
- [ ] Footer text

## 📌 Notes

- This is a **static portfolio website**
- Content is optimized for supply chain recruiting
- The design focuses on clarity, trust, and measurable outcomes
- The project supports multiple adjacent roles without splitting the personal brand

## 📞 Contact

- Email: `your-email@example.com`
- LinkedIn: `your-linkedin-url`
- GitHub: `your-github-url`

---

**Built with React, Tailwind CSS, and ❤️**

*Last Updated: April 2026*
