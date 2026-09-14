document.addEventListener('DOMContentLoaded', () => {

  /* ---------- LOADER ---------- */
  const loader = document.getElementById('loader');
  const loaderFill = document.getElementById('loaderFill');
  let progress = 0;
  const loadTimer = setInterval(() => {
    progress += Math.random() * 22;
    if (progress >= 100) {
      progress = 100;
      clearInterval(loadTimer);
      setTimeout(() => loader.classList.add('hidden'), 250);
    }
    loaderFill.style.width = progress + '%';
  }, 130);

  /* ---------- FOOTER YEAR ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- NAVBAR SCROLL STATE ---------- */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- MOBILE MENU ---------- */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  /* ---------- ACTIVE NAV LINK ON SCROLL ---------- */
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
  sections.forEach(s => spyObserver.observe(s));

  /* ---------- SCROLL REVEAL ---------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ---------- HERO STATS (kept in sync from data.js) ---------- */
  const dsaStatEl = document.getElementById('heroDsaStat');
  const hackathonStatEl = document.getElementById('heroHackathonStat');
  if (PORTFOLIO_DATA.heroStats) {
    if (dsaStatEl) dsaStatEl.textContent = PORTFOLIO_DATA.heroStats.dsaProblems;
    if (hackathonStatEl) hackathonStatEl.textContent = PORTFOLIO_DATA.heroStats.hackathons;
  }

  /* ---------- HERO ROLE TYPING EFFECT ---------- */
  const typingEl = document.getElementById('typingRole');
  const roles = (window.PORTFOLIO_DATA && PORTFOLIO_DATA.heroRoles) || ['Software Developer'];
  let roleIndex = 0, charIndex = 0, deleting = false;

  function typeLoop() {
    const current = roles[roleIndex];
    if (!deleting) {
      charIndex++;
      typingEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1400);
        return;
      }
    } else {
      charIndex--;
      typingEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(typeLoop, deleting ? 40 : 80);
  }
  typeLoop();

  /* ---------- RENDER: SKILLS ---------- */
  const skillsGrid = document.getElementById('skillsGrid');
  if (skillsGrid && PORTFOLIO_DATA.skills) {
    skillsGrid.innerHTML = PORTFOLIO_DATA.skills.map(cat => `
      <div class="skill-category">
        <h3>${cat.category}</h3>
        ${cat.items.map(item => `
          <div class="skill-item">
            <span class="skill-name">${item.name}</span>
          </div>
        `).join('')}
      </div>
    `).join('');
  }

  /* ---------- RENDER: PROJECTS ---------- */
  const projectsGrid = document.getElementById('projectsGrid');
  function renderProjects(filter = 'all') {
    const list = PORTFOLIO_DATA.projects.filter(p => filter === 'all' || p.category.includes(filter));
    projectsGrid.innerHTML = list.map(p => `
      <div class="project-card ${p.featured ? 'featured' : ''}">
        <div class="project-media">
          ${p.featured ? '<span class="featured-tag">Featured</span>' : ''}
          ${p.image
            ? `<img src="${p.image}" alt="${p.name} screenshot" loading="lazy" />`
            : `<span class="project-placeholder">📷 Add a screenshot for<br/>“${p.name}”</span>`}
        </div>
        <div class="project-body">
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <ul class="project-features">
            ${p.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
          <div class="tech-badges">
            ${p.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
          </div>
          <div class="project-links">
            <a href="${p.github}" target="_blank" class="btn btn-outline btn-sm">GitHub</a>
            ${p.demo ? `<a href="${p.demo}" target="_blank" class="btn btn-primary btn-sm">Live Demo</a>` : ''}
          </div>
        </div>
      </div>
    `).join('');
  }
  if (projectsGrid) renderProjects();

  document.getElementById('projectFilters')?.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll('#projectFilters .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  });

  /* ---------- RENDER: EDUCATION TIMELINE ---------- */
  const eduTimeline = document.getElementById('educationTimeline');
  if (eduTimeline && PORTFOLIO_DATA.education) {
    eduTimeline.innerHTML = PORTFOLIO_DATA.education.map(e => `
      <div class="timeline-item reveal">
        <span class="timeline-dot"></span>
        <p class="timeline-meta">${e.year}</p>
        <h3>${e.degree}</h3>
        <p>${e.school} — ${e.grade}</p>
        <p>${e.note}</p>
      </div>
    `).join('');
    eduTimeline.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  }

  /* ---------- RENDER: EXPERIENCE ---------- */
    const experienceTimeline = document.getElementById('experienceTimeline');
  if (experienceTimeline && PORTFOLIO_DATA.experience) {
    experienceTimeline.innerHTML = PORTFOLIO_DATA.experience.map(e => `
      <div class="timeline-item reveal">
        <span class="timeline-dot"></span>
        <div class="timeline-row">
          <div class="timeline-text">
            <p class="timeline-meta">${e.year}</p>
            <h3>${e.role}</h3>
            <p>${e.organization}</p>
            <ul class="project-features">
              ${e.points.map(pt => `<li>${pt}</li>`).join('')}
            </ul>
          </div>
          ${e.image ? `<div class="timeline-image-wrap"><img src="${e.image}" alt="${e.role}" class="timeline-image" loading="lazy" /></div>` : ''}
        </div>
      </div>
    `).join('');
    experienceTimeline.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  }

  /* ---------- RENDER: DSA STATS ---------- */
  const dsaGrid = document.getElementById('dsaGrid');
  if (dsaGrid && PORTFOLIO_DATA.dsaStats) {
    dsaGrid.innerHTML = PORTFOLIO_DATA.dsaStats.map(s => `
      <div class="dsa-card reveal">
        <div class="dsa-value">${s.value}</div>
        <div class="dsa-label">${s.label}</div>
        <div class="dsa-note">${s.note}</div>
      </div>
    `).join('');
    dsaGrid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  }

  /* ---------- RENDER: JOURNEY MILESTONES ---------- */
  const journeyTimeline = document.getElementById('journeyTimeline');
  if (journeyTimeline && PORTFOLIO_DATA.journeyMilestones) {
    journeyTimeline.innerHTML = PORTFOLIO_DATA.journeyMilestones.map(m => `
      <div class="journey-item reveal">
        <span class="journey-dot"></span>
        <h3>${m.title}</h3>
        <p>${m.desc}</p>
      </div>
    `).join('');
    journeyTimeline.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  }

  const careerGrid = document.getElementById("careerGrid");

if (careerGrid) {
  careerGrid.innerHTML = PORTFOLIO_DATA.careerHighlights
    .map((item) => `
      <article class="career-card reveal">

        <div class="career-image">
          ${
            item.image
              ? `<img src="${item.image}" alt="${item.title}">`
              : `<div class="career-placeholder">🏆</div>`
          }
        </div>

        <div class="career-content">

          <span class="career-type">
            ${item.type}
          </span>

          <h3>${item.title}</h3>

          <p class="career-org">
            ${item.organization} · ${item.year}
          </p>

          <p class="career-description">
            ${item.description}
          </p>

        </div>

      </article>
    `)
    .join("");
  careerGrid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

  /* ---------- RENDER: GALLERY ---------- */
  const galleryGrid = document.getElementById('galleryGrid');
  function renderGallery() {
    galleryGrid.innerHTML = PORTFOLIO_DATA.gallery.map((g, i) => `
      <div class="gallery-item reveal" data-category="${g.category}" data-index="${i}">
        <div class="gallery-thumb">
          ${g.img ? `<img src="${g.img}" alt="${g.caption}" loading="lazy" />` : `🖼️<br/>Add photo`}
        </div>
        <div class="gallery-caption">${g.caption}</div>
      </div>
    `).join('');
    galleryGrid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  }
  if (galleryGrid) renderGallery();

  document.getElementById('galleryFilters')?.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll('#galleryFilters .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.classList.toggle('hide', filter !== 'all' && item.dataset.category !== filter);
    });
  });

  /* ---------- LIGHTBOX ---------- */
  const lightbox = document.getElementById('lightbox');
  const lightboxContent = document.getElementById('lightboxContent');
  galleryGrid?.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (!item) return;
    const g = PORTFOLIO_DATA.gallery[item.dataset.index];
    lightboxContent.innerHTML = `
      <div class="gallery-thumb">${g.img ? `<img src="${g.img}" alt="${g.caption}" />` : '🖼️<br/>Add photo'}</div>
      <p style="margin-top:16px; font-weight:600;">${g.caption}</p>
    `;
    lightbox.classList.add('open');
  });
  document.getElementById('lightboxClose').addEventListener('click', () => lightbox.classList.remove('open'));
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('open'); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') lightbox.classList.remove('open'); });

/* ---------- RENDER: CERTIFICATES & ACHIEVEMENTS ---------- */
const achievementsGrid = document.getElementById('achievementsGrid');

if (achievementsGrid && PORTFOLIO_DATA.certificates) {
  achievementsGrid.innerHTML = PORTFOLIO_DATA.certificates.map(c => `
    <div class="achievement-card reveal">

      <div class="achievement-image">
        ${
          c.image
            ? `<img src="${c.image}" alt="${c.title}" loading="lazy" />`
            : `<div class="achievement-placeholder">🏆</div>`
        }
      </div>

      <div class="achievement-content">
        <span class="career-type">${c.type}</span>
        <h3>${c.title}</h3>
        <p>${c.organization} • ${c.date}</p>
        <p>${c.description}</p>
      </div>

    </div>
  `).join('');

  achievementsGrid.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });
}
  /* ---------- CONTACT FORM VALIDATION ---------- */
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    const fields = [
      { id: 'cf-name', check: v => v.trim().length > 1, msg: 'Please enter your name.' },
      { id: 'cf-email', check: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), msg: 'Please enter a valid email.' },
      { id: 'cf-message', check: v => v.trim().length > 5, msg: 'Message is too short.' },
    ];
    fields.forEach(f => {
      const input = document.getElementById(f.id);
      const errorEl = document.querySelector(`.form-error[data-for="${f.id}"]`);
      const ok = f.check(input.value);
      input.closest('.form-row').classList.toggle('error', !ok);
      errorEl.textContent = ok ? '' : f.msg;
      if (!ok) valid = false;
    });

    if (valid) {
      status.textContent = "Thanks — I'll get back to you soon!";
      status.classList.add('success');
      form.reset();
      setTimeout(() => { status.textContent = ''; status.classList.remove('success'); }, 5000);
    } else {
      status.textContent = '';
      status.classList.remove('success');
    }
  });

});
