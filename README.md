# 🎨 Rochelle's Portfolio Website

Een moderne, interactieve portfolio website gebouwd met Next.js en Framer Motion. Deze website toont mijn creatieve werk, van web development tot UX/UI design en branding.

## 📋 Table of Contents

- [Features](#-features)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)
- [Troubleshooting](#-troubleshooting)
- [Changelog](#-changelog)

## ✨ Features

- **🎨 Modern Design** - Glass morphism effecten en gradient backgrounds
- **🚀 Smooth Animations** - Framer Motion animaties voor een vloeiende gebruikerservaring
- **📱 Responsive Design** - Volledig responsive voor alle apparaten
- **🎭 Interactive Elements** - Hover effecten en 3D transformaties
- **📚 Portfolio Showcase** - Uitgebreide project showcase met links naar live sites
- **📬 Contact Form** - Werkend contact formulier voor professionele communicatie
- **🌙 Dark Theme** - Moderne dark theme met zwarte achtergrond
- **✨ Custom Typography** - Vinila Test font voor unieke branding

## 📸 Screenshots

### Homepage
![Homepage](https://github.com/user-attachments/assets/a96d93bd-29ba-40d1-8587-a3422e81c851)

**Features van de homepage:**
- **Moderne dark theme** met zwarte achtergrond
- **Gradient borders** rond de portret foto (pink naar purple)
- **Glass morphism effecten** op navigatie en knoppen
- **Responsive layout** met tekst links en foto rechts
- **Interactieve knoppen** met gradient backgrounds
- **Custom typografie** met Vinila Test font
- **Smooth animaties** met Framer Motion
- **Professional branding** met "Rochelle M" logo

### Portfolio Pagina
![Portfolio](./portfolio.png)

**Portfolio features:**
- **Project cards** met glass morphism effecten
- **3D hover animaties** op alle kaarten
- **Tech stack tags** voor elk project
- **Directe links** naar live sites en prototypes
- **Category badges** voor project organisatie

### Over Mij Pagina
![Over Mij](./over-mij.png)

**Over Mij features:**
- Persoonlijke achtergrond en ervaring
- Skills en expertise overzicht
- Professionele foto's en branding
- Responsive layout voor alle apparaten

### Contact Pagina
![Contact](./contact.png)

**Contact features:**
- Werkend contact formulier
- Social media links
- Professionele contact informatie
- Glass morphism design elementen

### Responsive Design
![Homepage Mobile](./homepage-mobile.png)

**Responsive features:**
- **Mobile**: < 768px - Geoptimaliseerd voor kleine schermen
- **Tablet**: 768px - 1024px - Aangepaste layout voor tablets
- **Desktop**: > 1024px - Volledige desktop ervaring

## 🚀 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 13.4.12 | React framework met SSR |
| **React** | 18.2.0 | UI library |
| **Framer Motion** | 12.6.3 | Animation library |
| **Tailwind CSS** | 3.3.2 | Utility-first CSS framework |
| **PostCSS** | 8.4.21 | CSS processing |
| **Autoprefixer** | 10.4.14 | CSS vendor prefixing |

## 📱 Responsive Design

De website is volledig responsive met de volgende breakpoints:
- **👉 Mobile**: < 768px
- **💻 Tablet**: 768px - 1024px
- **🖥️ Desktop**: > 1024px

## 📚 Projecten

### Web Development
- **EK McQuiz** - McDonald's campagne quiz met JavaScript
- **Carnaval Game** - Interactieve JavaScript game
- **Eastereggs EnoRm** - Frontend project met verborgen features

### Web Applications
- **KNMI Weerapp** - Moderne weerapp met Next.js en API integratie
- CineVault movie website

### UX/UI Design
- **DotSecure** - Cybersecurity awareness tool (Figma prototype)

### Branding & Content
- **Claudy Brand Guide** - Complete merkidentiteit voor artiest
- **Claudy Content Strategy** - Social media en marketing strategie

## 📦 Installation

### Prerequisites

- **Node.js** (versie 16 of hoger)
- **npm** of **yarn** package manager
- **Git** voor cloning

### Step-by-Step Installation

1. **Clone de repository**
   ```bash
   git clone https://github.com/Rochelle20/rochelle-portfolio.git
   cd rochelle-portfolio
   ```

2. **Installeer dependencies**
   ```bash
   npm install
   # of
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # of
   yarn dev
   ```

4. **Open je browser**
   Navigeer naar [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
# Build de applicatie
npm run build

# Start productie server
npm start
```

## 🎯 Usage

### Development

```bash
# Start development server met hot reload
npm run dev

# Build voor productie
npm run build

# Start productie server
npm start
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Starts development server |
| `npm run build` | Creates production build |
| `npm start` | Starts production server |

## 📁 Project Structure

```
rochelle-complete/
├── 📁 pages/                 # Next.js pages
│   ├── index.jsx            # Homepage
│   ├── over-mij.jsx         # Over mij pagina
│   ├── portfolio.jsx        # Portfolio pagina
│   ├── contact.jsx          # Contact pagina
│   ├── enorm-eastereggs.jsx # Easter eggs pagina
│   ├── _app.jsx             # App wrapper
│   └── 404.jsx              # 404 error pagina
├── 📁 components/            # React components
│   ├── Header.jsx           # Navigation header
│   └── LoadingSpinner.jsx   # Loading component
├── 📁 styles/               # CSS files
│   └── globals.css          # Global styles
├── 📁 public/               # Static assets
│   ├── images/              # Project afbeeldingen
│   ├── screenshots/         # Website screenshots
│   └── fonts/               # Custom fonts
├── 📁 .next/                # Next.js build output
├── package.json             # Dependencies en scripts
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── README.md                # Dit bestand
```
