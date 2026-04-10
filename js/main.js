// Main JavaScript — Midnight Architect Portfolio

document.addEventListener('DOMContentLoaded', function () {
  initTypingEffect();
  initScrollAnimations();
  initSmoothScroll();
  initContactForm();
  initSkillBars();
  initFloatingNav();
  initAreaToggles();
  initCountUp();
});

// ========== TYPING EFFECT ==========
function initTypingEffect() {
  const roles = [
    'Engineering & Support Manager',
    'Microservices Architect',
    'AI-Powered Engineering',
    'Technical Leadership'
  ];

  const el = document.getElementById('typing-text');
  if (!el) return;

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let speed = 80;

  function type() {
    const current = roles[roleIndex];

    if (isDeleting) {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      speed = 40;
    } else {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      speed = 80;
    }

    if (!isDeleting && charIndex === current.length) {
      isDeleting = true;
      speed = 2500;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      speed = 400;
    }

    setTimeout(type, speed);
  }

  type();
}

// ========== SCROLL ANIMATIONS ==========
function initScrollAnimations() {
  const animated = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in, .timeline__item');
  if (!animated.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  animated.forEach((el) => observer.observe(el));
}

// ========== SMOOTH SCROLL ==========
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ========== CONTACT FORM ==========
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');
  const successMsg = document.getElementById('form-success');
  const errorMsg = document.getElementById('form-error');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner"></span> Sending...';

    if (successMsg) successMsg.style.display = 'none';
    if (errorMsg) errorMsg.style.display = 'none';

    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();

    if (!name || !email || !message) {
      showError('Please fill in all fields.');
      resetButton();
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError('Please enter a valid email address.');
      resetButton();
      return;
    }

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        form.reset();
        if (successMsg) {
          successMsg.style.display = 'block';
          successMsg.textContent = 'Message sent successfully. I\'ll get back to you soon.';
        }
      } else {
        openMailto(name, email, message);
      }
    } catch {
      openMailto(name, email, message);
    }

    resetButton();
  });

  function showError(msg) {
    if (errorMsg) {
      errorMsg.style.display = 'block';
      errorMsg.textContent = msg;
    }
  }

  function resetButton() {
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
  }

  function openMailto(name, email, message) {
    const mailto = `mailto:cezarsevilhano@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    window.location.href = mailto;
    if (successMsg) {
      successMsg.style.display = 'block';
      successMsg.textContent = 'Opening your email client...';
    }
  }
}

// ========== SKILL BARS ==========
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-fill');
  if (!bars.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  bars.forEach((bar) => observer.observe(bar));
}

// ========== FLOATING NAV ==========
function initFloatingNav() {
  const nav = document.getElementById('floating-nav');
  if (!nav) return;

  const sections = document.querySelectorAll('header[id], section[id]');
  const links = nav.querySelectorAll('.floating-nav__link');

  // Show/hide nav based on scroll position
  function updateNav() {
    const scrollY = window.scrollY;
    if (scrollY > window.innerHeight * 0.5) {
      nav.classList.add('visible');
    } else {
      nav.classList.remove('visible');
    }

    // Update active link
    let current = '';
    sections.forEach((section) => {
      const top = section.offsetTop - 200;
      if (scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    links.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
}

// ========== AREA TOGGLES (RAZAC experience) ==========
function initAreaToggles() {
  const toggles = document.querySelectorAll('.timeline__area-toggle');

  toggles.forEach((toggle) => {
    toggle.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      const content = this.nextElementSibling;

      this.setAttribute('aria-expanded', !expanded);

      if (expanded) {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  });
}

// ========== COUNT UP ANIMATION ==========
function initCountUp() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-count'), 10);
          animateCount(el, 0, target, 1200);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((c) => observer.observe(c));
}

function animateCount(el, start, end, duration) {
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(start + (end - start) * eased);

    el.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}
