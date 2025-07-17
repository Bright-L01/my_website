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

  onMount(async () => {
    // Initialize performance optimization
    const { default: PerformanceOptimizer } = await import('./lib/utils/performanceOptimizer');
    const performanceOptimizer = new PerformanceOptimizer();
    performanceOptimizer.init();
    
    // Initialize image optimization
    const { default: ImageOptimizer } = await import('./lib/utils/imageOptimizer');
    const imageOptimizer = new ImageOptimizer();
    imageOptimizer.init();
    
    // Initialize bundle analyzer
    const { default: BundleAnalyzer } = await import('./lib/utils/bundleAnalyzer');
    const bundleAnalyzer = new BundleAnalyzer();
    bundleAnalyzer.init();
    
    // Initialize accessibility enhancer
    const { default: AccessibilityEnhancer } = await import('./lib/utils/accessibilityEnhancer');
    const accessibilityEnhancer = new AccessibilityEnhancer();
    accessibilityEnhancer.init();
    
    // Initialize web vitals monitoring
    measureWebVitals();
    
    // Track initial page view with dynamic import
    const { default: analytics } = await import('./lib/utils/analytics');
    analytics.trackPageView('home');
    
    // Log current performance metrics
    setTimeout(() => {
      const metrics = analytics.getMetrics();
      console.log('📊 Performance Metrics:', metrics);
      
      // Log bundle analysis results
      const report = bundleAnalyzer.getPerformanceReport();
      console.log('🔍 Bundle Analysis Report:', report);
      
      // Log accessibility report
      const accessibilityReport = accessibilityEnhancer.generateAccessibilityReport();
      console.log('♿ Accessibility Report:', accessibilityReport);
    }, 2000);
    
    // Cleanup on component destroy
    return () => {
      performanceOptimizer.cleanup();
      imageOptimizer.cleanup();
      bundleAnalyzer.cleanup();
      accessibilityEnhancer.cleanup();
    };
  });
</script>

<!-- Skip to content link for accessibility -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<Navigation />
<main id="main-content" tabindex="-1">
  <section id="home" aria-label="Home">
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
  /* Import accessibility styles */
  @import './lib/styles/accessibility.css';

  /* CSS Custom Properties for Theming */
  :global(:root) {
    /* Light Theme - Modern Professional */
    --bg-primary: #ffffff;
    --bg-secondary: #fafbfc;
    --bg-tertiary: #f4f6f8;
    --bg-quaternary: #eef2f6;
    --text-primary: #0f172a;
    --text-secondary: #475569;
    --text-tertiary: #64748b;
    --text-quaternary: #94a3b8;
    
    /* Enhanced Accent Colors */
    --accent-primary: #0f172a;
    --accent-secondary: #1e293b;
    --accent-tertiary: #334155;
    --accent-blue: #3b82f6;
    --accent-purple: #8b5cf6;
    --accent-green: #10b981;
    --accent-orange: #f59e0b;
    --accent-red: #ef4444;
    
    /* Modern Gradients */
    --gradient-primary: linear-gradient(135deg, #0f172a 0%, #334155 100%);
    --gradient-blue: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    --gradient-purple: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
    --gradient-green: linear-gradient(135deg, #10b981 0%, #059669 100%);
    --gradient-warm: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
    --gradient-cool: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    --gradient-subtle: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
    
    /* Enhanced Borders */
    --border-color: #e2e8f0;
    --border-color-secondary: #cbd5e1;
    --border-color-tertiary: #94a3b8;
    --border-radius-sm: 6px;
    --border-radius-md: 8px;
    --border-radius-lg: 12px;
    --border-radius-xl: 16px;
    
    /* Modern Shadows */
    --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
    --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);
    
    /* Glassmorphism Effects */
    --glass-bg: rgba(255, 255, 255, 0.95);
    --glass-bg-secondary: rgba(248, 250, 252, 0.90);
    --glass-border: rgba(226, 232, 240, 0.8);
    --glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    --backdrop-blur: blur(12px);
    --backdrop-saturate: saturate(180%);
    
    /* Animation & Transition */
    --transition-fast: 0.15s ease-out;
    --transition-normal: 0.3s ease-out;
    --transition-slow: 0.5s ease-out;
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  :global([data-theme="dark"]) {
    /* Dark Theme - Modern Professional Dark */
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --bg-tertiary: #334155;
    --bg-quaternary: #475569;
    --text-primary: #f8fafc;
    --text-secondary: #cbd5e1;
    --text-tertiary: #94a3b8;
    --text-quaternary: #64748b;
    
    /* Enhanced Accent Colors */
    --accent-primary: #f8fafc;
    --accent-secondary: #e2e8f0;
    --accent-tertiary: #cbd5e1;
    --accent-blue: #60a5fa;
    --accent-purple: #a78bfa;
    --accent-green: #34d399;
    --accent-orange: #fbbf24;
    --accent-red: #f87171;
    
    /* Modern Gradients */
    --gradient-primary: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    --gradient-blue: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
    --gradient-purple: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
    --gradient-green: linear-gradient(135deg, #34d399 0%, #10b981 100%);
    --gradient-warm: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
    --gradient-cool: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
    --gradient-subtle: linear-gradient(135deg, #1e293b 0%, #334155 100%);
    
    /* Enhanced Borders */
    --border-color: #475569;
    --border-color-secondary: #64748b;
    --border-color-tertiary: #94a3b8;
    
    /* Modern Shadows */
    --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px -1px rgba(0, 0, 0, 0.3);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.3);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.3);
    --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    
    /* Glassmorphism Effects */
    --glass-bg: rgba(15, 23, 42, 0.95);
    --glass-bg-secondary: rgba(30, 41, 59, 0.90);
    --glass-border: rgba(71, 85, 105, 0.8);
    --glass-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.6);
    --backdrop-blur: blur(12px);
    --backdrop-saturate: saturate(180%);
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
    padding: 6rem 0;
    max-width: 800px;
    margin: 0 auto;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  main section:first-child {
    padding-top: 0;
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
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
  }

  @media (max-width: 768px) {
    main section {
      padding-left: 1rem;
      padding-right: 1rem;
      padding-top: 3rem;
      padding-bottom: 3rem;
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
      padding-top: 2rem;
      padding-bottom: 2rem;
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
