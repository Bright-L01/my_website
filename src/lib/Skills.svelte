<section class="section">
  <h2>Technical Skills & Interests</h2>
  
  <div class="skills-grid">
    <div class="skill-category">
      <h3>Languages</h3>
      <div class="skill-tags">
        <span class="skill-tag">Python</span>
        <span class="skill-tag">TensorFlow</span>
        <span class="skill-tag">PyTorch</span>
        <span class="skill-tag">NumPy</span>
        <span class="skill-tag">Pandas</span>
        <span class="skill-tag">C++</span>
        <span class="skill-tag">JavaScript</span>
        <span class="skill-tag">React</span>
        <span class="skill-tag">Redux</span>
        <span class="skill-tag">R</span>
      </div>
    </div>

    <div class="skill-category">
      <h3>Cloud & ML Tools</h3>
      <div class="skill-tags">
        <span class="skill-tag">AWS</span>
        <span class="skill-tag">PyTorch</span>
        <span class="skill-tag">TensorFlow</span>
        <span class="skill-tag">PySpark</span>
        <span class="skill-tag">Hugging Face</span>
      </div>
    </div>

    <div class="skill-category">
      <h3>Activities</h3>
      <div class="activities">
        <p>Harvard Undergraduate Quantitative Traders, Harvard MIT Math Tournament, Harvard Poker Club, 
        Harvard Science Olympiad, Cambridge Half Marathon, Harvard Ultimate Frisbee, Founder of Harvard Book Club</p>
      </div>
    </div>
  </div>
</section>

<style>
  .skills-grid {
    display: grid;
    gap: 2rem;
  }

  .skill-category h3 {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    border-bottom: 2px solid #3498db;
    padding-bottom: 0.5rem;
  }

  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .skill-tag {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
    transition: transform 0.2s ease;
  }

  .skill-tag:hover {
    transform: translateY(-2px);
  }

  .activities p {
    color: #555;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .skills-grid {
      gap: 1.5rem;
    }
    
    .skill-tag {
      font-size: 0.8rem;
      padding: 0.4rem 0.8rem;
    }
  }
</style>