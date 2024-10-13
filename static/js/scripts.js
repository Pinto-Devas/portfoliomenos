document.addEventListener('DOMContentLoaded', function () {
  const quadros = document.querySelectorAll('.quadro');

  quadros.forEach(quadro => {
    let imageIndex = 0;
    const images = JSON.parse(quadro.getAttribute('data-images'));

    quadro.addEventListener('mouseenter', function () {
      const interval = setInterval(() => {
        imageIndex = (imageIndex + 1) % images.length;
        quadro.querySelector('img').src = images[imageIndex];
      }, 5000); // Altera a cada 5 segundos

      quadro.addEventListener('mouseleave', function () {
        clearInterval(interval);
        imageIndex = 0;
        quadro.querySelector('img').src = images[0]; // Retorna à primeira imagem
      });
    });
  });
});
