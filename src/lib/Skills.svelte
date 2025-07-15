<script lang="ts">
  import { scrollAnimation } from './animations';

  const skillCategories = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: '🚀',
      skills: [
        { name: 'Python', level: 95, frameworks: ['TensorFlow', 'PyTorch', 'NumPy', 'Pandas'] },
        { name: 'C++', level: 85, frameworks: ['STL', 'CUDA'] },
        { name: 'JavaScript', level: 80, frameworks: ['React', 'Redux', 'Node.js'] },
        { name: 'R', level: 75, frameworks: ['Tidyverse', 'ggplot2'] }
      ]
    },
    {
      id: 'cloud-ml',
      title: 'Cloud & ML Tools',
      icon: '⚡',
      skills: [
        { name: 'AWS', level: 90, frameworks: ['EC2', 'S3', 'Lambda', 'Bedrock'] },
        { name: 'PyTorch', level: 95, frameworks: ['Lightning', 'TorchScript'] },
        { name: 'TensorFlow', level: 85, frameworks: ['Keras', 'TensorBoard'] },
        { name: 'PySpark', level: 80, frameworks: ['MLlib', 'GraphX'] },
        { name: 'Hugging Face', level: 85, frameworks: ['Transformers', 'Datasets'] }
      ]
    },
    {
      id: 'mathematics',
      title: 'Mathematical Expertise',
      icon: '🧮',
      skills: [
        { name: 'Statistics', level: 95, frameworks: ['Martingale Theory', 'Stochastic Processes'] },
        { name: 'Machine Learning', level: 90, frameworks: ['Deep Learning', 'Computer Vision'] },
        { name: 'Optimization', level: 85, frameworks: ['Convex Optimization', 'Game Theory'] },
        { name: 'Information Theory', level: 80, frameworks: ['Entropy', 'Mutual Information'] }
      ]
    }
  ];

  const activities = [
    'Quantitative Trading & Finance',
    'Mathematics Competitions',
    'Strategic Games & Probability',
    'Science Olympiads',
    'Distance Running',
    'Team Sports',
    'Reading & Literary Discussion'
  ];

  let hoveredSkill: string | null = null;
  let selectedCategory: string = 'languages';
</script>

<section class="section" use:scrollAnimation={{ animation: 'fadeIn', delay: 200 }}>
  <h2 use:scrollAnimation={{ animation: 'slideUp', delay: 100 }}>Technical Skills & Interests</h2>
  
  <div class="skills-container">
    <!-- Category Navigation -->
    <div class="category-nav" use:scrollAnimation={{ animation: 'slideUp', delay: 200 }}>
      {#each skillCategories as category, index}
        <button 
          class="category-btn"
          class:active={selectedCategory === category.id}
          on:click={() => selectedCategory = category.id}
        >
          <span class="category-icon">{category.icon}</span>
          <span class="category-title">{category.title}</span>
        </button>
      {/each}
    </div>

    <!-- Skills Display -->
    <div class="skills-display">
      {#each skillCategories as category}
        {#if selectedCategory === category.id}
          <div class="skills-grid" use:scrollAnimation={{ animation: 'fadeIn', delay: 300 }}>
            {#each category.skills as skill, index}
              <div 
                class="skill-card"
                class:hovered={hoveredSkill === skill.name}
                use:scrollAnimation={{ animation: 'scaleIn', delay: 400 + index * 100 }}
                on:mouseenter={() => hoveredSkill = skill.name}
                on:mouseleave={() => hoveredSkill = null}
                role="button"
                tabindex="0"
              >
                <div class="skill-header">
                  <h4 class="skill-name">{skill.name}</h4>
                  <div class="skill-level">
                    <span class="level-text">{skill.level}%</span>
                  </div>
                </div>
                
                <div class="skill-progress">
                  <div 
                    class="progress-bar"
                    style="width: {skill.level}%"
                  ></div>
                </div>
                
                <div class="skill-frameworks">
                  {#each skill.frameworks as framework}
                    <span class="framework-tag">{framework}</span>
                  {/each}
                </div>
              </div>
            {/each}
          </div>
        {/if}
      {/each}
    </div>

    <!-- Activities Section -->
    <div class="activities-section" use:scrollAnimation={{ animation: 'slideUp', delay: 500 }}>
      <h3>Activities & Interests</h3>
      <div class="activities-grid">
        {#each activities as activity, index}
          <div 
            class="activity-item"
            use:scrollAnimation={{ animation: 'slideLeft', delay: 600 + index * 50 }}
          >
            <div class="activity-icon">{activity === 'Quantitative Trading & Finance' ? '📈' : 
                                activity === 'Mathematics Competitions' ? '🏆' :
                                activity === 'Strategic Games & Probability' ? '♟️' :
                                activity === 'Science Olympiads' ? '🔬' :
                                activity === 'Distance Running' ? '🏃' :
                                activity === 'Team Sports' ? '⚽' :
                                '📚'}</div>
            <span class="activity-text">{activity}</span>
          </div>
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
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
  }

  .category-btn:hover:not(.active) {
    border-color: var(--accent-primary);
    background: var(--bg-tertiary);
    transform: translateY(-1px);
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
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg), 0 0 30px rgba(59, 130, 246, 0.15);
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

  .progress-bar::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
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
    transform: scale(1.05);
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
    transform: translateX(8px);
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
      transform: none;
    }
  }
</style>