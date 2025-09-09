

pageYOffset// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Toggle active class for navigation
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
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
