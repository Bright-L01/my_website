<script lang="ts">
  import { scrollAnimation } from './animations';

  const projects = [
    {
      id: 'kempner',
      title: 'AI Resource Optimization Research',
      organization: 'Kempner Institute for Artificial Intelligence',
      date: 'January 2025 - Present',
      status: 'active',
      description: 'Researched optimal resource allocation for large-scale inference by analyzing the trade-off between model complexity and performance under a fixed compute budget, improving efficiency on math reasoning tasks.',
      technologies: ['Python', 'PyTorch', 'CUDA', 'Distributed Computing'],
      impact: 'Improved inference efficiency by 23% while maintaining 95% accuracy',
      category: 'Research'
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
      category: 'Research'
    }
  ];

  let hoveredProject: string | null = null;
</script>

<section class="section" use:scrollAnimation={{ animation: 'fadeIn', delay: 200 }}>
  <h2 use:scrollAnimation={{ animation: 'slideUp', delay: 100 }}>Technical Projects</h2>
  
  <div class="projects-grid">
    {#each projects as project, index}
      <div 
        class="project-card" 
        class:active={project.status === 'active'}
        class:hovered={hoveredProject === project.id}
        use:scrollAnimation={{ animation: 'scaleIn', delay: 300 + index * 100 }}
        on:mouseenter={() => hoveredProject = project.id}
        on:mouseleave={() => hoveredProject = null}
        role="button"
        tabindex="0"
      >
        <div class="project-header">
          <div class="project-status">
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
          
          <div class="project-technologies">
            {#each project.technologies as tech}
              <span class="tech-tag">{tech}</span>
            {/each}
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
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl), 0 0 40px rgba(59, 130, 246, 0.2);
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
    box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  .status-text {
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .project-category {
    background: var(--accent-primary);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
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
  }

  .project-technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
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

  .project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(59, 130, 246, 0.1);
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
      transform: none;
    }

    .project-overlay {
      display: none;
    }
  }
</style>