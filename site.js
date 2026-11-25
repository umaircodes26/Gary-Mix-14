const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

document.querySelectorAll('.accordion button').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('article');
    const wasOpen = item.classList.contains('open');

    document.querySelectorAll('.accordion article').forEach((row) => {
      row.classList.remove('open');
      row.querySelector('button span').innerHTML = '<i class="fa-solid fa-plus" aria-hidden="true"></i>';
    });

    if (!wasOpen) {
      item.classList.add('open');
      button.querySelector('span').innerHTML = '<i class="fa-solid fa-minus" aria-hidden="true"></i>';
    }
  });
});

const lightbox = document.querySelector('.lightbox');
if (lightbox) {
  const lightboxImage = lightbox.querySelector('img');
  const closeLightbox = () => {
    lightbox.classList.remove('visible');
    lightbox.setAttribute('aria-hidden', 'true');
  };

  document.querySelectorAll('.gallery-grid button').forEach((button) => {
    button.addEventListener('click', () => {
      lightboxImage.src = button.dataset.image;
      lightbox.classList.add('visible');
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });

  lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeLightbox();
  });
}
