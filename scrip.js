// Menu mobile toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('span');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.textContent = '☀';
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    themeIcon.textContent = '☀';
}

// Back to top button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Real-time clock
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('fr-FR');
    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();

// Form validation
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    
    // Validate name
    if (nameInput.value.trim() === '') {
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }
    
    // Validate message
    if (messageInput.value.trim().length < 10) {
        messageError.style.display = 'block';
        isValid = false;
    } else {
        messageError.style.display = 'none';
    }
    
    // If form is valid, show success message
    if (isValid) {
        formStatus.textContent = 'Message envoyé avec succès !';
        formStatus.className = 'success';
        formStatus.style.display = 'block';
        
        // Reset form
        contactForm.reset();
        
        // Hide success message after 3 seconds
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 3000);
    }
});
