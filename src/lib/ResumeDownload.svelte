<script lang="ts">
  import { onMount } from 'svelte';

  let isGenerating = false;
  let downloadUrl = '';

  // Resume data structure
  const resumeData = {
    name: 'Bright Liu',
    title: 'Harvard CS/Statistics Student & AWS ML Engineer',
    email: 'brightliu@college.harvard.edu',
    phone: 'Available upon request',
    location: 'Boston, MA',
    website: 'https://brightliu.com',
    linkedin: 'https://www.linkedin.com/in/bright-liu-701174216',
    github: 'https://github.com/brightlikethelight',
    
    summary: 'Harvard mathematician developing high-performance trading algorithms and scalable ML systems. Building production AI infrastructure at AWS while researching model optimization at the Kempner Institute. Specializing in statistical arbitrage, deep learning architectures, and low-latency computing with Python, C++, and cloud platforms.',
    
    education: [
      {
        institution: 'Harvard University',
        degree: 'Master of Arts in Statistics',
        location: 'Cambridge, MA',
        date: 'August 2024 - May 2026'
      },
      {
        institution: 'Harvard University',
        degree: 'Bachelor of Arts in Mathematics and Computer Science',
        location: 'Cambridge, MA',
        date: 'August 2022 - May 2026',
        details: 'Relevant Coursework: Martingale Theory, Stochastic Processes, Algorithmic Game Theory, Convex Optimization, Time Series Analysis, Information Theory, Deep Learning, Data Structures & Algorithms, Distributed Systems, Linear Algebra (Math 55)'
      }
    ],
    
    experience: [
      {
        title: 'AI/ML Software Engineering Intern',
        company: 'Amazon Web Services (AWS)',
        location: 'New York, NY',
        date: 'May 2025 - Present',
        responsibilities: [
          'Developed cloud-based AI infrastructure tools and packages, improving system performance metrics and supporting high-volume production workloads with 99.9% uptime.',
          'Built scalable data processing pipelines for real-time analytics, implementing statistical methods for anomaly detection with high precision and recall rates.',
          'Created automated monitoring and analysis tools that significantly reduced incident response times through intelligent root-cause analysis and reporting systems.'
        ]
      },
      {
        title: 'Deep Learning Researcher',
        company: 'Massachusetts General Hospital & Harvard Medical School',
        location: 'Boston, MA',
        date: 'January 2024 - August 2024',
        responsibilities: [
          'Designed and implemented a Vision Transformer architecture in PyTorch to analyze medical imaging data, achieving 91.2% AUROC and 5% improvement over ResNet-50 baseline on large-scale patient datasets.',
          'Developed a retrieval-augmented generation system using transformer embeddings and vector indexing to extract structured insights from medical literature, improving entity extraction performance significantly over human baselines.',
          'Collaborated with clinical researchers and radiologists to validate model performance, ensuring compliance with medical data privacy requirements and contributing to manuscript preparation for peer review.'
        ]
      }
    ],
    
    skills: [
      'Python', 'C++', 'JavaScript/TypeScript', 'SQL', 'MATLAB', 'R',
      'PyTorch', 'TensorFlow', 'Scikit-learn', 'JAX', 'Transformers', 'OpenCV',
      'Options Pricing', 'Portfolio Optimization', 'Risk Management', 'Time Series Analysis',
      'Stochastic Calculus', 'Linear Algebra', 'Statistics & Probability', 'Optimization Theory',
      'AWS', 'Docker', 'Git', 'PostgreSQL', 'Linux', 'Jupyter'
    ]
  };

  function generateResumeHTML(): string {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>${resumeData.name} - Resume</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 800px;
              margin: 0 auto;
              padding: 40px 20px;
              background: white;
            }
            .header {
              text-align: center;
              margin-bottom: 40px;
              border-bottom: 2px solid #333;
              padding-bottom: 20px;
            }
            .header h1 {
              margin: 0;
              font-size: 2.5em;
              font-weight: 700;
            }
            .header .title {
              font-size: 1.2em;
              color: #666;
              margin: 10px 0;
            }
            .contact-info {
              display: flex;
              justify-content: center;
              gap: 20px;
              flex-wrap: wrap;
              margin-top: 15px;
            }
            .contact-info span {
              font-size: 0.9em;
              color: #666;
            }
            .section {
              margin-bottom: 35px;
            }
            .section h2 {
              font-size: 1.4em;
              font-weight: 600;
              color: #333;
              border-bottom: 1px solid #ddd;
              padding-bottom: 5px;
              margin-bottom: 20px;
            }
            .item {
              margin-bottom: 25px;
            }
            .item-header {
              display: flex;
              justify-content: space-between;
              align-items: baseline;
              margin-bottom: 8px;
            }
            .item-title {
              font-weight: 600;
              font-size: 1.1em;
            }
            .item-company {
              color: #666;
              font-weight: 500;
            }
            .item-date {
              color: #888;
              font-size: 0.9em;
              white-space: nowrap;
            }
            .item-location {
              color: #888;
              font-size: 0.9em;
              font-style: italic;
            }
            .responsibilities {
              margin-top: 10px;
            }
            .responsibilities li {
              margin-bottom: 5px;
              line-height: 1.5;
            }
            .skills-list {
              display: flex;
              flex-wrap: wrap;
              gap: 8px;
            }
            .skill-tag {
              background: #f0f0f0;
              padding: 4px 8px;
              border-radius: 4px;
              font-size: 0.9em;
            }
            .summary {
              font-style: italic;
              color: #555;
              margin-bottom: 30px;
              line-height: 1.7;
            }
            @media print {
              body { padding: 20px; }
              .header { page-break-after: avoid; }
              .section { page-break-inside: avoid; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>${resumeData.name}</h1>
            <div class="title">${resumeData.title}</div>
            <div class="contact-info">
              <span>📧 ${resumeData.email}</span>
              <span>📍 ${resumeData.location}</span>
              <span>🌐 ${resumeData.website}</span>
              <span>💼 LinkedIn</span>
              <span>👨‍💻 GitHub</span>
            </div>
          </div>

          <div class="section">
            <h2>Professional Summary</h2>
            <div class="summary">${resumeData.summary}</div>
          </div>

          <div class="section">
            <h2>Education</h2>
            ${resumeData.education.map(edu => `
              <div class="item">
                <div class="item-header">
                  <div>
                    <div class="item-title">${edu.institution}</div>
                    <div class="item-company">${edu.degree}</div>
                  </div>
                  <div>
                    <div class="item-date">${edu.date}</div>
                    <div class="item-location">${edu.location}</div>
                  </div>
                </div>
                ${edu.details ? `<div class="responsibilities"><strong>Relevant Coursework:</strong> ${edu.details}</div>` : ''}
              </div>
            `).join('')}
          </div>

          <div class="section">
            <h2>Professional Experience</h2>
            ${resumeData.experience.map(exp => `
              <div class="item">
                <div class="item-header">
                  <div>
                    <div class="item-title">${exp.title}</div>
                    <div class="item-company">${exp.company}</div>
                  </div>
                  <div>
                    <div class="item-date">${exp.date}</div>
                    <div class="item-location">${exp.location}</div>
                  </div>
                </div>
                <ul class="responsibilities">
                  ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>

          <div class="section">
            <h2>Technical Skills</h2>
            <div class="skills-list">
              ${resumeData.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
          </div>
        </body>
      </html>
    `;
  }

  async function downloadResume() {
    if (isGenerating) return;
    
    isGenerating = true;
    
    try {
      const htmlContent = generateResumeHTML();
      
      // Create a blob with the HTML content
      const blob = new Blob([htmlContent], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      
      // Create a temporary download link
      const a = document.createElement('a');
      a.href = url;
      a.download = `${resumeData.name.replace(/\s+/g, '_')}_Resume.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
      // Clean up the object URL
      URL.revokeObjectURL(url);
      
      // Track resume download
      import('./utils/analytics').then(({ default: analytics }) => {
        analytics.trackResumeDownload('HTML');
      });
      
    } catch (error) {
      console.error('Error generating resume:', error);
    } finally {
      isGenerating = false;
    }
  }

  function openPrintableVersion() {
    const htmlContent = generateResumeHTML();
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(htmlContent);
      printWindow.document.close();
      
      // Track resume view/print
      import('./utils/analytics').then(({ default: analytics }) => {
        analytics.trackResumeDownload('Print');
      });
    }
  }
</script>

<div class="resume-download">
  <h3>Resume Download</h3>
  <p>Download or view my resume in a professional format</p>
  
  <div class="download-buttons">
    <button 
      class="download-btn primary" 
      on:click={downloadResume}
      disabled={isGenerating}
      aria-label="Download resume as HTML file"
    >
      {#if isGenerating}
        <span class="spinner"></span>
        Generating...
      {:else}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7,10 12,15 17,10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        Download Resume
      {/if}
    </button>
    
    <button 
      class="download-btn secondary" 
      on:click={openPrintableVersion}
      aria-label="Open printable version of resume"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6,9 6,2 18,2 18,9"/>
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
        <rect x="6" y="14" width="12" height="8"/>
      </svg>
      View & Print
    </button>
  </div>
</div>

<style>
  .resume-download {
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 2rem;
    margin: 2rem 0;
  }

  .resume-download h3 {
    margin-top: 0;
    color: var(--text-primary);
    font-size: 1.25rem;
    font-weight: 600;
  }

  .resume-download p {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
  }

  .download-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .download-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 6px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    font-size: 0.95rem;
  }

  .download-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .download-btn.primary {
    background: var(--accent-primary);
    color: var(--bg-primary);
  }

  .download-btn.primary:hover:not(:disabled) {
    background: var(--accent-secondary);
    transform: translateY(-1px);
  }

  .download-btn.secondary {
    background: var(--bg-tertiary);
    color: var(--text-primary);
    border: 1px solid var(--border-color);
  }

  .download-btn.secondary:hover {
    background: var(--bg-secondary);
    border-color: var(--accent-primary);
  }

  .spinner {
    width: 16px;
    height: 16px;
    border: 2px solid transparent;
    border-top: 2px solid currentColor;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @media (max-width: 768px) {
    .download-buttons {
      flex-direction: column;
    }
    
    .download-btn {
      width: 100%;
      justify-content: center;
    }
  }
</style>