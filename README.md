# Portfólio do Luiz Henrique

Meu site pessoal, onde conto como está sendo a faculdade de Ciência da Computação e mostro o que venho construindo: projetos, certificações e a linha do tempo de como cheguei até aqui.

Site no ar: [luiz-henrique-dev-pearl.vercel.app](https://luiz-henrique-dev-pearl.vercel.app)

O site tem uma apresentação, a seção sobre mim, skills, projetos com link do GitHub, certificações, a minha jornada e contato por e-mail, LinkedIn e GitHub (sem formulário, só links diretos).

## Atualizações

Vou atualizando o portfólio semanalmente. Projetos, certificações e a linha do tempo entram aqui conforme eu avanço. Os dados editáveis ficam em `js/script.js`.

## Como foi feito

É um site estático em HTML5 semântico, CSS3 (variáveis, Grid e Flexbox) e JavaScript puro, com Bootstrap 5.3 e Bootstrap Icons via CDN. Não tem build nem backend, e a hospedagem é na Vercel.

Também cuidei da acessibilidade: headings em ordem, link para pular ao conteúdo, foco visível, navegação por teclado e animações desativadas para quem usa `prefers-reduced-motion`. As imagens dos projetos carregam com `loading="lazy"`.

## Estrutura

```
portfolio/
├── index.html        estrutura da página
├── css/estilo.css    estilos personalizados
├── js/script.js      dados editáveis e comportamentos
└── img/projetos/     prévias dos projetos
```

## Rodando localmente

É só abrir o `index.html` no navegador. Se preferir um servidor local, use o Live Server do VS Code ou, com Python instalado:

```bash
python -m http.server 5500
```

Depois acesse http://localhost:5500.
