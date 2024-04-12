function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
  
    document.getElementById('hour').textContent = hours;
    document.getElementById('minute').textContent = minutes;
    document.getElementById('second').textContent = seconds;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initial call to display the clock immediately
  updateClock();
  
  function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const date = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
  
    document.getElementById('hour').textContent = hours;
    document.getElementById('minute').textContent = minutes;
    document.getElementById('second').textContent = seconds;
    document.getElementById('dateDisplay').textContent = `${date}/${month}/${year}`;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initial call to display the clock immediately
  updateClock();
  