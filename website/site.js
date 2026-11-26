const HEADER_FALLBACK = `
<div class="topline">
  <div class="wrap top-inner">
    <span><b>INDEPENDENT</b> AEROSPACE TESTING &amp; DEVELOPMENT</span>
    <div class="top-contact">
      <a href="tel:+441865407587"><i class="fa-solid fa-phone" aria-hidden="true"></i> +44 (0)1865 407587</a>
      <span class="dot">·</span>
      <span><i class="fa-solid fa-location-dot" aria-hidden="true"></i> Abingdon, Oxfordshire</span>
    </div>
  </div>
</div>
<header class="site-header shared-header">
  <div class="wrap nav-wrap">
    <a class="brand" href="index.html#home" aria-label="Mix14 home"><img src="images/bkpam2302204_logo_2 1.svg" alt="Mix14"></a>
    <button class="menu-toggle" aria-label="Toggle navigation" aria-expanded="false"><i class="fa-solid fa-bars" aria-hidden="true"></i></button>
    <nav class="main-nav">
      <a href="index.html#home" data-nav="home">Home</a>
      <a href="testing.html" data-nav="testing">Testing</a>
      <a href="index.html#research">R&amp;D</a>
      <a href="index.html#approach">Our Approach</a>
      <a href="index.html#faqs">FAQ’s</a>
      <a href="index.html#contact">Contact</a>
      <a class="button button-red nav-cta" href="#contact">TALK TO AN ENGINEER <span><i class="fa-solid fa-arrow-right arrow-diag" aria-hidden="true"></i></span></a>
    </nav>
  </div>
</header>`;

const FOOTER_FALLBACK = `
<section class="contact-band" id="contact">
  <div class="wrap contact-inner">
    <div>
      <h2>Have a test or<br>materials question?</h2>
      <p>Talk directly with Mix14 about your requirement and the next best step.</p>
    </div>
    <div class="contact-actions">
      <a href="mailto:gary@mix14.co.uk" class="button button-dark">EMAIL THE TEAM <span><i class="fa-solid fa-arrow-right arrow-diag" aria-hidden="true"></i></span></a>
      <a href="tel:+441865407587" class="button button-outline-dark"><i class="fa-solid fa-phone" aria-hidden="true"></i> &nbsp;+44 (0)1865 407587</a>
    </div>
  </div>
</section>
<footer class="footer shared-footer">
  <div class="wrap">
    <div class="footer-grid">
      <div class="footer-about">
        <a href="index.html#home" class="brand brand-light"><img loading="lazy" decoding="async" src="images/bkpam2302204_logo_2 2.svg" alt="Mix14"></a>
        <p>Independent aerospace flammability and materials testing, supported by practical research and development.</p>
        <div class="socials">
          <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f" aria-hidden="true"></i></a>
          <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>
          <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in" aria-hidden="true"></i></a>
        </div>
      </div>
      <div>
        <h3>Links</h3>
        <a href="index.html#home">Home</a>
        <a href="testing.html">Testing</a>
        <a href="index.html#faqs">FAQ’s</a>
        <a href="#contact">Contact</a>
        <a href="#">Policies</a>
      </div>
      <div>
        <h3>Explore</h3>
        <a href="testing.html">Flammability testing</a>
        <a href="index.html#testing">Materials testing</a>
        <a href="index.html#research">Research &amp; development</a>
        <a href="index.html#approach">Our approach</a>
      </div>
      <div class="footer-contact">
        <h3>Contact</h3>
        <p><i class="fa-solid fa-phone" aria-hidden="true"></i> <a href="tel:+441865407587">+44 (0)1865 407587</a></p>
        <p><i class="fa-solid fa-envelope" aria-hidden="true"></i> <a href="mailto:gary@mix14.co.uk">gary@mix14.co.uk</a></p>
        <p><i class="fa-solid fa-location-dot" aria-hidden="true"></i> <span>Unit 112, Culham No1 Site Station Road, Abingdon Oxfordshire OX14 3DA</span></p>
      </div>
    </div>
    <div class="copyright">Copyright © 2026. <b>Mix 14.</b> All Rights Reserved.</div>
  </div>
</footer>`;

function ensureStylesheet(href) {
  const exists = [...document.querySelectorAll('link[rel="stylesheet"]')]
    .some((link) => (link.getAttribute('href') || '').endsWith(href));
  if (exists) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
}

async function loadComponent(url, fallbackHtml) {
  if (window.location.protocol !== 'file:') {
    try {
      const response = await fetch(url, { cache: 'no-cache' });
      if (response.ok) return await response.text();
    } catch (_) {
      // Fall back to embedded markup if fetch is unavailable.
    }
  }
  return fallbackHtml;
}

function getPageName() {
  const file = window.location.pathname.split('/').pop().toLowerCase();
  return file || 'index.html';
}

function configureHeaderLinks(container) {
  const page = getPageName();
  const isHome = page === 'index.html';
  const testingPages = new Set([
    'testing.html',
    'vertical-burn.html',
    'horizontal-burn.html',
    'burn-45-degree.html',
    'wire-burn.html',
    'heat-release.html',
    'repaired-cargo-liners.html',
    'seat-cushion-oil-burner.html',
    'smoke-emissions.html',
  ]);
  const navLinks = [...container.querySelectorAll('.main-nav a')];

  navLinks.forEach((link) => link.classList.remove('active'));
  let targetNav = null;
  if (isHome) {
    targetNav = container.querySelector('[data-nav="home"]');
  } else if (testingPages.has(page)) {
    targetNav = container.querySelector('[data-nav="testing"]');
  } else {
    targetNav = navLinks.find((link) => (link.getAttribute('href') || '').toLowerCase() === page);
  }
  if (targetNav) targetNav.classList.add('active');

  if (isHome) {
    container.querySelectorAll('a[href^="index.html#"]').forEach((link) => {
      link.setAttribute('href', link.getAttribute('href').replace(/^index\.html/, ''));
    });
  }
}

function configureFooterLinks(container) {
  if (getPageName() !== 'index.html') return;
  container.querySelectorAll('a[href^="index.html#"]').forEach((link) => {
    link.setAttribute('href', link.getAttribute('href').replace(/^index\.html/, ''));
  });
}

function bindNavigation() {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.main-nav');
  if (!menuButton || !navigation) return;

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

function initLazySections() {
  const lazySections = document.querySelectorAll('main > section, .contact-band, footer');
  if (!lazySections.length) return;

  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });

    lazySections.forEach((section, index) => {
      if (index === 0) {
        section.classList.add('is-visible');
        return;
      }
      section.classList.add('lazy-section');
      sectionObserver.observe(section);
    });
  } else {
    lazySections.forEach((section) => section.classList.add('is-visible'));
  }
}

async function initSharedLayout() {
  ensureStylesheet('components/header.css');
  ensureStylesheet('components/footer.css');

  let headerSlot = document.getElementById('site-header');
  if (!headerSlot && !document.querySelector('header.site-header')) {
    headerSlot = document.createElement('div');
    headerSlot.id = 'site-header';
    document.body.prepend(headerSlot);
  }

  let footerSlot = document.getElementById('site-footer');
  if (!footerSlot && !document.querySelector('footer.footer')) {
    footerSlot = document.createElement('div');
    footerSlot.id = 'site-footer';
    const main = document.querySelector('main');
    if (main) main.insertAdjacentElement('afterend', footerSlot);
    else document.body.appendChild(footerSlot);
  }

  const [headerHtml, footerHtml] = await Promise.all([
    headerSlot ? loadComponent('components/header.html', HEADER_FALLBACK) : Promise.resolve(null),
    footerSlot ? loadComponent('components/footer.html', FOOTER_FALLBACK) : Promise.resolve(null),
  ]);

  if (headerSlot && headerHtml) {
    const temp = document.createElement('div');
    temp.innerHTML = headerHtml.trim();
    configureHeaderLinks(temp);
    headerSlot.replaceWith(...temp.childNodes);
  }

  if (footerSlot && footerHtml) {
    const temp = document.createElement('div');
    temp.innerHTML = footerHtml.trim();
    configureFooterLinks(temp);
    footerSlot.replaceWith(...temp.childNodes);
  }

  bindNavigation();
  initLazySections();
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

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSharedLayout);
} else {
  initSharedLayout();
}
