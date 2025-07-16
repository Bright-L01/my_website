<script lang="ts">

  // Academic work organized by category
  const peerReviewedPublications = [];
  
  const technicalReports = [
    {
      id: 'latent-diffusion-models',
      title: 'Latent Diffusion Models for High-Resolution Image Generation',
      authors: ['Bright Liu'],
      date: '2024',
      type: 'Technical Report',
      category: 'Machine Learning',
      abstract: 'Technical exploration of latent diffusion models for high-resolution image generation, examining architectural approaches and training methodologies.',
      keywords: ['Diffusion Models', 'Deep Learning', 'Computer Vision', 'Generative AI'],
      file: 'Latent_Diffusion_Models_Paper.pdf',
      size: '3.9 MB',
      pages: '6 pages',
      featured: true
    },
    {
      id: 'empirical-spectral-distributions',
      title: 'Empirical Spectral Distributions of Random Matrices',
      authors: ['Bright Liu'],
      date: '2024',
      type: 'Technical Report',
      category: 'Random Matrix Theory',
      abstract: 'Study of empirical spectral distributions of large random matrices, focusing on convergence properties and applications to high-dimensional statistics.',
      keywords: ['Random Matrix Theory', 'Spectral Analysis', 'High-Dimensional Statistics'],
      file: 'Empirical_Spectral_Distributions_Of_Random_Matrices.pdf',
      size: '397 KB',
      pages: '12 pages',
      featured: true
    },
    {
      id: 'evolutionary-dynamics',
      title: 'Evolutionary Dynamics in Multi-Agent Systems',
      authors: ['Bright Liu'],
      date: '2024',
      type: 'Technical Report',
      category: 'Game Theory',
      abstract: 'Analysis of evolutionary game theory applied to multi-agent systems, with focus on strategy evolution under different selection pressures.',
      keywords: ['Evolutionary Game Theory', 'Multi-Agent Systems', 'Nash Equilibrium'],
      file: 'Evolutionary_Dynamics_Paper.pdf',
      size: '335 KB',
      pages: '10 pages',
      featured: false
    },
    {
      id: 'girko-circular-law',
      title: 'The Girko Method and Circular Law for Random Matrices',
      authors: ['Bright Liu'],
      date: '2024',
      type: 'Technical Report',
      category: 'Mathematical Analysis',
      abstract: 'Exposition of Girko\'s method for proving the circular law in random matrix theory, with detailed proofs and applications.',
      keywords: ['Circular Law', 'Random Matrices', 'Complex Analysis', 'Eigenvalues'],
      file: 'Girko_Method_Circular_Law.pdf',
      size: '310 KB',
      pages: '9 pages',
      featured: false
    },
    {
      id: 'matrix-concentration',
      title: 'Matrix Concentration Inequalities and Applications',
      authors: ['Bright Liu'],
      date: '2024',
      type: 'Survey',
      category: 'Probability Theory',
      abstract: 'Survey of matrix concentration inequalities, including recent developments in non-commutative probability and applications to machine learning.',
      keywords: ['Concentration Inequalities', 'Matrix Analysis', 'Non-commutative Probability'],
      file: 'Matrix_Concentration_Inequalities.pdf',
      size: '290 KB',
      pages: '8 pages',
      featured: false
    },
    {
      id: 'election-forecasting',
      title: 'Election Forecasting with Sparse Statistical Models',
      authors: ['Bright Liu'],
      date: '2024',
      type: 'Technical Report',
      category: 'Political Statistics',
      abstract: 'Development of sparse regression models for election forecasting, incorporating polling data, economic indicators, and demographic factors.',
      keywords: ['Political Forecasting', 'Sparse Regression', 'Statistical Modeling'],
      file: 'Election_Forecasting_Sparse_Models.pdf',
      size: '195 KB',
      pages: '7 pages',
      featured: false
    }
  ];
  
  const teachingMaterials = [
    {
      id: 'linear-algebra-notes',
      title: 'Advanced Linear Algebra: Teaching Notes and Examples',
      authors: ['Bright Liu'],
      date: '2024',
      type: 'Teaching Material',
      category: 'Mathematics Education',
      abstract: 'Comprehensive teaching notes covering advanced topics in linear algebra including spectral theory, matrix decompositions, and applications to data science.',
      keywords: ['Linear Algebra', 'Spectral Theory', 'Matrix Decompositions', 'Teaching'],
      file: 'Advanced_Linear_Algebra_Teaching_Notes.pdf',
      size: '287 KB',
      pages: '15 pages',
      featured: false
    }
  ];
  
  // Combine all publications for filtering
  const allPublications = [...peerReviewedPublications, ...technicalReports, ...teachingMaterials];

  let selectedCategory = 'all';
  let selectedType = 'all';
  const categories = ['all', 'machine learning', 'random matrix theory', 'game theory', 'mathematical analysis', 'probability theory', 'political statistics', 'mathematics education'];
  const types = ['all', 'technical report', 'survey', 'teaching material'];
  
  $: filteredPublications = allPublications.filter(pub => {
    const matchesCategory = selectedCategory === 'all' || pub.category.toLowerCase() === selectedCategory;
    const matchesType = selectedType === 'all' || pub.type.toLowerCase() === selectedType;
    return matchesCategory && matchesType;
  });

  function openPaper(filename: string) {
    window.open(`/papers/${filename}`, '_blank');
  }
</script>

<section class="section">
  <h2>Research & Academic Work</h2>
  <p class="section-subtitle">
    Technical reports, surveys, and teaching materials
  </p>
  
  <div class="filter-section">
    <div class="filter-group">
      <div class="filter-label">Category:</div>
      <div class="filter-tabs">
        {#each categories as category}
          <button 
            class="filter-tab"
            class:active={selectedCategory === category}
            on:click={() => selectedCategory = category}
          >
            {category.replace(/\b\w/g, l => l.toUpperCase())}
          </button>
        {/each}
      </div>
    </div>
    
    <div class="filter-group">
      <div class="filter-label">Type:</div>
      <div class="filter-tabs">
        {#each types as type}
          <button 
            class="filter-tab"
            class:active={selectedType === type}
            on:click={() => selectedType = type}
          >
            {type.replace(/\b\w/g, l => l.toUpperCase())}
          </button>
        {/each}
      </div>
    </div>
  </div>

  <div class="publications-grid">
    {#each filteredPublications as publication, index}
      <div 
        class="publication-card"
        class:featured={publication.featured}
        role="button"
        tabindex="0"
        on:click={() => openPaper(publication.file)}
        on:keydown={(e) => e.key === 'Enter' && openPaper(publication.file)}
      >
        {#if publication.featured}
          <div class="featured-badge">
            <span class="featured-star">⭐</span>
            Featured
          </div>
        {/if}
        
        <div class="paper-header">
          <div class="paper-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>
          <div class="paper-type">{publication.type}</div>
        </div>

        <div class="paper-content">
          <h3 class="paper-title">{publication.title}</h3>
          <div class="paper-meta">
            <span class="paper-authors">{publication.authors.join(', ')}</span>
            <span class="paper-date">{publication.date}</span>
          </div>
          
          <div class="paper-category">
            <span class="category-badge">{publication.category}</span>
          </div>
          
          <p class="paper-abstract">{publication.abstract}</p>
          
          <div class="paper-details">
            <div class="detail-item">
              <span class="detail-label">Size:</span>
              <span class="detail-value">{publication.size}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Length:</span>
              <span class="detail-value">{publication.pages}</span>
            </div>
          </div>
          
          <div class="paper-keywords">
            {#each publication.keywords as keyword}
              <span class="keyword-tag">{keyword}</span>
            {/each}
          </div>
        </div>
        
        <div class="paper-actions">
          <button 
            class="action-button primary" 
            on:click|stopPropagation={() => openPaper(publication.file)}
            aria-label="View {publication.title} PDF"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            View PDF
          </button>
          <button 
            class="action-button secondary" 
            on:click|stopPropagation={() => window.open(`/papers/${publication.file}`, '_blank')}
            aria-label="Download {publication.title} PDF"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download
          </button>
        </div>
        
        <div class="paper-overlay">
          <div class="overlay-content">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            <span>Click to View</span>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .section-subtitle {
    color: var(--text-secondary);
    font-size: 1.1rem;
    margin-top: -1rem;
    margin-bottom: 2rem;
  }

  .filter-section {
    margin-bottom: 2rem;
  }

  .filter-group {
    margin-bottom: 1rem;
  }

  .filter-label {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }

  .filter-tabs {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .filter-tab {
    padding: 0.5rem 1rem;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.2s ease;
    text-transform: capitalize;
  }

  .filter-tab:hover {
    background: var(--bg-tertiary);
    border-color: var(--accent-primary);
    color: var(--text-primary);
  }

  .filter-tab.active {
    background: var(--accent-primary);
    color: white;
    border-color: var(--accent-primary);
  }

  .publications-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
  }

  .publication-card {
    position: relative;
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    padding: 2rem;
    cursor: pointer;
    transition: all 0.2s ease;
    overflow: hidden;
  }

  .publication-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--accent-primary);
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  .publication-card.featured::before {
    opacity: 1;
  }

  .publication-card:hover {
    box-shadow: var(--shadow-md);
    border-color: var(--accent-primary);
  }

  .featured-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: var(--accent-primary);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    z-index: 2;
  }

  .featured-star {
    font-size: 0.9rem;
  }

  .paper-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.5rem;
  }

  .paper-icon {
    color: var(--accent-primary);
    flex-shrink: 0;
  }

  .paper-type {
    background: var(--accent-primary);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .paper-content {
    flex: 1;
  }

  .paper-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.75rem;
    line-height: 1.3;
  }

  .paper-meta {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }

  .paper-authors {
    color: var(--text-secondary);
    font-weight: 500;
  }

  .paper-date {
    color: var(--text-tertiary);
  }

  .paper-category {
    margin-bottom: 1rem;
  }

  .category-badge {
    background: var(--bg-tertiary);
    color: var(--accent-primary);
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 600;
    border: 1px solid var(--accent-primary);
  }

  .paper-abstract {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
  }

  .paper-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .detail-item {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    background: var(--bg-tertiary);
    border-radius: 8px;
    font-size: 0.85rem;
  }

  .detail-label {
    color: var(--text-tertiary);
    font-weight: 500;
  }

  .detail-value {
    color: var(--text-primary);
    font-weight: 600;
    font-family: 'JetBrains Mono', monospace;
  }

  .paper-keywords {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .keyword-tag {
    background: var(--bg-secondary);
    color: var(--text-secondary);
    padding: 0.2rem 0.6rem;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 500;
    border: 1px solid var(--border-color);
    transition: all 0.2s ease;
  }

  .publication-card:hover .keyword-tag {
    background: var(--bg-tertiary);
    color: var(--text-primary);
    border-color: var(--accent-primary);
  }

  .paper-actions {
    display: flex;
    gap: 0.75rem;
    z-index: 2;
    position: relative;
  }

  .action-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    border-radius: 12px;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    flex: 1;
    justify-content: center;
    border: none;
    font-family: inherit;
  }

  .action-button.primary {
    background: var(--accent-primary);
    color: white;
  }

  .action-button.primary:hover {
    background: var(--accent-secondary);
  }

  .action-button.secondary {
    background: var(--bg-tertiary);
    color: var(--text-secondary);
    border: 1px solid var(--border-color);
  }

  .action-button.secondary:hover {
    background: var(--bg-secondary);
    color: var(--text-primary);
    border-color: var(--accent-primary);
  }

  .paper-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(74, 144, 226, 0.05);
    backdrop-filter: blur(2px);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.2s ease;
    border-radius: 12px;
  }

  .publication-card:hover .paper-overlay {
    opacity: 1;
  }

  .overlay-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: var(--accent-primary);
    font-weight: 600;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    .publications-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .publication-card {
      padding: 1.5rem;
    }

    .paper-header {
      flex-direction: column;
      gap: 1rem;
      align-items: flex-start;
    }

    .paper-details {
      grid-template-columns: 1fr;
    }

    .paper-actions {
      flex-direction: column;
    }

    .filter-tabs {
      justify-content: center;
    }

    .publication-card:hover {
      box-shadow: var(--shadow-md);
    }

    .paper-overlay {
      display: none;
    }
  }
</style>