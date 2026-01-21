# Site Débora Rayane - Escritora

Site institucional da escritora Débora Rayane, desenvolvido com Next.js, React e TypeScript.

## 🎨 Conceito

O projeto segue o conceito **"Digital Hardcover"** - uma extensão da obra literária no ambiente digital, combinando elegância editorial clássica com modernidade visual (glassmorphism, efeito Aurora, animações suaves).

## 🛠️ Stack Tecnológica

- **Next.js 16** - Framework React com SSR/SSG
- **React 19** - Biblioteca UI
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Estilização
- **Fontes**: Playfair Display (títulos) + Inter (corpo)

## 📁 Estrutura do Projeto

```
src/
├── app/              # App Router do Next.js
│   ├── layout.tsx   # Layout raiz
│   ├── page.tsx     # Home page
│   └── globals.css   # Estilos globais
├── components/       # Componentes React (a adicionar)
├── lib/             # Utilitários e constantes
│   └── constants.ts # Paleta de cores, espaçamentos, etc.
└── types/           # Tipos TypeScript
    └── index.ts     # Tipos do projeto
```

## 🚀 Como Executar

### Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build de Produção

```bash
npm run build
npm start
```

## 📚 Documentação do Projeto

Consulte os documentos em `docs/`:
- `PROJETO-DEBORA-REFERENCIA-COMPLETA.md` - Documentação completa
- `Projeto-Debora_ Perfil, Essência e Visão Estratégica.md` - Perfil e essência

## 🎨 Identidade Visual

- **Tema**: Claro obrigatório (Light Theme único)
- **Paleta**: "Milky Palette" (Off-white, Grafite Profundo, Acentos em Roxo/Azul/Rosé)
- **Efeito Aurora**: Blobs/gradientes orgânicos desfocados no fundo
- **Glassmorphism**: Assinatura premium em navbar, cards, botões
- **Arredondamento**: Curvas generosas (24px, 32px, 40px)

## 📝 Próximos Passos

- [ ] Implementar Hero Section
- [ ] Criar Navbar com glassmorphism
- [ ] Implementar efeito Aurora no fundo
- [ ] Criar componentes de cards (livros, posts)
- [ ] Implementar scroll reveal
- [ ] Landing Pages dos livros
- [ ] Página de contato
