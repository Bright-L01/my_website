<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  
  export let categories: string[] = [];
  export let activeFilter: string = 'all';
  
  const allFilters = ['all', ...categories];
  
  function handleFilterChange(filter: string) {
    activeFilter = filter;
    dispatch('filter', filter);
  }
  
  function getFilterCount(filter: string, projects: any[]): number {
    if (filter === 'all') return projects.length;
    return projects.filter(p => p.category === filter).length;
  }
</script>

<div class="project-filter">
  <h3>Filter Projects</h3>
  <div class="filter-buttons">
    {#each allFilters as filter}
      <button
        class="filter-btn"
        class:active={activeFilter === filter}
        on:click={() => handleFilterChange(filter)}
        aria-label="Filter projects by {filter}"
        aria-pressed={activeFilter === filter}
      >
        {filter === 'all' ? 'All Projects' : filter}
      </button>
    {/each}
  </div>
</div>

<style>
  .project-filter {
    margin-bottom: 2rem;
  }
  
  .project-filter h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }
  
  .filter-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .filter-btn {
    padding: 0.5rem 1rem;
    border: 1px solid var(--border-color);
    background: var(--bg-secondary);
    color: var(--text-secondary);
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    font-weight: 500;
  }
  
  .filter-btn:hover {
    background: var(--accent-primary);
    color: white;
    border-color: var(--accent-primary);
  }
  
  .filter-btn.active {
    background: var(--accent-primary);
    color: white;
    border-color: var(--accent-primary);
  }
  
  @media (max-width: 768px) {
    .filter-buttons {
      flex-direction: column;
    }
    
    .filter-btn {
      width: 100%;
      text-align: center;
    }
  }
</style>