const burgerBtn = document.querySelector('#burgerBtn');
const closeBtn = document.querySelector('#closeBtn');
const navMenu = document.querySelector('#navMenu');
const footerContainer = document.querySelector('#footerContainer');

export const eventListener = () => {

  burgerBtn.addEventListener('click', () => {
    navMenu.classList.remove('translate-x-full', 'opacity-0', 'pointer-events-none');
    footerContainer.classList.remove('translate-x-full', 'opacity-0', 'pointer-events-none');
    burgerBtn.classList.add('hidden');
  });
  closeBtn.addEventListener('click', () => {
    navMenu.classList.add('translate-x-full', 'opacity-0', 'pointer-events-none');
    footerContainer.classList.add('translate-x-full', 'opacity-0', 'pointer-events-none');
    burgerBtn.classList.remove('hidden');
  });

// Optional: Auto-close on mobile when a nav link is clicked
/* const navLinks = navMenu.querySelectorAll("a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      navMenu.classList.add("translate-x-full", "opacity-0", "pointer-events-none");
    }
  });
}); */
};
