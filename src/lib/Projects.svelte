<script lang="ts">
  import { scrollAnimation } from './animations';

  const projects = [
    {
      id: 'statistical-arbitrage',
      title: 'High-Frequency Statistical Arbitrage Engine',
      organization: 'Personal Research Project',
      date: 'November 2024 - Present',
      status: 'active',
      description: 'Developed a pairs trading system using cointegration analysis and Ornstein-Uhlenbeck processes. Implemented real-time signal generation with sub-millisecond latency using C++ and zero-copy networking.',
      technologies: ['C++', 'Python', 'KDB+/Q', 'NumPy', 'Statsmodels'],
      impact: 'Backtested on 5 years of tick data: Sharpe 2.3, max drawdown 12%, 10k+ trades/day',
      metrics: {
        sharpe: 2.3,
        returns: '32% annualized',
        maxDrawdown: '12%',
        winRate: '68%'
      },
      category: 'Quant Finance',
      featured: true,
      github: 'https://github.com/Bright-L01/stat-arb-engine'
    },
    {
      id: 'ml-trading-bot',
      title: 'Machine Learning Trading Strategy',
      organization: 'Personal Project',
      date: 'October 2024 - December 2024',
      status: 'completed',
      description: 'Developed an ML-based trading strategy using reinforcement learning and time series analysis. Implemented backtesting framework and risk management system.',
      technologies: ['Python', 'PyTorch', 'Pandas', 'QuantLib', 'Backtrader'],
      impact: 'Achieved 18% annualized return in backtesting with Sharpe ratio of 1.4',
      metrics: {
        sharpe: 1.4,
        returns: '18% annualized',
        maxDrawdown: '8.5%',
        calmar: 2.1
      },
      github: 'https://github.com/Bright-L01/ml-trading-bot',
      category: 'ML/Finance',
      featured: true
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
      paper: 'Coming soon to arXiv',
      category: 'Research'
    },
    {
      id: 'chess-engine',
      title: 'Deep Learning Chess Engine',
      organization: 'Personal Project',
      date: 'June 2024 - August 2024',
      status: 'completed',
      description: 'Built a chess engine using deep reinforcement learning inspired by AlphaZero. Implemented Monte Carlo Tree Search with neural network position evaluation.',
      technologies: ['C++', 'Python', 'PyTorch', 'CUDA', 'MCTS'],
      impact: 'Achieved 2000+ ELO rating against standard chess engines',
      metrics: {
        elo: 2100,
        winRate: '73% vs Stockfish level 6',
        inferenceTime: '50ms per move',
        modelSize: '150M parameters'
      },
      github: 'https://github.com/Bright-L01/alphazero-chess',
      category: 'AI/Games',
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
      category: 'Research'
    },
    {
      id: 'quantum-sim',
      title: 'Quantum Circuit Simulator',
      organization: 'Personal Project',
      date: 'March 2024',
      status: 'completed',
      description: 'Implemented a quantum circuit simulator from scratch in C++ with Python bindings. Supports common quantum gates and measurement operations.',
      technologies: ['C++', 'Python', 'Eigen', 'OpenMP', 'Quantum Computing'],
      impact: 'Successfully simulated 24 qubit systems using tensor network optimization',
      metrics: {
        maxQubits: 24,
        speedup: '10x vs Qiskit for 20 qubits',
        memoryUsage: 'O(2^n/2) via SVD compression',
        gateError: '<0.001'
      },
      github: 'https://github.com/Bright-L01/quantum-sim',
      category: 'Physics/CS'
    },
    {
      id: 'portfolio-optimizer',
      title: 'Multi-Factor Portfolio Optimization Framework',
      organization: 'Quantitative Research Project',
      date: 'September 2024',
      status: 'completed',
      description: 'Built a portfolio optimization engine implementing Black-Litterman model with factor risk constraints. Includes CVaR optimization, transaction cost modeling, and real-time rebalancing signals.',
      technologies: ['Python', 'cvxpy', 'NumPy', 'QuantLib', 'PostgreSQL'],
      impact: 'Outperformed equal-weight benchmark by 450bps annually with 30% lower volatility',
      metrics: {
        excessReturn: '4.5%',
        volReduction: '30%',
        informationRatio: 1.8,
        turnover: '120% annually'
      },
      category: 'Quant Finance',
      github: 'https://github.com/Bright-L01/portfolio-optimizer'
    },
    {
      id: 'transformer-architecture',
      title: 'Novel Attention Mechanism for Long-Context LLMs',
      organization: 'ML Research Project',
      date: 'August 2024',
      status: 'completed',
      description: 'Designed a sparse attention mechanism reducing computational complexity from O(n²) to O(n log n) for sequences up to 100k tokens. Implemented custom CUDA kernels for efficient GPU computation.',
      technologies: ['PyTorch', 'CUDA', 'Triton', 'C++', 'Weights & Biases'],
      impact: 'Achieved 2.3x speedup on long-context benchmarks with <1% performance degradation',
      metrics: {
        speedup: '2.3x for 32k context',
        memoryReduction: '65%',
        perplexity: 'Within 0.8% of full attention',
        flops: 'O(n log n) vs O(n²)'
      },
      category: 'ML Research',
      paper: 'Preprint available on request'
    },
    {
      id: 'market-microstructure',
      title: 'Limit Order Book Dynamics & Price Impact Modeling',
      organization: 'Computational Finance Project',
      date: 'July 2024',
      status: 'completed',
      description: 'Analyzed high-frequency order book data to model price impact and optimal execution strategies. Implemented Almgren-Chriss framework with non-linear temporary and permanent impact functions.',
      technologies: ['Python', 'KDB+/Q', 'C++', 'Apache Kafka', 'TimescaleDB'],
      impact: 'Reduced execution costs by 18bps through optimal order splitting and timing',
      metrics: {
        costReduction: '18 basis points',
        dataProcessed: '2TB daily tick data',
        latency: '<100μs signal generation',
        accuracy: 'R² = 0.87 for impact prediction'
      },
      category: 'Market Microstructure'
    },
    {
      id: 'competitive-programming',
      title: 'Algorithmic Competition Achievements',
      organization: 'Various Platforms',
      date: 'Ongoing',
      status: 'active',
      description: 'Active competitive programmer with focus on dynamic programming, graph algorithms, and computational geometry. Regular participant in Codeforces, AtCoder, and USACO contests.',
      technologies: ['C++', 'Algorithms', 'Data Structures', 'Competitive Programming'],
      impact: 'Codeforces Expert (1750+), USACO Platinum, 200+ problems solved',
      metrics: {
        codeforcesRating: 1750,
        usacoLevel: 'Platinum',
        problemsSolved: '200+',
        contestsParticipated: '50+'
      },
      category: 'Algorithms',
      profiles: {
        codeforces: 'https://codeforces.com/profile/bright_liu',
        leetcode: 'https://leetcode.com/bright_liu'
      }
    }
  ];

  let hoveredProject: string | null = null;
</script>

<section class="section" use:scrollAnimation={{ animation: 'fadeIn', delay: 200 }}>
  <h2 use:scrollAnimation={{ animation: 'slideUp', delay: 100 }}>Technical Projects</h2>
  <p class="section-subtitle" use:scrollAnimation={{ animation: 'fadeIn', delay: 150 }}>
    Featured personal projects and research initiatives showcasing my technical skills
  </p>
  
  <div class="projects-grid">
    {#each projects as project, index}
      <div 
        class="project-card" 
        class:active={project.status === 'active'}
        class:featured={project.featured}
        class:hovered={hoveredProject === project.id}
        use:scrollAnimation={{ animation: 'scaleIn', delay: 300 + index * 100 }}
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
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl), 0 0 40px rgba(255, 107, 107, 0.2);
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
    animation: sparkle 2s ease-in-out infinite;
  }

  @keyframes sparkle {
    0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
    50% { opacity: 0.8; transform: scale(1.1) rotate(180deg); }
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
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
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
      transform: none;
    }

    .project-overlay {
      display: none;
    }
  }
</style>