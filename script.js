// Smooth Scroll for Navbar Links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Mobile Navbar Toggle (for small screens)
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "☰";
toggleBtn.style.background = "transparent";
toggleBtn.style.color = "white";
toggleBtn.style.fontSize = "1.5rem";
toggleBtn.style.border = "none";
toggleBtn.style.cursor = "pointer";
toggleBtn.style.display = "none";

// Add button to header
header.insertBefore(toggleBtn, nav);

// Toggle nav on mobile
toggleBtn.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

// Responsive behavior
function handleResize() {
  if (window.innerWidth <= 768) {
    toggleBtn.style.display = "block";
    nav.style.display = "none";
    nav.style.flexDirection = "column";
    nav.style.background = "#222";
    nav.style.padding = "10px";
  } else {
    toggleBtn.style.display = "none";
    nav.style.display = "flex";
    nav.style.flexDirection = "row";
    nav.style.background = "transparent";
  }
}

window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);

// Simple Fade-in Animation on Scroll
const sections = document.querySelectorAll("section, .project-card");
const fadeIn = () => {
  sections.forEach((sec) => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", fadeIn);
window.addEventListener("load", () => {
  sections.forEach((sec) => {
    sec.style.opacity = "0";
    sec.style.transform = "translateY(30px)";
    sec.style.transition = "all 0.6s ease-out";
  });
  fadeIn();
});
