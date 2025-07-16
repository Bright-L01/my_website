<script lang="ts">

  const skillCategories = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: '🚀',
      skills: [
        { name: 'Python', level: 95, frameworks: ['NumPy', 'Pandas', 'SciPy', 'Numba', 'Cython'] },
        { name: 'C++', level: 85, frameworks: ['STL', 'CUDA', 'Eigen', 'OpenMP', 'MPI'] },
        { name: 'JavaScript/TypeScript', level: 80, frameworks: ['React', 'Node.js', 'D3.js'] },
        { name: 'SQL/KDB+', level: 85, frameworks: ['PostgreSQL', 'TimescaleDB', 'Q/kdb+'] },
        { name: 'MATLAB/R', level: 75, frameworks: ['Optimization Toolbox', 'Tidyverse'] }
      ]
    },
    {
      id: 'ml-ai',
      title: 'Machine Learning & AI',
      icon: '🤖',
      skills: [
        { name: 'Deep Learning', level: 95, frameworks: ['PyTorch', 'JAX', 'TensorFlow', 'ONNX'] },
        { name: 'NLP/LLMs', level: 90, frameworks: ['Transformers', 'LangChain', 'vLLM', 'RAG'] },
        { name: 'Computer Vision', level: 85, frameworks: ['OpenCV', 'YOLO', 'ViT', 'CLIP'] },
        { name: 'Reinforcement Learning', level: 80, frameworks: ['Stable-Baselines3', 'RLlib', 'Gym'] },
        { name: 'MLOps', level: 85, frameworks: ['Weights & Biases', 'MLflow', 'Kubeflow'] }
      ]
    },
    {
      id: 'quant-finance',
      title: 'Quantitative Finance',
      icon: '📈',
      skills: [
        { name: 'Derivatives Pricing', level: 90, frameworks: ['Black-Scholes', 'Monte Carlo', 'Binomial Trees'] },
        { name: 'Risk Management', level: 85, frameworks: ['VaR', 'CVaR', 'Greeks', 'Stress Testing'] },
        { name: 'Portfolio Optimization', level: 90, frameworks: ['Markowitz', 'Black-Litterman', 'Factor Models'] },
        { name: 'Market Microstructure', level: 80, frameworks: ['Order Book Dynamics', 'Price Impact', 'HFT'] },
        { name: 'Backtesting', level: 95, frameworks: ['Vectorized', 'Event-Driven', 'Walk-Forward'] }
      ]
    },
    {
      id: 'mathematics',
      title: 'Mathematical Foundations',
      icon: '🧮',
      skills: [
        { name: 'Stochastic Calculus', level: 95, frameworks: ['Ito Calculus', 'SDEs', 'Martingales'] },
        { name: 'Statistics & Probability', level: 95, frameworks: ['Time Series', 'Bayesian', 'Hypothesis Testing'] },
        { name: 'Optimization', level: 90, frameworks: ['Convex', 'Non-linear', 'Integer Programming'] },
        { name: 'Numerical Methods', level: 85, frameworks: ['Finite Differences', 'FFT', 'Monte Carlo'] },
        { name: 'Linear Algebra', level: 95, frameworks: ['Matrix Decompositions', 'Eigenanalysis', 'Tensors'] }
      ]
    },
    {
      id: 'systems',
      title: 'Systems & Infrastructure',
      icon: '⚡',
      skills: [
        { name: 'Cloud Computing', level: 90, frameworks: ['AWS', 'GCP', 'Kubernetes', 'Docker'] },
        { name: 'High Performance Computing', level: 85, frameworks: ['CUDA', 'OpenCL', 'MPI', 'Vectorization'] },
        { name: 'Databases', level: 85, frameworks: ['PostgreSQL', 'MongoDB', 'Redis', 'InfluxDB'] },
        { name: 'Message Queues', level: 80, frameworks: ['Kafka', 'RabbitMQ', 'ZeroMQ', 'Pulsar'] },
        { name: 'Low Latency', level: 85, frameworks: ['Lock-free', 'NUMA', 'CPU Pinning', 'DPDK'] }
      ]
    }
  ];

  const activities = [
    'Quantitative Trading & Alpha Research',
    'Competitive Programming (Codeforces Expert)',
    'Open Source ML Contributions',
    'Mathematics Research & Competitions',
    'Kaggle Competitions (Expert Tier)',
    'Options Trading & Market Analysis',
    'Technical Writing & Research Papers',
    'Algorithmic Game Theory Research'
  ];

  let hoveredSkill: string | null = null;
  let selectedCategory: string = 'languages';
</script>

<section class="section">
  <h2>Technical Skills & Interests</h2>
  
  <div class="skills-container">
    <!-- All Skills Displayed -->
    {#each skillCategories as category}
      <div class="skill-category">
        <h3 class="category-title">{category.title}</h3>
        <div class="skills-list">
          {#each category.skills as skill}
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">{skill.name}</span>
                <span class="skill-level">{skill.level}%</span>
              </div>
              <div class="skill-frameworks">
                {#each skill.frameworks as framework}
                  <span class="framework-tag">{framework}</span>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/each}

    <!-- Activities Section -->
    <div class="activities-section">
      <h3>Activities & Interests</h3>
      <div class="activities-list">
        {#each activities as activity}
          <div class="activity-item">{activity}</div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .skills-container {
    margin-top: 2rem;
  }

  .category-nav {
    display: flex;
    gap: 1rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
  }

  .category-btn {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 1.5rem;
    background: var(--bg-secondary);
    border: 2px solid var(--border-color);
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    color: var(--text-secondary);
    font-weight: 500;
  }

  .category-btn.active {
    background: var(--accent-gradient);
    border-color: var(--accent-primary);
    color: white;
  }

  .category-btn:hover:not(.active) {
    border-color: var(--accent-primary);
    background: var(--bg-tertiary);
  }

  .category-icon {
    font-size: 1.2rem;
  }

  .category-title {
    font-size: 0.95rem;
    font-weight: 600;
  }

  .skills-display {
    min-height: 400px;
    position: relative;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .skill-card {
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 16px;
    padding: 1.5rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }

  .skill-card:hover {
    box-shadow: var(--shadow-md);
    border-color: var(--accent-primary);
  }

  .skill-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .skill-name {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
  }

  .skill-level {
    background: var(--accent-primary);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 600;
  }

  .skill-progress {
    width: 100%;
    height: 6px;
    background: var(--bg-tertiary);
    border-radius: 3px;
    overflow: hidden;
    margin-bottom: 1rem;
  }

  .progress-bar {
    height: 100%;
    background: var(--accent-gradient);
    border-radius: 3px;
    transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
  }


  .skill-frameworks {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .framework-tag {
    background: var(--bg-secondary);
    color: var(--text-secondary);
    padding: 0.25rem 0.5rem;
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 500;
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
  }

  .skill-card.hovered .framework-tag {
    background: var(--accent-primary);
    color: white;
    border-color: var(--accent-primary);
  }

  .activities-section {
    margin-top: 4rem;
    padding-top: 3rem;
    border-top: 1px solid var(--border-color);
  }

  .activities-section h3 {
    color: var(--text-primary);
    margin-bottom: 2rem;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .activities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
  }

  .activity-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: var(--bg-secondary);
    border-radius: 12px;
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
  }

  .activity-item:hover {
    background: var(--bg-tertiary);
    border-color: var(--accent-primary);
  }

  .activity-icon {
    font-size: 1.2rem;
    flex-shrink: 0;
  }

  .activity-text {
    color: var(--text-secondary);
    font-weight: 500;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    .category-nav {
      gap: 0.75rem;
    }

    .category-btn {
      padding: 0.75rem 1rem;
      font-size: 0.9rem;
    }

    .category-title {
      display: none;
    }

    .skills-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .skill-card {
      padding: 1.25rem;
    }

    .activities-grid {
      grid-template-columns: 1fr;
    }

    .activity-item:hover {
      background: var(--bg-tertiary);
    }
  }
</style>