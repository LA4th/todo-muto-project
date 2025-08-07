const burgerBtn = document.getElementById("burgerBtn");
const closeBtn = document.getElementById("closeBtn");
const navMenu = document.getElementById("navMenu");

export const eventListener = () => {
  burgerBtn.addEventListener("click", () => {
  navMenu.classList.remove("translate-x-full", "opacity-0", "pointer-events-none");
});

closeBtn.addEventListener("click", () => {
  navMenu.classList.add("translate-x-full", "opacity-0", "pointer-events-none");
});

// Optional: Auto-close on mobile when a nav link is clicked
const navLinks = navMenu.querySelectorAll("a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      navMenu.classList.add("translate-x-full", "opacity-0", "pointer-events-none");
    }
  });
});
};
