# Kashyap Dental Clinic Website

Kashyap Dental Clinic Website is a polished single-page marketing site built with React and Vite. It showcases the clinic's services, patient reviews, smile transformation gallery, location, timings, and direct booking/contact actions in a mobile-friendly landing page.

## Overview

This project is designed as a public-facing clinic showcase and lead-generation site. Visitors can quickly explore the clinic, understand the treatments offered, read social proof, and reach the team through call, WhatsApp, or map directions.

## Live Demo

Add your deployed site here:

- Demo URL: https://your-demo-link-here.com

## Screenshots

Add the exported screenshots to `docs/screenshots/` and update the image names below.

![Homepage screenshot](docs/screenshots/homepage.png)

![Services screenshot](docs/screenshots/services.png)

![Experts and Reviews screenshot](docs/screenshots/reviews.png)

## Badges

You can place status badges directly under the title once the repo is public.

```md
![Build](https://img.shields.io/github/actions/workflow/status/OWNER/REPO/workflow.yml)
![License](https://img.shields.io/github/license/OWNER/REPO)
![Issues](https://img.shields.io/github/issues/OWNER/REPO)
```

### What the site includes

- Timed preloader with clinic branding
- Sticky navigation with section links and a booking CTA
- Hero section with consultation and services calls to action
- Trust banner with clinic proof points
- Services grid with modal inquiry flow
- About section with clinic and doctor context
- Patient testimonials carousel
- Smile transformation gallery sourced from `public/gallery`
- Location, timings, and embedded Google Maps section
- Floating phone and WhatsApp contact widget

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- GSAP and `@gsap/react`
- Lucide React icons
- `clsx` and `tailwind-merge`
- `@vercel/analytics`

## Project Structure

```text
src/
  App.jsx                Main app shell and section composition
  main.jsx               React entry point
  index.css              Global styles and theme layer
  setupTests.js          Vitest test setup
  components/
    Preloader.jsx        Initial loading screen
    Navbar.jsx           Sticky navigation and CTA buttons
    Hero.jsx             Main landing section
    TrustBanner.jsx      Proof points and clinic highlights
    Services.jsx         Treatment cards and inquiry modal
    AboutUs.jsx          Clinic and doctor introduction
    Testimonials.jsx     Reviews carousel and gallery
    Footer.jsx           Location, timings, map, and footer links
    FloatingContact.jsx  Persistent phone and WhatsApp shortcuts
```

## Featured Services

The site currently highlights:

- Dental Implants
- Smile Designing
- Root Canal Treatment
- Prosthodontics
- General Dentistry
- Orthodontics

## Clinic Information

- Clinic name: Kashyap Dental Clinic
- Address: Satyam Shivam Shopping Centre, Near Nallasopara Railway Station, Nallasopara East, Maharashtra
- Phone: 6360724703
- WhatsApp: 8310112284
- Google Maps: https://share.google/DCXZnudvhlELSjrmi
- Hours: Monday to Saturday 10:00 AM - 10:00 PM, Sunday 10:00 AM - 6:00 PM

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

If PowerShell blocks script execution on your machine, use `npm.cmd` instead of `npm`.

### Install Dependencies

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

### Run Tests and Lint

```bash
npm run test
npm run lint
```

## Deploying Publicly

This repository is currently private, so before publishing it to GitHub I recommend:

1. Add a license file if you want others to reuse the code.
2. Create a short deployment link in the README once the site is live on Vercel, Netlify, or another host.
3. Add screenshots or a short GIF near the top of the README so the project is immediately visible when someone opens the repo.
4. Review any private contact details or business information before making the repository public.

## License

If you want others to reuse the code, add a `LICENSE` file at the repo root before making the repository public.

Common choices:

- MIT License: simple and permissive
- Apache 2.0: permissive with patent protection language
- GPL-3.0: copyleft license if you want derivatives to stay open

In GitHub, you can add one from the repository home page by using Add file > Create new file and naming it `LICENSE`, or by choosing a license when creating a new repository.

## Notes

- The site uses local assets from `public/`, including the logo and gallery images.
- Several sections rely on scroll-triggered animation, so the experience is intended to be viewed vertically.
- The existing tests and lint setup are ready for a public repo workflow.
