document.querySelectorAll('.carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel_track');
    const imgs   = track.querySelectorAll('img');
    const dotsEl = carousel.querySelector('.carousel_dots');
    let current  = 0;

    imgs.forEach((_, i) => {
        const d = document.createElement('span');
        d.classList.add('dot');
        if (i === 0) d.classList.add('active');
        d.addEventListener('click', () => goTo(i));
        dotsEl.appendChild(d);
    });

    const dots = dotsEl.querySelectorAll('.dot');

    function goTo(index) {
        current = (index + imgs.length) % imgs.length;
        track.style.transform = `translateX(-${current * 100}%)`;
        dots.forEach(d => d.classList.remove('active'));
        dots[current].classList.add('active');
    }

    carousel.querySelector('.prev').addEventListener('click', () => goTo(current - 1));
    carousel.querySelector('.next').addEventListener('click', () => goTo(current + 1));
});

// ── Hamburguesa ──
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mainNav = document.getElementById('main_nav');

    hamburger.addEventListener('click', () => {
        const isOpen = mainNav.classList.toggle('nav_open');
        hamburger.classList.toggle('active', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen);
    });

    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('nav_open');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
});