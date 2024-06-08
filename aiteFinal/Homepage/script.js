function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  function generateDots() {
    const container = document.querySelector('.dot-container');
  
    const numberOfDots = 100;
  
    for (let i = 0; i < numberOfDots; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dot.style.top = getRandomNumber(0, window.innerHeight) + 'px';
      dot.style.left = getRandomNumber(0, window.innerWidth) + 'px';
      dot.style.animationDuration = getRandomNumber(10, 30) + 's'; 
      dot.style.animationDelay = getRandomNumber(0, 5) + 's';
      container.appendChild(dot);
    }
  }
  
  window.addEventListener('DOMContentLoaded', generateDots);
  