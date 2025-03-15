 // script.js
document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.icon');
    const windows = document.querySelectorAll('.window');
    const closeButtons = document.querySelectorAll('.close-button');
    const startButton = document.getElementById('start-button');
    const startMenu = document.getElementById('start-menu');
    const startMenuItems = document.querySelectorAll('.start-menu li');
  
    // Open window when icon is clicked
    icons.forEach(icon => {
      icon.addEventListener('click', () => {
        const windowId = icon.getAttribute('data-window');
        const window = document.getElementById(`${windowId}-window`);
        window.style.display = 'block';
      });
    });
  
    // Close window when close button is clicked
    closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const window = button.closest('.window');
        window.style.display = 'none';
      });
    });
  
    // Toggle Start Menu
    startButton.addEventListener('click', () => {
      startMenu.style.display = startMenu.style.display === 'block' ? 'none' : 'block';
    });
  
    // Close Start Menu when clicking outside
    document.addEventListener('click', (event) => {
      if (!startButton.contains(event.target) && !startMenu.contains(event.target)) {
        startMenu.style.display = 'none';
      }
    });
  
    // Open window from Start Menu
    startMenuItems.forEach(item => {
      item.addEventListener('click', () => {
        const windowId = item.getAttribute('data-window');
        const window = document.getElementById(`${windowId}-window`);
        window.style.display = 'block';
        startMenu.style.display = 'none';
      });
    });
  });


function showBSOD() {
    const bsod = document.getElementById('bsod');
    bsod.style.display = 'block';
    setTimeout(() => {
      bsod.style.display = 'none';
    }, 5000); // Hide after 5 seconds
  }
  
  // Randomly trigger BSOD
  setInterval(() => {
    if (Math.random() < 0.1) { // 10% chance
      showBSOD();
    }
  }, 30000); // Every 30 seconds



function showNotification() {
    const notification = document.getElementById('mail-notification');
    notification.style.display = 'block';
    setTimeout(() => {
      notification.style.display = 'none';
    }, 5000); // Hide after 5 seconds
  }
  
  setTimeout(showNotification, 10000); // Show after 10 seconds

 