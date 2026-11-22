import{e as N,R as r,a as D,E as p,r as P,c as k,d as M,S as W}from"./SimulationEngine-CiaZMQAs.js";function H(){const b=document.getElementById("app");if(!b)return;const S=b.dataset.robotId||"atlas",e=N[S]||r[0],y=r.findIndex(t=>t.id===e.id),u=r[(y-1+r.length)%r.length],g=r[(y+1)%r.length],L=D[e.id]||{gallery:[]};let c=e.variants[0].id,n=e.movements[0],d=p.find(t=>t.id===e.defaultEnv)||p[0];b.innerHTML=`
    ${P(e.id,"../")}

    <main>
      <!-- SUB-WEBPAGE HEADER -->
      <section class="robot-page-header">
        <div class="container">
          <div class="breadcrumb">
            <a href="../index.html">← Main Portal &amp; Innovations</a>
            <span>/</span>
            <span>Robot 3D Sub-Webpages</span>
            <span>/</span>
            <strong style="color: var(--bd-pacific-blue);">${e.name}</strong>
          </div>

          <div class="robot-title-row">
            <div>
              <span class="eyebrow">${e.category} · ${e.era}</span>
              <h1 class="robot-main-title">${e.name}</h1>
              <p class="robot-subtitle">${e.tagline}</p>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              <a href="#real-photos" class="btn-secondary">Real-Life Photos</a>
              <a href="#introduction" class="btn-secondary">Introduction &amp; Specs</a>
              <a href="#improvements" class="btn-primary">Engineering Improvements ↓</a>
            </div>
          </div>
        </div>
      </section>

      <!-- INTERACTIVE 3D SIMULATION STUDIO -->
      <section class="section" id="simulator" style="padding-top: 16px;">
        <div class="container sim-studio">
          <!-- Left: 3D WebGL Viewport + Environment Switcher -->
          <div class="viewport-shell">
            <div class="hud-top-bar">
              <div class="hud-badge-group">
                <div class="hud-pill">
                  <span class="status-led" id="sim-status-led"></span>
                  <span id="sim-control-law">${n.controlLaw}</span>
                </div>
              </div>

              <div class="hud-controls-group">
                <button class="hud-btn cam-btn active" data-cam="orbit">3/4 Orbit</button>
                <button class="hud-btn cam-btn" data-cam="side">Side</button>
                <button class="hud-btn cam-btn" data-cam="front">Front</button>
                <button class="hud-btn cam-btn" data-cam="top">Top CoM</button>
                <button class="hud-btn" id="btn-axes">Joint Axes</button>
                <button class="hud-btn active" id="btn-com">CoM Vector</button>
                <button class="hud-btn" id="btn-wire">Wireframe</button>
                <button class="hud-btn shove-btn" id="btn-shove">⚡ Impulse Shove</button>
              </div>
            </div>

            <!-- Hardware Generation Variant Switcher -->
            <div class="hud-variant-bar" id="variant-switcher">
              ${e.variants.map(t=>`
                <button class="variant-btn ${t.id===c?"active":""}" data-variant="${t.id}">
                  ${t.label}
                </button>
              `).join("")}
            </div>

            <div class="canvas-mount" id="robot-canvas-mount"></div>

            <div class="hud-toast" id="env-toast">
              <strong>${d.name}:</strong>
              <span>${d.description}</span>
            </div>
            <div class="hud-hint">Drag to Orbit · Scroll to Zoom · Right-Drag to Pan</div>

            <!-- 6-Environment Switcher & Playback Speed Bar -->
            <div class="env-bar">
              <div class="env-bar-top">
                <span class="env-label">Change 3D Simulation Environment (Live Terrain &amp; Friction)</span>
                <div class="sim-playback-controls" id="speed-controls">
                  <button class="speed-pill" id="btn-pause">⏸ Pause</button>
                  <button class="speed-pill" data-speed="0.25">0.25x Slow</button>
                  <button class="speed-pill" data-speed="0.5">0.5x</button>
                  <button class="speed-pill active" data-speed="1">1.0x Real</button>
                  <button class="speed-pill" data-speed="1.6">1.6x Fast</button>
                </div>
              </div>

              <div class="env-pills" id="env-switcher">
                ${p.map(t=>`
                  <button class="env-btn ${t.id===d.id?"active":""}" data-env="${t.id}">
                    <span class="env-btn-name">${t.name}</span>
                    <span class="env-btn-meta">${t.shortMeta}</span>
                  </button>
                `).join("")}
              </div>
            </div>
          </div>

          <!-- Right: Special Movements & Real-Time Telemetry -->
          <aside class="control-dock">
            <div>
              <div class="dock-section-title">
                <span>Special Movements in 3D</span>
                <span style="color: var(--bd-pacific-blue);">${e.movements.length} Modes</span>
              </div>
              <div class="movement-list" id="movement-list">
                ${e.movements.map(t=>`
                  <button class="movement-card ${t.id===n.id?"active":""}" data-move="${t.id}">
                    <div class="movement-card-top">
                      <span class="movement-name">${t.name}</span>
                      <span class="movement-tag">${t.tag}</span>
                    </div>
                    <p class="movement-desc">${t.description}</p>
                  </button>
                `).join("")}
              </div>
            </div>

            <div>
              <div class="dock-section-title">
                <span>Live Kinematic Telemetry</span>
                <span id="telem-state-badge" style="color: var(--status-green);">NOMINAL</span>
              </div>
              <div class="telemetry-box">
                <div class="telemetry-grid">
                  <div class="telem-cell">
                    <div class="telem-key">Body Pitch / Roll</div>
                    <div class="telem-val" id="t-attitude">+0.0° / +0.0°</div>
                  </div>
                  <div class="telem-cell">
                    <div class="telem-key">CoM Elevation</div>
                    <div class="telem-val" id="t-com">0.90 m</div>
                  </div>
                  <div class="telem-cell">
                    <div class="telem-key">Actuator Torque</div>
                    <div class="telem-val" id="t-torque">140 Nm</div>
                  </div>
                  <div class="telem-cell">
                    <div class="telem-key">Power / Friction</div>
                    <div class="telem-val" id="t-power">820 W · μ=${d.friction}</div>
                  </div>
                </div>

                <div class="telem-bars" id="telem-bars">
                  <div class="telem-bar-row">
                    <span id="bar-label-0">Joint Group A</span>
                    <div class="bar-track"><div class="bar-fill" id="bar-fill-0" style="width: 45%"></div></div>
                    <span id="bar-pct-0">45%</span>
                  </div>
                  <div class="telem-bar-row">
                    <span id="bar-label-1">Joint Group B</span>
                    <div class="bar-track"><div class="bar-fill" id="bar-fill-1" style="width: 35%"></div></div>
                    <span id="bar-pct-1">35%</span>
                  </div>
                  <div class="telem-bar-row">
                    <span id="bar-label-2">Joint Group C</span>
                    <div class="bar-track"><div class="bar-fill" id="bar-fill-2" style="width: 30%"></div></div>
                    <span id="bar-pct-2">30%</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <!-- REAL-LIFE FIELD & ARCHIVAL HARDWARE PHOTOGRAPHY -->
      <section class="section alt-bg" id="real-photos">
        <div class="container">
          <div class="section-header">
            <span class="eyebrow navy">Real-World Hardware Archive</span>
            <h2 class="section-title">${e.shortName} in the Real World: Field &amp; Lab Photography</h2>
            <p class="section-desc">
              Compare the 3D kinematic simulation above against authentic photographs of ${e.shortName} across Boston Dynamics’ Waltham testing bays, outdoor DARPA proving grounds, and enterprise deployments. Click any photograph to inspect full-resolution details.
            </p>
          </div>

          <div class="real-gallery-grid">
            ${L.gallery.map(t=>`
              <figure
                class="real-photo-card"
                data-lightbox-src="../${t.src}"
                data-lightbox-title="${t.title} (${t.era})"
                data-lightbox-caption="${t.caption}"
              >
                <div class="real-photo-frame">
                  <img src="../${t.src}" alt="${t.title}" loading="lazy" />
                  <span class="real-photo-era">${t.era}</span>
                  <span class="zoom-pill">🔍 Enlarge</span>
                </div>
                <figcaption class="real-photo-caption">
                  <h4>${t.title}</h4>
                  <p>${t.caption}</p>
                </figcaption>
              </figure>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- ROBOT INTRODUCTION & TECHNICAL SPECIFICATIONS -->
      <section class="section" id="introduction">
        <div class="container intro-two-col">
          <div class="prose-block">
            <span class="eyebrow">Robot Introduction &amp; Architecture</span>
            <h2 class="section-title" style="margin-bottom: 18px;">Introduction to ${e.name}</h2>
            ${e.introduction.map(t=>`<p>${t}</p>`).join("")}
          </div>

          <div class="spec-panel">
            <h3>Technical Specifications Summary</h3>
            <div class="spec-table-list">
              ${e.specs.map(([t,a])=>`
                <div class="spec-row">
                  <span>${t}</span>
                  <strong>${a}</strong>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </section>

      <!-- DETAILED IMPROVEMENTS BOSTON DYNAMICS HAS DONE TO THIS ROBOT -->
      <section class="section alt-bg" id="improvements" style="border-bottom: none;">
        <div class="container">
          <div class="section-header">
            <span class="eyebrow navy">Generational Engineering Evolution</span>
            <h2 class="section-title">Detailed Improvements Boston Dynamics Made to ${e.shortName}</h2>
            <p class="section-desc">
              A technical deep dive into every hardware, actuator, control-theory, perception, maintainability, and AI upgrade engineered across ${e.shortName}’s development lineage.
            </p>
          </div>

          <!-- Side-by-Side Generation Matrix -->
          <div class="table-wrap">
            <table class="gen-table">
              <thead>
                <tr>
                  ${e.generationTable.columns.map(t=>`<th>${t}</th>`).join("")}
                </tr>
              </thead>
              <tbody>
                ${e.generationTable.rows.map(t=>`
                  <tr>
                    ${t.map(a=>`<td>${a}</td>`).join("")}
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>

          <!-- Subsystem-by-Subsystem Detailed Improvement Cards -->
          <div class="improvements-grid">
            ${e.improvements.map(t=>`
              <article class="improvement-card">
                <div class="imp-header">
                  <span class="imp-subsystem">${t.subsystem}</span>
                  <span class="imp-era">${t.era}</span>
                </div>
                <h3>${t.title}</h3>
                <div class="imp-before-after">
                  <div class="imp-before">
                    <span>Prior Limitation</span>
                    ${t.before}
                  </div>
                  <div class="imp-after">
                    <span>Boston Dynamics Upgrade</span>
                    ${t.after}
                  </div>
                </div>
                <p>${t.detail}</p>
              </article>
            `).join("")}
          </div>

          <!-- Previous / Next Robot Sub-Webpage Links -->
          <div class="next-prev-nav" style="margin-top: 56px;">
            <a href="./${u.id}.html" class="np-card">
              <div class="np-dir">← Previous Robot Sub-Webpage</div>
              <div class="np-name">${u.name}</div>
              <div style="font-size: 13px; color: var(--text-secondary); margin-top: 4px;">${u.tagline}</div>
            </a>
            <a href="./${g.id}.html" class="np-card right">
              <div class="np-dir">Next Robot Sub-Webpage →</div>
              <div class="np-name">${g.name}</div>
              <div style="font-size: 13px; color: var(--text-secondary); margin-top: 4px;">${g.tagline}</div>
            </a>
          </div>
        </div>
      </section>
    </main>

    ${k("../")}
  `,M();const R=document.getElementById("robot-canvas-mount"),f=document.getElementById("sim-status-led"),$=document.getElementById("sim-control-law"),m=document.getElementById("telem-state-badge"),T=document.getElementById("t-attitude"),A=document.getElementById("t-com"),B=document.getElementById("t-torque"),C=document.getElementById("t-power"),O=document.getElementById("env-toast"),o=new W(R,{robotId:e.id,variantId:c,movementId:n.id,envId:d.id,onTelemetry:t=>{const a=t.pitchDeg>=0?"+":"",s=t.rollDeg>=0?"+":"";T.textContent=`${a}${t.pitchDeg.toFixed(1)}° / ${s}${t.rollDeg.toFixed(1)}°`,A.textContent=`${t.comHeight.toFixed(2)} m`;const i=Math.round(n.peakTorqueNm*t.torqueRatio),l=Math.round(n.peakPowerW*t.powerRatio);B.textContent=`${i} Nm`,C.textContent=`${l} W · μ=${t.friction.toFixed(2)}`,t.recovering?(f.classList.add("recovering"),m.textContent="PUSH RECOVERY",m.style.color="var(--force-orange)"):(f.classList.remove("recovering"),m.textContent="NOMINAL BALANCE",m.style.color="var(--status-green)"),t.loads&&t.loads.forEach((v,h)=>{const E=Math.round(Math.min(100,Math.max(4,v.value*100))),I=document.getElementById(`bar-label-${h}`),x=document.getElementById(`bar-fill-${h}`),w=document.getElementById(`bar-pct-${h}`);I&&(I.textContent=v.label),x&&(x.style.width=`${E}%`),w&&(w.textContent=`${E}%`)})}});document.getElementById("movement-list").addEventListener("click",t=>{const a=t.target.closest(".movement-card");if(!a)return;const s=a.dataset.move,i=e.movements.find(l=>l.id===s);if(i&&(n=i,document.querySelectorAll("#movement-list .movement-card").forEach(l=>l.classList.toggle("active",l===a)),$.textContent=n.controlLaw,o.setMovement(n.id),e.id==="sandflea-rhex")){const l=s.startsWith("rhex_")?"rhex_2002":"sandflea_2012";c=l,document.querySelectorAll("#variant-switcher .variant-btn").forEach(v=>v.classList.toggle("active",v.dataset.variant===l))}}),document.getElementById("variant-switcher").addEventListener("click",t=>{const a=t.target.closest(".variant-btn");a&&(c=a.dataset.variant,document.querySelectorAll("#variant-switcher .variant-btn").forEach(s=>s.classList.toggle("active",s===a)),e.id==="sandflea-rhex"&&(c==="rhex_2002"&&!n.id.startsWith("rhex_")?n=e.movements.find(s=>s.id==="rhex_tripod")||n:c==="sandflea_2012"&&n.id.startsWith("rhex_")&&(n=e.movements.find(s=>s.id==="rooftop_launch")||n),document.querySelectorAll("#movement-list .movement-card").forEach(s=>s.classList.toggle("active",s.dataset.move===n.id)),$.textContent=n.controlLaw),o.setRobot(e.id,c,n.id))}),document.getElementById("env-switcher").addEventListener("click",t=>{const a=t.target.closest(".env-btn");if(!a)return;const s=p.find(i=>i.id===a.dataset.env);s&&(d=s,document.querySelectorAll("#env-switcher .env-btn").forEach(i=>i.classList.toggle("active",i===a)),o.setEnvironment(d.id),O.innerHTML=`<strong>${d.name}:</strong> <span>${d.description}</span>`)}),document.querySelectorAll(".cam-btn").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll(".cam-btn").forEach(a=>a.classList.toggle("active",a===t)),o.setCameraPreset(t.dataset.cam)})}),document.getElementById("btn-axes").addEventListener("click",t=>{t.currentTarget.classList.toggle("active",o.toggleJointAxes())}),document.getElementById("btn-com").addEventListener("click",t=>{t.currentTarget.classList.toggle("active",o.toggleCoM())}),document.getElementById("btn-wire").addEventListener("click",t=>{t.currentTarget.classList.toggle("active",o.toggleWireframe())}),document.getElementById("btn-shove").addEventListener("click",()=>{o.triggerImpulseShove()}),document.getElementById("speed-controls").addEventListener("click",t=>{const a=t.target.closest(".speed-pill");if(!a)return;if(a.id==="btn-pause"){const i=o.togglePause();a.textContent=i?"▶ Resume":"⏸ Pause",a.classList.toggle("active",i);return}const s=parseFloat(a.dataset.speed);Number.isNaN(s)||(o.setSpeed(s),document.querySelectorAll("#speed-controls .speed-pill[data-speed]").forEach(i=>i.classList.toggle("active",i===a)))})}H();
