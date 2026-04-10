// Main JavaScript — Midnight Architect Portfolio (i18n-aware)

document.addEventListener('DOMContentLoaded', function () {
  initTypingEffect();
  initScrollAnimations();
  initSmoothScroll();
  initContactForm();
  initSkillBars();
  initFloatingNav();
  initAreaToggles();
  initCountUp();
  initLangSwitcher();
});

// ========== TYPING EFFECT ==========
var _typingTimeout = null;

function initTypingEffect(roles) {
  if (!roles) {
    roles = [
      'Engineering & Support Manager',
      'Microservices Architect',
      'AI-Powered Engineering',
      'Technical Leadership'
    ];
  }

  var el = document.getElementById('typing-text');
  if (!el) return;

  // Clear any running instance
  if (_typingTimeout) clearTimeout(_typingTimeout);

  var roleIndex = 0;
  var charIndex = 0;
  var isDeleting = false;
  var speed = 80;

  function type() {
    var current = roles[roleIndex];

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

    _typingTimeout = setTimeout(type, speed);
  }

  type();
}

// Expose for i18n to restart with new roles
window.__restartTyping = function (roles) {
  initTypingEffect(roles);
};

// ========== SCROLL ANIMATIONS ==========
function initScrollAnimations() {
  var animated = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in, .timeline__item');
  if (!animated.length) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  animated.forEach(function (el) { observer.observe(el); });
}

// ========== SMOOTH SCROLL ==========
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ========== CONTACT FORM ==========
function initContactForm() {
  var form = document.getElementById('contact-form');
  if (!form) return;

  var submitBtn = form.querySelector('button[type="submit"]');
  var successMsg = document.getElementById('form-success');
  var errorMsg = document.getElementById('form-error');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    var t = window.__i18nForm || {};

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner"></span> ' + (t.sending || 'Sending...');

    if (successMsg) successMsg.style.display = 'none';
    if (errorMsg) errorMsg.style.display = 'none';

    var name = form.querySelector('#name').value.trim();
    var email = form.querySelector('#email').value.trim();
    var message = form.querySelector('#message').value.trim();

    if (!name || !email || !message) {
      showError(t.errorFields || 'Please fill in all fields.');
      resetButton(t);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError(t.errorEmail || 'Please enter a valid email address.');
      resetButton(t);
      return;
    }

    try {
      var response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        form.reset();
        if (successMsg) {
          successMsg.style.display = 'block';
          successMsg.textContent = t.success || 'Message sent successfully.';
        }
      } else {
        openMailto(name, email, message, t);
      }
    } catch (err) {
      openMailto(name, email, message, t);
    }

    resetButton(t);
  });

  function showError(msg) {
    if (errorMsg) {
      errorMsg.style.display = 'block';
      errorMsg.textContent = msg;
    }
  }

  function resetButton(t) {
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> ' + (t.submit || 'Send Message');
  }

  function openMailto(name, email, message, t) {
    var mailto = 'mailto:cezarsevilhano@gmail.com?subject=Portfolio Contact from ' + encodeURIComponent(name) + '&body=' + encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message);
    window.location.href = mailto;
    if (successMsg) {
      successMsg.style.display = 'block';
      successMsg.textContent = t.emailFallback || 'Opening your email client...';
    }
  }
}

// ========== SKILL BARS ==========
function initSkillBars() {
  var bars = document.querySelectorAll('.skill-bar-fill');
  if (!bars.length) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  bars.forEach(function (bar) { observer.observe(bar); });
}

// ========== FLOATING NAV ==========
function initFloatingNav() {
  var nav = document.getElementById('floating-nav');
  if (!nav) return;

  var sections = document.querySelectorAll('header[id], section[id]');
  var links = nav.querySelectorAll('.floating-nav__link');

  function updateNav() {
    var scrollY = window.scrollY;
    if (scrollY > window.innerHeight * 0.5) {
      nav.classList.add('visible');
    } else {
      nav.classList.remove('visible');
    }

    var current = '';
    sections.forEach(function (section) {
      var top = section.offsetTop - 200;
      if (scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    links.forEach(function (link) {
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
  document.querySelectorAll('.timeline__area-toggle').forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      var content = this.nextElementSibling;

      this.setAttribute('aria-expanded', !expanded);
      content.style.display = expanded ? 'none' : 'block';
    });
  });
}

// ========== COUNT UP ANIMATION ==========
function initCountUp() {
  var counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseInt(el.getAttribute('data-count'), 10);
          animateCount(el, 0, target, 1200);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(function (c) { observer.observe(c); });
}

function animateCount(el, start, end, duration) {
  var startTime = performance.now();

  function update(currentTime) {
    var elapsed = currentTime - startTime;
    var progress = Math.min(elapsed / duration, 1);
    var eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(start + (end - start) * eased);

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// ========== LANGUAGE SWITCHER ==========
function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var lang = this.getAttribute('data-lang');
      if (window.i18n) {
        window.i18n.switchLanguage(lang);
      }
    });
  });
}
