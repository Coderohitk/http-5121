document.addEventListener('DOMContentLoaded', () => {
    const watchButtons = document.querySelectorAll('.watch-button');
  
    watchButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        const buttonText = event.target.innerText;
  
        // Create flying paper plane animation
        const flyingPlane = document.createElement('div');
        flyingPlane.classList.add('flying-plane');
        flyingPlane.innerHTML = `<img src="https://via.placeholder.com/50x50?text=✈️" alt="Paper Plane">`;
        document.body.appendChild(flyingPlane);
  
        // Remove the flying plane after animation ends
        setTimeout(() => {
          flyingPlane.remove();
        }, 2000);
  
        // Change button text to simulate watching action
        if (buttonText === 'Watch Now') {
          event.target.innerText = 'Watching...';
          event.target.style.backgroundColor = '#90EE90'; // Change color to green
        }
      });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const watchButtons = document.querySelectorAll('.watch-button');
  
    watchButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        const buttonText = event.target.innerText;
  
        // Create flying paper plane animation
        const flyingPlane = document.createElement('div');
        flyingPlane.classList.add('flying-plane');
        flyingPlane.innerHTML = `<img src="https://via.placeholder.com/50x50?text=✈️" alt="Paper Plane">`;
        document.body.appendChild(flyingPlane);
  
        // Remove the flying plane after animation ends
        setTimeout(() => {
          flyingPlane.remove();
        }, 2000);
  
        // Change button text to simulate watching action
        if (buttonText === 'Watch Now') {
          event.target.innerText = 'Watching...';
          event.target.style.backgroundColor = '#90EE90'; // Change color to green
        }
      });
    });
  });
    