document.querySelectorAll('.watch-button').forEach(button => {
    button.addEventListener('click', (e) => {
      // Create a shooting star element
      const shootingStar = document.createElement('div');
      shootingStar.classList.add('shooting-star');
      
      // Position at button's location
      const rect = e.target.getBoundingClientRect();
      shootingStar.style.left = `${rect.left + window.scrollX + rect.width / 2}px`;
      shootingStar.style.top = `${rect.top + window.scrollY}px`;
      
      document.body.appendChild(shootingStar);
  
      // Remove shooting star after animation
      shootingStar.addEventListener('animationend', () => {
        shootingStar.remove();
      });
    });
  });
  
  // Background color transition
  const colors = ['#1a2a6c', '#b6cee8', '#ff6b6b', '#ff9e9e', '#6a5acd'];
  let index = 0;
  setInterval(() => {
    document.body.style.background = `linear-gradient(135deg, ${colors[index]}, ${colors[(index + 1) % colors.length]})`;
    index = (index + 1) % colors.length;
  }, 5000);
  