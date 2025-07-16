<script lang="ts">
  import { scrollAnimation } from './animations';

  const publications = [
    {
      id: 'sparse-attention',
      title: 'Efficient Sparse Attention Mechanisms for Long-Context Language Models',
      authors: 'Bright Liu, et al.',
      venue: 'Under Review at NeurIPS 2025',
      date: '2025',
      type: 'conference',
      abstract: 'We propose a novel sparse attention mechanism that reduces computational complexity from O(n²) to O(n log n) while maintaining 99.2% of full attention performance on long-context benchmarks.',
      links: {
        preprint: '#',
        code: 'https://github.com/Bright-L01/sparse-attention',
        slides: '#'
      },
      citations: 0,
      status: 'under-review'
    },
    {
      id: 'portfolio-optimization',
      title: 'Dynamic Portfolio Optimization with Reinforcement Learning and Transaction Costs',
      authors: 'Bright Liu',
      venue: 'Working Paper',
      date: '2024',
      type: 'working-paper',
      abstract: 'A deep reinforcement learning approach to portfolio optimization that explicitly models market impact and transaction costs, achieving superior risk-adjusted returns compared to traditional mean-variance optimization.',
      links: {
        preprint: '#',
        code: 'https://github.com/Bright-L01/rl-portfolio'
      },
      citations: 0,
      status: 'working-paper'
    },
    {
      id: 'medical-vision',
      title: 'Multi-Modal Vision Transformers for Medical Image Analysis',
      authors: 'Bright Liu, [Redacted], et al.',
      venue: 'MGH/HMS Internal Report',
      date: '2024',
      type: 'technical-report',
      abstract: 'Technical report on applying vision transformers to multi-modal medical imaging data, achieving state-of-the-art results on disease detection tasks.',
      links: {
        report: '#'
      },
      citations: 0,
      status: 'internal'
    }
  ];

  const presentations = [
    {
      title: 'AI Safety and Model Interpretability',
      event: 'Harvard-MIT Existential Risks Summit',
      date: 'May 2023',
      attendees: '200+',
      type: 'conference-talk'
    },
    {
      title: 'Evolutionary Game Theory in Multi-Agent Systems',
      event: 'Harvard Applied Mathematics Seminar',
      date: 'March 2024',
      attendees: '50+',
      type: 'seminar'
    }
  ];

  let selectedType = 'all';
  const types = ['all', 'conference', 'working-paper', 'technical-report'];
</script>

<section class="section" use:scrollAnimation={{ animation: 'fadeIn', delay: 200 }}>
  <h2 use:scrollAnimation={{ animation: 'slideUp', delay: 100 }}>Research & Publications</h2>
  
  <div class="filter-tabs" use:scrollAnimation={{ animation: 'slideUp', delay: 200 }}>
    {#each types as type}
      <button 
        class="filter-tab"
        class:active={selectedType === type}
        on:click={() => selectedType = type}
      >
        {type.replace('-', ' ')}
      </button>
    {/each}
  </div>

  <div class="publications-list">
    {#each publications.filter(p => selectedType === 'all' || p.type === selectedType) as pub, index}
      <div 
        class="publication-card"
        use:scrollAnimation={{ animation: 'slideLeft', delay: 300 + index * 100 }}
      >
        <div class="pub-header">
          <div class="pub-status status-{pub.status}">
            {pub.status.replace('-', ' ')}
          </div>
          <div class="pub-type">{pub.type.replace('-', ' ')}</div>
        </div>
        
        <h3 class="pub-title">{pub.title}</h3>
        <div class="pub-authors">{pub.authors}</div>
        <div class="pub-venue">
          <span class="venue-name">{pub.venue}</span>
          <span class="pub-date">{pub.date}</span>
        </div>
        
        <p class="pub-abstract">{pub.abstract}</p>
        
        <div class="pub-links">
          {#if pub.links.preprint}
            <a href={pub.links.preprint} class="pub-link" target="_blank" rel="noopener">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              Preprint
            </a>
          {/if}
          {#if pub.links.code}
            <a href={pub.links.code} class="pub-link" target="_blank" rel="noopener">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
              Code
            </a>
          {/if}
          {#if pub.links.slides}
            <a href={pub.links.slides} class="pub-link" target="_blank" rel="noopener">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
              Slides
            </a>
          {/if}
        </div>
      </div>
    {/each}
  </div>

  <div class="presentations-section" use:scrollAnimation={{ animation: 'slideUp', delay: 500 }}>
    <h3>Invited Talks & Presentations</h3>
    <div class="presentations-grid">
      {#each presentations as pres, index}
        <div 
          class="presentation-card"
          use:scrollAnimation={{ animation: 'scaleIn', delay: 600 + index * 100 }}
        >
          <div class="pres-icon">
            {pres.type === 'conference-talk' ? '🎤' : '📊'}
          </div>
          <div class="pres-content">
            <h4 class="pres-title">{pres.title}</h4>
            <div class="pres-event">{pres.event}</div>
            <div class="pres-meta">
              <span class="pres-date">{pres.date}</span>
              <span class="pres-attendees">{pres.attendees} attendees</span>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .filter-tabs {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }

  .filter-tab {
    padding: 0.5rem 1rem;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: capitalize;
  }

  .filter-tab:hover {
    background: var(--bg-tertiary);
    border-color: var(--accent-primary);
  }

  .filter-tab.active {
    background: var(--accent-primary);
    color: white;
    border-color: var(--accent-primary);
  }

  .publications-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  .publication-card {
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 16px;
    padding: 2rem;
    transition: all 0.3s ease;
  }

  .publication-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
    border-color: var(--accent-primary);
  }

  .pub-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .pub-status {
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .status-under-review {
    background: rgba(255, 183, 77, 0.1);
    color: #ffb74d;
    border: 1px solid rgba(255, 183, 77, 0.3);
  }

  .status-working-paper {
    background: rgba(78, 205, 196, 0.1);
    color: #4ecdc4;
    border: 1px solid rgba(78, 205, 196, 0.3);
  }

  .status-internal {
    background: rgba(155, 89, 182, 0.1);
    color: #9b59b6;
    border: 1px solid rgba(155, 89, 182, 0.3);
  }

  .pub-type {
    color: var(--text-tertiary);
    font-size: 0.85rem;
    text-transform: capitalize;
  }

  .pub-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
    line-height: 1.4;
  }

  .pub-authors {
    color: var(--text-secondary);
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
  }

  .pub-venue {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1rem;
    flex-wrap: wrap;
  }

  .venue-name {
    color: var(--accent-primary);
    font-weight: 600;
    font-style: italic;
  }

  .pub-date {
    color: var(--text-tertiary);
    font-size: 0.9rem;
  }

  .pub-abstract {
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  .pub-links {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .pub-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: var(--bg-tertiary);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--text-secondary);
    transition: all 0.3s ease;
  }

  .pub-link:hover {
    background: var(--accent-primary);
    color: white;
    border-color: var(--accent-primary);
    transform: translateY(-1px);
  }

  .presentations-section {
    padding-top: 2rem;
    border-top: 1px solid var(--border-color);
  }

  .presentations-section h3 {
    margin-bottom: 1.5rem;
  }

  .presentations-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .presentation-card {
    display: flex;
    gap: 1rem;
    padding: 1.5rem;
    background: var(--bg-secondary);
    border-radius: 12px;
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
  }

  .presentation-card:hover {
    background: var(--bg-tertiary);
    transform: translateX(4px);
    border-color: var(--accent-primary);
  }

  .pres-icon {
    font-size: 2rem;
    flex-shrink: 0;
  }

  .pres-content {
    flex: 1;
  }

  .pres-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
  }

  .pres-event {
    color: var(--accent-primary);
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .pres-meta {
    display: flex;
    gap: 1rem;
    font-size: 0.85rem;
    color: var(--text-tertiary);
  }

  @media (max-width: 768px) {
    .publication-card {
      padding: 1.5rem;
    }

    .pub-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }

    .presentations-grid {
      grid-template-columns: 1fr;
    }
  }
</style>