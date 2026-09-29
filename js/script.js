const projetos = [
  {
    nome: "Analisador de Vendas",
    descricao: "Leitura de planilhas de vendas e geração de resumos por produto e período.",
    tecnologias: ["Python", "Pandas", "SQL"],
    imagem: "",
    icone: "bi-bar-chart-line",
    link: "",
    repositorio: ""
  },
  {
    nome: "Auto Fácil",
    descricao: "Sistema acadêmico de gestão para revenda de veículos, com cadastro e controle em banco de dados local.",
    tecnologias: ["Python", "Tkinter", "SQLite"],
    imagem: "img/projetos/auto-facil.png",
    icone: "bi-car-front",
    link: "",
    repositorio: "https://github.com/LuizHenri01/AutoFacilDF"
  }
];


/* Certificações.
   lembrar de marcar placeholder: true enquanto o item for apenas exemplo de layout. */
const certificacoes = [
  {
    nome: "Introdução à Cibersegurança",
    instituicao: "Cisco Networking Academy — YDUQS-Diretoria de Ensino",
    ano: "2026",
    descricao: "Fundamentos de cibersegurança: ameaças, ataques comuns e boas práticas de proteção.",
    link: "",
    placeholder: false
  }
];

/* Minha jornada: etapas em ordem cronológica de aprendizado. */
const jornada = [
  { titulo: "Ciência da Computação", descricao: "Início da graduação e da base teórica." },
  { titulo: "Fundamentos de programação", descricao: "Lógica, algoritmos e estruturas básicas." },
  { titulo: "Python", descricao: "Primeira linguagem principal, usada até hoje no back-end e em automação." },
  { titulo: "Desenvolvimento web", descricao: "HTML5, CSS3 e JavaScript para construir interfaces." },
  { titulo: "Git e GitHub", descricao: "Versionamento e organização dos projetos." },
  { titulo: "SQL e dados", descricao: "Consultas, modelagem e análise com Pandas." },
  { titulo: "Cloud e AWS", descricao: "Fundamentos de infraestrutura em nuvem." },
  { titulo: "Projetos práticos", descricao: "Aplicar cada assunto estudado em algo que funcione de verdade." },
  { titulo: "Próximos desafios", descricao: "Aprofundar Dados e Cloud e buscar a primeira oportunidade na área." }
];

// Evitar que aspas ou sinais nos dados quebrem o HTML geradi
function escaparHTML(texto) {
  return String(texto)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function montarChips(itens) {
  return itens.map((item) => `<li class="chip">${escaparHTML(item)}</li>`).join("");
}

function montarPreviaProjeto(projeto) {
  if (projeto.imagem) {
    return `<img class="projeto-preview" src="${escaparHTML(projeto.imagem)}"
                 alt="Prévia do projeto ${escaparHTML(projeto.nome)}" loading="lazy">`;
  }

  return `<div class="preview-vazio">
            <i class="bi ${escaparHTML(projeto.icone || "bi-code-slash")}" aria-hidden="true"></i>
            <span>Prévia em breve</span>
          </div>`;
}

function montarAcoesProjeto(projeto) {
  const acoes = [];

  if (projeto.link) {
    acoes.push(`<a class="botao-pequeno botao-pequeno-destaque" href="${escaparHTML(projeto.link)}"
                   target="_blank" rel="noopener">
                  <i class="bi bi-box-arrow-up-right" aria-hidden="true"></i> Ver projeto
                </a>`);
  }

  if (projeto.repositorio) {
    acoes.push(`<a class="botao-pequeno" href="${escaparHTML(projeto.repositorio)}"
                   target="_blank" rel="noopener">
                  <i class="bi bi-github" aria-hidden="true"></i> GitHub
                </a>`);
  }

  if (acoes.length === 0) {
    acoes.push('<span class="chip">Link em breve</span>');
  }

  return acoes.join("");
}

function renderizarProjetos() {
  const lista = document.getElementById("listaProjetos");
  if (!lista) return;

  lista.innerHTML = projetos.map((projeto) => `
    <div class="col-md-6 col-lg-4 animar-entrada">
      <article class="card-projeto">
        <div class="projeto-midia">${montarPreviaProjeto(projeto)}</div>
        <div class="projeto-corpo">
          <h3 class="projeto-titulo">${escaparHTML(projeto.nome)}</h3>
          <p class="projeto-descricao">${escaparHTML(projeto.descricao)}</p>
          <ul class="projeto-tecnologias">${montarChips(projeto.tecnologias)}</ul>
          <div class="projeto-acoes">${montarAcoesProjeto(projeto)}</div>
        </div>
      </article>
    </div>
  `).join("");
}

function renderizarCertificacoes() {
  const lista = document.getElementById("listaCertificacoes");
  if (!lista) return;

  lista.innerHTML = certificacoes.map((certificacao) => {
    const selo = certificacao.placeholder
      ? '<span class="selo-placeholder">Exemplo</span>'
      : "";

    const acao = certificacao.link
      ? `<a class="botao-pequeno" href="${escaparHTML(certificacao.link)}" target="_blank" rel="noopener">
           <i class="bi bi-patch-check" aria-hidden="true"></i> Verificar certificado
         </a>`
      : '<span class="chip">Link do certificado em breve</span>';

    return `
      <div class="col-md-6 col-lg-4 animar-entrada">
        <article class="card-certificacao">
          <div class="topo-certificacao">
            <i class="bi bi-award" aria-hidden="true"></i>
            <span class="ano-certificacao">${escaparHTML(certificacao.ano)}</span>
          </div>
          ${selo}
          <h3 class="titulo-certificacao">${escaparHTML(certificacao.nome)}</h3>
          <p class="instituicao-certificacao">${escaparHTML(certificacao.instituicao)}</p>
          <p class="descricao-certificacao">${escaparHTML(certificacao.descricao)}</p>
          ${acao}
        </article>
      </div>
    `;
  }).join("");
}

function renderizarJornada() {
  const lista = document.getElementById("listaJornada");
  if (!lista) return;

  lista.innerHTML = jornada.map((etapa) => `
    <li class="item-jornada animar-esquerda">
      <h3 class="titulo-jornada">${escaparHTML(etapa.titulo)}</h3>
      <p class="descricao-jornada">${escaparHTML(etapa.descricao)}</p>
    </li>
  `).join("");
}

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

// Observa os elementos marcados e revela quando entram na tela
function inicializarAnimacoesScroll() {
  const elementos = document.querySelectorAll(".animar-entrada, .animar-esquerda, .animar-direita");

  const semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (semMovimento || !("IntersectionObserver" in window)) {
    elementos.forEach((elemento) => elemento.classList.add("visivel"));
    return;
  }

  const observador = new IntersectionObserver((entradas, instancia) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;

      entrada.target.classList.add("visivel");
      instancia.unobserve(entrada.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

  elementos.forEach((elemento) => observador.observe(elemento));
}

function inicializarAnoAtual() {
  const ano = document.getElementById("anoAtual");
  if (ano) ano.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  inicializarNavegacao();
  inicializarEfeitoNavbar();
  inicializarLinkAtivo();
  renderizarProjetos();
  renderizarCertificacoes();
  renderizarJornada();
  inicializarAnimacoesScroll();
  inicializarAnoAtual();
});