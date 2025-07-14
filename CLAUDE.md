# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Technology Stack

- **Framework**: Svelte with TypeScript
- **Build Tool**: Vite
- **UI Library**: exio (by KentoNishi) - framework-agnostic UI components
- **Hosting**: GitHub Pages (planned)

## Development Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run check        # Svelte type checking
npm run check:watch  # Watch mode type checking
```

## Project Structure

```
src/
├── lib/             # Reusable Svelte components
├── assets/          # Static assets (images, icons)
├── App.svelte       # Main application component
├── app.css          # Global styles
├── main.ts          # Application entry point
└── vite-env.d.ts    # TypeScript declarations

public/              # Static public assets
dist/                # Built files (auto-generated)
```

## Architecture Patterns

- **Component-based**: Svelte components in `src/lib/`
- **TypeScript**: Strict typing enabled
- **CSS**: Component-scoped styling with global styles in `app.css`
- **Assets**: Static assets in `public/` and `src/assets/`

## Additional UI Enhancements

The project is set up to support exio UI library in the future:
- Modern component-based design with Svelte
- Custom CSS styling with gradients and animations
- Responsive design for mobile and desktop
- Clean typography and professional layout

Note: exio library is available but has dependency issues. The current implementation uses pure CSS for styling.

## Development Guidelines

- Follow Svelte conventions for component structure
- Use TypeScript for all new code
- Keep components small and focused
- Leverage exio components for consistent UI
- Test builds frequently with `npm run build`

## Personal Website Content

This is Bright Liu's personal website featuring:
- Harvard University education (Math/CS + Statistics MA)
- Experience at AWS, MGH/Harvard Medical, Niels Bohr Institute
- Technical projects and research
- Skills in Python, C++, JavaScript, AWS, PyTorch