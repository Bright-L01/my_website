/**
 * Intersection Observer utilities for lazy loading and performance optimization
 */

export interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
}

export function createIntersectionObserver(
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverOptions = {}
): IntersectionObserver {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    once: true,
    ...options
  };

  let observer: IntersectionObserver;
  
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback([entry]);
        
        // If once is true, stop observing this element
        if (defaultOptions.once) {
          observer.unobserve(entry.target);
        }
      }
    });
  }, defaultOptions);

  return observer;
}

export function lazyLoad(element: HTMLElement, options: IntersectionObserverOptions = {}) {
  const observer = createIntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add fade-in animation
          entry.target.classList.add('fade-in');
          
          // Trigger custom event for component-specific logic
          entry.target.dispatchEvent(new CustomEvent('lazy-loaded'));
        }
      });
    },
    options
  );

  observer.observe(element);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}

export function observeVisibility(element: HTMLElement, callback: (isVisible: boolean) => void) {
  const observer = createIntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        callback(entry.isIntersecting);
      });
    },
    { once: false, threshold: 0.1 }
  );

  observer.observe(element);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}

// Web Vitals measurement utility
export function measureWebVitals() {
  // Only measure in production and with proper browser support
  if (typeof window === 'undefined' || !window.performance) {
    return;
  }

  // Measure LCP (Largest Contentful Paint)
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      // Log LCP value for monitoring
      console.log('LCP:', lastEntry.startTime);
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });

    // Measure CLS (Cumulative Layout Shift)
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      
      list.getEntries().forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      
      console.log('CLS:', clsValue);
    });

    clsObserver.observe({ entryTypes: ['layout-shift'] });
  }
}