(function () {
  const profile = window.portfolioProfile;
  const $ = (selector) => document.querySelector(selector);

  const make = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  };

  const linkButton = (label, href, variant = "primary") => {
    const a = make("a", `button ${variant}`);
    a.href = href;
    a.textContent = label;
    if (href.startsWith("http")) {
      a.target = "_blank";
      a.rel = "noreferrer";
    }
    return a;
  };

  function renderHero() {
    $("#heroLocation").textContent = profile.location;
    $("#heroName").textContent = profile.name;
    $("#heroTitle").textContent = profile.headline;
    $("#heroSummary").textContent = `${profile.intro} ${profile.availability}`;
    $("#profileRole").textContent = profile.subtitle;
    $("#profileImage").src = profile.profileImage.src;
    $("#profileImage").alt = profile.profileImage.alt;

    const actions = $("#heroActions");
    actions.append(
      linkButton("Email", `mailto:${profile.contact.email}`, "primary"),
      linkButton("LinkedIn", profile.contact.linkedin, "secondary")
    );

    const grid = $("#signalGrid");
    profile.signal.forEach((item) => {
      const row = make("div", "signal-row");
      row.innerHTML = `
        <span>${item.label}</span>
        <strong>${item.level}%</strong>
        <i style="--level:${item.level}%"></i>
      `;
      grid.append(row);
    });
  }

  function renderStats() {
    const stats = $("#statsGrid");
    profile.stats.forEach((item) => {
      const card = make("article", "stat-card");
      card.innerHTML = `<strong>${item.value}</strong><span>${item.label}</span>`;
      stats.append(card);
    });
  }

  function renderSkills() {
    const groups = $("#skillGroups");
    profile.skillGroups.forEach((group) => {
      const article = make("article", "skill-card");
      const list = group.items.map((item) => `<li>${item}</li>`).join("");
      article.innerHTML = `<h3>${group.title}</h3><ul>${list}</ul>`;
      groups.append(article);
    });

    const chips = $("#toolChips");
    profile.tools.forEach((tool) => chips.append(make("span", "chip", tool)));
  }

  function renderExperience(activeIndex = 0) {
    const tabs = $("#timelineTabs");
    const detail = $("#experienceDetail");
    tabs.innerHTML = "";

    profile.experience.forEach((item, index) => {
      const button = make("button", "timeline-tab");
      button.type = "button";
      button.role = "tab";
      button.ariaSelected = String(index === activeIndex);
      button.innerHTML = `<strong>${item.company}</strong><span>${item.role}</span>`;
      button.addEventListener("click", () => renderExperience(index));
      tabs.append(button);
    });

    const current = profile.experience[activeIndex];
    const responsibilities = current.responsibilities.map((item) => `<li>${item}</li>`).join("");
    const achievements = current.achievements.map((item) => `<li>${item}</li>`).join("");
    detail.innerHTML = `
      <div class="detail-kicker">${current.period} / ${current.location}</div>
      <h3>${current.role}</h3>
      <p>${current.summary}</p>
      <div class="detail-columns">
        <div>
          <h4>Responsibilities</h4>
          <ul>${responsibilities}</ul>
        </div>
        <div>
          <h4>Achievements</h4>
          <ul>${achievements}</ul>
        </div>
      </div>
    `;
  }

  function renderProjectFilters(activeCategory = "All") {
    const filters = $("#projectFilters");
    const categories = ["All", ...new Set(profile.impact.map((item) => item.category))];
    filters.innerHTML = "";

    categories.forEach((category) => {
      const button = make("button", "filter-chip");
      button.type = "button";
      button.textContent = category;
      button.ariaPressed = String(category === activeCategory);
      button.addEventListener("click", () => {
        renderProjectFilters(category);
        renderImpact(category);
      });
      filters.append(button);
    });
  }

  function renderImpact(activeCategory = "All") {
    const grid = $("#impactGrid");
    grid.innerHTML = "";
    const items = activeCategory === "All"
      ? profile.impact
      : profile.impact.filter((item) => item.category === activeCategory);

    items.forEach((item, index) => {
      const article = make("article", "impact-card");
      article.style.setProperty("--index", String(index + 1).padStart(2, "0"));
      article.setAttribute("role", "button");
      article.setAttribute("tabindex", "0");
      article.setAttribute("aria-label", `View ${item.title} project details`);
      article.innerHTML = `
        <img src="${item.image}" alt="${item.title} project visual">
        <div class="impact-card-body">
          <span>${item.tag}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
          <div class="card-cta">View Project <span aria-hidden="true">→</span></div>
        </div>
      `;
      const navigate = () => {
        window.location.href = `./project.html?id=${item.id}`;
      };
      article.addEventListener("click", navigate);
      article.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); navigate(); }
      });
      grid.append(article);
    });

    setupTiltCards();
  }

  function renderEducation() {
    const list = $("#educationList");
    profile.education.forEach((item) => {
      const article = make("article", "education-card");
      article.innerHTML = `
        <h3>${item.school}</h3>
        <p>${item.degree}</p>
        <span>${item.period}</span>
      `;
      list.append(article);
    });

    const awardBanner = $("#awardBanner");
    awardBanner.innerHTML = "";
    profile.awards.forEach((award) => {
      const card = make("div", "award-card");
      card.innerHTML = `
        ${award.image ? `
        <div class="award-image-wrap">
          <img src="${award.image}" alt="${award.title} award certificate or photo" class="award-img">
        </div>` : ""}
        <div class="award-body">
          <span class="award-label">Honor &amp; Award</span>
          <strong class="award-title">${award.title}</strong>
          <p class="award-meta">${award.issuer}${award.year ? " · " + award.year : ""}</p>
        </div>
      `;
      awardBanner.append(card);
    });
  }

  function renderContact() {
    const actions = $("#contactActions");
    actions.append(
      linkButton(profile.contact.email, `mailto:${profile.contact.email}`, "primary"),
      linkButton(profile.contact.phone, `tel:${profile.contact.phone}`, "secondary"),
      linkButton("LinkedIn Profile", profile.contact.linkedin, "ghost")
    );
  }
function renderFooter() {
    const footer = make("footer", "site-footer");
    const currentYear = new Date().getFullYear();
    
    footer.innerHTML = `
      <div class="footer-inner">
        <p>&copy; ${currentYear} ${profile.name}. All Rights Reserved.</p>
        <p class="visitor-counter">👀 <span id="visitor-count">...</span></p>
        <p class="developer-credit">Designed & Built by <a href="${profile.contact.linkedin}" target="_blank" rel="noreferrer">${profile.name}</a></p>
      </div>
    `;
    
    $(".site-shell").append(footer);
    
    // Fetch and update visitor count
    updateVisitorCount();
}

async function updateVisitorCount() {
    const span = document.getElementById('visitor-count');
    if (!span) return;
    
    try {
        // Check if the 'visited' cookie exists
        const hasVisited = document.cookie
            .split('; ')
            .some(row => row.startsWith('visited=true'));

        let data;
        if (!hasVisited) {
            // First-time visitor → increment
            const res = await fetch('/api/counter', { method: 'POST' });
            data = await res.json();
            // Set cookie for 1 year
            document.cookie = 'visited=true; path=/; max-age=31536000';
        } else {
            // Returning visitor → just fetch the number
            const res = await fetch('/api/counter');
            data = await res.json();
        }

        // Format the number with commas (e.g., 1,234)
        span.textContent = data.count ? Number(data.count).toLocaleString() : '0';
    } catch (error) {
        console.error('Visitor counter error:', error);
        span.textContent = '?';
    }
}

  function setupTheme() {
    const button = $("#themeToggle");
    const stored = localStorage.getItem("portfolio-theme");
    if (stored === "light") document.body.classList.add("light-theme");

    button.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      localStorage.setItem(
        "portfolio-theme",
        document.body.classList.contains("light-theme") ? "light" : "dark"
      );
    });
  }

  function setupMobileMenu() {
    const toggle = $("#menuToggle");
    const nav = $("#mobileNav");
    if (!toggle || !nav) return;

    const open = () => {
      nav.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.querySelector("span").textContent = "✕";
      document.body.style.overflow = "hidden";
    };

    const close = () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.querySelector("span").textContent = "☰";
      document.body.style.overflow = "";
    };

    toggle.addEventListener("click", () => {
      nav.classList.contains("is-open") ? close() : open();
    });

    // Close when any nav link is tapped
    nav.querySelectorAll(".nav-close-link").forEach((link) => {
      link.addEventListener("click", close);
    });

    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  function setupCursorGlow() {
    window.addEventListener("pointermove", (event) => {
      document.body.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.body.style.setProperty("--cursor-y", `${event.clientY}px`);
    });
  }

  function setupTiltCards() {
    document.querySelectorAll(".impact-card").forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.setProperty("--tilt-x", `${(-y * 7).toFixed(2)}deg`);
        card.style.setProperty("--tilt-y", `${(x * 9).toFixed(2)}deg`);
      });
      card.addEventListener("pointerleave", () => {
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
      });
    });
  }

  function setupScrollReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.14 }
    );

    document.querySelectorAll(".section, .stat-card, .impact-card, .profile-card").forEach((node) => {
      node.classList.add("reveal");
      observer.observe(node);
    });
  }

  renderHero();
  renderStats();
  renderSkills();
  renderExperience();
  renderProjectFilters();
  renderImpact();
  renderEducation();
  renderContact();
  renderFooter();
  setupCursorGlow();
  setupTheme();
  setupMobileMenu();
  setupScrollReveal();
})();
