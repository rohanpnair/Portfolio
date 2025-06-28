document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuBtn = document.querySelector('.mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  mobileMenuBtn.addEventListener('click', function () {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  });
});
