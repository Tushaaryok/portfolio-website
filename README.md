<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Personal Portfolio - Frontend Developer</title>
    <!-- <link rel="stylesheet" href="style.css"> -->
    <style>
        /* GLOBAL STYLES & VARIABLES */
:root {
    --bg-dark: #101010;
    --text-light: #ffffff;
    --text-gray: #aaaaaa;
    --accent-red: #cc0000;
    --accent-red-hover: #ff3333;
    --font-family: 'Poppins', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    background-color: var(--bg-dark);
    color: var(--text-light);
    font-family: var(--font-family);
    line-height: 1.7;
}

.section {
    padding: 100px 5%;
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;
}

h1 { font-size: 3.5em; font-weight: 700; line-height: 1.1; }
h2 { font-size: 2.5em; font-weight: 600; margin-bottom: 20px; }
h3 { font-size: 1.5em; font-weight: 600; color: var(--accent-red); margin-bottom: 10px; }
h4 { font-size: 1.2em; font-weight: 600; margin-bottom: 10px; }

p { color: var(--text-gray); }

/* --- BUTTONS --- */
.btn {
    display: inline-block;
    padding: 12px 30px;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 1px;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
}

.primary-btn {
    background-color: var(--accent-red);
    color: var(--text-light);
    border: 2px solid var(--accent-red);
}

.primary-btn:hover {
    background-color: var(--accent-red-hover);
    border-color: var(--accent-red-hover);
}

.secondary-btn {
    background-color: transparent;
    color: var(--text-light);
    border: 2px solid var(--text-light);
}

.secondary-btn:hover {
    background-color: var(--accent-red);
    border-color: var(--accent-red);
}

/* --- NAVIGATION BAR --- */
#navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 5%;
    background-color: var(--bg-dark);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo {
    font-size: 1.5em;
    font-weight: 700;
    color: var(--text-light);
    letter-spacing: 1px;
}

#navbar nav a {
    color: var(--text-gray);
    text-decoration: none;
    margin-left: 20px;
    font-weight: 600;
    transition: color 0.3s;
}

#navbar nav a:hover,
#navbar nav a.active {
    color: var(--accent-red);
}

/* --- HERO SECTION --- */
.hero-section {
    display: flex;
    align-items: center;
    padding-top: 150px; 
    padding-bottom: 100px;
    min-height: 100vh;
}

.hero-content {
    flex: 1;
    max-width: 600px;
}

.greeting {
    font-size: 1.2em;
    color: var(--accent-red);
    margin-bottom: 5px;
}

.hero-content h1 {
    margin-bottom: 20px;
}

.hero-image-container {
    flex: 1;
    position: relative;
    max-width: 450px;
    height: 500px;
    margin-left: 50px;
}

.hero-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    position: relative;
    z-index: 2;
}

.red-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--accent-red);
    mix-blend-mode: multiply; 
    opacity: 0.6;
    z-index: 3;
    border-radius: 50%; /* Making it circular like in the resume image */
}

/* --- RESUME SECTION STYLES --- */
.resume-section {
    padding-top: 50px; 
}

.resume-grid {
    display: grid;
    grid-template-columns: 1fr 2fr; 
    gap: 40px;
}

/* Left Column: Profile Card */
.resume-left {
    padding-top: 50px;
}

.profile-card {
    background-color: #1a1a1a;
    border-radius: 10px;
    padding: 30px;
    position: sticky; 
    top: 100px;
}

.card-image-container {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 20px;
    position: relative;
    border: 3px solid var(--accent-red);
}

.card-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    position: relative;
    z-index: 2;
}

.profile-card h3 {
    text-align: center;
    font-size: 1.8em;
    color: var(--text-light);
    margin-bottom: 5px;
}

.profile-card .role {
    text-align: center;
    color: var(--accent-red);
    font-weight: 600;
    margin-bottom: 20px;
}

.profile-card hr {
    border: none;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.1);
    margin: 20px 0;
}

.contact-item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

.contact-item i {
    font-size: 1.2em;
    color: var(--accent-red);
    margin-right: 15px;
    width: 20px;
    text-align: center;
}

.contact-item .label {
    display: block;
    font-size: 0.8em;
    color: var(--text-gray);
    font-weight: 300;
}

/* Right Column: Details */
.resume-right {
    padding-top: 50px;
}

.resume-block {
    margin-bottom: 40px;
}

.resume-block h4 {
    font-size: 1.5em;
    color: var(--text-light);
    margin-bottom: 15px;
    display: flex;
    align-items: center;
}

.resume-block h4 i {
    color: var(--accent-red);
    margin-right: 10px;
}

.timeline-item {
    margin-bottom: 15px;
    padding-left: 20px;
    border-left: 2px solid var(--accent-red);
    position: relative;
}

.timeline-item::before {
    content: '';
    position: absolute;
    left: -5px;
    top: 5px;
    width: 10px;
    height: 10px;
    background-color: var(--accent-red);
    border-radius: 50%;
}

.timeline-title {
    font-weight: 600;
    color: var(--text-light);
}

.timeline-date {
    font-size: 0.9em;
    color: var(--text-gray);
}

.skill-list {
    list-style: none;
    color: var(--text-gray);
}

.skill-list li {
    margin-bottom: 5px;
    padding-left: 10px;
    position: relative;
}

.skill-list li::before {
    content: '•';
    color: var(--accent-red);
    position: absolute;
    left: 0;
}

.github-link {
    color: var(--accent-red);
    text-decoration: none;
    word-break: break-all;
}

/* --- ABOUT SECTION --- */
.about-section {
    display: flex;
    align-items: center;
    gap: 50px;
}

.about-image-container {
    flex: 1;
    position: relative;
    max-width: 350px;
    height: 400px;
}

.about-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    position: relative;
    z-index: 2;
}

.about-content {
    flex: 2;
}

.section-title-box {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.section-title-box .dot {
    color: var(--accent-red);
    font-size: 2em;
    margin-right: 10px;
    line-height: 0;
}

.skills-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 30px 0;
}

.skill-tag {
    background-color: #222;
    color: var(--text-light);
    padding: 8px 15px;
    border-radius: 5px;
    font-size: 0.9em;
    font-weight: 400;
    border: 1px solid var(--accent-red);
}

/* --- SERVICES SECTION --- */
.services-section {
    text-align: center;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    margin-top: 50px;
}

.service-item {
    background-color: #1a1a1a;
    padding: 40px 20px;
    border-radius: 10px;
    transition: transform 0.3s, background-color 0.3s;
    border-top: 3px solid transparent;
}

.service-item:hover {
    transform: translateY(-5px);
    background-color: #1f1f1f;
    border-top-color: var(--accent-red);
}

.service-item i {
    font-size: 2.5em;
    color: var(--accent-red);
    margin-bottom: 15px;
}

/* --- CONTACT FORM SECTION STYLES --- */
.contact-form-section {
    text-align: center;
    padding: 100px 5%;
}

.contact-form {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 40px;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 15px;
    background-color: #222;
    border: 1px solid #333;
    color: var(--text-light);
    border-radius: 5px;
    font-size: 1em;
    outline: none;
    transition: border-color 0.3s;
}

.contact-form input:focus,
.contact-form textarea:focus {
    border-color: var(--accent-red);
}

.contact-form textarea {
    resize: vertical;
}

.submit-btn {
    align-self: flex-start;
    margin-top: 10px;
}

/* --- CONTACT / FOOTER SECTION --- */
.contact-section {
    background-color: #0b0b0b;
    text-align: center;
    padding: 80px 5%;
}

.contact-section h2 {
    font-size: 3em;
    margin-bottom: 10px;
}

.contact-section .tagline {
    margin-bottom: 30px;
}

.social-links {
    margin-top: 40px;
}

.social-links a {
    color: var(--text-gray);
    font-size: 1.5em;
    margin: 0 15px;
    transition: color 0.3s;
}

.social-links a:hover {
    color: var(--accent-red);
}

.copyright {
    margin-top: 20px;
    font-size: 0.8em;
    color: #444;
}

/* --- MEDIA QUERIES (Responsiveness) --- */
@media (max-width: 992px) {
    .hero-section, .about-section {
        flex-direction: column;
        text-align: center;
    }

    .hero-image-container, .about-image-container {
        margin: 40px auto 0;
        width: 80%;
        max-width: 400px;
        height: 450px;
    }

    .hero-content {
        max-width: 100%;
    }
    
    .resume-grid {
        grid-template-columns: 1fr; /* Stack columns on smaller screens */
    }

    .profile-card {
        position: relative; /* Remove sticky on mobile/tablet */
        top: initial;
    }

    .resume-left {
        padding-top: 0; 
    }

    .resume-right {
        padding-top: 0;
    }

    .submit-btn {
        align-self: center; /* Center button on smaller screens */
    }
}

@media (max-width: 576px) {
    h1 { font-size: 2.5em; }
    h2 { font-size: 2em; }
    .section { padding: 80px 5%; }

    #navbar nav {
        display: none; /* Hide nav on very small screens */
    }

    #navbar {
        justify-content: center;
    }

    .contact-section h2 {
        font-size: 2em;
    }
}
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>

<body>

    <header id="navbar">
        <div class="logo">
            Tushaaryok
        </div>
        <nav>
            <a href="#hero" class="nav-link active" data-section="hero">HOME</a>
            <a href="#resume" class="nav-link" data-section="resume">RESUME</a>
            <a href="#about" class="nav-link" data-section="about">ABOUT ME</a>
            <a href="#contact-form" class="nav-link" data-section="contact-form">CONTACT</a>
        </nav>
    </header>

    <section id="hero" class="section hero-section">
        <div class="hero-content">
            <p class="greeting">Hello, My Name Is Tushar</p>
            <h1>Kothariya Tushar</h1>
            <p class="tagline">
                A passionate and dedicated junior web developer, driven by the ever-evolving world of technology and its
                limitless possibilities.
            </p>
            <a href="#contact-form" class="btn primary-btn">Contact Me</a>
        </div>
        <div class="hero-image-container">
            <img src="photo.png" alt="Your Name - Web Developer" class="hero-photo">
            <div class="red-overlay"></div>
        </div>
    </section>

    <section id="resume" class="section resume-section">
        <h2 class="section-heading"><i class="fa-solid fa-file-lines"></i> Resume</h2>

        <div class="resume-grid">
            <div class="resume-left">
                <div class="profile-card">
                    <div class="card-image-container">
                        <img src="img.png" alt="Your Name" class="card-photo">
                        <div class="red-overlay"></div>
                    </div>
                    <h3> Kothariya Tushar</h3>
                    <p class="role">Fullstack Developer</p>
                    <hr>
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <div>
                            <span class="label">E-MAIL</span>
                            <span>kothariyatushar24@gmail.com</span>
                        </div>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <div>
                            <span class="label">PHONE</span>
                            <span>(+91) 96 6289 8221</span>
                        </div>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <div>
                            <span class="label">ADDRESS</span>
                            <span>sangam char rashta , vadodara-390006.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="resume-right">
                <div class="resume-block">
                    <h4><i class="fas fa-user-circle"></i> Profile</h4>
                    <p>A highly motivated and detail-oriented junior front-end developer with a passion for creating
                        innovative and visually appealing web applications. Proficient in **HTML, CSS, JavaScript, and
                        React**, with experience in developing responsive and user-friendly websites. Strong
                        problem-solving skills and a desire to learn and grow in a dynamic and fast-paced environment. A
                        collaborative team player with good communication skills and a commitment to delivering
                        high-quality work.</p>
                </div>

                <div class="resume-block">
                    <h4><i class="fas fa-graduation-cap"></i> Education</h4>
                    <div class="timeline-item">
                        <p class="timeline-title">Javascript from scratch, Software Development Academy sigma university
                        </p>
                        <span class="timeline-date">1.09.2024 - 25.03.2027</span>
                    </div>
                    <div class="timeline-item">
                        <p class="timeline-title">12th- shree vallbh vidhyalaya </p>
                        <span class="timeline-date">3.03.23 - 19.02.2024</span>
                    </div>
                </div>

                <div class="resume-block">
                    <h4><i class="fas fa-briefcase"></i> Work Experience</h4>
                    <div class="timeline-item">
                        <p class="timeline-title">Assistant Manager, Move One SHPK</p>
                        <span class="timeline-date">09.2020 - 08.2022</span>
                    </div>
                </div>

                <div class="resume-skills-group">
                    <div class="resume-block">
                        <h4>Languages</h4>
                        <p class="skill-language">Fullstack</p>
                        <p class="skill-language">English - B2</p>
                    </div>

                    <div class="resume-block">
                        <h4>Soft Skills</h4>
                        <ul class="skill-list">
                            <li>Communication skills</li>
                            <li>Attention to detail</li>
                            <li>Teamwork</li>
                            <li>Problem Solving skills</li>
                        </ul>
                    </div>

                    <div class="resume-block">
                        <h4><i class="fas fa-code"></i> Technical Skills</h4>
                        <ul class="skill-list">
                            <li>Knowledge of HTML and CSS,js</li>
                            <li>python with database</li>
                            <li>Understanding of web development frameworks (React, NextJs)</li>
                            <li>database mysql,mogodb</li>
                        </ul>
                    </div>

                    <div class="resume-block">
                        <h4><i class="fab fa-github"></i> GitHub</h4>
                        <a href="https://github.com/Tushaaryok" target="_blank"
                            class="github-link">https://github.com/Tushaaryok</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="section about-section">
        <div class="about-image-container">
            <img src="photo.png" alt="Your Name professional photo" class="about-photo">
            <div class="red-overlay"></div>
        </div>
        <div class="about-content">
            <div class="section-title-box">
                <span class="dot">•</span>
                <h3>About Me</h3>
            </div>
            <p class="who-am-i-text">
                My name is kothariya tushar, and I am a passionate frontend web developer. I have always been fascinated
                by the intersection of design and technology, and I am thrilled to be able to bring my creative ideas to
                life through coding. My primary focus is on **frontend development**, where I excel in creating
                beautiful user interfaces that are both visually appealing and highly functional.
            </p>
            <p class="who-am-i-text">
                I am proficient in core web technologies like HTML, CSS, and JavaScript, and comfortable with modern
                frameworks such as React and Next.js. I am well-versed in responsive design principles, ensuring that
                websites look great on any device.
            </p>

            <div class="skills-grid">
                <span class="skill-tag">Html5</span>
                <span class="skill-tag">Css3</span>
                <span class="skill-tag">Javascript</span>
                <span class="skill-tag">Sass</span>
                <span class="skill-tag">React Js</span>
                <span class="skill-tag">python</span>
                <span class="skill-tag">mysql</span>
                <span class="skill-tag">mogodb</span>
                <span class="skill-tag">boostrap</span>
                <span class="skill-tag">j qeary</span>
            </div>

            <a href="Resume.pdf" download class="btn secondary-btn">Download CV</a>
        </div>
    </section>

    <section id="services" class="section services-section">
        <div class="section-title-box">
            <span class="dot">•</span>
            <h3>My Services</h3>
        </div>
        <h2>What Can I Do</h2>

        <div class="services-grid">
            <div class="service-item">
                <i class="fas fa-pencil-ruler"></i>
                <h4>Creative Design</h4>
                <p>Leveraging artistic sense and modern principles to craft visually appealing and engaging user
                    experiences.</p>
            </div>
            <div class="service-item">
                <i class="fas fa-code"></i>
                <h4>Clean Code</h4>
                <p>Writing code that is structured, robust, reusable, and maintainable by strictly following coding best
                    practices.</p>
            </div>
            <div class="service-item">
                <i class="fas fa-desktop"></i>
                <h4>User Interface</h4>
                <p>Creating intuitive and user-friendly interfaces that prioritize usability and a seamless user
                    experience.</p>
            </div>
            <div class="service-item">
                <i class="fas fa-user-check"></i>
                <h4>User Experience</h4>
                <p>Understanding user behaviors, needs, and preferences to create interfaces that are efficient and
                    effective for users.</p>
            </div>
            <div class="service-item">
                <i class="fas fa-hands-helping"></i>
                <h4>Fast Support</h4>
                <p>Addressing and resolving any reported issues or inquiries related to the delivered work promptly.</p>
            </div>
            <div class="service-item">
                <i class="fas fa-lightbulb"></i>
                <h4>Branding</h4>
                <p>Creating consistent and cohesive brand experiences through the use of logos, colors, typography, and
                    visual style guides.</p>
            </div>
        </div>
    </section>

    <section id="contact-form" class="section contact-form-section">
        <h2>I'd love to hear from you!!</h2>
        <form class="contact-form">
            <input type="text" name="first-name" placeholder="First Name" required>
            <input type="text" name="last-name" placeholder="Last Name" required>
            <input type="email" name="email" placeholder="E-mail" required>
            <textarea name="message" placeholder="Message..." rows="6" required></textarea>
            <button type="submit" class="btn primary-btn submit-btn">Submit</button>
        </form>
    </section>

    <footer id="contact" class="section contact-section">
        <h2>Lets work together on your next project</h2>
        <p class="tagline">Collaboration is key! Let's join forces and combine our skills to tackle your next project
            with a powerful synergy that guarantees success.</p>
        <a href="kothariyatushar24@gmail.com" class="btn primary-btn">Contact</a>


        <div class="social-links">
            <a href="https://www.instagram.com/tushaaryok_"><i class="fab fa-instagram"></i></a>
            <a href=""><i class="fab fa-facebook"></i></a>
            <a href=""><i class="fab fa-linkedin"></i></a>
            <a href="https://www.youtube.com/@tushaaryokk"><i class="fab fa-youtube"></i></a>

        </div>
        <p class="copyright"> Designed inspired by Tushaaryok</p>
    </footer>

    <!-- <script src="index.js"></script> -->
    <style>
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
});</style>
</body>

</html>
