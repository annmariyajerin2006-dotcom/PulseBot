/* ==========================================================================
   6.1 Light Switch Mode Implementation
   ========================================================================== */
const themeToggle = document.querySelector('#theme-toggle');

themeToggle.addEventListener('click', () => {
    // Flip dark class directly over the core document node
    document.body.classList.toggle('dark');
    
    // Evaluate dark mode state to change interactive labels dynamically
    const isDark = document.body.classList.contains('dark');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
});

/* ==========================================================================
   6.2 Back To Top Controller (Scroll Context Events)
   ========================================================================== */
const toTop = document.querySelector('#to-top');

window.addEventListener('scroll', () => {
    // Show structural asset button once tracking baseline is passed
    if (window.scrollY > 300) {
        toTop.classList.add('show');
    } else {
        toTop.classList.remove('show');
    }
});

toTop.addEventListener('click', () => {
    // Glide view context straight back to origin coordinates securely
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ==========================================================================
   6.3 Advanced Scroll Reveal Intersection Systems
   ========================================================================== */
const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Evaluate entrance to execute immediate node rendering transforms
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Unobserve ensures transition triggers exactly once
            observer.unobserve(entry.target);
        }
    });
}, { 
    threshold: 0.15 
});

// Bind element vectors dynamically into the structural lifecycle monitoring
revealItems.forEach((item) => {
    observer.observe(item);
});