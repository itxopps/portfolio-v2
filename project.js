(function () {
  const profile = window.portfolioProfile;
  const $ = (sel) => document.querySelector(sel);

  /* ── helpers ─────────────────────────────────────────────────── */
  const make = (tag, className, text) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text !== undefined) el.textContent = text;
    return el;
  };

  /* ── read ?id= from URL ───────────────────────────────────────── */
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const project = profile.impact.find((p) => p.id === id);

  if (!project) {
    document.title = "Project not found | Muhammad Faisal";
    const main = $("#projectMain");
    if (main) {
      main.innerHTML = `
        <div style="padding:120px 24px;text-align:center;">
          <p style="color:var(--accent-3);font-weight:800;letter-spacing:.1em;text-transform:uppercase;font-size:.8rem">404</p>
          <h1 style="font-size:clamp(2rem,6vw,3.5rem);margin:12px 0 24px">Project not found</h1>
          <a href="./index.html#projects" class="button primary">Back to Projects</a>
        </div>`;
    }
    setupTheme();
    return;
  }

  /* ── page title ───────────────────────────────────────────────── */
  document.title = `${project.title} | Muhammad Faisal`;

  /* ── gallery ──────────────────────────────────────────────────── */
  // Build a combined list: thumbnail first (if not already in images), then extras
  const allImages = project.images && project.images.length
    ? project.images
    : [project.image];

  let activeIndex = 0;

  const mainImg = $("#galleryMainImg");
  const counter = $("#galleryCounter");
  const thumbsWrap = $("#galleryThumbs");
  const prevBtn = $("#galleryPrev");
  const nextBtn = $("#galleryNext");

  function setActive(index) {
    activeIndex = (index + allImages.length) % allImages.length;
    mainImg.src = allImages[activeIndex];
    mainImg.alt = `${project.title} — image ${activeIndex + 1}`;
    counter.textContent = `${activeIndex + 1} / ${allImages.length}`;

    thumbsWrap.querySelectorAll(".gallery-thumb").forEach((t, i) => {
      t.classList.toggle("is-active", i === activeIndex);
      t.setAttribute("aria-pressed", String(i === activeIndex));
    });
  }

  // Build thumbnails
  allImages.forEach((src, i) => {
    const btn = make("button", "gallery-thumb");
    btn.type = "button";
    btn.setAttribute("aria-label", `View image ${i + 1}`);
    btn.setAttribute("aria-pressed", "false");
    const img = document.createElement("img");
    img.src = src;
    img.alt = "";
    img.loading = "lazy";
    btn.append(img);
    btn.addEventListener("click", () => setActive(i));
    thumbsWrap.append(btn);
  });

  setActive(0);

  // Hide arrows if only one image
  if (allImages.length <= 1) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    counter.style.display = "none";
  } else {
    prevBtn.addEventListener("click", () => setActive(activeIndex - 1));
    nextBtn.addEventListener("click", () => setActive(activeIndex + 1));
  }

  // Swipe support for mobile
  let touchStartX = 0;
  mainImg.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  mainImg.addEventListener("touchend", (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) setActive(activeIndex + (diff > 0 ? 1 : -1));
  });

  // Keyboard left/right
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") setActive(activeIndex - 1);
    if (e.key === "ArrowRight") setActive(activeIndex + 1);
  });

  /* ── meta section ─────────────────────────────────────────────── */
  $("#metaTag").textContent = project.tag;
  $("#metaTitle").textContent = project.title;

  const metaFields = [
    { label: "Client",   value: project.client   },
    { label: "Location", value: project.location  },
    { label: "Period",   value: project.period    },
    { label: "Role",     value: project.role      },
  ];

  const metaGrid = $("#metaGrid");
  metaFields.forEach(({ label, value }) => {
    if (!value) return;
    const item = make("div", "meta-item");
    item.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
    metaGrid.append(item);
  });

  // Tech stack chips
  if (project.tech && project.tech.length) {
    const techStack = $("#techStack");
    const heading = make("p", "tech-label", "Tech & Tools");
    techStack.append(heading);
    const chips = make("div", "chips");
    project.tech.forEach((t) => chips.append(make("span", "chip", t)));
    techStack.append(chips);
  }

  /* ── overview + highlights ────────────────────────────────────── */
  $("#detailText").textContent = project.details || project.text;

  const list = $("#highlightsList");
  if (project.highlights && project.highlights.length) {
    project.highlights.forEach((h) => {
      const li = make("li");
      li.textContent = h;
      list.append(li);
    });
  } else {
    $("#projectHighlights").style.display = "none";
  }

  /* ── other projects ───────────────────────────────────────────── */
  const others = profile.impact.filter((p) => p.id !== id).slice(0, 3);
  const otherGrid = $("#otherProjectsGrid");

  others.forEach((p) => {
    const card = make("article", "other-card");
    card.innerHTML = `
      <img src="${p.image}" alt="${p.title}">
      <div class="other-card-body">
        <span>${p.tag}</span>
        <h3>${p.title}</h3>
        <p>${p.text}</p>
      </div>
    `;
    card.addEventListener("click", () => {
      window.location.href = `./project.html?id=${p.id}`;
    });
    card.style.cursor = "pointer";
    otherGrid.append(card);
  });

  if (others.length === 0) {
    $("#otherProjects").style.display = "none";
  }

  function renderProjectFooter() {
    const footer = make("footer", "site-footer");
    const currentYear = new Date().getFullYear();
    
    footer.innerHTML = `
      <div class="footer-inner">
        <p>&copy; ${currentYear} ${profile.name}. All Rights Reserved.</p>
        <p class="developer-credit">Designed & Built by <a href="${profile.contact.linkedin}" target="_blank" rel="noreferrer">${profile.name}</a></p>
      </div>
    `;
    
    $(".site-shell").append(footer);
  }
  
  renderProjectFooter();
  /* ── theme toggle ─────────────────────────────────────────────── */
  function setupTheme() {
    const button = $("#themeToggle");
    if (!button) return;
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

  /* ── mobile menu ──────────────────────────────────────────────── */
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
    nav.querySelectorAll(".nav-close-link").forEach((link) => link.addEventListener("click", close));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }

  setupTheme();
  setupMobileMenu();

  // Cursor glow (same as main site)
  window.addEventListener("pointermove", (e) => {
    document.body.style.setProperty("--cursor-x", `${e.clientX}px`);
    document.body.style.setProperty("--cursor-y", `${e.clientY}px`);
  });

})();
