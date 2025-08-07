const burgerBtn = document.querySelector('#burgerBtn');
const closeBtn = document.querySelector('#closeBtn');
const sidebarContainer = document.querySelector('#sidebarContainer');
const footerInfo = document.querySelector('#footerInfo');

export const eventListener = () => {
  burgerBtn.addEventListener('click', () => {
    sidebarContainer.classList.remove('translate-x-full', 'opacity-0', 'pointer-events-none');
    footerInfo.classList.remove('translate-x-full', 'opacity-0', 'pointer-events-none');
  });
  closeBtn.addEventListener('click', () => {
    sidebarContainer.classList.add('translate-x-full', 'opacity-0', 'pointer-events-none');
    footerInfo.classList.add('translate-x-full', 'opacity-0', 'pointer-events-none');
  });
};
