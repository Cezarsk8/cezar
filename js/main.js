// Main JavaScript - Portfolio Website

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all features
  initTypingEffect();
  initScrollAnimations();
  initSmoothScroll();
  initContactForm();
  initSkillBars();
});

// Typing Effect for Hero Section
function initTypingEffect() {
  const roles = [
    'Software Development Manager',
    'Technical Product Owner',
    'Team Leadership'
  ];
  
  const typingElement = document.getElementById('typing-text');
  if (!typingElement) return;
  
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  
  function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 500; // Pause before next word
    }
    
    setTimeout(type, typingSpeed);
  }
  
  type();
}

// Scroll Animations using Intersection Observer
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in, .timeline__item');
  
  if (!animatedElements.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  animatedElements.forEach(el => observer.observe(el));
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Contact Form Handling
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  
  const submitBtn = form.querySelector('button[type="submit"]');
  const successMessage = document.getElementById('form-success');
  const errorMessage = document.getElementById('form-error');
  
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Disable button and show loading
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner"></span> Sending...';
    
    // Hide previous messages
    if (successMessage) successMessage.style.display = 'none';
    if (errorMessage) errorMessage.style.display = 'none';
    
    // Validate form
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();
    
    if (!name || !email || !message) {
      showError('Please fill in all fields.');
      resetButton();
      return;
    }
    
    if (!isValidEmail(email)) {
      showError('Please enter a valid email address.');
      resetButton();
      return;
    }
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        form.reset();
        if (successMessage) {
          successMessage.style.display = 'block';
          successMessage.textContent = 'Thank you! Your message has been sent.';
        }
      } else {
        // Fallback to mailto if Formspree fails
        const mailtoLink = `mailto:cezarsevilhano@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
        window.location.href = mailtoLink;
        if (successMessage) {
          successMessage.style.display = 'block';
          successMessage.textContent = 'Opening your email client...';
        }
      }
    } catch (error) {
      // Fallback to mailto on error
      const name = form.querySelector('#name').value.trim();
      const email = form.querySelector('#email').value.trim();
      const message = form.querySelector('#message').value.trim();
      const mailtoLink = `mailto:cezarsevilhano@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
      window.location.href = mailtoLink;
      if (successMessage) {
        successMessage.style.display = 'block';
        successMessage.textContent = 'Opening your email client...';
      }
    }
    
    resetButton();
  });
  
  function showError(msg) {
    if (errorMessage) {
      errorMessage.style.display = 'block';
      errorMessage.textContent = msg;
    }
  }
  
  function resetButton() {
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
  }
  
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}

// Skill Bars Animation
function initSkillBars() {
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  
  if (!skillBars.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });
  
  skillBars.forEach(bar => observer.observe(bar));
}
