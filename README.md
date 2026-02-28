# MyWheels EV – Frontend Application

Internal frontend application for the MyWheels EV electric bike rental platform.

This project represents the customer-facing web application built using modern frontend technologies and prepared for backend API integration.

---

## 1. Project Overview

MyWheels EV is an electric bike rental platform designed for:

- Delivery partners
- Daily commuters
- Short-term and long-term rental users

This repository contains the frontend SPA (Single Page Application) that includes:

- Landing page
- Pricing plans
- KYC registration form (frontend only)
- Contact information
- Responsive layout

Backend services (C# API + Database) will be integrated separately.

---

## 2. Tech Stack

### Core
- React (TypeScript)
- Vite
- Tailwind CSS

### Tooling
- Node.js (v18+ recommended)
- npm
- Git

---

## 3. Architecture

This is a **Single Page Application (SPA)**.

Navigation is handled via anchor-based scrolling (no React Router required currently).

### High-Level Structure

```
mywheels-ev/
│
├── public/
├── src/
│ ├── components/
│ │
│ ├── pages/
│ │
│ ├── App.tsx
│ ├── main.tsx
│ └── index.css
│
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

## 4.  Local Development Setup

### Clone Repository + Local DEV Setup

```bash
git clone <PRIVATE_REPO_URL>
cd mywheels-ev

npm install

npm run dev
```
### Generate PROD Build

```
npm run build
```

### Preview PRODUCTION Build
```
npm run preview
```