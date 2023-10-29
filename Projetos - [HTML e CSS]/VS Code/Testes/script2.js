let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop) {
    // O usuário está rolando para baixo
    document.querySelector("header").style.top = "-140px"; // Esconda o cabeçalho
  } else {
    // O usuário está rolando para cima
    document.querySelector("header").style.top = "0"; // Mostre o cabeçalho
  }

  lastScrollTop = currentScrollTop;
});
