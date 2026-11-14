// script.js
// This script handles the dynamic rendering of projects, skills, and certificates on the portfolio website. It also manages the theme toggle, search functionality, and modal interactions.

const projects = [ 
    { //Fruit Design
    id: "fruit-design",
    title: "Fruitful Design",
    description: "A shimmering sugar apple inspired by a sugar apple fruit with raindrops the shimmers because of the sunlight.",
    details: "A bumpy sugar apple design with a green and yellow color scheme. The glitter representing the shimmering raindrops from the sunlight, creating a dreamy and ethereal effect. The design is simple yet elegant, capturing the essence of the fruit in a whimsical way.",
    tools: ["GIMP", "Photoshop"],
    year: 2026,
    category: "Graphic Design",
    type: "Illustration",
    image: "images/MyProjects/FruitfulDesign.jpg",
    gallery: [
      "images/MyProjects/ShimmeringSugarApple.jpg",
      "images/MyProjects/FruitfulDesign.png",
      "images/MyProjects/FruitfulDesign.jpg"],
    before: "images/MyProjects/ShimmeringSugarApple.jpg",
    after: "images/MyProjects/FruitfulDesign.jpg",
    },
    { //Icon Design
    id:"icon-design",
    title:"Icon Design",
    description:"An Icon that emits a soft pink glow and coquettish appearance.",
    details: "A pure and gentle beauty. Signature pale pink glitter bow with soft blush shading, and two sparkling stars in the corner. Simple, dreamy, and instantly recognizable as my work. Perfect as a subtle mark or decorative detail.",
    tools:["GIMP","Photoshop"],
    year:2026,
    category:"Graphic Design",
    type:"Icon",
    image:"images/MyProjects/Icon.png",
    gallery:[
      "images/MyProjects/MySweetEscape.jpg",
      "images/MyProjects/Icon.png",
      "images/MyProjects/Icon.jpeg"],
    before:"images/MyProjects/MySweetEscape.jpg",
    after:"images/MyProjects/Icon.jpeg",
    featured:true
  },
  { //Badge Logo Design
    id:"badge-logo",
    title:"Badge Logo Design",
    description:"A badge logo design that represents or symbolizes my identity as a graphic designer.",
    details: "A glittering hot pink splash frame wrap around a soft pink bow, dusted with shimmer with a twinkling star sparkles. Matching my coquette charm. SparKirst that sits sweetly below, with matching pink and purple colors. Added around by gold and pink glitter dots to give extra magic and sparkle. A design that is both elegant and playful, with a touch of whimsy.",
    tools:["GIMP","Photoshop"],
    year:2026,
    category:"Graphic Design",
    type:"Logo",
    image:"images/MyProjects/BadgeLogo.png",
    gallery:[
      "images/MyProjects/MySweetEscape.jpg",
      "images/MyProjects/BadgeLogo.png",
      "images/MyProjects/BadgeLogo.jpeg"],
    before:"images/MyProjects/MySweetEscape.jpg",
    after:"images/MyProjects/BadgeLogo.png",
    featured:true
  },
  { //Horizontal Logo Design
    id:"horizontal-logo",
    title:"Horizontal Logo design",
    description:"A horizontal logo design that represents or symbolizes my identity as a graphic designer.",
    details: "Clean and polished creamy panel edged in glowing gold holds the delicate glitter bow, with two little star sparkles catching the light above. SparKirst is bold and bright, perfectly balanced beside the bow. It feels refined, memorable, and ready to shine anywhere.",
    tools:["GIMP","Photoshop"],
    year:2026,
    category:"Graphic Design",
    type:"Logo",
    image:"images/MyProjects/HorizontalLogo.png",
    gallery:[
      "images/MyProjects/MySweetEscape.jpg",
      "images/MyProjects/HorizontalLogo.png",
      "images/MyProjects/HorizontalLogo.jpeg"],
    before:"images/MyProjects/MySweetEscape.jpg",
    after:"images/MyProjects/HorizontalLogo.jpeg"
  },
  { //Vertical Logo Design
    id:"vertical-logo",
    title:"Vertical Logo Design",
    description:"A vertical logo design with a bright glow that represents or symbolizes my identity as a graphic designer.",
    details: "Warm and radiant. Glittering bow is framed by a soft golden-yellow glow that makes it feel alive and magical. Below, SparKirst stands out with a gentle shadow, giving it depth and presence. It feels welcoming, bright, and full of warmth.",
    tools:["GIMP","Photoshop"],
    year:2026,
    category:"Graphic Design",
    type:"Logo",
    image:"images/MyProjects/VerticalLogo.png",
    gallery:[
      "images/MyProjects/MySweetEscape.jpg",
      "images/MyProjects/VerticalLogo.png",
      "images/MyProjects/VerticalLogo.jpeg"],
    before:"images/MyProjects/MySweetEscape.jpg",
    after:"images/MyProjects/VerticalLogo.jpeg",
    featured:true
  },
  { //Brew Haven Logo Design
    id:"brew-haven",
    title:"Brew Haven Logo Design",
    description:"A logo especially designed for brew haven coffee shop. It has a touch of their new pumpkin spice latte. A design that gives a cozy and comfortable feel.",
    details: "Inviting and cozy. A charming illustration of a mug holding a creamy pumpkin spice latte, complete with swirling steam and delicate patterns on the handle. Soft cloud-like lettering spells Brew Haven above, while inviting text reads: A cozy spot to try our new Pumpkin Spice Latte!  with fresh leaves and coffee beans, it feels like a warm hug in a cup.",
    tools:["GIMP","Photoshop"],
    year:2026,
    category:"Graphic Design",
    type:["Logo", "Digital Marketing"],
    image:"images/MyProjects/BrewHaven.jpeg",
    gallery:[
      "images/MyProjects/AWarm&SafeSpace.jpg",
      "images/MyProjects/BrewHaven.jpeg"],
      before:"images/MyProjects/AWarm&SafeSpace.jpg",
      after:"images/MyProjects/BrewHaven.jpeg",
  },
  { //Reigna Poster Design
    id:"poster-design",
    title:"Reigna Poster Design",
    description:"A made up clothing brand poster design. It features a modern aesthetic and bold typography.",
    details: "The name Reigna from  REIGN, embodying confidence, presence, and the grace of leading with one’s own beauty. The tagline BLUSH THAT REIGNS IN EVERY DAMSEL weaves soft pink warmth and feminine sweetness with the quiet strength and poise every woman holds. Designed in dreamy blush tones and delicate script, this collection channels coquette elegance that offers timeless pieces that let you feel beautifully soft and confidently royal, all at once.",
    tools:["Canva"],
    year:2026,
    category:"Graphic Design",
    type:["Poster","Typography"],
    image:"images/MyProjects/ReignaiaPoster.jpg",
    gallery:[
      "images/MyProjects/FeminineDresses&Elegance.jpg",
      "images/MyProjects/ReignaiaPoster.jpg"],
    before:"images/MyProjects/FeminineDresses&Elegance.jpg",
    after:"images/MyProjects/ReignaiaPoster.jpg",
    featured:true
  }
]; // This part of the code defines an array of project objects, each containing details such as id, title, description, tools used, image paths, gallery images, before and after images, and whether the project is featured.

const technicalSkills = [
  {name:"Canva",icon:"🎨",level:90,label:"Confident"},
  {name:"Photoshop",icon:"🖌️",level:59,label:"Comfortable"},
  {name:"Miro",icon:"🧠",level:40,label:"Developing"},
  {name:"GIMP",icon:"🖼️",level:40,label:"Developing"},
  {name:"Figma",icon:"✏️",level:25,label:"Learning"}
]; // This part of the code defines an array of technical skill objects, each containing details such as name, icon, skill level (as a percentage), and a label describing the proficiency level.

const certificates = [
  {name:"Getting Started with Cisco Packet Tracer",org:"Cisco Networking Academy",file:"pdf/Getting_Started_with_Cisco_Packet_Tracer_certificate_kapadua-ccc-edu-ph_b9c370c8-3a5c-4480-bcce-bc3619d6cb76.pdf",skills:["Learning agility","Technical curiosity"]},
  {name:"Exploring Networks with Cisco Packet Tracer",org:"Cisco Networking Academy",file:"pdf/Exploring_Networking_with_Cisco_Packet_Tracer_certificate_kapadua-ccc-edu-ph_8498d9ea-5913-4da1-9a20-d62e4a7a9246.pdf",skills:["Analytical thinking","Problem-solving"]},
  {name:"Introduction to Java",org:"SoloLearn",file:"pdf/Sololearn Course Certificate.pdf",skills:["Logical thinking","Independent learning"]},
  {name:"Effective Speaking and Listening",org:"Wadhwani Foundation",file:"pdf/Wadhwani Foundation Certificate-EffectiveSpeakingandListeningSkills.pdf",skills:["Communication","Active listening"]},
  {name:"Self-management",org:"Wadhwani Foundation",file:"pdf/Wadhwani Foundation Certificate-Self-Management.pdf",skills:["Time management","Self-discipline"]},
  {name:"Self-presentation",org:"Wadhwani Foundation",file:"pdf/Wadhwani Foundation Certificate-Self-Presentation.pdf",skills:["Professional presentation","Confidence"]},
  {name:"Legacy Responsive Web Design V8",org:"freeCodeCamp",file:"pdf/freeCodeCamp-LegacyResponsiveWebDesignV8.pdf",skills:["Persistence","Attention to detail"]},
  {name:"NC II — Computer Systems Servicing",org:"TESDA / National Certificate",file:"pdf/NC.pdf",skills:["Troubleshooting","Following technical procedures"]}
]; // This part of the code defines an array of certificate objects, each containing details such as name, issuing organization, file path to the certificate PDF, and a list of skills associated with the certificate.

const $ = (selector, root=document) => root.querySelector(selector);

async function trackAnalytics(eventType, projectId = null) {
  try {
    await fetch("/api/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        event_type: eventType,
        project_id: projectId
      })
    });
  } catch (error) {
    console.error("Analytics tracking failed:", error);
  }
}


const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
const projectImage = (src, alt) => `<img src="${escapeHTML(src)}" alt="${escapeHTML(alt)}" loading="lazy" onerror="this.onerror=null;this.src='images/MyProjects/BadgeLogo.png';">`;

function renderFeatured(){
  $("#featuredGrid").innerHTML = projects.filter(p=>p.featured).map(p=>`<article class="featured-card">
    <button class="image-link" data-image="${escapeHTML(p.image)}" data-caption="${escapeHTML(p.title)}" aria-label="View larger image: ${escapeHTML(p.title)}">${projectImage(p.image,p.title)}</button>
    <a class="featured-title" href="#projects" data-project="${escapeHTML(p.id)}">${escapeHTML(p.title)}</a>
  </article>`).join("");
} // This function renders the featured projects on the portfolio website. It filters the projects array to include only those marked as featured, then generates HTML for each featured project and inserts it into the #featuredGrid element.


function renderProjects() {
  const search = $("#projectSearch")?.value.trim().toLowerCase() || "";
  const year = $("#filterYear")?.value || "";
  const tool = $("#filterTool")?.value || "";
  const category = $("#filterCategory")?.value || "";
  const type = $("#filterType")?.value || "";

  const filtered = projects.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(search);
    const matchesYear = !year || String(p.year) === year;
    const matchesTool = !tool || p.tools.includes(tool);
    const matchesCategory = !category || p.category === category;

    const projectTypes = Array.isArray(p.type) ? p.type : [p.type];
    const matchesType = !type || projectTypes.includes(type);

    return matchesSearch &&
      matchesYear &&
      matchesTool &&
      matchesCategory &&
      matchesType;
  });

  $("#resultsCount").textContent =
    `Showing ${filtered.length} of ${projects.length} projects`;

  $("#emptyState").hidden = filtered.length !== 0;

  $("#projectsGrid").innerHTML = filtered.map(p => {
    const projectTypes = Array.isArray(p.type) ? p.type : [p.type];

    return `
      <article class="project-card">
        <button class="project-thumb"
          data-image="${escapeHTML(p.image)}"
          data-caption="${escapeHTML(p.title)}"
          aria-label="View larger image: ${escapeHTML(p.title)}">
          ${projectImage(p.image, p.title)}
        </button>

    <div class="project-card-body">

      <div class="project-meta-row">
        <span class="category-pill">
          ${escapeHTML(p.category)}
        </span>

        <span class="project-year-type">
          ${escapeHTML(p.year)} · ${escapeHTML(projectTypes[0] || "")}
        </span>
      </div>

      <h3>${escapeHTML(p.title)}</h3>

      <p>${escapeHTML(p.description)}</p>

      <div class="tools-used">

        <div class="tool-tags">
          ${p.tools.map(t => `
            <span class="tool-tag">${escapeHTML(t)}</span>
          `).join("")}
        </div>
      </div>

      <div class="card-actions">
        <button class="btn btn-primary"
          data-project="${escapeHTML(p.id)}">
          View details ↗
        </button>
      </div>
      </article>
    `;
  }).join("");
}
 
// This function renders the list of projects on the portfolio website. It retrieves the search query from the #projectSearch input, filters the projects array based on the query, updates the results count, and generates HTML for each filtered project to display in the #projectsGrid element. If no projects match the search query, it shows an empty state message. 

function renderSkills(){
  $("#technicalSkills").innerHTML=technicalSkills.map(s=>`<div class="skill-item"><div class="skill-label"><span><span class="skill-icon" aria-hidden="true">${s.icon}</span> ${escapeHTML(s.name)}</span><span>${escapeHTML(s.label)}</span></div><div class="skill-track" role="progressbar" aria-label="${escapeHTML(s.name)} skill level" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${s.level}"><div class="skill-fill" style="width:${s.level}%"></div></div></div>`).join("");
  $("#softSkills").innerHTML=certificates.map(c=>`<article class="soft-skill"><div class="soft-skill-top"><div><h4>${escapeHTML(c.skills.join(" & "))}</h4><p>${escapeHTML(c.name)} · ${escapeHTML(c.org)}</p></div></div><a class="cert-link" href="${escapeHTML(c.file)}" target="_blank" rel="noopener">View certificate PDF ↗</a></article>`).join("");
}

function openProject(id){ // This function opens a modal displaying the details of a specific project based on its ID.
  const p=projects.find(item=>item.id===id); 
  if(!p)return;
    trackAnalytics("project_view", p.id);
  const gallery=p.gallery?.length?p.gallery:[p.image,p.image,p.image];
  $("#modalContent").innerHTML=`<div class="modal-project-grid">
    <div class="modal-gallery">
      <div class="gallery-main-row">
        <button class="modal-main-image" data-image="${escapeHTML(gallery[0])}" data-caption="${escapeHTML(p.title)}">${projectImage(gallery[0],p.title+" main preview")}</button>
        <div class="modal-thumbs">${gallery.slice(0,3).map((img,i)=>`<button class="${i===0?"selected":""}" data-gallery="${escapeHTML(img)}" data-project-caption="${escapeHTML(p.title)}" aria-label="Show preview ${i+1}">${projectImage(img,p.title+" preview "+(i+1))}</button>`).join("")}</div>
      </div>
      <div class="compare-row"><div class="compare-item"><button class="compare-image" data-image="${escapeHTML(p.before)}" data-caption="${escapeHTML(p.title+" — before sketch")}">${projectImage(p.before,"Before: sketch version")}</button><span>BEFORE · SKETCH</span></div><span class="compare-arrow" aria-hidden="true">➜</span><div class="compare-item"><button class="compare-image" data-image="${escapeHTML(p.after)}" data-caption="${escapeHTML(p.title+" — digital version")}">${projectImage(p.after,"After: digital version")}</button><span>AFTER · DIGITAL</span></div></div>
    </div>

    <div class="modal-details">
      <span class="modal-category">
        ${escapeHTML(p.category)}
      </span>

      <h2 id="modalTitle">${escapeHTML(p.title)}</h2>
      <p>${escapeHTML(p.description)}</p>
      ${p.details ? `<h3>About the Design</h3><p>${escapeHTML(p.details)}</p>` : ""}
      <h3>Tools used:</h3>
      <div class="tag-row">${p.tools.map(t=>`<span class="tag">${escapeHTML(t)}</span>`).join("")}</div></div>
  </div>`;
  const modal=$("#projectModal"); if(!modal.open)modal.showModal();
}

function openImage(src,caption){$("#expandedImage").src=src;$("#expandedImage").alt=caption||"Expanded image";$("#expandedCaption").textContent=caption||"";$("#imageModal").showModal();}

function setupTheme() {
  const themeToggle = $("#themeToggle");
  if (!themeToggle) return;

  let savedTheme = "light";

  try {
    savedTheme = localStorage.getItem("portfolio-theme") || "light";
  } catch (error) {}

  applyTheme(savedTheme === "dark" ? "dark" : "light");

  themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.dataset.theme === "dark";
    const newTheme = isDark ? "light" : "dark";

    applyTheme(newTheme);

    try {
      localStorage.setItem("portfolio-theme", newTheme);
    } catch (error) {}
  });
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;

  const isDark = theme === "dark";
  const themeIcon = $("#themeIcon");
  const themeLabel = $(".theme-label");
  const themeToggle = $("#themeToggle");

  if (themeIcon) themeIcon.textContent = isDark ? "☀" : "☾";
  if (themeLabel) themeLabel.textContent = isDark ? "Light mode" : "Dark mode";

  if (themeToggle) {
    themeToggle.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode"
    );
  }
}

function updateThemeLabel(){const dark=document.documentElement.dataset.theme==="dark";$("#themeIcon").textContent=dark?"☀":"☾";$(".theme-label").textContent=dark?"Light mode":"Dark mode";$("#themeToggle").setAttribute("aria-label",dark?"Switch to light mode":"Switch to dark mode");}


function setupSearch() {
  const filterIds = [
    "projectSearch",
    "filterYear",
    "filterTool",
    "filterCategory",
    "filterType"
  ];

  // Automatically create year options from your project data
  const yearSelect = $("#filterYear");

  const years = [...new Set(projects.map(p => p.year))]
    .filter(Boolean)
    .sort((a, b) => Number(b) - Number(a));

  years.forEach(year => {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  });

  // Refresh projects whenever a filter changes
  filterIds.forEach(id => {
    const element = $("#" + id);
    if (element) {
      element.addEventListener("input", renderProjects);
      element.addEventListener("change", renderProjects);
    }
  });

  // Clear all filters
  $("#clearFilters").addEventListener("click", () => {
    filterIds.forEach(id => {
      $("#" + id).value = "";
    });

    renderProjects();
  });
}

document.addEventListener("click",event=>{
  const project=event.target.closest("[data-project]");
  if(project){
    event.preventDefault();
    openProject(project.dataset.project);
    return;
  }

  const gallery=event.target.closest("[data-gallery]");
  if(gallery){
    const src=gallery.dataset.gallery;
    const main=$(".modal-main-image");
    main.dataset.image=src;
    main.dataset.caption=gallery.dataset.projectCaption;
    main.innerHTML=projectImage(src,gallery.dataset.projectCaption+" selected image");
    $(".modal-thumbs .selected")?.classList.remove("selected");
    gallery.classList.add("selected");
    return;
  }
  const image=event.target.closest("[data-image]");if(image){openImage(image.dataset.image,image.dataset.caption||image.dataset.projectCaption);return;}
});
$("#modalClose").addEventListener("click",()=>$("#projectModal").close());
$("#projectModal").addEventListener("click",event=>{if(event.target===$("#projectModal"))$("#projectModal").close();});
$("#imageClose").addEventListener("click",()=>$("#imageModal").close());
$("#imageModal").addEventListener("click",event=>{if(event.target===$("#imageModal"))$("#imageModal").close();});
$("#menuToggle").addEventListener("click",()=>{const open=$("#navLinks").classList.toggle("open");$("#menuToggle").setAttribute("aria-expanded",String(open));$("#menuToggle").textContent=open?"×":"☰";});
$("#navLinks").addEventListener("click",event=>{if(event.target.closest("a")){$("#navLinks").classList.remove("open");$("#menuToggle").setAttribute("aria-expanded","false");$("#menuToggle").textContent="☰";}});
// $("#contactForm").addEventListener("submit",event=>{event.preventDefault();if($("#website").value)return;const name=$("#contactName").value.trim(),email=$("#contactEmail").value.trim(),subject=$("#contactSubject").value.trim(),message=$("#contactMessage").value.trim();if(!name||!email||!subject||!message){$("#formNote").textContent="Please complete all fields.";return;}const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);$("#formNote").textContent="Opening your email app. If it does not open, check the contact email in index.html and script.js.";window.location.href=`mailto:kirstreigne@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;event.currentTarget.reset();});

renderFeatured();
renderProjects();
renderSkills();
setupSearch();
setupTheme();

const cvDownload = document.querySelector('.cv-actions a[download]');

if (cvDownload) {
  cvDownload.addEventListener("click", () => {
    trackAnalytics("cv_download");
  });
}

// Show and hide project filters
const filterToggle = $("#filterToggle");
const filterPanel = $("#filterPanel");

filterToggle.addEventListener("click", () => {
  const isExpanded =
    filterToggle.getAttribute("aria-expanded") === "true";

  filterToggle.setAttribute("aria-expanded", String(!isExpanded));
  filterPanel.hidden = isExpanded;
});


/* =====================================
   ANIMATED PINK GLITTER BACKGROUND
===================================== */

(() => {
  const canvas = document.getElementById("glitterCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  if (reduceMotion.matches) return;

  let width, height;
  let particles = [];
  let animationFrame;

  const particleCount = 65;

  function getColors() {
    const darkMode =
      document.documentElement.getAttribute("data-theme") === "dark" ||
      document.body.getAttribute("data-theme") === "dark";

    return darkMode
      ? [
          "rgba(255, 120, 184,",
          "rgba(255, 190, 220,",
          "rgba(255, 255, 255,"
        ]
      : [
          "rgba(255, 150, 200,",
          "rgba(255, 190, 220,",
          "rgba(255, 255, 255,"
        ];
  }

  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function createParticle(randomY = true) {
    return {
      x: Math.random() * width,
      y: randomY ? Math.random() * height : height + 10,
      size: Math.random() * 1.8 + 0.5,
      speedY: Math.random() * 0.35 + 0.08,
      speedX: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.55 + 0.15,
      phase: Math.random() * Math.PI * 2,
      twinkleSpeed: Math.random() * 0.035 + 0.01,
      color: Math.floor(Math.random() * 3),
      glint: Math.random() > 0.88
    };
  }

  function initParticles() {
    particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
    }
  }

  function drawParticle(p, colors) {
    const shimmer =
      (Math.sin(p.phase) + 1) / 2;

    const opacity =
      p.opacity * (0.25 + shimmer * 0.75);

    const color = colors[p.color];

    ctx.save();

    ctx.globalAlpha = opacity;

    // Soft glowing center
    ctx.shadowBlur = p.glint ? 12 : 6;
    ctx.shadowColor = color + "0.9)";

    ctx.fillStyle = color + "1)";

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();

    // Occasional delicate light glimmer
    if (p.glint && shimmer > 0.8) {
      ctx.strokeStyle = color + "0.7)";
      ctx.lineWidth = 0.6;

      const length = p.size * 4;

      ctx.beginPath();
      ctx.moveTo(p.x - length, p.y);
      ctx.lineTo(p.x + length, p.y);
      ctx.moveTo(p.x, p.y - length);
      ctx.lineTo(p.x, p.y + length);
      ctx.stroke();
    }

    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    const colors = getColors();

    particles.forEach(p => {
      p.phase += p.twinkleSpeed;
      p.x += p.speedX + Math.sin(p.phase) * 0.12;
      p.y -= p.speedY;

      if (p.y < -10) {
        Object.assign(p, createParticle(false));
      }

      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;

      drawParticle(p, colors);
    });

    animationFrame = requestAnimationFrame(animate);
  }

  resizeCanvas();
  initParticles();
  animate();

  window.addEventListener("resize", () => {
    resizeCanvas();
  });

  reduceMotion.addEventListener("change", event => {
    if (event.matches) {
      cancelAnimationFrame(animationFrame);
      ctx.clearRect(0, 0, width, height);
    } else {
      initParticles();
      animate();
    }
  });
})();
