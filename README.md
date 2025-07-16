# Bright Liu's Portfolio Website

[![Deploy to GitHub Pages](https://github.com/brightlikethelight/my_website/actions/workflows/deploy.yml/badge.svg)](https://github.com/brightlikethelight/my_website/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live-brightlikethelight.github.io-blue)](https://brightlikethelight.github.io/my_website/)
[![Domain Available](https://img.shields.io/badge/Domain-brightliu.com-yellow)](https://brightlikethelight.github.io/my_website/) *(Available for registration)*

A modern, responsive portfolio website built with Svelte, TypeScript, and Vite. Features a clean design with dark mode support, smooth animations, and interactive components.

## 🚀 Features

- **Modern Design**: Clean, professional layout with glassmorphism effects
- **Dark/Light Mode**: Automatic theme detection with manual toggle
- **Responsive**: Mobile-first design that works on all devices
- **Interactive**: Smooth scrolling, hover effects, and scroll-triggered animations
- **Performance**: Optimized build with code splitting and lazy loading
- **SEO Optimized**: Meta tags, structured data, and semantic HTML

## 🛠️ Tech Stack

- **Framework**: [Svelte](https://svelte.dev/) with TypeScript
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: CSS with custom properties and animations
- **Deployment**: GitHub Pages with GitHub Actions

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/brightlikethelight/my_website.git
cd my_website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open http://localhost:5173 in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
my_website/
├── src/
│   ├── lib/          # Svelte components
│   │   ├── Header.svelte
│   │   ├── Navigation.svelte
│   │   ├── Education.svelte
│   │   ├── Experience.svelte
│   │   ├── Projects.svelte
│   │   ├── Honors.svelte
│   │   ├── Skills.svelte
│   │   ├── animations.ts
│   │   └── stores.ts
│   ├── assets/       # Static assets
│   ├── App.svelte    # Root component
│   ├── main.ts       # Entry point
│   └── app.css       # Global styles
├── public/           # Public assets
├── .github/          # GitHub Actions workflows
└── dist/             # Build output (git ignored)
```

## 🚀 Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

### Manual Deployment

```bash
npm run build
npm run deploy
```

## 🎨 Customization

### Updating Content

- Edit component files in `src/lib/` to update content
- Modify `src/App.svelte` for global styles and layout
- Update `index.html` for meta tags and SEO

### Styling

- CSS custom properties are defined in `src/App.svelte`
- Dark/light themes are controlled by `data-theme` attribute
- Animations are defined in `src/lib/animations.ts`

## 📝 License

MIT License - feel free to use this code for your own portfolio!

## 🤝 Contact

- Email: [brightliu@college.harvard.edu](mailto:brightliu@college.harvard.edu)
- LinkedIn: [bright-liu-701174216](https://www.linkedin.com/in/bright-liu-701174216)
- GitHub: [brightlikethelight](https://github.com/brightlikethelight)

---

Built with ❤️ using Svelte and Vite
