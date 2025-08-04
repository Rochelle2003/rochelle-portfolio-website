# 🎨 Rochelle M - Portfolio Website

Een moderne, interactieve portfolio website voor Rochelle, een enthousiaste media design student met een passie voor UX/UI design en front-end development.

## ✨ Features

### 🎯 Moderne Design
- **Gradient backgrounds** met dynamische kleuren
- **Glass morphism effecten** voor een moderne look
- **Responsive design** voor alle apparaten
- **Custom fonts** (Vinila Test) voor unieke branding
- **Smooth animaties** met Framer Motion

### 🚀 Performance & UX
- **Fast loading** met geoptimaliseerde afbeeldingen
- **SEO optimized** met meta tags en structured data
- **Accessibility** met ARIA labels en focus states
- **Mobile-first** responsive design
- **Interactive elements** met hover effects

### 🎨 Animaties & Interacties
- **Scroll-triggered animaties** voor betere engagement
- **Mouse-following effects** op de homepage
- **Hover animations** op alle interactieve elementen
- **Loading states** met mooie spinners
- **Page transitions** voor vloeiende navigatie

## 🛠️ Technologieën

- **Next.js 13** - React framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animatie library
- **React Parallax Tilt** - 3D tilt effecten
- **Formspree** - Contact formulier handling

## 📁 Project Structuur

```
rochelle-complete/
├── components/
│   ├── Header.jsx          # Navigatie met glass effect
│   └── LoadingSpinner.jsx  # Loading component
├── pages/
│   ├── _app.jsx           # App wrapper met SEO
│   ├── index.jsx          # Homepage met animaties
│   ├── over-mij.jsx       # Over mij pagina
│   ├── portfolio.jsx      # Portfolio met projecten
│   ├── contact.jsx        # Contact pagina
│   └── 404.jsx           # Custom 404 pagina
├── public/
│   ├── *.jpg/png         # Afbeeldingen
│   └── *.otf            # Custom fonts
├── styles/
│   └── globals.css      # Global styles & animaties
└── tailwind.config.js   # Tailwind configuratie
```

## 🎨 Design Systeem

### Kleuren
- **Primary**: Purple gradient (#8B5CF6)
- **Secondary**: Pink gradient (#EC4899)
- **Accent**: Cyan gradient (#06B6D4)
- **Background**: Dark gradients met glass effects

### Typografie
- **Font**: Vinila Test (Regular & ExtraBold)
- **Hierarchy**: Duidelijke tekst hiërarchie
- **Responsive**: Schaalbaar voor alle schermen

### Componenten
- **Buttons**: Gradient buttons met hover effects
- **Cards**: Glass effect cards met shadows
- **Forms**: Styled inputs met focus states
- **Navigation**: Fixed header met glass effect

## 🚀 Getting Started

### Installatie
```bash
# Clone de repository
git clone [repository-url]

# Installeer dependencies
npm install

# Start development server
npm run dev
```

### Build voor productie
```bash
# Build de applicatie
npm run build

# Start productie server
npm start
```

## 📱 Responsive Design

De website is volledig responsive met breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 SEO & Performance

### SEO Optimalisaties
- Meta tags voor alle pagina's
- Open Graph tags voor social media
- Structured data voor zoekmachines
- Sitemap en robots.txt ready

### Performance
- Geoptimaliseerde afbeeldingen met Next.js Image
- Font preloading voor snelle loading
- Lazy loading voor betere performance
- Minified CSS en JS

## 🔧 Customisatie

### Kleuren aanpassen
Bewerk `tailwind.config.js` voor nieuwe kleuren:
```javascript
colors: {
  primary: { /* nieuwe kleuren */ },
  secondary: { /* nieuwe kleuren */ }
}
```

### Animaties aanpassen
Bewerk `styles/globals.css` voor nieuwe animaties:
```css
@keyframes customAnimation {
  /* nieuwe animatie */
}
```

### Content updaten
- **Homepage**: Bewerk `pages/index.jsx`
- **Portfolio**: Bewerk projecten array in `pages/portfolio.jsx`
- **Contact**: Update Formspree endpoint in `pages/contact.jsx`

## 📞 Contact

Voor vragen of samenwerking:
- **Email**: Via contact formulier
- **Portfolio**: Bekijk projecten op `/portfolio`
- **Over mij**: Meer informatie op `/over-mij`

## 🎨 Credits

- **Design**: Rochelle M
- **Development**: Met Next.js en Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Vinila Test (custom font)

---

**Gemaakt met ❤️ voor moderne web development**
 
