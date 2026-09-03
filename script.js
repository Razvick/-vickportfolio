document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your message! This form shell is ready to connect to a backend or service like Formspree.');
  this.reset();
});