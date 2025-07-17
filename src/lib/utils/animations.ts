/**
 * Enhanced Animation Utilities
 * Provides smooth, performance-optimized animations with reduced motion support
 */

export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
  fill?: 'none' | 'forwards' | 'backwards' | 'both';
}

export interface ScrollAnimationConfig extends AnimationConfig {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Animate element with fade-in and slide-up effect
 */
export function fadeInUp(element: HTMLElement, config: AnimationConfig = {}): Animation {
  const {
    duration = 600,
    delay = 0,
    easing = 'cubic-bezier(0.4, 0, 0.2, 1)',
    fill = 'both'
  } = config;

  // Check for reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return element.animate([
      { opacity: '1', transform: 'translateY(0)' }
    ], { duration: 1, fill });
  }

  return element.animate([
    { opacity: '0', transform: 'translateY(20px)' },
    { opacity: '1', transform: 'translateY(0)' }
  ], {
    duration,
    delay,
    easing,
    fill
  });
}

/**
 * Animate element with fade-in and slide-left effect
 */
export function fadeInLeft(element: HTMLElement, config: AnimationConfig = {}): Animation {
  const {
    duration = 600,
    delay = 0,
    easing = 'cubic-bezier(0.4, 0, 0.2, 1)',
    fill = 'both'
  } = config;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return element.animate([
      { opacity: '1', transform: 'translateX(0)' }
    ], { duration: 1, fill });
  }

  return element.animate([
    { opacity: '0', transform: 'translateX(-20px)' },
    { opacity: '1', transform: 'translateX(0)' }
  ], {
    duration,
    delay,
    easing,
    fill
  });
}

/**
 * Animate element with fade-in and slide-right effect
 */
export function fadeInRight(element: HTMLElement, config: AnimationConfig = {}): Animation {
  const {
    duration = 600,
    delay = 0,
    easing = 'cubic-bezier(0.4, 0, 0.2, 1)',
    fill = 'both'
  } = config;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return element.animate([
      { opacity: '1', transform: 'translateX(0)' }
    ], { duration: 1, fill });
  }

  return element.animate([
    { opacity: '0', transform: 'translateX(20px)' },
    { opacity: '1', transform: 'translateX(0)' }
  ], {
    duration,
    delay,
    easing,
    fill
  });
}

/**
 * Animate element with scale and fade effect
 */
export function scaleIn(element: HTMLElement, config: AnimationConfig = {}): Animation {
  const {
    duration = 400,
    delay = 0,
    easing = 'cubic-bezier(0.4, 0, 0.2, 1)',
    fill = 'both'
  } = config;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return element.animate([
      { opacity: '1', transform: 'scale(1)' }
    ], { duration: 1, fill });
  }

  return element.animate([
    { opacity: '0', transform: 'scale(0.9)' },
    { opacity: '1', transform: 'scale(1)' }
  ], {
    duration,
    delay,
    easing,
    fill
  });
}

/**
 * Animate element with a typing effect
 */
export function typeWriter(element: HTMLElement, text: string, config: AnimationConfig = {}): Promise<void> {
  const {
    duration = 50,
    delay = 0
  } = config;

  return new Promise((resolve) => {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element.textContent = text;
      resolve();
      return;
    }

    element.textContent = '';
    let i = 0;
    
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(interval);
          resolve();
        }
      }, duration);
    }, delay);
  });
}

/**
 * Animate element with a staggered children effect
 */
export function staggerChildren(
  container: HTMLElement, 
  childSelector: string, 
  animationFn: (element: HTMLElement, config: AnimationConfig) => Animation,
  config: AnimationConfig & { stagger?: number } = {}
): Animation[] {
  const children = Array.from(container.querySelectorAll(childSelector)) as HTMLElement[];
  const { stagger = 100, ...animationConfig } = config;
  
  return children.map((child, index) => {
    return animationFn(child, {
      ...animationConfig,
      delay: (animationConfig.delay || 0) + (index * stagger)
    });
  });
}

/**
 * Create a scroll-triggered animation observer
 */
export function createScrollAnimation(
  element: HTMLElement,
  animationFn: (element: HTMLElement) => Animation,
  config: ScrollAnimationConfig = {}
): IntersectionObserver {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    once = true
  } = config;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animationFn(entry.target as HTMLElement);
          
          if (once) {
            observer.unobserve(entry.target);
          }
        }
      });
    },
    { threshold, rootMargin }
  );

  observer.observe(element);
  return observer;
}

/**
 * Animate a counter/number with easing
 */
export function animateCounter(
  element: HTMLElement,
  from: number,
  to: number,
  config: AnimationConfig & { 
    formatter?: (value: number) => string;
    round?: boolean;
  } = {}
): Animation {
  const {
    duration = 1000,
    delay = 0,
    easing = 'ease-out',
    formatter = (value: number) => value.toString(),
    round = true
  } = config;

  // Check for reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    element.textContent = formatter(to);
    return element.animate([], { duration: 1 });
  }

  const startTime = performance.now();
  
  function updateNumber() {
    const elapsed = performance.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Apply easing
    const easeProgress = easing === 'ease-out' 
      ? 1 - Math.pow(1 - progress, 3)
      : progress;
    
    const currentValue = from + (to - from) * easeProgress;
    const displayValue = round ? Math.round(currentValue) : currentValue;
    
    element.textContent = formatter(displayValue);
    
    if (progress < 1) {
      requestAnimationFrame(updateNumber);
    }
  }
  
  setTimeout(() => {
    requestAnimationFrame(updateNumber);
  }, delay);
  
  // Return a dummy animation for consistency
  return element.animate([], { duration: duration + delay });
}

/**
 * Create a parallax effect on scroll
 */
export function createParallaxEffect(
  element: HTMLElement,
  speed: number = 0.5,
  direction: 'vertical' | 'horizontal' = 'vertical'
): () => void {
  // Check for reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return () => {}; // No-op cleanup function
  }

  function updateParallax() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * speed;
    
    if (direction === 'vertical') {
      element.style.transform = `translateY(${rate}px)`;
    } else {
      element.style.transform = `translateX(${rate}px)`;
    }
  }
  
  window.addEventListener('scroll', updateParallax);
  
  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', updateParallax);
  };
}

/**
 * Create a hover tilt effect
 */
export function createTiltEffect(
  element: HTMLElement,
  maxTilt: number = 10,
  perspective: number = 1000
): () => void {
  // Check for reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return () => {}; // No-op cleanup function
  }

  element.style.transformStyle = 'preserve-3d';
  element.style.perspective = `${perspective}px`;

  function handleMouseMove(e: MouseEvent) {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = ((y - centerY) / centerY) * maxTilt;
    const tiltY = ((x - centerX) / centerX) * -maxTilt;
    
    element.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  }
  
  function handleMouseLeave() {
    element.style.transform = 'rotateX(0deg) rotateY(0deg)';
  }
  
  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);
  
  // Return cleanup function
  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
}

/**
 * Create a magnetic button effect
 */
export function createMagneticEffect(
  element: HTMLElement,
  strength: number = 0.3
): () => void {
  // Check for reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return () => {}; // No-op cleanup function
  }

  function handleMouseMove(e: MouseEvent) {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    element.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  }
  
  function handleMouseLeave() {
    element.style.transform = 'translate(0px, 0px)';
  }
  
  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);
  
  // Return cleanup function
  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
}

/**
 * Utility to batch animations for better performance
 */
export class AnimationQueue {
  private queue: (() => void)[] = [];
  private isProcessing = false;

  add(animationFn: () => void): void {
    this.queue.push(animationFn);
    if (!this.isProcessing) {
      this.process();
    }
  }

  private process(): void {
    if (this.queue.length === 0) {
      this.isProcessing = false;
      return;
    }

    this.isProcessing = true;
    requestAnimationFrame(() => {
      const animationFn = this.queue.shift();
      if (animationFn) {
        animationFn();
      }
      this.process();
    });
  }
}

// Global animation queue instance
export const animationQueue = new AnimationQueue();