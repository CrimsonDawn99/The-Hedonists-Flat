
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav-menu');
    const openIcon = toggle.querySelector('.icon-open');
    const closeIcon = toggle.querySelector('.icon-close');
  
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
      const isOpen = nav.classList.contains('show');
      openIcon.style.display = isOpen ? 'none' : 'inline';
      closeIcon.style.display = isOpen ? 'inline' : 'none';
    });
  
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('show');
        openIcon.style.display = 'inline';
        closeIcon.style.display = 'none';
      });
    });

    document.addEventListener('click', (e) => {
        const nav = document.getElementById('nav-menu');
        const toggle = document.getElementById('menu-toggle');
      
        if (!nav.contains(e.target) && !toggle.contains(e.target)) {
          nav.classList.remove('show');
          toggle.querySelector('.icon-open').style.display = 'inline';
          toggle.querySelector('.icon-close').style.display = 'none';
        }
      });
      
  

    if (document.querySelector('#review-slider')) {
      new Splide('#review-slider', {
        type: 'loop',
        perPage: 1,
        gap: '1rem',
        autoplay: true,
        pauseOnHover: true,
        interval: 6000,
        speed: 1200,
        arrows: true,
        pagination: true,
      }).mount();
    }
  
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        once: true,
      });
    }
  });