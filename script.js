document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (name && email && message) {
      alert("Thanks for reaching out! I'll get back to you shortly.");
      this.reset();
    } else {
      alert("Please fill in all the fields.");
    }
  });
  
  const toggleButton = document.getElementById('toggle-dark');
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleButton.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  });
  