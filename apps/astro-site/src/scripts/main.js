/**
 * ANALISTA PROGRAMADOR COMPUTACIONAL - DUOC UC
 * GitHub Pages Dashboard
 */

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Copy code functionality
document.querySelectorAll('.code-window .copy-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
        const codeWindow = btn.closest('.code-window');
        const code = codeWindow.querySelector('code').textContent;

        try {
            await navigator.clipboard.writeText(code);
            btn.innerHTML = '<i class="fas fa-check"></i>';
            btn.style.background = 'var(--success)';

            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-copy"></i>';
                btn.style.background = '';
            }, 2000);
        } catch (err) {
            console.error('Error copying:', err);
        }
    });
});

// Intersection Observer for scroll reveal
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// Add reveal class to animated elements
document.querySelectorAll('.bimestre-card, .stack-category, .recurso-card').forEach((el, index) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(el);
});

// Pipeline Mode Switcher
function switchPipelineMode(mode) {
    // Update buttons
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.mode === mode) {
            btn.classList.add('active');
        }
    });

    // Update pipeline views
    document.querySelectorAll('.pipeline-mode').forEach(pipeline => {
        pipeline.classList.remove('active');
    });

    const targetPipeline = document.getElementById(`pipeline-${mode}`);
    if (targetPipeline) {
        targetPipeline.classList.add('active');
    }
}

// Console Easter Egg
console.log(`
%c╔══════════════════════════════════════════════════════════╗
%c║  ANALISTA PROGRAMADOR COMPUTACIONAL                     ║
%c║  DuocUC - Escuela de Informática                        ║
%c╠══════════════════════════════════════════════════════════╣
%c║  🎓 5 niveles · 20 meses · 25+ asignaturas              ║
%c║  💻 Full Stack · Cloud · Mobile · DevOps                ║
%c║  🚀 { código limpio · buenas prácticas }                ║
%c╚══════════════════════════════════════════════════════════╝
`,
    'color: #00d4ff; font-weight: bold;',
    'color: #00d4ff;',
    'color: #94a3b8;',
    'color: #00d4ff;',
    'color: #7c3aed;',
    'color: #7c3aed;',
    'color: #f472b6;',
    'color: #00d4ff; font-weight: bold;'
);
