// Select the hamburger button and the mobile menu
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

// Add click event listener to toggle classes
hamburger.addEventListener('click', () => {
  // Toggle the 'active' class on the hamburger to trigger the X animation
  hamburger.classList.toggle('active');
  
  // Toggle the 'active' class on the menu to slide it down/up
  mobileMenu.classList.toggle('active');
});

// Optional: Close the menu automatically when a link is clicked
const navLinks = document.querySelectorAll('.nav-links li a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
  });
});

// Select the navbar
const nav = document.querySelector('.mobile-nav');

// Listen for scroll events on the window
window.addEventListener('scroll', () => {
  // If the page is scrolled down more than 50 pixels, apply the solid background
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    // If at the top, remove the class to blend with the hero section
    nav.classList.remove('scrolled');
  }
});

// Tutor Image Modal Logic (Mobile Only)
const tutorImageFrame = document.querySelector('.tutor-image-frame');
const tutorModal = document.getElementById('tutorModal');
const closeModal = document.getElementById('closeModal');

if (tutorImageFrame && tutorModal && closeModal) {
    // Open modal on click (only if screen is mobile width)
    tutorImageFrame.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            tutorModal.classList.add('active');
        }
    });

    // Close modal via the X button
    closeModal.addEventListener('click', () => {
        tutorModal.classList.remove('active');
    });

    // Close modal by clicking outside the image on the blurred background
    tutorModal.addEventListener('click', (e) => {
        if (e.target === tutorModal) {
            tutorModal.classList.remove('active');
        }
    });
}