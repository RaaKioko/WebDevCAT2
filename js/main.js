document.addEventListener('DOMContentLoaded', () => {
    /**
     * 1. Dark / Light Mode Toggle
     * Handles theme switching and persists preference to localStorage.
     */
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const saved = localStorage.getItem('brewTheme') || 'light';
        document.documentElement.setAttribute('data-theme', saved);
        themeToggle.checked = saved === 'dark';
        themeToggle.addEventListener('change', (e) => {
            const theme = e.target.checked ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('brewTheme', theme);
        
    // 6. IntersectionObserver card fade-in
    const cards = document.querySelectorAll('.card');
    if ('IntersectionObserver' in window) {
        cards.forEach(c => c.classList.add('fade-in-card'));
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        cards.forEach(c => observer.observe(c));
    }

    // 7. Scroll To Top Button
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
        });
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
    }

    /**
     * 2. Menu Category Filter
     * Filters menu items based on data-category attributes.
     */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.dataset.filter;
                menuItems.forEach(item => {
                    item.closest('.col-md-4').style.display =
                        (filter === 'all' || item.dataset.category === filter) ? 'block' : 'none';
                
    // 6. IntersectionObserver card fade-in
    const cards = document.querySelectorAll('.card');
    if ('IntersectionObserver' in window) {
        cards.forEach(c => c.classList.add('fade-in-card'));
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        cards.forEach(c => observer.observe(c));
    }

    // 7. Scroll To Top Button
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
        });
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
            
    // 6. IntersectionObserver card fade-in
    const cards = document.querySelectorAll('.card');
    if ('IntersectionObserver' in window) {
        cards.forEach(c => c.classList.add('fade-in-card'));
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        cards.forEach(c => observer.observe(c));
    }

    // 7. Scroll To Top Button
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
        });
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
        
    // 6. IntersectionObserver card fade-in
    const cards = document.querySelectorAll('.card');
    if ('IntersectionObserver' in window) {
        cards.forEach(c => c.classList.add('fade-in-card'));
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        cards.forEach(c => observer.observe(c));
    }

    // 7. Scroll To Top Button
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
        });
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
    }

    // 3. Testimonials Carousel
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length > 0) {
        let current = 0;
        document.querySelector('.next-btn').addEventListener('click', () => {
            slides[current].classList.remove('active');
            current = (current + 1) % slides.length;
            slides[current].classList.add('active');
        
    // 6. IntersectionObserver card fade-in
    const cards = document.querySelectorAll('.card');
    if ('IntersectionObserver' in window) {
        cards.forEach(c => c.classList.add('fade-in-card'));
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        cards.forEach(c => observer.observe(c));
    }

    // 7. Scroll To Top Button
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
        });
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
        document.querySelector('.prev-btn').addEventListener('click', () => {
            slides[current].classList.remove('active');
            current = (current - 1 + slides.length) % slides.length;
            slides[current].classList.add('active');
        
    // 6. IntersectionObserver card fade-in
    const cards = document.querySelectorAll('.card');
    if ('IntersectionObserver' in window) {
        cards.forEach(c => c.classList.add('fade-in-card'));
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        cards.forEach(c => observer.observe(c));
    }

    // 7. Scroll To Top Button
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
        });
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
    }

    // 4. Reservation Form Validation
    const resForm = document.getElementById('reservation-form');
    if (resForm) {
        resForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let valid = true;
            ['res-name', 'res-date', 'res-time', 'res-guests'].forEach(id => {
                const el = document.getElementById(id);
                if (!el.value.trim() || (id === 'res-guests' && (el.value < 1 || el.value > 20))) {
                    el.classList.add('is-invalid');
                    valid = false;
                } else {
                    el.classList.remove('is-invalid');
                }
            
    // 6. IntersectionObserver card fade-in
    const cards = document.querySelectorAll('.card');
    if ('IntersectionObserver' in window) {
        cards.forEach(c => c.classList.add('fade-in-card'));
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        cards.forEach(c => observer.observe(c));
    }

    // 7. Scroll To Top Button
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
        });
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
            if (valid) {
                alert('Reservation confirmed! We look forward to seeing you.');
                resForm.reset();
            }
        
    // 6. IntersectionObserver card fade-in
    const cards = document.querySelectorAll('.card');
    if ('IntersectionObserver' in window) {
        cards.forEach(c => c.classList.add('fade-in-card'));
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        cards.forEach(c => observer.observe(c));
    }

    // 7. Scroll To Top Button
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
        });
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
    }

    // 5. Contact Form Validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let valid = true;
            ['contact-name', 'contact-email', 'contact-message'].forEach(id => {
                const el = document.getElementById(id);
                const empty = !el.value.trim();
                const badEmail = id === 'contact-email' && !el.value.includes('@');
                if (empty || badEmail) {
                    el.classList.add('is-invalid');
                    valid = false;
                } else {
                    el.classList.remove('is-invalid');
                }
            
    // 6. IntersectionObserver card fade-in
    const cards = document.querySelectorAll('.card');
    if ('IntersectionObserver' in window) {
        cards.forEach(c => c.classList.add('fade-in-card'));
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        cards.forEach(c => observer.observe(c));
    }

    // 7. Scroll To Top Button
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
        });
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
            if (valid) {
                alert('Message sent! We will get back to you shortly.');
                contactForm.reset();
            }
        
    // 6. IntersectionObserver card fade-in
    const cards = document.querySelectorAll('.card');
    if ('IntersectionObserver' in window) {
        cards.forEach(c => c.classList.add('fade-in-card'));
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        cards.forEach(c => observer.observe(c));
    }

    // 7. Scroll To Top Button
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
        });
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
    }

    // 6. IntersectionObserver card fade-in
    const cards = document.querySelectorAll('.card');
    if ('IntersectionObserver' in window) {
        cards.forEach(c => c.classList.add('fade-in-card'));
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        cards.forEach(c => observer.observe(c));
    }

    // 7. Scroll To Top Button
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
        });
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
