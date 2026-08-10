/* ============================================================
   MarsX — Interactive Scripts
   ============================================================ */
(function () {
    'use strict';

    // ============================================================
    // DOM References
    // ============================================================
    const header = document.getElementById('header');
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelectorAll('.nav__link');
    const scrollTopBtn = document.getElementById('scroll-top');
    const contactForm = document.getElementById('contact-form');
    const sections = document.querySelectorAll('section[id]');

    // ---------- Mobile Menu ----------
    let overlay = document.querySelector('.nav__overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'nav__overlay';
        document.body.appendChild(overlay);
    }

    function openMenu() {
        navMenu.classList.add('show');
        overlay.classList.add('show');
        navToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        navMenu.classList.remove('show');
        overlay.classList.remove('show');
        navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        document.body.style.overflow = '';
    }

    navToggle.addEventListener('click', function () {
        navMenu.classList.contains('show') ? closeMenu() : openMenu();
    });

    overlay.addEventListener('click', closeMenu);

    navLinks.forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });

    // ---------- Header Scroll Effect ----------
    function updateHeader() {
        header.classList.toggle('scrolled', window.scrollY > 50);
    }

    // ---------- Active Nav Link ----------
    function updateActiveLink() {
        const scrollY = window.pageYOffset;

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(function (link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // ---------- Scroll Top Button ----------
    function updateScrollTop() {
        scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
    }

    // ---------- Scroll Reveal Animation ----------
    const revealElements = document.querySelectorAll(
        '.service__card, .portfolio__card, .testimonial__card, .about__highlight, .skill__item'
    );

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const revealPoint = 120;

        revealElements.forEach(function (el) {
            if (el.getBoundingClientRect().top < windowHeight - revealPoint) {
                el.classList.add('revealed');
            }
        });
    }

    revealElements.forEach(function (el) {
        el.classList.add('reveal');
    });

    // ---------- Skill Bar Animation ----------
    const skillBars = document.querySelectorAll('.skill__fill');
    let skillAnimated = false;

    function animateSkillBars() {
        const skillsSection = document.querySelector('.about__skills');
        if (!skillsSection || skillAnimated) return;

        if (skillsSection.getBoundingClientRect().top < window.innerHeight - 100) {
            skillAnimated = true;
            skillBars.forEach(function (bar) {
                const targetWidth = bar.style.width;
                bar.style.width = '0';
                setTimeout(function () {
                    bar.style.width = targetWidth;
                }, 100);
            });
        }
    }

    // ---------- Contact Form ----------
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const serviceSelect = document.getElementById('service');
            const service = serviceSelect.options[serviceSelect.selectedIndex].text;
            const message = document.getElementById('message').value.trim();

            const recipient = 'mtnk2009@163.com';
            const subject = encodeURIComponent('[MarsX] Security Consulting Inquiry from ' + name);
            const body = encodeURIComponent(
                'Name: ' + name + '\n' +
                'Email: ' + email + '\n' +
                'Service of Interest: ' + service + '\n' +
                'Requirements:\n' + message + '\n\n' +
                '---\nThis email was sent via the MarsX website contact form'
            );

            window.location.href = 'mailto:' + recipient + '?subject=' + subject + '&body=' + body;

            // I18n-aware success feedback
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalHTML = btn.innerHTML;
            const dict = typeof window.getDict === 'function' ? window.getDict() : null;
            const lang = typeof window.getCurrentLang === 'function' ? window.getCurrentLang() : 'zh';
            const successText = dict && dict['form.success'] ? dict['form.success'][lang] : '已打开邮件客户端';

            btn.innerHTML = '<i class="fa-solid fa-check"></i> ' + successText;
            btn.style.background = 'var(--primary)';
            btn.style.color = '#0a1628';
            setTimeout(function () {
                btn.innerHTML = originalHTML;
                btn.style.background = '';
                btn.style.color = '';
            }, 3000);
        });
    }

    // ---------- Smooth Scroll for Anchor Links ----------
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ---------- Combined Scroll Handler (throttled) ----------
    let ticking = false;

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                updateHeader();
                updateActiveLink();
                updateScrollTop();
                revealOnScroll();
                animateSkillBars();
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // ---------- Initial Calls ----------
    updateHeader();
    revealOnScroll();
    animateSkillBars();

    // ---------- Keyboard Accessibility ----------
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && navMenu.classList.contains('show')) {
            closeMenu();
        }
    });
})();
