<script lang="ts">
  import { scrollAnimation } from './animations';
</script>

<section class="section" use:scrollAnimation={{ animation: 'fadeIn', delay: 200 }}>
  <h2 use:scrollAnimation={{ animation: 'slideUp', delay: 100 }}>Education</h2>
  
  <div class="item" use:scrollAnimation={{ animation: 'slideLeft', delay: 300 }}>
    <div class="item-header">
      <div>
        <div class="item-title">Harvard University</div>
        <div class="item-org">Master of Arts in Statistics</div>
      </div>
      <div class="item-right">
        <div class="item-location">Cambridge, MA</div>
        <div class="item-date">August 2024 - May 2026</div>
      </div>
    </div>
  </div>

  <div class="item" use:scrollAnimation={{ animation: 'slideLeft', delay: 400 }}>
    <div class="item-header">
      <div>
        <div class="item-title">Harvard University</div>
        <div class="item-org">Bachelor of Arts in Mathematics and Computer Science</div>
        <div class="gpa">GPA: 3.81</div>
      </div>
      <div class="item-right">
        <div class="item-location">Cambridge, MA</div>
        <div class="item-date">August 2022 - May 2026</div>
      </div>
    </div>
    <div class="item-description" use:scrollAnimation={{ animation: 'fadeIn', delay: 500 }}>
      <strong>Relevant Coursework:</strong> Martingale Theory, Stochastic Processes, Algorithmic Game Theory, 
      Convex Optimization, Time Series Analysis, Information Theory, Deep Learning, Data Structures & Algorithms, 
      Distributed Systems, Linear Algebra (Math 55)
    </div>
  </div>
</section>

<style>
  .item-right {
    text-align: right;
  }

  .gpa {
    color: var(--accent-primary);
    font-weight: 600;
    margin-top: 0.5rem;
    padding: 0.25rem 0.75rem;
    background: var(--bg-tertiary);
    border-radius: 12px;
    display: inline-block;
    border: 1px solid var(--border-color);
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    .item-right {
      text-align: left;
    }
  }
</style>