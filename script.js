

// Smooth scrolling for navigation links (only for same-page anchors)
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
        // For other links, allow normal navigation
    });
});

const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        // Close nav menu when a nav link is clicked (especially for mobile)
        if (navToggle.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

// Hamburger menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    // Initialize aria-expanded attribute
    navToggle.setAttribute('aria-expanded', 'false');

    navToggle.addEventListener('click', () => {
        const isActive = navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    });

    // Keyboard accessibility for navToggle (space and enter keys)
    navToggle.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            navToggle.click();
        }
    });
}

// Reset menu state on window resize if needed
window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
        if (navToggle.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    }
});

// Collapsible sections (for future use in topics/roadmap pages)
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}

// Example: Add event listeners for collapsible sections if needed
// document.querySelectorAll('.collapsible').forEach(button => {
//     button.addEventListener('click', function() {
//         const content = this.nextElementSibling;
//         toggleSection(content.id);
//     });
// });

// Pop-up functionality
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');

if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        window.open('login.html', 'loginPopup', 'width=400,height=300');
    });
}

if (registerBtn) {
    registerBtn.addEventListener('click', () => {
        window.open('registration.html', 'registerPopup', 'width=400,height=400');
    });
}

// Scroll-triggered animations using Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('main section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
