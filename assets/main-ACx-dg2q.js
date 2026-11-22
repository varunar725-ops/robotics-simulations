import{r as E,R as m,E as f,H as S,a as A,I as D,b as $,c as T,d as L,e as g,S as O,f as u,T as w}from"./SimulationEngine-CiaZMQAs.js";function B(){const l=document.getElementById("app");if(!l)return;let o="atlas",n="lab",r="all";l.innerHTML=`
    ${E("home","./")}

    <main>
      <!-- HERO SECTION: Official BD Clean Aesthetic + Live 3D Multi-Robot Preview -->
      <section class="hero-section">
        <div class="container hero-grid">
          <div class="hero-copy">
            <div>
              <span class="eyebrow">Waltham, MA · 1992 – Nov 2026 Engineering Archive</span>
            </div>
            <h1 class="hero-headline">
              Changing Your Idea of <span class="accent">What Robots Can Do.</span>
            </h1>
            <p class="hero-lead">
              Explore interactive 3D kinematic simulations, switchable proving-ground environments, real-world field photography, and 34 years of Boston Dynamics breakthroughs—from Marc Raibert’s 1992 MIT Leg Lab spin-off and DARPA rough-terrain quadrupeds to the 2026 serial-production 56-DOF All-Electric Atlas, Gemini-powered Spot 5.2, and Stretch Gen 2.
            </p>

            <div class="hero-stats-row">
              <div class="stat-chip">
                <div class="stat-chip-val">7 Labs</div>
                <div class="stat-chip-label">Dedicated 3D Robot Pages</div>
              </div>
              <div class="stat-chip">
                <div class="stat-chip-val">32+</div>
                <div class="stat-chip-label">Simulated 3D Movements</div>
              </div>
              <div class="stat-chip">
                <div class="stat-chip-val">6 Worlds</div>
                <div class="stat-chip-label">Switchable Environments</div>
              </div>
              <div class="stat-chip">
                <div class="stat-chip-val">1992–26</div>
                <div class="stat-chip-label">Complete Innovation Log</div>
              </div>
            </div>

            <div class="hero-actions">
              <a href="#robots-directory" class="btn-primary">Explore Robot 3D Sub-Webpages →</a>
              <a href="#what-this-provides" class="btn-secondary">What This Portal Provides</a>
              <a href="#innovations" class="btn-secondary">1992–2026 Innovations</a>
            </div>
          </div>

          <!-- Interactive 3D Hero Stage -->
          <div class="viewport-shell home-stage">
            <div class="hud-top-bar">
              <div class="hud-badge-group">
                <div class="hud-pill">
                  <span class="status-led" id="home-status-led"></span>
                  <span id="home-stage-label">LIVE 3D // ELECTRIC ATLAS (56 DOF)</span>
                </div>
              </div>
              <div class="hud-controls-group">
                <button class="hud-btn" id="home-axes-btn" title="Toggle Joint XYZ Axes">Joint Axes</button>
                <button class="hud-btn shove-btn" id="home-shove-btn" title="Apply Lateral Disturbance">⚡ Shove Test</button>
                <a href="./robots/atlas.html" class="hud-btn active" id="home-open-subpage">Open Full Sub-Page ↗</a>
              </div>
            </div>

            <div class="hud-variant-bar" id="home-robot-tabs">
              ${m.map((e,a)=>`
                <button class="variant-btn ${a===0?"active":""}" data-robot="${e.id}">
                  ${e.shortName}
                </button>
              `).join("")}
            </div>

            <div class="canvas-mount" id="home-canvas-mount"></div>
            <div class="hud-hint">Drag to Orbit 3D · Scroll to Zoom · Right-Drag to Pan</div>

            <div class="env-bar">
              <div class="env-bar-top">
                <span class="env-label">Quick Environment Switcher (Available in Every Sub-Page)</span>
              </div>
              <div class="env-pills" id="home-env-pills">
                ${f.map(e=>`
                  <button class="env-btn ${e.id===n?"active":""}" data-env="${e.id}">
                    <span class="env-btn-name">${e.name}</span>
                    <span class="env-btn-meta">${e.shortMeta}</span>
                  </button>
                `).join("")}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- INTRODUCTION, REAL-LIFE ARCHIVAL PHOTOGRAPHY & WHAT THIS WEBSITE PROVIDES -->
      <section class="section" id="what-this-provides">
        <div class="container">
          <div class="section-header">
            <span class="eyebrow navy">Portal Introduction &amp; Field Photography</span>
            <h2 class="section-title">Introduction &amp; What This Portal Provides the Viewer</h2>
            <p class="section-desc">
              Founded in 1992 in Waltham, Massachusetts, Boston Dynamics transformed robotics from rigid, bolted-down factory cages into machines with animal-grade dynamic balance, compliant dexterity, and whole-body physical intelligence. Below, authentic field and Waltham R&amp;D photographs pair with an overview of everything you can explore inside this simulation portal:
            </p>
          </div>

          <!-- Niche Real-Life Photography Bento Grid (Click any photo to zoom) -->
          <div class="photo-bento-grid">
            ${S.map((e,a)=>`
              <figure
                class="photo-bento-item ${a===0?"featured":""}"
                data-lightbox-src="./${e.src}"
                data-lightbox-title="${e.title}"
                data-lightbox-caption="${e.caption}"
              >
                <img src="./${e.src}" alt="${e.title}" loading="lazy" />
                <figcaption class="photo-overlay">
                  <span class="photo-plate-tag">${e.plate}</span>
                  <h4>${e.title}</h4>
                  <p>${e.caption}</p>
                </figcaption>
              </figure>
            `).join("")}
          </div>

          <div class="guide-grid">
            <article class="guide-card">
              <span class="guide-num">CAPABILITY 01</span>
              <h3>Dedicated 3D Robot Sub-Webpages</h3>
              <p>
                Open seven dedicated sub-webpages covering Boston Dynamics’ complete commercial and historical fleet—<strong>Production Electric Atlas</strong>, <strong>Spot 5.2</strong>, <strong>Stretch Gen 2</strong>, <strong>Handle</strong>, <strong>BigDog &amp; LS3</strong>, <strong>Cheetah &amp; WildCat</strong>, and <strong>SandFlea &amp; RHex</strong>—complete with generational 3D hardware toggles and real field photography.
              </p>
            </article>

            <article class="guide-card">
              <span class="guide-num">CAPABILITY 02</span>
              <h3>Signature Special Movements in 3D</h3>
              <p>
                Trigger each robot’s iconic stunts in interactive 3D: Electric Atlas’s 360° reverse-knee floor get-up &amp; standing backflip, Spot’s world-locked "chicken-head" arm stabilization &amp; dance, Stretch’s 1,000-case/hr multipick unloading, Cheetah’s articulated-spine gallop, and SandFlea’s 30-ft CO₂ rooftop launch.
              </p>
            </article>

            <article class="guide-card">
              <span class="guide-num">CAPABILITY 03</span>
              <h3>Live 3D Environment Switcher</h3>
              <p>
                Relocate any robot across six engineered 3D worlds—<strong>Waltham R&amp;D Lab</strong> (with its iconic blue gym floor), <strong>Automotive Factory</strong>, <strong>Rocky Mars Trail</strong>, <strong>Arctic Sheet Ice</strong>, <strong>Logistics Dock</strong>, and <strong>Construction Site</strong>—adapting terrain elevation, lighting, and friction.
              </p>
            </article>

            <article class="guide-card">
              <span class="guide-num">CAPABILITY 04</span>
              <h3>Impulse "Shove Test" &amp; Kinematic HUD</h3>
              <p>
                Fire Boston Dynamics’ famous lateral push-recovery test with a live 3D force vector and watch capture-point balance recovery unfold—sliding further on low-grip Arctic ice (μ=0.28)! Inspect RGB joint coordinate axes, Center-of-Mass plumb lines, 0.25x slow-motion, and live actuator telemetry.
              </p>
            </article>

            <article class="guide-card">
              <span class="guide-num">CAPABILITY 05</span>
              <h3>Complete 1992–2026 Innovations Archive</h3>
              <p>
                Trace 34 years of milestones: DI-Guy naval simulations, RHex C-legs, BigDog ice reflexes, 3D-printed vascular hydraulic manifolds, online MPC parkour, TRI Large Behavior Models, CES 2026 Production Atlas, Spot 5.2 Gemini + MCP agentic Orbit, Atlas’s 13-DOF hand, and Stretch Gen 2.
              </p>
            </article>

            <article class="guide-card">
              <span class="guide-num">CAPABILITY 06</span>
              <h3>Deep Generational Improvements Analysis</h3>
              <p>
                Every sub-webpage pairs a thorough robot introduction and real-life generational photos with side-by-side comparison matrices and subsystem-by-subsystem breakdowns explaining <em>why</em> earlier versions hit limits and <em>how</em> Boston Dynamics engineered past them.
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- DEDICATED ROBOT SUB-WEBPAGES DIRECTORY WITH REAL PHOTOS -->
      <section class="section alt-bg" id="robots-directory">
        <div class="container">
          <div class="section-header">
            <span class="eyebrow">Interactive 3D Sub-Webpages</span>
            <h2 class="section-title">Fleet Directory: Launch a Robot 3D Simulation</h2>
            <p class="section-desc">
              Select any Boston Dynamics robot family below to open its dedicated sub-webpage featuring real-time 3D movement simulation, multi-environment switching, archival photography, introduction, and engineering improvements.
            </p>
          </div>

          <div class="robot-cards-grid">
            ${m.map(e=>{const a=A[e.id];return`
              <a href="./robots/${e.id}.html" class="robot-dir-card">
                <div class="robot-card-photo">
                  <img src="./${a.cardThumb}" alt="${e.name} real photograph" loading="lazy" />
                  <span class="robot-card-photo-badge">${e.era}</span>
                </div>

                <div class="robot-card-body">
                  <div>
                    <div class="robot-card-meta">${e.category}</div>
                    <h3 class="robot-card-title">${e.name}</h3>
                    <div class="robot-card-tagline">${e.tagline}</div>
                    <p class="robot-card-summary">${e.cardSummary}</p>
                  </div>

                  <div>
                    <div class="robot-spec-mini" style="margin-bottom: 14px;">
                      <div>
                        <span>Kinematics</span>
                        <strong>${e.miniSpecs.dof}</strong>
                      </div>
                      <div>
                        <span>Actuation</span>
                        <strong>${e.miniSpecs.actuation}</strong>
                      </div>
                      <div>
                        <span>Benchmark</span>
                        <strong>${e.miniSpecs.reach}</strong>
                      </div>
                    </div>
                    <div class="robot-card-cta">
                      <span>Open ${e.shortName} 3D Simulation &amp; Improvements</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </a>
            `}).join("")}
          </div>
        </div>
      </section>

      <!-- COMPLETE 1992-2026 BOSTON DYNAMICS INNOVATIONS TIMELINE -->
      <section class="section" id="innovations">
        <div class="container">
          <div class="section-header">
            <span class="eyebrow navy">34 Years of Breakthroughs</span>
            <h2 class="section-title">All Boston Dynamics Innovations Over the Years (1992 – 2026)</h2>
            <p class="section-desc">
              Filter by engineering discipline to trace every hardware, control-theory, manipulation, and Physical AI innovation from MIT Leg Lab dynamic hoppers to serial-production factory humanoids. Click any archival photo to inspect full-size.
            </p>
          </div>

          <div class="filter-bar" id="innovation-filters">
            ${D.map(e=>`
              <button class="filter-chip ${e.id===r?"active":""}" data-cat="${e.id}">
                ${e.label}
              </button>
            `).join("")}
          </div>

          <div class="timeline-grid" id="timeline-grid"></div>
        </div>
      </section>

      <!-- 6 CORE ENGINEERING PILLARS -->
      <section class="section alt-bg" id="pillars" style="border-bottom: none;">
        <div class="container">
          <div class="section-header">
            <span class="eyebrow">Core Engineering Architecture</span>
            <h2 class="section-title">Six Technical Pillars Behind Boston Dynamics’ Mastery</h2>
            <p class="section-desc">
              Across quadrupeds, bipeds, hexapods, and warehouse manipulators, six foundational engineering shifts explain how Boston Dynamics consistently stayed decades ahead of conventional robotics.
            </p>
          </div>

          <div class="pillars-grid">
            ${$.map(e=>`
              <article class="pillar-card">
                <h3>${e.title}</h3>
                <div class="pillar-evolution">${e.evolution}</div>
                <p>${e.body}</p>
              </article>
            `).join("")}
          </div>
        </div>
      </section>
    </main>

    ${T("./")}
  `,L();const b=document.getElementById("timeline-grid");function c(e){const a=e==="all"?u:u.filter(t=>t.category===e);b.innerHTML=a.map(t=>{const i=w[t.year];return`
        <article class="timeline-card">
          ${i?`
            <div
              class="timeline-photo-strip"
              data-lightbox-src="./${i}"
              data-lightbox-title="${t.year} · ${t.title}"
              data-lightbox-caption="${t.description}"
            >
              <img src="./${i}" alt="${t.title}" loading="lazy" />
            </div>
          `:""}
          <div class="timeline-inner">
            <div class="timeline-top">
              <span class="timeline-year">${t.year}</span>
              <span class="timeline-cat">${t.categoryLabel}</span>
            </div>
            <h3 class="timeline-title">${t.title}</h3>
            <p class="timeline-desc">${t.description}</p>
            <div class="timeline-impact">
              <strong>Key Impact:</strong> ${t.impact}
            </div>
          </div>
        </article>
      `}).join("")}c("all"),document.getElementById("innovation-filters").addEventListener("click",e=>{const a=e.target.closest(".filter-chip");a&&(r=a.dataset.cat,document.querySelectorAll("#innovation-filters .filter-chip").forEach(t=>t.classList.toggle("active",t===a)),c(r))});const y=document.getElementById("home-canvas-mount"),I=document.getElementById("home-stage-label"),d=document.getElementById("home-open-subpage"),p=document.getElementById("home-status-led"),v=g[o],s=new O(y,{robotId:o,variantId:v.variants[0].id,movementId:v.movements[0].id,envId:n,onTelemetry:e=>{p&&p.classList.toggle("recovering",e.recovering)}});document.getElementById("home-robot-tabs").addEventListener("click",e=>{const a=e.target.closest(".variant-btn");if(!a)return;const t=a.dataset.robot,i=g[t];i&&(o=t,document.querySelectorAll("#home-robot-tabs .variant-btn").forEach(h=>h.classList.toggle("active",h===a)),s.setRobot(t,i.variants[0].id,i.movements[0].id),s.setCameraPreset("orbit"),I.textContent=`LIVE 3D // ${i.name.toUpperCase()}`,d.href=`./robots/${t}.html`,d.textContent=`Open ${i.shortName} Sub-Page ↗`)}),document.getElementById("home-env-pills").addEventListener("click",e=>{const a=e.target.closest(".env-btn");a&&(n=a.dataset.env,document.querySelectorAll("#home-env-pills .env-btn").forEach(t=>t.classList.toggle("active",t===a)),s.setEnvironment(n))}),document.getElementById("home-axes-btn").addEventListener("click",e=>{const a=s.toggleJointAxes();e.currentTarget.classList.toggle("active",a)}),document.getElementById("home-shove-btn").addEventListener("click",()=>{s.triggerImpulseShove()})}B();
