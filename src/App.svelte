<script lang="ts">
  import Navigation from './lib/Navigation.svelte';
  import Header from './lib/Header.svelte';
  import Education from './lib/Education.svelte';
  import Experience from './lib/Experience.svelte';
  import Projects from './lib/Projects.svelte';
  import Publications from './lib/Publications.svelte';
  import Skills from './lib/Skills.svelte';
  import Honors from './lib/Honors.svelte';
</script>

<Navigation />
<main>
  <section id="home">
    <Header />
  </section>
  <section id="education">
    <Education />
  </section>
  <section id="experience">
    <Experience />
  </section>
  <section id="projects">
    <Projects />
  </section>
  <section id="publications">
    <Publications />
  </section>
  <section id="honors">
    <Honors />
  </section>
  <section id="skills">
    <Skills />
  </section>
</main>

<style>
  /* CSS Custom Properties for Theming */
  :global(:root) {
    /* Light Theme - Warm & Personable */
    --bg-primary: #fffaf0;
    --bg-secondary: #fff5e6;
    --bg-tertiary: #ffefd5;
    --text-primary: #2c1810;
    --text-secondary: #5c4033;
    --text-tertiary: #8b6f5c;
    --accent-primary: #ff6b6b;
    --accent-secondary: #4ecdc4;
    --accent-tertiary: #45b7d1;
    --accent-warm: #f7b731;
    --accent-gradient: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 50%, #45b7d1 100%);
    --accent-gradient-warm: linear-gradient(135deg, #ff6b6b 0%, #f7b731 100%);
    --accent-gradient-cool: linear-gradient(135deg, #4ecdc4 0%, #45b7d1 100%);
    --border-color: #f0d4b8;
    --shadow-sm: 0 1px 2px 0 rgba(255, 107, 107, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(255, 107, 107, 0.1), 0 2px 4px -1px rgba(255, 107, 107, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(255, 107, 107, 0.1), 0 4px 6px -2px rgba(255, 107, 107, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(255, 107, 107, 0.1), 0 10px 10px -5px rgba(255, 107, 107, 0.04);
    --glass-bg: rgba(255, 250, 240, 0.85);
    --glass-border: rgba(255, 183, 77, 0.2);
  }

  :global([data-theme="dark"]) {
    /* Dark Theme - Deep Ocean */
    --bg-primary: #0a0e27;
    --bg-secondary: #151932;
    --bg-tertiary: #1f2347;
    --text-primary: #e8eaed;
    --text-secondary: #b2bec3;
    --text-tertiary: #74818a;
    --accent-primary: #ff7979;
    --accent-secondary: #6dd5d1;
    --accent-tertiary: #54c0db;
    --accent-warm: #f9ca24;
    --accent-gradient: linear-gradient(135deg, #ff7979 0%, #6dd5d1 50%, #54c0db 100%);
    --accent-gradient-warm: linear-gradient(135deg, #ff7979 0%, #f9ca24 100%);
    --accent-gradient-cool: linear-gradient(135deg, #6dd5d1 0%, #54c0db 100%);
    --border-color: #2d3561;
    --shadow-sm: 0 1px 2px 0 rgba(255, 121, 121, 0.1);
    --shadow-md: 0 4px 6px -1px rgba(255, 121, 121, 0.15), 0 2px 4px -1px rgba(109, 213, 209, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(255, 121, 121, 0.2), 0 4px 6px -2px rgba(109, 213, 209, 0.15);
    --shadow-xl: 0 20px 25px -5px rgba(255, 121, 121, 0.25), 0 10px 10px -5px rgba(109, 213, 209, 0.2);
    --glass-bg: rgba(10, 14, 39, 0.85);
    --glass-border: rgba(109, 213, 209, 0.15);
  }

  /* Global Styles */
  :global(*) {
    box-sizing: border-box;
  }

  :global(html) {
    scroll-behavior: smooth;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
    font-feature-settings: 'cv05', 'cv01', 'cv03', 'cv04';
    line-height: 1.6;
    color: var(--text-primary);
    background: var(--bg-primary);
    transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow-x: hidden;
  }

  main {
    padding-top: 4rem;
  }

  main section {
    min-height: 100vh;
    padding: 4rem 0;
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  /* Typography */
  :global(h1, h2, h3, h4, h5, h6) {
    color: var(--text-primary);
    font-weight: 600;
    line-height: 1.2;
    margin: 0;
  }

  :global(h1) {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    letter-spacing: -0.02em;
  }

  :global(h2) {
    font-size: clamp(1.75rem, 3vw, 2.5rem);
    font-weight: 700;
    letter-spacing: -0.01em;
    margin-bottom: 2rem;
    position: relative;
  }

  :global(h2::after) {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 4rem;
    height: 3px;
    background: var(--accent-gradient);
    border-radius: 2px;
  }

  :global(h3) {
    font-size: clamp(1.25rem, 2vw, 1.5rem);
    font-weight: 600;
    margin-bottom: 1rem;
  }

  :global(p) {
    color: var(--text-secondary);
    line-height: 1.7;
    margin: 0 0 1rem 0;
  }

  :global(a) {
    color: var(--accent-primary);
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
  }

  :global(a:hover) {
    color: var(--accent-secondary);
    transform: translateY(-1px);
  }

  /* Section Styles */
  :global(.section) {
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 24px;
    padding: 3rem;
    margin: 3rem 0;
    box-shadow: var(--shadow-xl);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  :global(.section::before) {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--accent-gradient);
    opacity: 0.6;
  }

  :global(.section:hover) {
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl), 0 0 40px rgba(255, 107, 107, 0.15);
  }

  /* Item Styles */
  :global(.item) {
    padding: 2rem 0;
    border-bottom: 1px solid var(--border-color);
    transition: all 0.3s ease;
    position: relative;
  }

  :global(.item:last-child) {
    border-bottom: none;
  }

  :global(.item:hover) {
    transform: translateX(8px);
  }

  :global(.item-header) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
    gap: 1rem;
  }

  :global(.item-title) {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
  }

  :global(.item-org) {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--accent-primary);
    font-style: italic;
  }

  :global(.item-location) {
    color: var(--text-tertiary);
    font-size: 0.9rem;
    font-weight: 500;
  }

  :global(.item-date) {
    color: var(--text-tertiary);
    font-size: 0.9rem;
    font-weight: 500;
    white-space: nowrap;
    background: var(--bg-tertiary);
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    border: 1px solid var(--border-color);
  }

  :global(.item-description) {
    color: var(--text-secondary);
    line-height: 1.7;
  }

  :global(.item-description ul) {
    margin: 1rem 0;
    padding-left: 0;
    list-style: none;
  }

  :global(.item-description li) {
    margin-bottom: 0.75rem;
    padding-left: 1.5rem;
    position: relative;
    line-height: 1.7;
  }

  :global(.item-description li::before) {
    content: '';
    position: absolute;
    left: 0;
    top: 0.6rem;
    width: 6px;
    height: 6px;
    background: var(--accent-gradient);
    border-radius: 50%;
  }

  /* Responsive Design */
  @media (max-width: 1024px) {
    main section {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

    :global(.section) {
      padding: 2rem;
      margin: 2rem 0;
      border-radius: 20px;
    }
  }

  @media (max-width: 768px) {
    main section {
      padding-left: 1rem;
      padding-right: 1rem;
      padding-top: 2rem;
      padding-bottom: 2rem;
      min-height: auto;
    }

    :global(.section) {
      padding: 1.5rem;
      margin: 1.5rem 0;
      border-radius: 16px;
    }

    :global(.item-header) {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }

    :global(.item-date) {
      align-self: flex-start;
    }

    :global(.item:hover) {
      transform: none;
    }

    :global(.section:hover) {
      transform: none;
    }
  }

  @media (max-width: 480px) {
    main section {
      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }

    :global(.section) {
      padding: 1rem;
      margin: 1rem 0;
      border-radius: 12px;
    }
  }

  /* Smooth Animations */
  @media (prefers-reduced-motion: reduce) {
    :global(*) {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
</style>
