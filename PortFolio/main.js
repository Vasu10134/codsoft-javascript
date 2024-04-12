// Smooth scrolling
document.querySelectorAll('header nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('show');
});
