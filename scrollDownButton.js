document.querySelector('.scroll-down-button').addEventListener('click', function() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  });
  