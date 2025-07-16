<script lang="ts">

  const skillCategories = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: '🚀',
      skills: [
        { name: 'Python', experience: 'Proficient', frameworks: ['NumPy', 'Pandas', 'SciPy', 'PyTorch'] },
        { name: 'C++', experience: 'Intermediate', frameworks: ['STL', 'CUDA', 'Eigen'] },
        { name: 'JavaScript/TypeScript', experience: 'Intermediate', frameworks: ['React', 'Node.js', 'Svelte'] },
        { name: 'SQL', experience: 'Intermediate', frameworks: ['PostgreSQL', 'SQLite'] },
        { name: 'MATLAB/R', experience: 'Familiar', frameworks: ['Statistics Toolbox', 'Tidyverse'] }
      ]
    },
    {
      id: 'ml-ai',
      title: 'Machine Learning & AI',
      icon: '🤖',
      skills: [
        { name: 'Deep Learning', experience: 'Intermediate', frameworks: ['PyTorch', 'TensorFlow', 'JAX'] },
        { name: 'Statistical ML', experience: 'Proficient', frameworks: ['Scikit-learn', 'XGBoost', 'Statsmodels'] },
        { name: 'Computer Vision', experience: 'Familiar', frameworks: ['OpenCV', 'PIL', 'Torchvision'] },
        { name: 'NLP', experience: 'Familiar', frameworks: ['Transformers', 'spaCy', 'NLTK'] },
        { name: 'MLOps', experience: 'Learning', frameworks: ['Weights & Biases', 'MLflow', 'Docker'] }
      ]
    },
    {
      id: 'quant-finance',
      title: 'Quantitative Finance',
      icon: '📈',
      skills: [
        { name: 'Derivatives Pricing', experience: 'Intermediate', frameworks: ['Black-Scholes', 'Monte Carlo', 'Binomial Trees'] },
        { name: 'Portfolio Theory', experience: 'Intermediate', frameworks: ['Markowitz', 'CAPM', 'Factor Models'] },
        { name: 'Risk Management', experience: 'Familiar', frameworks: ['VaR', 'CVaR', 'Greeks'] },
        { name: 'Time Series Analysis', experience: 'Proficient', frameworks: ['ARIMA', 'GARCH', 'Kalman Filters'] },
        { name: 'Algorithmic Trading', experience: 'Learning', frameworks: ['Backtesting', 'Strategy Development'] }
      ]
    },
    {
      id: 'mathematics',
      title: 'Mathematical Foundations',
      icon: '🧮',
      skills: [
        { name: 'Stochastic Calculus', experience: 'Intermediate', frameworks: ['Ito Calculus', 'SDEs', 'Martingales'] },
        { name: 'Statistics & Probability', experience: 'Proficient', frameworks: ['Bayesian Methods', 'Hypothesis Testing', 'Regression'] },
        { name: 'Optimization', experience: 'Intermediate', frameworks: ['Convex Optimization', 'Linear Programming'] },
        { name: 'Linear Algebra', experience: 'Proficient', frameworks: ['Matrix Theory', 'Eigenanalysis', 'SVD'] },
        { name: 'Real Analysis', experience: 'Intermediate', frameworks: ['Measure Theory', 'Functional Analysis'] }
      ]
    },
    {
      id: 'systems',
      title: 'Systems & Infrastructure',
      icon: '⚡',
      skills: [
        { name: 'Cloud Computing', experience: 'Intermediate', frameworks: ['AWS', 'Docker', 'Kubernetes'] },
        { name: 'Databases', experience: 'Familiar', frameworks: ['PostgreSQL', 'MongoDB', 'Redis'] },
        { name: 'Version Control', experience: 'Proficient', frameworks: ['Git', 'GitHub', 'GitLab'] },
        { name: 'Linux/Unix', experience: 'Intermediate', frameworks: ['Bash', 'SSH', 'System Administration'] },
        { name: 'High Performance Computing', experience: 'Learning', frameworks: ['CUDA', 'Parallel Computing'] }
      ]
    }
  ];

  const activities = [
    'Harvard Mathematics Coursework & Research',
    'AWS Intern - Machine Learning Infrastructure',
    'Harvard Kempner Institute - AI Research Assistant',
    'Personal Trading & Market Analysis',
    'Open Source Contributions',
    'Academic Paper Reading & Implementation',
    'Mathematics Tutoring & Teaching',
    'Competitive Programming Practice'
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
                <span class="skill-experience">{skill.experience}</span>
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

  .skill-experience {
    font-size: 0.875rem;
    color: var(--accent-primary);
    font-weight: 500;
    background: var(--bg-secondary);
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    border: 1px solid var(--border-color);
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