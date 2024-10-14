document.addEventListener('DOMContentLoaded', function () {
  const quadros = document.querySelectorAll('.quadro');

  quadros.forEach(quadro => {
    let imageIndex = 0;
    const images = JSON.parse(quadro.getAttribute('data-images'));
    const ring = quadro.querySelector('.ring');

    quadro.addEventListener('mouseenter', function () {
      ring.style.display = 'block'; // Mostra o anel
      ring.classList.add('load'); // Adiciona a animação de carregamento

      const interval = setInterval(() => {
        imageIndex = (imageIndex + 1) % images.length;
        quadro.querySelector('img').src = images[imageIndex];

        // Reinicia a animação do anel
        ring.classList.remove('load'); // Remove a animação
        void ring.offsetWidth; // Força a reflow
        ring.classList.add('load'); // Reinicia a animação
      }, 1500); // Altera a cada 1.5 segundos

      quadro.addEventListener('mouseleave', function () {
        clearInterval(interval);
        ring.style.display = 'none'; // Oculta o anel
        imageIndex = 0;
        quadro.querySelector('img').src = images[0]; // Retorna à primeira imagem
      });
    });
  });
});
