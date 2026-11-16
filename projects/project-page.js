
const projectId = document.body.dataset.project;
const project = projectData[projectId];

const pageContent = document.getElementById("projectPageContent");

function escapeProjectHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function projectAsset(path) {
  return "../../" + path;
}

function projectWebpAsset(path) {
  return projectAsset(path)
    .replace("../../images/", "../../images-optimized/")
    + ".webp";
}

function projectPicture(path, alt, loading = "lazy") {
  const original = projectAsset(path);
  const optimized = projectWebpAsset(path);

  return `
    <picture>
      <source srcset="${escapeProjectHTML(optimized)}" type="image/webp">
      <img
        src="${escapeProjectHTML(original)}"
        alt="${escapeProjectHTML(alt)}"
        loading="${loading}"
        decoding="async"
      >
    </picture>
  `;
}

function trackProjectView(id) {
  fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      event_type: "project_view",
      project_id: id
    })
  }).catch(error => console.error("Analytics tracking failed:", error));
}

if (!project) {
  pageContent.innerHTML = `
    <div class="project-not-found">
      <h2>Project not found</h2>
      <p>This project page may have moved or may no longer be available.</p>
      <a class="btn btn-primary" href="../../index.html#projects">
        Back to Projects
      </a>
    </div>
  `;
} else {
  document.title = `${project.title} | Kirsten Reigne Padua`;

  const gallery = project.gallery || [];

  pageContent.innerHTML = `
    <div class="project-detail-heading">
      <span class="modal-category">${escapeProjectHTML(project.category)}</span>
      <h1>${escapeProjectHTML(project.title)}</h1>
      <p>${escapeProjectHTML(project.overview)}</p>
    </div>

    <div class="modal-project-grid project-detail-grid">

      <div class="modal-gallery">

        <div class="gallery-main-row">
          <button class="modal-main-image"
            data-image="${projectAsset(gallery[0])}"
            data-webp="${projectWebpAsset(gallery[0])}"
            data-caption="${escapeProjectHTML(project.title)}">
            ${projectPicture(
              gallery[0],
              project.title + " main preview",
              "eager"
            )}
          </button>

          <div class="modal-thumbs">
            ${gallery.map((image, index) => `
              <button
                class="${index === 0 ? "selected" : ""}"
                data-gallery="${projectAsset(image)}"
                data-gallery-webp="${projectWebpAsset(image)}"
                data-caption="${escapeProjectHTML(project.title)} preview ${index + 1}"
                aria-label="Show project image ${index + 1}">
                ${projectPicture(
                  image,
                  project.title + " preview " + (index + 1)
                )}
              </button>
            `).join("")}
          </div>
        </div>

        <div class="compare-row">
          <div class="compare-item">
            <button class="compare-image"
              data-image="${projectAsset(project.before)}"
              data-caption="${escapeProjectHTML(project.title)} — Before">
              ${projectPicture(project.before, "Before design")}
            </button>
            <span>BEFORE</span>
          </div>

          <span class="compare-arrow" aria-hidden="true">➜</span>

          <div class="compare-item">
            <button class="compare-image"
              data-image="${projectAsset(project.after)}"
              data-caption="${escapeProjectHTML(project.title)} — After">
              ${projectPicture(project.after, "Completed design")}
            </button>
            <span>AFTER</span>
          </div>
        </div>

      </div>

      <div class="modal-details project-information">

        <h2>Project Overview</h2>
        <p>${escapeProjectHTML(project.overview)}</p>

        <h3>Problem / Design Challenge</h3>
        <p>${escapeProjectHTML(project.problem)}</p>

        <h3>Solution</h3>
        <p>${escapeProjectHTML(project.solution)}</p>

        <h3>Features</h3>
        <ul>
          ${project.features.map(feature => `
            <li>${escapeProjectHTML(feature)}</li>
          `).join("")}
        </ul>

        <h3>Technologies Used</h3>
        <div class="tag-row">
          ${project.tools.map(tool => `
            <span class="tag">${escapeProjectHTML(tool)}</span>
          `).join("")}
        </div>

        <h3>Role</h3>
        <p>${escapeProjectHTML(project.role)}</p>

        <div class="project-facts">
          <div>
            <span>PROJECT YEAR</span>
            <strong>${escapeProjectHTML(project.year)}</strong>
          </div>
          <div>
            <span>PROJECT STATUS</span>
            <strong>${escapeProjectHTML(project.status)}</strong>
          </div>
          <div>
            <span>PROJECT TYPE</span>
            <strong>${escapeProjectHTML(project.type)}</strong>
          </div>
        </div>

      </div>
    </div>
  `;

  trackProjectView(projectId);
}

// Switch the large preview when a thumbnail is clicked.
document.addEventListener("click", event => {
  const thumbnail = event.target.closest("[data-gallery]");

  if (thumbnail) {
    const mainImage = document.querySelector(".modal-main-image");
    const imagePath = thumbnail.dataset.gallery;
    const webpPath = thumbnail.dataset.galleryWebp;
    const caption = thumbnail.dataset.caption;

    mainImage.dataset.image = imagePath;
    mainImage.dataset.webp = webpPath;
    mainImage.dataset.caption = caption;

    mainImage.innerHTML = projectPicture(
      imagePath.replace("../../", ""),
      caption
    );

    document.querySelectorAll(".modal-thumbs button")
      .forEach(button => button.classList.remove("selected"));

    thumbnail.classList.add("selected");
    return;
  }

  const imageButton = event.target.closest("[data-image]");

  if (imageButton) {
    const imageModal = document.getElementById("imageModal");
    const expandedImage = document.getElementById("expandedImage");

    expandedImage.onerror = function () {
      this.onerror = null;
      this.src = imageButton.dataset.image;
    };

    expandedImage.src = imageButton.dataset.webp || imageButton.dataset.image;
    
    document.getElementById("expandedImage").alt =
      imageButton.dataset.caption || "Expanded project image";
    document.getElementById("expandedCaption").textContent =
      imageButton.dataset.caption || "";

    imageModal.showModal();
  }
});

// Theme toggle — shares the theme saved by the main portfolio page.
const themeToggle = document.getElementById("themeToggle");

function applyProjectTheme(theme) {
  document.documentElement.dataset.theme = theme;

  const dark = theme === "dark";

  document.getElementById("themeIcon").textContent = dark ? "☀" : "☾";
  document.querySelector(".theme-label").textContent =
    dark ? "Light mode" : "Dark mode";
  themeToggle.setAttribute(
    "aria-label",
    dark ? "Switch to light mode" : "Switch to dark mode"
  );
}

let savedTheme = "light";

try {
  savedTheme = localStorage.getItem("portfolio-theme") || "light";
} catch (error) {}

applyProjectTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const nextTheme =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";

  applyProjectTheme(nextTheme);

  try {
    localStorage.setItem("portfolio-theme", nextTheme);
  } catch (error) {}
});

// Image viewer controls.
const imageModal = document.getElementById("imageModal");

document.getElementById("imageClose").addEventListener("click", () => {
  imageModal.close();
});

imageModal.addEventListener("click", event => {
  if (event.target === imageModal) imageModal.close();
});
