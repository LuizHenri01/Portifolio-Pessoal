# Portfólio — Luiz Henrique

Site pessoal onde conto minha trajetória na faculdade: quem sou, meus
projetos, minhas certificações e a linha do tempo de como cheguei até aqui em
tecnologia.

Site estático: sem backend, sem build, sem Node.js. Basta abrir o `index.html`.

## Tecnologias

- HTML5 (semântico)
- CSS3 (variáveis, Grid e Flexbox)
- JavaScript puro (ES6+, sem bibliotecas)
- Bootstrap 5.3 + Bootstrap Icons (via CDN)

## Estrutura de pastas

\`\`\`text
portfolio/
│
├── index.html          → toda a estrutura da página
│
├── css/
│   └── estilo.css      → todo o CSS personalizado
│
├── js/
│   └── script.js       → dados editáveis + comportamentos
│
├── img/
│   └── projetos/       → prévias dos projetos (16:9)
│
└── README.md
\`\`\`

## Seções do site

- **Início** — apresentação e stack principal
- **Sobre mim** — minha trajetória até o momento
- **Skills** — tecnologias que uso, organizadas por área
- **Projetos** — trabalhos que venho construindo, com link do GitHub
- **Certificações** — cursos concluídos
- **Minha jornada** — linha do tempo de como cheguei até aqui
- **Contato** — e-mail, LinkedIn e GitHub

## Como executar localmente

Opção 1 — abrir direto: dê um duplo clique no `index.html`.

Opção 2 — servidor local (recomendado, evita diferenças de caminho):

\`\`\`bash
# com a extensão Live Server do VS Code: clique em "Go Live"

# ou, se tiver Python instalado:
python -m http.server 5500
# acesse http://localhost:5500
\`\`\`

## Contato

O site é estático, então os cards de contato usam links diretos: `mailto:` para
e-mail e URLs externas para LinkedIn e GitHub. Não há formulário nem backend.

## Acessibilidade e performance

- HTML semântico (`header`, `nav`, `main`, `section`, `footer`) e headings em ordem
- Link "Pular para o conteúdo", foco visível e navegação por teclado
- Animações desativadas para quem usa `prefers-reduced-motion`
- `loading="lazy"` nas imagens de projeto e nenhuma biblioteca JS além do Bootstrap