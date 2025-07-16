<script lang="ts">
  import { scrollAnimation } from './animations';
</script>

<section class="section" use:scrollAnimation={{ animation: 'fadeIn', delay: 200 }}>
  <h2 use:scrollAnimation={{ animation: 'slideUp', delay: 100 }}>Relevant Experience</h2>
  
  <div class="item" use:scrollAnimation={{ animation: 'slideLeft', delay: 300 }}>
    <div class="item-header">
      <div>
        <div class="item-title">AI/ML Software Engineering Intern</div>
        <div class="item-org">Amazon Web Services (AWS)</div>
      </div>
      <div class="item-right">
        <div class="item-location">New York, NY</div>
        <div class="item-date">May 2025 - Present</div>
      </div>
    </div>
    <div class="item-description">
      <ul>
        <li>Built an MCP-compatible package leveraging AWS Bedrock frontier LLMs on EC2/S3/Lambda to analyze enterprise AI metrics, reducing median query latency by 30% (p50: 120ms → 84ms) and supporting 10k+ weekly requests with 99.9% uptime.</li>
        <li>Engineered a high-throughput metrics pipeline processing 300k+ CloudWatch datapoints/day using Apache Kafka and TimescaleDB, computing tm99 tail-risk thresholds across 5 services and flagging outliers with 95% precision, 92% recall.</li>
        <li>Developed a Python + Lambda CLI that auto-generates Markdown dashboards and LLM root-cause analysis in &lt;5s (4.3s p95), reducing MTTR by 40% for production incidents. System processes 2TB+ logs daily with sub-second query performance.</li>
      </ul>
    </div>
  </div>

  <div class="item" use:scrollAnimation={{ animation: 'slideLeft', delay: 400 }}>
    <div class="item-header">
      <div>
        <div class="item-title">Deep Learning Researcher</div>
        <div class="item-org">Massachusetts General Hospital & Harvard Medical School</div>
      </div>
      <div class="item-right">
        <div class="item-location">Boston, MA</div>
        <div class="item-date">January 2024 - August 2024</div>
      </div>
    </div>
    <div class="item-description">
      <ul>
        <li>Designed a Vision Transformer (ViT) in PyTorch with 85M parameters to model complex dependencies in medical imaging data, achieving 0.912 AUROC (5% improvement over ResNet-50 baseline) on 50k+ patient scans with training time reduced by 40% using mixed precision.</li>
        <li>Built a RAG system using Sentence-BERT embeddings and FAISS indexing to extract structured clinical insights from 2M+ medical documents, improving F1 score from 0.31 (human baseline) to 0.94 on entity extraction tasks with 100ms average query latency.</li>
      </ul>
    </div>
  </div>

  <div class="item" use:scrollAnimation={{ animation: 'slideLeft', delay: 500 }}>
    <div class="item-header">
      <div>
        <div class="item-title">Graduate TA – Evolutionary Dynamics & Game Theory</div>
        <div class="item-org">Harvard University (Prof. Martin Nowak)</div>
      </div>
      <div class="item-right">
        <div class="item-location">Cambridge, MA</div>
        <div class="item-date">February 2023 - May 2024</div>
      </div>
    </div>
    <div class="item-description">
      <ul>
        <li>Co-instructed the graduate course on mathematical game theory and stochastic processes; modeled multi-agent systems to analyze emergent properties of competing language evolution strategies.</li>
      </ul>
    </div>
  </div>

  <div class="item" use:scrollAnimation={{ animation: 'slideLeft', delay: 600 }}>
    <div class="item-header">
      <div>
        <div class="item-title">Astrophysics Data Scientist</div>
        <div class="item-org">Niels Bohr Institute (Prof. Charles Steinhardt)</div>
      </div>
      <div class="item-right">
        <div class="item-location">Copenhagen, Denmark</div>
        <div class="item-date">January 2023 - September 2023</div>
      </div>
    </div>
    <div class="item-description">
      <ul>
        <li>Built a statistical Initial Mass Function pipeline to detect anomalous signals in noisy JWST photometry data, identifying 10+ previously unobserved ultra-high redshift galaxy candidates.</li>
      </ul>
    </div>
  </div>
</section>