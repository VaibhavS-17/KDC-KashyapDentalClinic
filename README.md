# Kashyap Dental Clinic Website

A modern single-page dental clinic website built with React, Vite, Tailwind CSS, and GSAP. The project presents Kashyap Dental Clinic through a polished landing experience with strong branding, motion, service details, patient reviews, smile transformations, and direct booking actions.

## Project Overview

This app is structured as a promotional and lead-generation site for Kashyap Dental Clinic. It focuses on making it easy for visitors to learn about the clinic, explore treatments, review social proof, and contact the team quickly by phone, WhatsApp, or directions.

The live experience currently includes:

- A timed preloader with clinic branding
- A sticky navigation bar with section links and appointment CTA
- A hero section with consultation and services CTAs
- A trust banner highlighting rating, specialist care, implants, and availability
- A comprehensive services grid with modal inquiries
- An about section introducing the specialist doctors and clinic values
- A patient testimonials carousel and smile transformation gallery
- A location and timings section with an embedded Google Map
- A floating phone and WhatsApp contact widget
- Vercel Analytics integration for lightweight usage tracking

## Key Features

- Responsive, mobile-friendly layout
- Animated page sections using GSAP and ScrollTrigger
- Direct call and WhatsApp booking flows
- Service cards with modal inquiry actions
- Google Maps embed for clinic directions
- Smile case gallery stored in the `public/gallery` folder
- Accessible, branded UI with custom Tailwind theme colors and fonts

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- GSAP and `@gsap/react`
- Lucide React icons
- `clsx` and `tailwind-merge` for class composition
- `@vercel/analytics` for analytics

## Project Structure

```text
src/
  App.jsx                Main app shell and section composition
  main.jsx               React entry point
  index.css              Global styles, animations, and base theme
  components/
    Preloader.jsx        Initial loading screen
    Navbar.jsx           Sticky navigation and CTA buttons
    Hero.jsx             Main landing section and consultation CTA
    TrustBanner.jsx      Proof points and clinic highlights
    Services.jsx         Treatment cards and inquiry modal
    AboutUs.jsx          Specialist introduction and clinic values
    Testimonials.jsx     Reviews carousel and smile gallery
    Footer.jsx           Location, timings, map, and footer links
    FloatingContact.jsx  Persistent phone and WhatsApp shortcuts
    Protocol.jsx         Experimental protocol/storytelling section
    Philosophy.jsx       Brand philosophy section
    Features.jsx         Feature showcase section
```

## Clinic Information

- Clinic name: Kashyap Dental Clinic
- Address: Satyam Shivam Shopping Centre, Near Nallasopara Railway Station, Nallasopara East, Maharashtra
- Phone: 6360724703
- WhatsApp: 8310112284
- Google Maps: https://share.google/DCXZnudvhlELSjrmi
- Hours:
  - Monday to Saturday: 10:00 AM - 10:00 PM
  - Sunday: 10:00 AM - 6:00 PM

## Treatments Highlighted

The site currently showcases these core services:

- Dental Implants
- Smile Designing
- Root Canal Treatment
- Prosthodontics
- General Dentistry
- Orthodontics

## Design System

The visual theme is defined in Tailwind and uses a clean medical palette:

- `primary`: deep clinic blue
- `accent`: bright sky blue
- `background`: light gray-blue base
- `dark`: near-black text tone

Typography is configured around modern display and serif pairings for a premium medical brand feel.

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

If PowerShell blocks `npm` scripts in your environment, use `npm.cmd` instead.

### Install Dependencies

```bash
npm install
```

### Run the Development Server

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

### Lint the Project

```bash
npm run lint
```

## Notes

- The app uses local assets from `public/`, including the logo, clinic image, and before-and-after gallery images.
- Several sections rely on scroll-triggered animation, so the page is designed to be experienced vertically from top to bottom.
- `Protocol.jsx`, `Philosophy.jsx`, and `Features.jsx` are present as additional storytelling components and can be integrated into the main page if the layout expands.

## License

No explicit license is currently defined in this repository.
