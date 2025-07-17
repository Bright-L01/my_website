<script lang="ts">

  const projects = [
    {
      id: 'iquhack-2025',
      title: 'Quantum Error Correction with Cat Qubits',
      organization: 'MIT iQuHACK 2025 - Alice & Bob Challenge',
      date: 'January 2025',
      status: 'completed',
      description: 'Implemented advanced quantum error correction using superconducting cat qubits and DynamiQ library, exploring buffer vs bufferless quantum systems and Zeno gate implementations for robust quantum computation.',
      technologies: ['Python', 'DynamiQ', 'JAX', 'NumPy', 'Matplotlib', 'Quantum Computing'],
      impact: 'Won 1st place at MIT iQuHACK 2025 quantum computing hackathon',
      metrics: {
        gateFidelity: '99%+ for optimized control sequences',
        coherenceTime: 'Significant improvement demonstrated',
        qubitReduction: 'Reduced physical qubits required for error correction'
      },
      category: 'Quantum Computing',
      featured: true,
      githubUrl: 'https://github.com/brightlikethelight/iQuHACK_2025'
    },
    {
      id: 'networkx-mcp-server',
      title: 'NetworkX MCP Server',
      organization: 'Personal Project',
      date: 'December 2024 - Present',
      status: 'active',
      description: 'Developed a production-ready graph analysis server using NetworkX and Model Context Protocol (MCP), featuring modular architecture with enterprise-grade security, monitoring, and horizontal scaling capabilities.',
      technologies: ['Python', 'NetworkX', 'FastMCP', 'Docker', 'Kubernetes', 'Graph Theory'],
      impact: 'Production-ready graph analysis platform with 80%+ test coverage',
      metrics: {
        testCoverage: '80%+',
        architecture: 'Modular 4-layer design',
        scalability: 'Horizontal scaling supported'
      },
      category: 'Systems Engineering',
      featured: true,
      githubUrl: 'https://github.com/brightlikethelight/networkx-mcp-server'
    },
    {
      id: 'academic-portfolio',
      title: 'Academic Portfolio Website',
      organization: 'MIT 6.S898 Graduate Deep Learning',
      date: 'Fall 2024',
      status: 'completed',
      description: 'Built responsive academic portfolio using Jekyll and al-folio theme, featuring blog functionality, publication management, and Docker deployment for showcasing deep learning research and projects.',
      technologies: ['Jekyll', 'HTML', 'JavaScript', 'Docker', 'GitHub Actions'],
      impact: 'Professional academic portfolio with responsive design and CI/CD integration',
      category: 'Web Development',
      featured: false,
      githubUrl: 'https://github.com/brightlikethelight/elephantfish.github.io'
    },
    {
      id: 'music-gen-ai',
      title: 'AI Music Generation System',
      organization: 'Personal Project',
      date: 'November 2024 - Present',
      status: 'active',
      description: 'Implemented transformer-based text-to-music generation system using PyTorch and EnCodec, supporting multi-instrument composition, real-time streaming, and professional audio mixing with REST API interface.',
      technologies: ['Python', 'PyTorch', 'Transformers', 'FastAPI', 'Docker', 'CUDA'],
      impact: 'High-quality music generation with real-time streaming capabilities',
      metrics: {
        audioQuality: 'Professional-grade output',
        realTime: 'Streaming audio generation',
        multiInstrument: 'Multi-track composition support'
      },
      category: 'AI/ML',
      featured: true,
      githubUrl: 'https://github.com/brightlikethelight/music-gen-ai'
    },
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
    {#each projects as project}
      <div class="item">
        <div class="item-header">
          <div>
            <div class="item-title">
              {#if project.githubUrl}
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" class="project-link">
                  {project.title}
                </a>
              {:else}
                {project.title}
              {/if}
            </div>
            <div class="item-org">{project.organization}</div>
          </div>
          <div class="item-right">
            <div class="item-date">{project.date}</div>
            <div class="project-status">{project.status === 'active' ? 'Ongoing' : 'Completed'}</div>
          </div>
        </div>
        
        <div class="item-description">
          <p>{project.description}</p>
          
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

  .project-link {
    color: var(--text-primary);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .project-link:hover {
    color: var(--accent-primary);
    text-decoration: underline;
  }

  .item-right {
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.25rem;
  }

  .project-status {
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--accent-primary);
    background: var(--bg-secondary);
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    border: 1px solid var(--border-color);
  }

  .project-impact {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin: 1rem 0;
  }

  .project-metrics {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin: 1rem 0;
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
    margin-top: 1rem;
  }

  .tech-tag {
    background: var(--bg-secondary);
    color: var(--text-secondary);
    padding: 0.125rem 0.5rem;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 400;
    border: 1px solid var(--border-color);
  }

  @media (max-width: 768px) {
    .item-right {
      text-align: left;
      align-items: flex-start;
    }

    .metric {
      display: block;
      margin-right: 0;
    }
  }
</style>