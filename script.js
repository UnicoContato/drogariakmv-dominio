document.getElementById('year').textContent = new Date().getFullYear();

const navbar = document.getElementById('navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 50) {
        navbar.classList.add('bg-white/80', 'shadow-lg');
        navbar.classList.remove('glass');
    } else {
        navbar.classList.remove('bg-white/80', 'shadow-lg');
        navbar.classList.add('glass');
    }

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }

    lastScrollY = currentScrollY;
});

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

const modal = document.getElementById('privacy-modal');
const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');

openModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
});

closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    }
});

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});