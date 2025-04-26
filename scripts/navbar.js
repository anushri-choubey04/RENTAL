// Load navbar.html into navbar-container
fetch('components/navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar-container').innerHTML = data;
    lucide.createIcons(); // Activate lucide icons after load
  });
