// script.js

// Section visibility animation
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');
  
    sections.forEach(section => {
      section.classList.add('hidden');
    });
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  
  // Smooth scroll to top when clicking on the header
  const scrollToTopButton = document.querySelector('#scrollToTopButton');
  if (scrollToTopButton) {
    scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Hover effect on sections
  const sectionHover = document.querySelectorAll('.section');
  sectionHover.forEach(section => {
    section.addEventListener('mouseover', () => {
      section.style.transform = 'scale(1.05)';
      section.style.transition = 'transform 0.3s ease';
    });
    section.addEventListener('mouseout', () => {
      section.style.transform = 'scale(1)';
    });
  });
  