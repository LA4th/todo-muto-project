const taskContainer = document.querySelector('#taskContainer');
const navLinks = navMenu.querySelectorAll("a");

export const transitionSwitchView = () => {
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        navMenu.classList.add("translate-x-full", "opacity-0", "pointer-events-none");
      }
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      // Switch to desktop layout
      taskContainer.classList.remove("flex-col", "items-center", "gap-y-5");
      taskContainer.classList.add("flex-row", "justify-between", "gap-x-10");
    } else {
      // Switch to mobile layout
      taskContainer.classList.remove("flex-row", "justify-between", "gap-x-10");
      taskContainer.classList.add("flex-col", "items-center", "gap-y-5");
    }
  });
};