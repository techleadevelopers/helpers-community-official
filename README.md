# 🐾 Helpers — Comunidade de Apoio ao Resgate Animal

O **Helpers** é uma plataforma web e aplicativo móvel que conecta pessoas, protetores independentes, ONGs e projetos sociais. Nosso objetivo é transformar pequenos gestos em impacto real, organizando e dando visibilidade ao resgate e apoio animal.

> *"Quando alguém precisa de ajuda, a comunidade responde."*

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

- **React** (v18+)
- **Vite** (Build tool de alta performance)
- **TypeScript**
- **Tailwind CSS v4** (Design system customizado)
- **Shadcn/UI** + **Radix UI** (Biblioteca de componentes acessíveis)
- **Wouter** (Roteamento leve para React)
- **TanStack Query** (Gerenciamento de estado assíncrono)
- **Lucide React** (Ícones)
- **Recharts** (Gráficos e visualização de dados)
- **Embla Carousel** (Carrosséis)

## ✨ Funcionalidades da Landing Page

A página principal (`App.tsx`) é dividida em seções estratégicas para engajar a comunidade:

- **Hero (Início):** Chamada principal com mockup do aplicativo e contador de membros da comunidade.
- **Como Funciona:** Explicação do fluxo (Encontrar, Ajudar, Conectar, Resolver).
- **Impacto Helpers:** Painel interativo com gráficos (Recharts) mostrando valores destinados e relatórios de transparência.
- **Comunidade:** Seção voltada para protetores, ONGs, criadores de conteúdo e voluntários.
- **O Aplicativo:** Apresentação visual das telas do app (via Cloudinary).
- **Transparência:** Lista de últimas destinações e comprovantes públicos.
- **FAQ:** Perguntas frequentes com acordeão interativo.
- **Modal "Faça Parte":** Formulário para captação de voluntários e ONGs.

## 🎨 Design System

O projeto conta com um design system próprio e moderno definido no `src/index.css`:

- **Cores:** Paleta baseada em tons verdes (`#466f56`), neutros claros (`#f8faf7`) e um coral de destaque (`#c96868`).
- **Tipografia:**
  - `DM Sans` (Corpo do texto)
  - `Manrope` (Títulos e Display)
  - `Space Mono` (Detalhes e dados técnicos)
- **Modo Escuro:** Suporte nativo a dark mode (`class="dark"`).
- **Animações:** Animações customizadas de entrada (`rise-in`), flutuação (`float-device`) e efeitos de granulado (`grain`).

## 📁 Estrutura do Projeto

```text
helpers-community-official/
├── src/
│   ├── components/
│   │   └── ui/           # Componentes Shadcn/UI (Button, Card, Dialog, etc.)
│   ├── pages/            # Páginas (NotFound, etc.)
│   ├── App.tsx           # Componente principal e roteamento
│   ├── main.tsx          # Entry point da aplicação
│   └── index.css         # Tailwind CSS e variáveis de design system
├── public/               # Arquivos estáticos
├── .gitignore            # Arquivos ignorados pelo Git
├── package.json          # Dependências e scripts
└── vite.config.ts        # Configuração do Vite