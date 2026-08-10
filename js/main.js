/* ============================================================
   Personal Business Website — Interactive Scripts
   ============================================================ */

(function () {
    'use strict';

    // ---------- DOM References ----------
    const header = document.getElementById('header');
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelectorAll('.nav__link');
    const scrollTopBtn = document.getElementById('scroll-top');
    const contactForm = document.getElementById('contact-form');
    const sections = document.querySelectorAll('section[id]');

    // ---------- Mobile Menu ----------
    // Create overlay
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
        if (navMenu.classList.contains('show')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    overlay.addEventListener('click', closeMenu);

    // Close menu on nav link click
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            closeMenu();
        });
    });

    // ---------- Header Scroll Effect ----------
    function updateHeader() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // ---------- Active Nav Link ----------
    function updateActiveLink() {
        var scrollY = window.pageYOffset;

        sections.forEach(function (section) {
            var sectionHeight = section.offsetHeight;
            var sectionTop = section.offsetTop - 100;
            var sectionId = section.getAttribute('id');

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
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }

    // ---------- Scroll Reveal Animation ----------
    var revealElements = document.querySelectorAll(
        '.service__card, .portfolio__card, .testimonial__card, .about__highlight, .skill__item'
    );

    function revealOnScroll() {
        var windowHeight = window.innerHeight;
        var revealPoint = 120;

        revealElements.forEach(function (el) {
            var revealTop = el.getBoundingClientRect().top;

            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('revealed');
            }
        });
    }

    // Add reveal class to elements
    revealElements.forEach(function (el) {
        el.classList.add('reveal');
    });

    // ---------- Skill Bar Animation ----------
    var skillBars = document.querySelectorAll('.skill__fill');
    var skillAnimated = false;

    function animateSkillBars() {
        var skillsSection = document.querySelector('.about__skills');
        if (!skillsSection || skillAnimated) return;

        var skillsTop = skillsSection.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (skillsTop < windowHeight - 100) {
            skillAnimated = true;
            skillBars.forEach(function (bar) {
                var width = bar.style.width;
                bar.style.width = '0';
                setTimeout(function () {
                    bar.style.width = width;
                }, 100);
            });
        }
    }

    // ---------- Contact Form ----------
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            var name = document.getElementById('name').value.trim();
            var email = document.getElementById('email').value.trim();
            var serviceSelect = document.getElementById('service');
            var service = serviceSelect.options[serviceSelect.selectedIndex].text;
            var message = document.getElementById('message').value.trim();

            var recipient = 'mtnk2009@163.com';
            var subject = encodeURIComponent('[MarsX 咨询] 来自 ' + name + ' 的安全咨询需求');
            var body = encodeURIComponent(
                '姓名：' + name + '\n' +
                '邮箱：' + email + '\n' +
                '感兴趣的服务：' + service + '\n' +
                '需求描述：\n' + message + '\n\n' +
                '---\n此邮件通过 MarsX 网站联系表单发送'
            );

            window.location.href = 'mailto:' + recipient + '?subject=' + subject + '&body=' + body;

            // Show brief feedback
            var btn = contactForm.querySelector('button[type="submit"]');
            var originalHTML = btn.innerHTML;
            btn.innerHTML = '<i class="fa-solid fa-check"></i> 已打开邮件客户端';
            btn.style.background = 'var(--color-success, #22c55e)';
            setTimeout(function () {
                btn.innerHTML = originalHTML;
                btn.style.background = '';
            }, 3000);
        });
    }

    // ---------- Smooth Scroll for Anchor Links ----------
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;

            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ---------- Combined Scroll Handler (throttled) ----------
    var ticking = false;

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
