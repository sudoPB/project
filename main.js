// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navLinks.classList.remove('active');
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        // Skip if href is just "#"
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Parallax Effect
const parallaxBg = document.querySelector('.parallax-bg');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (parallaxBg) {
        const scrolled = window.scrollY;
        const speed = 0.5;
        const offset = scrolled * speed;
        parallaxBg.style.transform = `translateY(${offset}px)`;
        lastScrollY = scrolled;
    }
});

// Prayer Request Form Handler
const prayerForm = document.getElementById('prayerRequestForm');
const prayerRequests = document.getElementById('prayerRequests');

if (prayerForm) {
    prayerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const request = e.target[1].value;
        
        // Create prayer request card
        const requestCard = document.createElement('div');
        requestCard.className = 'prayer-card';
        requestCard.innerHTML = `
            <h4>${name}</h4>
            <p>${request}</p>
            <small>${new Date().toLocaleDateString()}</small>
        `;
        
        prayerRequests.prepend(requestCard);
        prayerForm.reset();
    });
}

// Contact Form Handler
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });
}

// Sample Events Data
const events = [
    {
        title: 'Sunday Service',
        date: '2024-03-10',
        time: '10:00 AM',
        description: 'Weekly worship service'
    },
    {
        title: 'Bible Study',
        date: '2024-03-12',
        time: '7:00 PM',
        description: 'Weekly Bible study group'
    },
    {
        title: 'Youth Meeting',
        date: '2024-03-15',
        time: '6:00 PM',
        description: 'Youth fellowship and activities'
    }
];

// Populate Events
const eventGrid = document.getElementById('eventGrid');

if (eventGrid) {
    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Time:</strong> ${event.time}</p>
            <p>${event.description}</p>
        `;
        eventGrid.appendChild(eventCard);
    });
}

// Intersection Observer for Animations
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.5s ease-in-out';
    observer.observe(section);
});