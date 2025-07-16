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
</script>

<section class="section">
  <h2>Technical Projects</h2>
  <p class="section-subtitle">
    Featured personal projects and research initiatives showcasing my technical skills
  </p>
  
  <div class="projects-list">
    {#each projects as project, index}
      <div class="project-item">
        <div class="project-header">
          <h3 class="project-title">{project.title}</h3>
          <div class="project-meta">
            <span class="project-org">{project.organization}</span>
            <span class="project-date">{project.date}</span>
            <span class="project-status">{project.status === 'active' ? 'Ongoing' : 'Completed'}</span>
          </div>
        </div>
        
        <p class="project-description">{project.description}</p>
        
        <div class="project-impact">
          <strong>Impact:</strong> {project.impact}
        </div>
        
        {#if project.metrics}
        <div class="project-metrics">
          <strong>Performance:</strong>
          {#each Object.entries(project.metrics) as [key, value]}
            <span class="metric">{key.replace(/([A-Z])/g, ' $1').trim()}: {value}</span>
          {/each}
        </div>
        {/if}
        
        <div class="project-technologies">
          {#each project.technologies as tech}
            <span class="tech-tag">{tech}</span>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .section-subtitle {
    color: var(--text-secondary);
    font-size: 1rem;
    margin-bottom: 3rem;
    font-weight: 400;
  }

  .projects-list {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .project-item {
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 2rem;
  }

  .project-item:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  .project-header {
    margin-bottom: 0.75rem;
  }

  .project-title {
    font-size: 1.125rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    line-height: 1.3;
    color: var(--text-primary);
  }

  .project-meta {
    display: flex;
    gap: 1rem;
    font-size: 0.875rem;
    color: var(--text-tertiary);
  }

  .project-org {
    font-weight: 500;
    color: var(--text-secondary);
  }

  .project-description {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1rem;
    font-size: 0.95rem;
  }

  .project-impact {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .project-metrics {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .metric {
    display: inline-block;
    margin-right: 1rem;
    margin-bottom: 0.25rem;
  }

  .project-technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tech-tag {
    background: var(--bg-secondary);
    color: var(--text-secondary);
    padding: 0.125rem 0.5rem;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    .projects-list {
      gap: 2rem;
    }

    .project-item {
      padding-bottom: 1.5rem;
    }

    .project-meta {
      flex-direction: column;
      gap: 0.25rem;
    }

    .metric {
      display: block;
      margin-right: 0;
    }
  }
</style>