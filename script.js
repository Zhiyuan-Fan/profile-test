document.addEventListener('DOMContentLoaded', () => {
    // Terminal typing effect
    const terminalText = document.getElementById('terminal-text');
    const text = `> INITIALIZING SYSTEM...
> LOADING PROFILE DATA...
> ACCESS GRANTED
> WELCOME TO MY DIGITAL SPACE
`;
    let index = 0;
    let currentLine = '';

    function typeText() {
        if (index < text.length) {
            currentLine += text[index];
            terminalText.textContent = currentLine;
            index++;
            setTimeout(typeText, Math.random() * 50 + 50);
        }
    }

    typeText();

    // Skill bars animation
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        bar.style.setProperty('--fill-percentage', `${level}%`);
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Glitch effect on hover for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'none';
        });
    });

    // Parallax effect on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('.cyber-section');
        sections.forEach(section => {
            const speed = 0.5;
            const rect = section.getBoundingClientRect();
            const scroll = window.pageYOffset;
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                section.style.transform = `translateY(${scroll * speed * 0.1}px)`;
            }
        });
    });

    // Add neon flicker effect to headings
    const headings = document.querySelectorAll('.cyber-heading');
    headings.forEach(heading => {
        setInterval(() => {
            if (Math.random() < 0.01) {
                heading.style.textShadow = 'none';
                setTimeout(() => {
                    heading.style.textShadow = '0 0 10px var(--primary-color)';
                }, 50);
            }
        }, 100);
    });
});
