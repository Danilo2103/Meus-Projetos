let lastScrollTop = 0;
let scrollDirection = "down"; // Inicialmente, definimos a direção como "descendo"
let scrollCount = 0;
const scrollThreshold = 35  ; // Alterado para 35 scrolls para cima

window.addEventListener("scroll", () => {
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop) {
    // O usuário está rolando para baixo
    if (scrollDirection !== "down") {
      scrollCount = 0; // Reiniciar a contagem se a direção mudou para baixo
      scrollDirection = "down";
    }
  } else {
    // O usuário está rolando para cima
    if (scrollDirection !== "up") {
      scrollCount = 0; // Reiniciar a contagem se a direção mudou para cima
      scrollDirection = "up";
    }

    scrollCount++;
  }

  if (scrollCount >= scrollThreshold) {
    document.querySelector("header").style.top = "0"; // Mostrar o cabeçalho
  } else {
    document.querySelector("header").style.top = "-140px"; // Esconder o cabeçalho
  }

  lastScrollTop = currentScrollTop;
});
