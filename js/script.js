// Fecha o menu hamburger depois de clicar em um link no celular
function inicializarNavegacao() {
  const menu = document.getElementById("menuNavegacao");
  if (!menu) return;

  menu.querySelectorAll(".link-navbar").forEach((link) => {
    link.addEventListener("click", () => {
      if (menu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });
}

function inicializarEfeitoNavbar() {
  const navbar = document.getElementById("navbarPrincipal");
  if (!navbar) return;

  const aplicarEstado = () => {
    navbar.classList.toggle("navbar-rolando", window.scrollY > 24);
  };

  aplicarEstado();
  window.addEventListener("scroll", aplicarEstado, { passive: true });
}

// Marca na navbar a seção que está visível na tela
function inicializarLinkAtivo() {
  const links = document.querySelectorAll(".link-navbar");
  const secoes = [...links]
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (secoes.length === 0) return;

  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;
      links.forEach((link) => {
        link.classList.toggle("ativo", link.getAttribute("href") === `#${entrada.target.id}`);
      });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  secoes.forEach((secao) => observador.observe(secao));
}

document.addEventListener("DOMContentLoaded", () => {
  inicializarNavegacao();
  inicializarEfeitoNavbar();
  inicializarLinkAtivo();
});