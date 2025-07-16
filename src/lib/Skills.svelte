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
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .skill-category {
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 2rem;
  }

  .skill-category:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  .category-title {
    font-size: 1.125rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    color: var(--text-primary);
  }

  .skills-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .skill-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .skill-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .skill-name {
    font-size: 1rem;
    font-weight: 500;
    color: var(--text-primary);
  }

  .skill-level {
    font-size: 0.875rem;
    color: var(--text-tertiary);
    font-weight: 400;
  }

  .skill-frameworks {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .framework-tag {
    background: var(--bg-secondary);
    color: var(--text-secondary);
    padding: 0.125rem 0.5rem;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 400;
  }

  .activities-section {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border-color);
  }

  .activities-section h3 {
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
    font-weight: 500;
  }

  .activities-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .activity-item {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .skills-container {
      gap: 2rem;
    }

    .skill-category {
      padding-bottom: 1.5rem;
    }

    .skill-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.25rem;
    }
  }
</style>