document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Select all sections that need to be tracked for navigation highlighting
    const sections = document.querySelectorAll('#hero, #resume, #about, #services, #contact-form, #contact');

    // 1. Smooth Scrolling Functionality 
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Observer for Active Navigation State
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.4 // trigger when 40% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove 'active' class from all links
                navLinks.forEach(link => link.classList.remove('active'));

                // Add 'active' class to the corresponding link
                const targetSectionId = entry.target.id;
                const activeLink = document.querySelector(`.nav-link[href="#${targetSectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});