<script lang="ts">
  import { slide } from 'svelte/transition';
  import ContactForm from './ContactForm.svelte';
  
  let showContactForm = false;
  
  function toggleContactForm() {
    showContactForm = !showContactForm;
  }
</script>

<div class="hero">
  <div class="hero-content">
    <h1 class="hero-title">Bright Liu</h1>
    
    <div class="hero-subtitle">
      <span class="education">Harvard University</span>
      <span class="degree">Mathematics & Computer Science + Master of Science in Statistics</span>
    </div>
    
    <p class="hero-description">
      Harvard mathematician developing high-performance trading algorithms and scalable ML systems. Building production AI infrastructure at AWS while researching model optimization at the Kempner Institute. Specializing in statistical arbitrage, deep learning architectures, and low-latency computing with Python, C++, and cloud platforms.
    </p>
    
    <div class="hero-links">
      <button 
        on:click={toggleContactForm} 
        class="contact-link"
        class:active={showContactForm}
        aria-label="Toggle contact form"
      >
        Contact
      </button>
      <a href="https://www.linkedin.com/in/bright-liu-701174216" target="_blank" rel="noopener" class="contact-link">LinkedIn</a>
      <a href="https://github.com/brightlikethelight" target="_blank" rel="noopener" class="contact-link">GitHub</a>
    </div>
  </div>
</div>

<!-- Dynamic sections -->
{#if showContactForm}
  <div class="dynamic-section" transition:slide>
    <ContactForm />
  </div>
{/if}


<style>
  .hero {
    padding: 6rem 0;
    text-align: center;
  }




  .hero-content {
    text-align: center;
  }

  .hero-title {
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 900;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }



  .hero-subtitle {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  .education {
    font-size: clamp(1.1rem, 2.5vw, 1.4rem);
    font-weight: 700;
    color: var(--accent-primary);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .degree {
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

  .hero-links {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .contact-link {
    padding: 0.75rem 1.5rem;
    background: var(--bg-secondary);
    color: var(--text-secondary);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    font-weight: 500;
    font-size: 0.9rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  
  .contact-link::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: var(--accent-primary);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
    z-index: -1;
  }

  .contact-link:hover {
    color: white;
    border-color: var(--accent-primary);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
  
  .contact-link:hover::before {
    width: 300%;
    height: 300%;
  }

  .contact-link.active {
    background: var(--accent-primary);
    color: white;
    border-color: var(--accent-primary);
  }

  .dynamic-section {
    max-width: 800px;
    margin: 2rem auto 0;
    padding: 0 2rem;
  }


  @media (max-width: 768px) {
    .hero {
      padding: 4rem 1rem;
    }

    .hero-links {
      flex-direction: column;
      gap: 0.75rem;
      align-items: center;
    }

    .contact-link {
      width: 100%;
      max-width: 280px;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    .hero-subtitle {
      gap: 0.25rem;
    }

    .hero-links {
      gap: 0.5rem;
    }
  }
</style>