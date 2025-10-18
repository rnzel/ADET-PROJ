/**
* Template Name: Medilab
* Template URL: https://bootstrapmade.com/medilab-free-medical-bootstrap-theme/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();

// ================================
// Genome Explorer + Trait Visualization
// ================================

const chromosomeData = {
  1: [
    { name: 'Eye Color', value: 75, description: 'Brown/Hazel eye color tendency', gene: 'OCA2, HERC2' },
    { name: 'Height Variation', value: 60, description: 'Moderate height genetic markers', gene: 'HMGA2' },
    { name: 'Hair Texture', value: 85, description: 'Straight hair tendency', gene: 'TCHH' },
    { name: 'Blood Type', value: 90, description: 'ABO blood group determination', gene: 'ABO' }
  ],
  2: [
    { name: 'Lactose Tolerance', value: 90, description: 'High lactose digestion capability', gene: 'LCT' },
    { name: 'BMI Regulation', value: 55, description: 'Moderate weight regulation', gene: 'TMEM18' },
    { name: 'Hair Color', value: 70, description: 'Brown hair pigmentation', gene: 'MC1R' }
  ],
  3: [
    { name: 'Taste Perception', value: 70, description: 'Bitter taste sensitivity', gene: 'TAS2R38' },
    { name: 'Pain Sensitivity', value: 45, description: 'Moderate pain threshold', gene: 'SCN9A' },
    { name: 'Skin Tone', value: 65, description: 'Medium melanin production', gene: 'SLC24A5' }
  ],
  4: [
    { name: 'Metabolism Rate', value: 60, description: 'Moderate basal metabolism', gene: 'PRKAG2' },
    { name: 'Hair Curl', value: 55, description: 'Wavy hair tendency', gene: 'EDAR' }
  ],
  5: [
    { name: 'Sleep Duration', value: 70, description: 'Average sleep requirements', gene: 'ABCC9' },
    { name: 'Stress Response', value: 50, description: 'Moderate stress resilience', gene: 'FKBP5' }
  ],
  6: [
    { name: 'Immune Function', value: 80, description: 'Strong immune markers', gene: 'HLA-A, HLA-B' }
  ],
  7: [
    { name: 'Athletic Performance', value: 80, description: 'Endurance capability markers', gene: 'ACTN3' },
    { name: 'Muscle Composition', value: 65, description: 'Fast-twitch muscle fiber', gene: 'ACTN3' },
    { name: 'Vitamin D Processing', value: 70, description: 'Normal vitamin D metabolism', gene: 'CYP2R1' }
  ],
  8: [
    { name: 'Muscle Strength', value: 65, description: 'Moderate fast-twitch fibers', gene: 'MYBPC1' }
  ],
  9: [
    { name: 'Cholesterol Regulation', value: 70, description: 'Normal lipid metabolism', gene: 'LDLR' }
  ],
  10: [
    { name: 'Cognitive Speed', value: 75, description: 'Moderate learning speed', gene: 'COMT' }
  ],
  11: [
    { name: 'Insulin Response', value: 75, description: 'Normal glucose metabolism', gene: 'INS' },
    { name: 'Circadian Rhythm', value: 60, description: 'Morning chronotype tendency', gene: 'CLOCK' },
    { name: 'Hemoglobin Production', value: 85, description: 'Normal oxygen transport', gene: 'HBB' }
  ],
  12: [
    { name: 'Bone Density', value: 60, description: 'Average bone strength', gene: 'COL1A1' }
  ],
  13: [
    { name: 'Eye Shape', value: 70, description: 'Almond/round eye tendency', gene: 'GJA1' }
  ],
  14: [
    { name: 'Pain Tolerance', value: 50, description: 'Average pain sensitivity', gene: 'OPRM1' }
  ],
  15: [
    { name: 'Skin Pigmentation', value: 70, description: 'Moderate melanin production', gene: 'OCA2' },
    { name: 'UV Sensitivity', value: 55, description: 'Moderate UV protection', gene: 'MC1R' }
  ],
  16: [
    { name: 'Weight Tendency', value: 65, description: 'Moderate BMI markers', gene: 'FTO' }
  ],
  17: [
    { name: 'Hair Loss Risk', value: 55, description: 'Moderate male/female pattern hair loss risk', gene: 'AR' }
  ],
  18: [
    { name: 'Vitamin B12 Processing', value: 60, description: 'Normal B12 metabolism', gene: 'FUT2' }
  ],
  19: [
    { name: 'Memory Performance', value: 85, description: 'Strong memory formation', gene: 'APOE' },
    { name: 'Learning Speed', value: 78, description: 'Fast learning capability', gene: 'KIBRA' }
  ],
  20: [
    { name: 'Blood Pressure Regulation', value: 65, description: 'Moderate hypertension risk', gene: 'ACE' }
  ],
  21: [
    { name: 'Immune Response', value: 82, description: 'Robust immune markers', gene: 'IFNAR' },
    { name: 'Inflammation Control', value: 50, description: 'Balanced inflammatory response', gene: 'IFNAR' }
  ],
  X: [
    { name: 'Color Vision', value: 95, description: 'Full color perception', gene: 'OPN1MW' },
    { name: 'Blood Clotting', value: 90, description: 'Normal clotting factors', gene: 'F8' }
  ]
};

let currentTraitCount = 0;

function loadChromosome(chr, element) {
  document.querySelectorAll('.modern-chr-btn').forEach(btn => btn.classList.remove('active'));
  if (element) element.classList.add('active');

  document.getElementById('chromosomeTitle').textContent = `Chromosome ${chr} - Genetic Traits`;

  const traits = chromosomeData[chr] || [];
  const container = document.getElementById('traitsList');

  document.getElementById('traitCount').textContent = `${traits.length} Traits`;
  container.innerHTML = '<div class="loading-skeleton"></div><div class="loading-skeleton"></div>';

  currentTraitCount = traits.length;
  updateTraitStats();

  setTimeout(() => {
    container.innerHTML = '';
    traits.forEach((trait, index) => {
      setTimeout(() => {
        const card = document.createElement('div');
        card.className = 'modern-trait-card';
        card.style.opacity = '0';
        card.innerHTML = `
          <div class="trait-header">
            <div class="trait-info">
              <h6>${trait.name}</h6>
              <p>${trait.description}</p>
            </div>
            <div class="trait-percentage-badge">${trait.value}%</div>
          </div>
          <div class="modern-progress">
            <div class="modern-progress-bar" style="width: 0%"></div>
          </div>
          <span class="gene-badge"><i class="fas fa-dna"></i> ${trait.gene}</span>
        `;
        container.appendChild(card);

        setTimeout(() => {
          card.style.transition = 'opacity 0.4s';
          card.style.opacity = '1';
          const bar = card.querySelector('.modern-progress-bar');
          setTimeout(() => bar.style.width = trait.value + '%', 100);
        }, 50);
      }, index * 120);
    });
  }, 600);
}

function updateTraitStats() {
  const stat = document.getElementById('statTraits');
  let count = 0;
  const interval = setInterval(() => {
    if (count >= currentTraitCount) {
      clearInterval(interval);
      return;
    }
    stat.textContent = ++count;
  }, 60);
}

// ================================
// Risk Assessment Functions
// ================================
function calculateRisk(age, gender, familyHistory, lifestyle) {
  let risks = {
    cardiovascular: { base: 15, name: 'Cardiovascular Disease' },
    diabetes: { base: 12, name: 'Type 2 Diabetes' },
    cancer: { base: 20, name: 'Various Cancers' },
    alzheimers: { base: 8, name: "Alzheimer's Disease" },
    osteoporosis: { base: 10, name: 'Osteoporosis' }
  };

  // Age factor
  Object.keys(risks).forEach(condition => {
    if (age > 60) risks[condition].base += 15;
    else if (age > 50) risks[condition].base += 10;
    else if (age > 40) risks[condition].base += 5;
  });

  // Family history
  if (familyHistory === 'extensive') {
    risks.cardiovascular.base += 25;
    risks.diabetes.base += 30;
    risks.cancer.base += 20;
    risks.alzheimers.base += 35;
  } else if (familyHistory === 'moderate') {
    risks.cardiovascular.base += 15;
    risks.diabetes.base += 18;
    risks.cancer.base += 12;
    risks.alzheimers.base += 20;
  }

  // Lifestyle
  if (lifestyle === 'poor') {
    risks.cardiovascular.base += 20;
    risks.diabetes.base += 25;
    risks.cancer.base += 15;
  } else if (lifestyle === 'healthy') {
    risks.cardiovascular.base -= 10;
    risks.diabetes.base -= 12;
    risks.cancer.base -= 8;
  }

  // Gender adjustments
  if (gender === 'male') {
    risks.cardiovascular.base += 8;
    risks.cancer.base += 5;
  } else {
    risks.osteoporosis.base += 15;
    risks.alzheimers.base += 5;
  }

  // Clamp risk values
  Object.keys(risks).forEach(condition => {
    risks[condition].base = Math.min(Math.max(risks[condition].base, 5), 85);
  });

  displayRiskResults(risks);
}

function displayRiskResults(conditions) {
  const resultDiv = document.getElementById('riskResult');
  const categoriesDiv = document.getElementById('riskCategories');
  const markersDiv = document.getElementById('geneticMarkers');
  const recsDiv = document.getElementById('recommendations');

  // Display risk categories
  categoriesDiv.innerHTML = '';
  Object.keys(conditions).forEach(key => {
    const condition = conditions[key];
    const risk = condition.base;
    let riskClass = risk < 30 ? 'low' : risk < 55 ? 'medium' : 'high';
    let riskText = risk < 30 ? 'Low Risk' : risk < 55 ? 'Moderate Risk' : 'Elevated Risk';

    const card = document.createElement('div');
    card.className = `risk-category-card ${riskClass}`;
    card.innerHTML = `
      <h5>${condition.name}</h5>
      <div class="risk-value risk-${riskClass}">${risk}%</div>
      <div class="risk-label">${riskText}</div>
    `;
    categoriesDiv.appendChild(card);
  });

  // Genetic markers
  const markers = [
    { gene: 'APOE-ε4', status: 'Not Detected', type: 'positive', description: 'Alzheimer\'s protective variant' },
    { gene: 'BRCA1/2', status: 'Wild Type', type: 'positive', description: 'Normal tumor suppressor' },
    { gene: 'FTO rs9939609', status: 'Heterozygous', type: 'neutral', description: 'Moderate BMI impact' },
    { gene: 'TCF7L2', status: 'Risk Allele', type: 'negative', description: 'Increased T2D susceptibility' },
    { gene: 'LPA', status: 'Elevated', type: 'negative', description: 'Cardiovascular risk marker' }
  ];

  markersDiv.innerHTML = '';
  markers.forEach(marker => {
    const item = document.createElement('div');
    item.className = 'marker-item';
    item.innerHTML = `
      <div>
        <strong>${marker.gene}</strong>
        <div style="font-size: 12px; color: #64748b;">${marker.description}</div>
      </div>
      <span class="marker-badge ${marker.type}">${marker.status}</span>
    `;
    markersDiv.appendChild(item);
  });

  // Recommendations
  const recommendations = [
    'Consultation with genetic counselor for comprehensive analysis',
    'Annual cardiovascular screening including lipid panel and ECG',
    'Lifestyle modification: Mediterranean diet, 150min/week exercise',
    'Consider polygenic risk score testing for refined assessment',
    'Regular monitoring of glucose levels and HbA1c every 6 months',
    'Pharmacogenomic testing for personalized medication selection',
    'Family cascade screening for first-degree relatives'
  ];

  recsDiv.innerHTML = '';
  recommendations.forEach(rec => {
    const li = document.createElement('li');
    li.innerHTML = `<i class="bi bi-check-circle-fill me-2" style="color: #10b981;"></i>${rec}`;
    recsDiv.appendChild(li);
  });

  resultDiv.style.display = 'block';
}

// ================================
// DOM Events
// ================================
document.addEventListener('DOMContentLoaded', function() {
  // Load first chromosome by default
  const firstBtn = document.querySelector('.modern-chr-btn.active');
  if (firstBtn) loadChromosome(1, firstBtn);

  // Risk form submit
  const riskForm = document.getElementById('riskForm');
  if (riskForm) {
    riskForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const age = parseInt(document.getElementById('age').value);
      const gender = document.getElementById('gender').value;
      const familyHistory = document.getElementById('familyHistory').value;
      const lifestyle = document.getElementById('lifestyle').value;

      calculateRisk(age, gender, familyHistory, lifestyle);
    });
  }
});


document.getElementById("riskForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const values = [
    document.getElementById("q1").value,
    document.getElementById("q2").value,
    document.getElementById("q3").value,
    document.getElementById("q4").value,
    document.getElementById("q5").value
  ];

  // Check for unanswered questions
  if (values.includes("")) {
    alert("Please answer all questions before submitting.");
    return;
  }

  // Assign score based on risk level
  let score = 0;
  values.forEach(v => {
    if (v === "high") score += 3;
    else if (v === "moderate") score += 2;
    else score += 1;
  });

  // Determine risk category
  let resultText = "";
  let riskClass = "";

  if (score <= 7) {
    resultText = "Low Risk — Your responses suggest a healthy genetic and lifestyle profile. Continue maintaining your good habits.";
    riskClass = "low-risk";
  } else if (score <= 11) {
    resultText = "Moderate Risk — There are a few genetic or lifestyle factors that may increase your disease risk. Regular checkups are recommended.";
    riskClass = "moderate-risk";
  } else {
    resultText = "High Risk — Your results indicate multiple risk factors that could increase your genetic disease likelihood. It’s best to seek professional genetic counseling.";
    riskClass = "high-risk";
  }

  // Display results dynamically
  const resultElement = document.getElementById("resultText");
  resultElement.innerHTML = resultText;
  resultElement.className = riskClass;

  // Show recommendation link
  document.getElementById("recommendation").style.display = "block";
});


let modalChartInstance = null;

// Case data with unique chart types and data
const caseData = {
  1: { 
    title: "Whole-Genome Sequencing: Population Cohort A", 
    desc: "Insights on population-level genetic diversity. Data shows variation frequencies.", 
    type: "bar",
    data: { labels: ["Gene A", "Gene B", "Gene C"], values: [40, 35, 25] }
  },
  2: { 
    title: "CRISPR Knockout Screen in Cell Line X", 
    desc: "Gene knockout efficiency rates in the CRISPR screening process.", 
    type: "line",
    data: { labels: ["Trial 1", "Trial 2", "Trial 3"], values: [20, 50, 30] }
  },
  3: { 
    title: "Pharmacogenomics: Drug Response Panel", 
    desc: "Profiling genetic influence on drug metabolism among patients.", 
    type: "doughnut",
    data: { labels: ["Low Response", "Moderate", "High Response"], values: [15, 60, 25] }
  }
};

function openCaseModal(caseId) {
  const modalEl = document.getElementById("caseModal");
  const modal = new bootstrap.Modal(modalEl);
  const ctx = document.getElementById("modalChart").getContext("2d");
  const study = caseData[caseId];

  document.getElementById("caseTitle").innerText = study.title;
  document.getElementById("caseDescription").innerText = study.desc;

  modal.show();

  modalEl.addEventListener('shown.bs.modal', function () {
    if (modalChartInstance) modalChartInstance.destroy();

    modalChartInstance = new Chart(ctx, {
      type: study.type,
      data: {
        labels: study.data.labels,
        datasets: [{
          label: "Data Insight",
          data: study.data.values,
          backgroundColor: ["#3a3df2", "#00c896", "#ff4f4f"],
          borderColor: "#bbb",
          borderWidth: 1.5,
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: "#fff" } }
        },
        scales: {
          x: { ticks: { color: "#ddd" }, grid: { color: "#333" } },
          y: { ticks: { color: "#ddd" }, grid: { color: "#333" }, beginAtZero: true }
        }
      }
    });
  }, { once: true });
}


// ================================
// Light Mode
// ================================

  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Load theme from localStorage
  if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    themeToggle.innerHTML = '<i class="bi bi-sun"></i>';
  }

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
      themeToggle.innerHTML = '<i class="bi bi-sun"></i>';
      localStorage.setItem('theme', 'light');
    } else {
      themeToggle.innerHTML = '<i class="bi bi-moon"></i>';
      localStorage.setItem('theme', 'dark');
    }
  });
