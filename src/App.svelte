<script lang="ts">
  import { onMount } from 'svelte';
  import Navigation from './lib/Navigation.svelte';
  import Header from './lib/Header.svelte';
  import LazySection from './lib/LazySection.svelte';
  import Education from './lib/Education.svelte';
  import Experience from './lib/Experience.svelte';
  import Projects from './lib/Projects.svelte';
  import Publications from './lib/Publications.svelte';
  import Skills from './lib/Skills.svelte';
  import Honors from './lib/Honors.svelte';
  import { measureWebVitals } from './lib/utils/intersectionObserver';
  import analytics from './lib/utils/analytics';

  onMount(() => {
    // Initialize web vitals monitoring
    measureWebVitals();
    
    // Track initial page view
    analytics.trackPageView('home');
    
    // Log current performance metrics
    setTimeout(() => {
      const metrics = analytics.getMetrics();
      console.log('📊 Performance Metrics:', metrics);
    }, 2000);
  });
</script>

<!-- Skip to content link for accessibility -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<Navigation />
<main id="main-content">
  <section id="home">
    <Header />
  </section>
  
  <LazySection 
    sectionId="education" 
    component={Education} 
    threshold={0.1}
    rootMargin="100px"
  />
  
  <LazySection 
    sectionId="experience" 
    component={Experience} 
    threshold={0.1}
    rootMargin="100px"
  />
  
  <LazySection 
    sectionId="projects" 
    component={Projects} 
    threshold={0.1}
    rootMargin="100px"
  />
  
  <LazySection 
    sectionId="publications" 
    component={Publications} 
    threshold={0.1}
    rootMargin="100px"
  />
  
  <LazySection 
    sectionId="honors" 
    component={Honors} 
    threshold={0.1}
    rootMargin="100px"
  />
  
  <LazySection 
    sectionId="skills" 
    component={Skills} 
    threshold={0.1}
    rootMargin="100px"
  />
</main>

<style>
  /* CSS Custom Properties for Theming */
  :global(:root) {
    /* Modern Professional Light Theme */
    --bg-primary: #fafbfc;
    --bg-secondary: #f8f9fa;
    --bg-tertiary: #e9ecef;
    --text-primary: #2c3e50;
    --text-secondary: #5a6c7d;
    --text-tertiary: #8b9ab0;
    --accent-primary: #2c3e50;
    --accent-secondary: #34495e;
    --accent-tertiary: #7f8c8d;
    --accent-warm: #3498db;
    --accent-gradient: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
    --accent-gradient-warm: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
    --accent-gradient-cool: linear-gradient(135deg, #2c3e50 0%, #7f8c8d 100%);
    --border-color: #dee2e6;
    --shadow-sm: 0 1px 3px 0 rgba(44, 62, 80, 0.06);
    --shadow-md: 0 4px 6px -1px rgba(44, 62, 80, 0.08);
    --shadow-lg: 0 10px 15px -3px rgba(44, 62, 80, 0.10);
    --shadow-xl: 0 20px 25px -5px rgba(44, 62, 80, 0.12);
    --glass-bg: rgba(248, 249, 250, 0.98);
    --glass-border: rgba(222, 226, 230, 0.8);
  }

  :global([data-theme="dark"]) {
    /* Modern Professional Dark Theme */
    --bg-primary: #0f1419;
    --bg-secondary: #1a1f24;
    --bg-tertiary: #252a30;
    --text-primary: #f8f9fa;
    --text-secondary: #e9ecef;
    --text-tertiary: #adb5bd;
    --accent-primary: #74b9ff;
    --accent-secondary: #a29bfe;
    --accent-tertiary: #fd79a8;
    --accent-warm: #fdcb6e;
    --accent-gradient: linear-gradient(135deg, #74b9ff 0%, #a29bfe 100%);
    --accent-gradient-warm: linear-gradient(135deg, #fdcb6e 0%, #fd79a8 100%);
    --accent-gradient-cool: linear-gradient(135deg, #74b9ff 0%, #81ecec 100%);
    --border-color: #373e47;
    --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.6);
    --glass-bg: rgba(15, 20, 25, 0.98);
    --glass-border: rgba(55, 62, 71, 0.8);
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
    line-height: 1.5;
    color: var(--text-primary);
    background: var(--bg-primary);
    transition: background-color 0.2s ease, color 0.2s ease;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  main {
    padding-top: 4rem;
  }

  main section {
    min-height: auto;
    padding: 8rem 0;
    max-width: 800px;
    margin: 0 auto;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  main section:first-child {
    padding-top: 0;
  }

  /* Section-specific spacing for better visual hierarchy */
  main section#honors {
    padding: 10rem 0;
  }

  main section#skills {
    padding: 7rem 0;
  }

  /* Typography */
  :global(h1, h2, h3, h4, h5, h6) {
    color: var(--text-primary);
    font-weight: 500;
    line-height: 1.3;
    margin: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  :global(h1) {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.1;
    margin-bottom: 1rem;
  }

  :global(h2) {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 500;
    letter-spacing: -0.01em;
    margin-bottom: 3rem;
    position: relative;
  }

  :global(h3) {
    font-size: clamp(1.125rem, 2vw, 1.375rem);
    font-weight: 500;
    margin-bottom: 1rem;
    letter-spacing: -0.005em;
  }

  :global(p) {
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0 0 1rem 0;
    font-size: 1rem;
  }

  :global(a) {
    color: var(--accent-primary);
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
  }

  :global(a:hover) {
    color: var(--accent-secondary);
  }

  /* Section Styles */
  :global(.section) {
    background: transparent;
    padding: 0;
    margin: 0;
    position: relative;
  }

  /* Item Styles */
  :global(.item) {
    padding: 2rem 0;
    border-bottom: 1px solid var(--border-color);
    position: relative;
  }

  :global(.item:last-child) {
    border-bottom: none;
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
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
    line-height: 1.3;
  }

  :global(.item-org) {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--accent-primary);
    font-style: normal;
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
    border-radius: 8px;
    border: 1px solid var(--border-color);
  }

  :global(.item-description) {
    color: var(--text-secondary);
    line-height: 1.6;
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
    line-height: 1.6;
  }

  :global(.item-description li::before) {
    content: '';
    position: absolute;
    left: 0;
    top: 0.65rem;
    width: 4px;
    height: 4px;
    background: var(--accent-primary);
    border-radius: 50%;
  }

  /* Responsive Design */
  @media (max-width: 1024px) {
    main section {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      padding-top: 6rem;
      padding-bottom: 6rem;
    }
  }

  @media (max-width: 768px) {
    main section {
      padding-left: 1rem;
      padding-right: 1rem;
      padding-top: 5rem;
      padding-bottom: 5rem;
      max-width: 100%;
    }

    :global(.item-header) {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }

    :global(.item-date) {
      align-self: flex-start;
    }
  }

  @media (max-width: 480px) {
    main section {
      padding-left: 1rem;
      padding-right: 1rem;
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
  }

  /* Accessibility - Skip link */
  .skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: var(--accent-primary);
    color: var(--bg-primary);
    padding: 8px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 600;
    z-index: 10000;
    transition: all 0.3s ease;
  }

  .skip-link:focus {
    top: 6px;
    outline: 2px solid var(--accent-secondary);
    outline-offset: 2px;
  }

  .skip-link:hover {
    background: var(--accent-secondary);
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
