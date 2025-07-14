import { writable } from 'svelte/store';

// Check if we're in browser environment
const browser = typeof window !== 'undefined';

// Theme store with system preference detection
function createThemeStore() {
  const { subscribe, set, update } = writable<'light' | 'dark'>('light');

  return {
    subscribe,
    init: () => {
      if (!browser) return;
      
      // Check for saved theme preference or default to system preference
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      const initialTheme = savedTheme ? savedTheme as 'light' | 'dark' : (systemPrefersDark ? 'dark' : 'light');
      
      set(initialTheme);
      document.documentElement.setAttribute('data-theme', initialTheme);
      
      // Listen for system theme changes
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
          const newTheme = e.matches ? 'dark' : 'light';
          set(newTheme);
          document.documentElement.setAttribute('data-theme', newTheme);
        }
      });
    },
    toggle: () => {
      update(theme => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        if (browser) {
          localStorage.setItem('theme', newTheme);
          document.documentElement.setAttribute('data-theme', newTheme);
        }
        return newTheme;
      });
    },
    set: (theme: 'light' | 'dark') => {
      set(theme);
      if (browser) {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
      }
    }
  };
}

export const theme = createThemeStore();

// Scroll store for navigation highlighting
export const activeSection = writable<string>('');

// Animation store for scroll-triggered animations
export const animatedElements = writable<Set<string>>(new Set());