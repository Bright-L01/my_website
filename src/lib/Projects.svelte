<script lang="ts">

  const projects = [
    {
      id: 'kempner',
      title: 'AI Resource Optimization Research',
      organization: 'Kempner Institute for Artificial Intelligence',
      date: 'January 2025 - Present',
      status: 'active',
      description: 'Researched optimal resource allocation for large-scale inference by analyzing the trade-off between model complexity and performance under a fixed compute budget, improving efficiency on math reasoning tasks.',
      technologies: ['Python', 'PyTorch', 'CUDA', 'JAX', 'Distributed Computing'],
      impact: 'Improved inference efficiency by 23% while maintaining 95% accuracy on GSM8K benchmark',
      metrics: {
        speedup: '1.23x',
        accuracy: '95.2% on GSM8K',
        flopsReduction: '31%',
        memoryEfficiency: '42% reduction'
      },
      category: 'AI Research',
      featured: true
    },
    {
      id: 'ai-safety',
      title: 'AI Safety & Model Interpretability',
      organization: 'Harvard AI Safety Team',
      date: 'September 2022 - May 2023',
      status: 'completed',
      description: 'Analyzed failure modes of complex models, focusing on interpretability and alignment, presenting research at the Harvard-MIT Existential Risks Summit.',
      technologies: ['Python', 'TensorFlow', 'Interpretability Tools', 'Statistical Analysis'],
      impact: 'Presented research to 200+ attendees at Harvard-MIT Summit',
      category: 'AI Safety',
      featured: true
    }
  ];

  let hoveredProject: string | null = null;
</script>

<section class="section">
  <h2>Technical Projects</h2>
  <p class="section-subtitle">
    Featured personal projects and research initiatives showcasing my technical skills
  </p>
  
  <div class="projects-grid">
    {#each projects as project, index}
      <div 
        class="project-card" 
        class:active={project.status === 'active'}
        class:featured={project.featured}
        class:hovered={hoveredProject === project.id}
        on:mouseenter={() => hoveredProject = project.id}
        on:mouseleave={() => hoveredProject = null}
        role="button"
        tabindex="0"
      >
        <div class="project-header">
          <div class="project-status">
            {#if project.featured}
              <span class="featured-star">⭐</span>
            {/if}
            <span class="status-dot" class:active={project.status === 'active'}></span>
            <span class="status-text">{project.status === 'active' ? 'Ongoing' : 'Completed'}</span>
          </div>
          <div class="project-category">{project.category}</div>
        </div>
        
        <div class="project-content">
          <h3 class="project-title">{project.title}</h3>
          <div class="project-org">{project.organization}</div>
          <div class="project-date">{project.date}</div>
          
          <p class="project-description">{project.description}</p>
          
          <div class="project-impact">
            <div class="impact-label">Key Impact:</div>
            <div class="impact-text">{project.impact}</div>
          </div>
          
          {#if project.metrics}
          <div class="project-metrics">
            <div class="metrics-label">Performance Metrics:</div>
            <div class="metrics-grid">
              {#each Object.entries(project.metrics) as [key, value]}
                <div class="metric-item">
                  <span class="metric-key">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                  <span class="metric-value">{value}</span>
                </div>
              {/each}
            </div>
          </div>
          {/if}
          
          <div class="project-technologies">
            {#each project.technologies as tech}
              <span class="tech-tag">{tech}</span>
            {/each}
          </div>
          
          <div class="project-links">
            {#if project.github}
              <a href={project.github} target="_blank" rel="noopener" class="project-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                View Code
              </a>
            {/if}
            {#if project.paper}
              <a href={project.paper} target="_blank" rel="noopener" class="project-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
                {project.paper}
              </a>
            {/if}
            {#if project.profiles}
              {#each Object.entries(project.profiles) as [platform, url]}
                <a href={url} target="_blank" rel="noopener" class="project-link">
                  {platform}
                </a>
              {/each}
            {/if}
          </div>
        </div>
        
        <div class="project-overlay">
          <div class="overlay-content">
            <div class="overlay-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
              </svg>
            </div>
            <span>View Details</span>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .project-card {
    position: relative;
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 20px;
    padding: 2rem;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
  }

  .project-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--accent-gradient);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .project-card.active::before {
    opacity: 1;
  }

  .project-card:hover {
    box-shadow: var(--shadow-lg);
    border-color: var(--accent-primary);
  }

  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .project-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--text-tertiary);
    transition: all 0.3s ease;
  }

  .status-dot.active {
    background: #10b981;
  }

  .status-text {
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .project-category {
    background: var(--accent-gradient-cool);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .featured-star {
    font-size: 1rem;
    margin-right: 0.25rem;
  }

  .project-card.featured {
    background: linear-gradient(135deg, var(--glass-bg) 0%, rgba(255, 183, 77, 0.05) 100%);
    border-color: rgba(255, 183, 77, 0.3);
  }

  .project-card.featured::before {
    background: var(--accent-gradient-warm);
    opacity: 0.7;
  }

  .section-subtitle {
    color: var(--text-secondary);
    font-size: 1.1rem;
    margin-top: -1rem;
    margin-bottom: 2rem;
  }

  .project-content {
    position: relative;
    z-index: 2;
  }

  .project-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
    line-height: 1.3;
  }

  .project-org {
    font-size: 1rem;
    font-weight: 600;
    color: var(--accent-primary);
    margin-bottom: 0.25rem;
  }

  .project-date {
    font-size: 0.9rem;
    color: var(--text-tertiary);
    margin-bottom: 1rem;
    font-weight: 500;
  }

  .project-description {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .project-impact {
    background: var(--bg-tertiary);
    padding: 1rem;
    border-radius: 12px;
    margin-bottom: 1.5rem;
    border-left: 3px solid var(--accent-primary);
  }

  .impact-label {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--accent-primary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.25rem;
  }

  .impact-text {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-primary);
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .project-metrics {
    background: linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-secondary) 100%);
    padding: 1rem;
    border-radius: 12px;
    margin-bottom: 1.5rem;
    border: 1px solid var(--border-color);
  }

  .metrics-label {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--accent-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.75rem;
  }

  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 0.5rem;
  }

  .metric-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.25rem 0;
    font-size: 0.85rem;
  }

  .metric-key {
    color: var(--text-tertiary);
    font-weight: 500;
    text-transform: capitalize;
  }

  .metric-value {
    color: var(--text-primary);
    font-weight: 700;
    font-family: 'JetBrains Mono', monospace;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .project-technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .tech-tag {
    background: var(--bg-secondary);
    color: var(--text-secondary);
    padding: 0.25rem 0.75rem;
    border-radius: 16px;
    font-size: 0.8rem;
    font-weight: 500;
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
  }

  .project-card:hover .tech-tag {
    background: var(--accent-primary);
    color: white;
    border-color: var(--accent-primary);
  }

  .project-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1rem;
  }

  .project-link {
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

  .project-link:hover {
    background: var(--accent-primary);
    color: white;
    border-color: var(--accent-primary);
  }

  .project-link svg {
    width: 16px;
    height: 16px;
  }

  .project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(78, 205, 196, 0.1) 100%);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.3s ease;
    border-radius: 20px;
  }

  .project-card.hovered .project-overlay {
    opacity: 1;
  }

  .overlay-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: var(--accent-primary);
    font-weight: 600;
  }

  .overlay-icon {
    width: 3rem;
    height: 3rem;
    background: var(--accent-primary);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(0.8);
    transition: transform 0.3s ease;
  }

  .project-card.hovered .overlay-icon {
    transform: scale(1);
  }

  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .project-card {
      padding: 1.5rem;
    }

    .project-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;
    }

    .project-card:hover {
      box-shadow: var(--shadow-md);
    }

    .project-overlay {
      display: none;
    }
  }
</style>