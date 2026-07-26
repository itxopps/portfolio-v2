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

  function renderCertificatesAndAwards() {
    const grid = $("#certificatesGrid");
    grid.innerHTML = "";

    profile.certificatesAndAwards.forEach((item, index) => {
      const card = make("article", "cert-card");
      card.style.setProperty("--index", String(index + 1).padStart(2, "0"));
      
      const imageHTML = item.image ? `
        <div class="cert-image-wrap">
          <img src="${item.image}" alt="${item.title} certificate" class="cert-img" loading="lazy">
        </div>
      ` : "";

      card.innerHTML = `
        ${imageHTML}
        <div class="cert-card-body">
          <span class="cert-type">${item.type}</span>
          <h3>${item.title}</h3>
          <strong class="cert-issuer">${item.issuer}</strong>
          <p>${item.description}</p>
        </div>
      `;
      grid.append(card);
    });
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
      
        <p class="developer-credit">Designed & Built for <a href="${profile.contact.linkedin}" target="_blank" rel="noreferrer">${profile.name}</a></p>
      </div>
    `;

    $(".site-shell").append(footer);
    // updateVisitorCount();
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

    nav.querySelectorAll(".nav-close-link").forEach((link) => {
      link.addEventListener("click", close);
    });

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

  function setupScrollReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.14 }
    );

    document
      .querySelectorAll(".section, .stat-card, .cert-card, .profile-card")
      .forEach((node) => {
        node.classList.add("reveal");
        observer.observe(node);
      });
  }

  renderHero();
  renderStats();
  renderSkills();
  renderExperience();
  renderCertificatesAndAwards();
  renderEducation();
  renderContact();
  renderFooter();
  setupCursorGlow();
  setupTheme();
  setupMobileMenu();
  setupScrollReveal();
})();