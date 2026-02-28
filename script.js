document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.glass, .section-title, .hero-container').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
        observer.observe(el);
    });

    // Active link highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});

// Modal Logic
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore background scrolling
    }
}

// Close modal when clicking outside defined content
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        closeModal(e.target.id);
    }
});

function openCertModal(imgSrc, title, issuer) {
    const modal = document.getElementById('cert-modal');
    const modalImg = document.getElementById('cert-modal-img');
    const modalTitle = document.getElementById('cert-modal-title');
    const modalIssuer = document.getElementById('cert-modal-issuer');

    if (modal && modalImg) {
        modalImg.src = imgSrc;
        modalTitle.textContent = title;
        modalIssuer.textContent = issuer;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}
