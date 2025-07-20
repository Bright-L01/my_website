<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  // Create a theme store with dark as default
  export const theme = writable('dark');
  
  let currentTheme = 'dark';
  let isToggling = false;

  // Subscribe to theme changes
  theme.subscribe(value => {
    currentTheme = value;
  });

  onMount(() => {
    // Check current theme from body element (our default is dark)
    const currentBodyTheme = document.body.getAttribute('data-theme') || 'dark';
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      // Use saved preference
      setTheme(savedTheme);
    } else {
      // Use current body theme as default (which is dark)
      setTheme(currentBodyTheme);
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  });

  function setTheme(newTheme: string) {
    currentTheme = newTheme;
    theme.set(newTheme);
    
    // Apply theme to document body (matching our HTML)
    document.body.setAttribute('data-theme', newTheme);
    
    // Save to localStorage
    localStorage.setItem('theme', newTheme);
    
    // Track theme change
    import('./utils/analytics').then(({ default: analytics }) => {
      analytics.trackCustomEvent('theme_toggle', 0, { theme: newTheme });
    });
  }

  function toggleTheme() {
    if (isToggling) return;
    
    isToggling = true;
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Add a slight delay for smooth animation
    setTimeout(() => {
      setTheme(newTheme);
      isToggling = false;
    }, 150);
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleTheme();
    }
  }
</script>

<button
  class="theme-toggle"
  class:toggling={isToggling}
  on:click={toggleTheme}
  on:keydown={handleKeydown}
  aria-label="Toggle {currentTheme === 'light' ? 'dark' : 'light'} mode"
  aria-pressed={currentTheme === 'dark'}
  title="Toggle theme"
>
  <div class="toggle-track">
    <div class="toggle-thumb">
      <div class="icon-container">
        {#if currentTheme === 'light'}
          <!-- Sun icon -->
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2.5"
            class="theme-icon sun-icon"
          >
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2"/>
            <path d="M12 20v2"/>
            <path d="M4.93 4.93l1.41 1.41"/>
            <path d="M17.66 17.66l1.41 1.41"/>
            <path d="M2 12h2"/>
            <path d="M20 12h2"/>
            <path d="M6.34 17.66l-1.41 1.41"/>
            <path d="M19.07 4.93l-1.41 1.41"/>
          </svg>
        {:else}
          <!-- Moon icon -->
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2.5"
            class="theme-icon moon-icon"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        {/if}
      </div>
    </div>
  </div>
</button>

<style>
  .theme-toggle {
    position: relative;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    outline: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .theme-toggle:focus-visible {
    outline: 2px solid var(--accent-primary);
    outline-offset: 2px;
    border-radius: 50px;
  }

  .theme-toggle:hover .toggle-track {
    background: var(--accent-primary);
  }

  .theme-toggle:hover .toggle-thumb {
    transform: scale(1.1);
  }

  .theme-toggle.toggling {
    pointer-events: none;
  }

  .toggle-track {
    width: 52px;
    height: 28px;
    background: var(--bg-tertiary);
    border: 2px solid var(--border-color);
    border-radius: 50px;
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .toggle-thumb {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    background: var(--bg-primary);
    border-radius: 50%;
    box-shadow: var(--shadow-md);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :global([data-theme="dark"]) .toggle-thumb {
    transform: translateX(24px);
    background: var(--bg-secondary);
  }

  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .theme-icon {
    color: var(--text-primary);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .sun-icon {
    color: #f59e0b;
  }

  .moon-icon {
    color: #6366f1;
  }

  .theme-toggle.toggling .toggle-thumb {
    transform: scale(0.9);
  }

  :global([data-theme="dark"]) .theme-toggle.toggling .toggle-thumb {
    transform: translateX(24px) scale(0.9);
  }

  /* Smooth transitions for theme changes */
  :global(*) {
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  }

  /* Respect reduced motion preferences */
  @media (prefers-reduced-motion: reduce) {
    .theme-toggle,
    .toggle-track,
    .toggle-thumb,
    .theme-icon {
      transition: none;
    }
    
    :global(*) {
      transition: none !important;
    }
  }
</style>