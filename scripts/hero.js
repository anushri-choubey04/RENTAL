fetch('components/hero.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('hero-container').innerHTML = data;
   
    lucide.createIcons();
  
    const slides = document.getElementById('slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    let index = 0;
  
    function updateSlide() {
      slides.style.transform = `translateX(-${index * 100}%)`;
    }
  
    function nextSlide() {
      index = (index + 1) % totalSlides;
      updateSlide();
    }
  
    function prevSlide() {
      index = (index - 1 + totalSlides) % totalSlides;
      updateSlide();
    }
  
    setInterval(nextSlide, 3000); // auto slide every 3s
});
