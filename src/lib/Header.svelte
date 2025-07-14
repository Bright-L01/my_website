<script lang="ts">
  import { onMount } from 'svelte';

  let heroElement: HTMLElement;
  let isVisible = false;

  onMount(() => {
    // Trigger entrance animation
    setTimeout(() => {
      isVisible = true;
    }, 100);

    // Parallax effect
    const handleScroll = () => {
      if (heroElement) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        heroElement.style.transform = `translateY(${parallax}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<div class="hero" bind:this={heroElement}>
  <div class="hero-bg">
    <div class="gradient-orb orb-1"></div>
    <div class="gradient-orb orb-2"></div>
    <div class="gradient-orb orb-3"></div>
  </div>
  
  <div class="hero-content" class:visible={isVisible}>
    <div class="hero-text">
      <h1 class="hero-title">
        <span class="title-line">Bright Liu</span>
      </h1>
      
      <div class="hero-subtitle">
        <span class="subtitle-accent">Harvard University</span>
        <span class="subtitle-main">Mathematics & Computer Science + Statistics MA</span>
      </div>
      
      <p class="hero-description">
        AI/ML Engineer at AWS • Deep Learning Researcher • Harvard Class of 2026
        <br>
        Building the future through mathematics, machine learning, and innovative software engineering
      </p>
      
      <div class="hero-cta">
        <a href="#experience" class="cta-primary">
          <span>View Experience</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </a>
        <a href="mailto:brightliu@college.harvard.edu" class="cta-secondary">
          Get In Touch
        </a>
      </div>
    </div>
    
    <div class="contact-links">
      <a href="mailto:brightliu@college.harvard.edu" class="contact-link" aria-label="Email">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      </a>
      
      <a href="https://www.linkedin.com/in/bright-liu-701174216" target="_blank" rel="noopener" class="contact-link" aria-label="LinkedIn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      </a>
      
      <a href="https://github.com/Bright-L01" target="_blank" rel="noopener" class="contact-link" aria-label="GitHub">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
      </a>
      
      <a href="tel:(202)826-9287" class="contact-link" aria-label="Phone">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      </a>
    </div>
  </div>
  
  <div class="scroll-indicator">
    <div class="scroll-mouse">
      <div class="scroll-wheel"></div>
    </div>
    <span class="scroll-text">Scroll to explore</span>
  </div>
</div>

<style>
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    overflow: hidden;
    background: var(--bg-primary);
  }

  .hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: -1;
  }

  .gradient-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
    opacity: 0.6;
    animation: float 6s ease-in-out infinite;
  }

  .orb-1 {
    width: 300px;
    height: 300px;
    background: linear-gradient(135deg, #3b82f6, #6366f1);
    top: 10%;
    left: 10%;
    animation-delay: 0s;
  }

  .orb-2 {
    width: 200px;
    height: 200px;
    background: linear-gradient(135deg, #8b5cf6, #a855f7);
    top: 60%;
    right: 20%;
    animation-delay: -2s;
  }

  .orb-3 {
    width: 150px;
    height: 150px;
    background: linear-gradient(135deg, #06b6d4, #3b82f6);
    bottom: 20%;
    left: 60%;
    animation-delay: -4s;
  }

  :global([data-theme=\"dark\"]) .gradient-orb {
    opacity: 0.3;
  }

  @keyframes float {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(-20px, -20px) rotate(90deg); }
    50% { transform: translate(20px, -10px) rotate(180deg); }
    75% { transform: translate(-10px, 20px) rotate(270deg); }
  }

  .hero-content {
    text-align: center;
    z-index: 1;
    opacity: 0;
    transform: translateY(30px);
    transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .hero-content.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .hero-title {
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 900;
    line-height: 0.9;
    margin-bottom: 1.5rem;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.03em;
  }

  .hero-subtitle {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 2rem;
  }

  .subtitle-accent {
    font-size: clamp(1.1rem, 2.5vw, 1.4rem);
    font-weight: 700;
    color: var(--accent-primary);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .subtitle-main {
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    font-weight: 600;
    color: var(--text-primary);
    letter-spacing: -0.01em;
  }

  .hero-description {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto 3rem;
    line-height: 1.6;
  }

  .hero-cta {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;
  }

  .cta-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    background: var(--accent-gradient);
    color: white;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
  }

  .cta-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(59, 130, 246, 0.6);
    color: white;
  }

  .cta-secondary {
    padding: 1rem 2rem;
    border: 2px solid var(--accent-primary);
    color: var(--accent-primary);
    border-radius: 50px;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .cta-secondary:hover {
    background: var(--accent-primary);
    color: white;
    transform: translateY(-2px);
  }

  .contact-links {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 4rem;
  }

  .contact-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: var(--bg-secondary);
    color: var(--text-secondary);
    border: 1px solid var(--border-color);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .contact-link:hover {
    background: var(--accent-primary);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
  }

  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    opacity: 0.7;
    animation: bounce 2s infinite;
  }

  .scroll-mouse {
    width: 20px;
    height: 35px;
    border: 2px solid var(--text-tertiary);
    border-radius: 12px;
    position: relative;
  }

  .scroll-wheel {
    width: 3px;
    height: 6px;
    background: var(--text-tertiary);
    border-radius: 2px;
    position: absolute;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    animation: scroll-wheel 1.5s infinite;
  }

  .scroll-text {
    font-size: 0.8rem;
    color: var(--text-tertiary);
    font-weight: 500;
    letter-spacing: 0.05em;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(-10px); }
    60% { transform: translateX(-50%) translateY(-5px); }
  }

  @keyframes scroll-wheel {
    0% { opacity: 1; top: 6px; }
    50% { opacity: 0.5; top: 12px; }
    100% { opacity: 0; top: 18px; }
  }

  @media (max-width: 768px) {
    .hero {
      padding: 1rem;
      min-height: 90vh;
    }

    .hero-cta {
      flex-direction: column;
      gap: 0.75rem;
    }

    .cta-primary,
    .cta-secondary {
      width: 100%;
      max-width: 280px;
      justify-content: center;
    }

    .contact-links {
      margin-bottom: 2rem;
    }

    .hero-description br {
      display: none;
    }
  }

  @media (max-width: 480px) {
    .hero-subtitle {
      gap: 0.25rem;
    }

    .contact-links {
      gap: 0.75rem;
    }

    .contact-link {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
</style>