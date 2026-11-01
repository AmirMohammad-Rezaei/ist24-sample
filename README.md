# IST 24 — React Homepage

A responsive, Persian (RTL) travel-booking homepage built with React + Vite.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
ist24-react/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── components/
    │   ├── Header.jsx
    │   ├── HeroSection.jsx
    │   ├── FlightSearch.jsx
    │   ├── ServiceTabs.jsx
    │   ├── TripTypeSelector.jsx
    │   ├── SearchField.jsx
    │   ├── PassengerPicker.jsx
    │   ├── ServicesSection.jsx
    │   ├── ServiceCard.jsx
    │   ├── BenefitsSection.jsx
    │   ├── BenefitCard.jsx
    │   ├── Footer.jsx
    │   └── SearchValidationModal.jsx
    ├── data/
    │   ├── services.js
    │   └── benefits.js
    └── styles/
        ├── global.css
        └── app.css
```

## Features included

- Responsive desktop, tablet and mobile layouts
- Persian RTL interface with the IST 24 blue brand color (`#03A8F4`)
- Header navigation and mobile menu
- Travel service tabs
- Flight round-trip / one-way / multi-city selection UI
- Origin and destination city selectors with route swap
- Date validation and passenger / travel-class picker
- Search feedback modal
- Service cards, benefits section and footer

## Important integration note

This project is a front-end prototype. The search form validates the fields and shows a feedback message, but it does not yet call a flight, hotel, train or bus API. Replace the success branch in `src/components/FlightSearch.jsx` with your backend API request when that endpoint is ready. The login and registration flow also needs to be connected to an authentication API.

The Noto Sans Arabic font is loaded from Google Fonts. A system-font fallback is included in `global.css`.
