# Atividade Modelo Prova - Consumo de API de Usuários

ste repositório contém o desenvolvimento de uma aplicação web robusta desenvolvida com **Next.js (App Router)**, **TypeScript** e **Tailwind CSS v4**. O projeto foi estruturado utilizando os princípios do **Atomic Design** (Atoms, Molecules, Organisms) para garantir modularidade, componentização limpa e alta escalabilidade.

## 🚀 Tecnologias e Ferramentas

- **Next.js (App Router):** Framework React com roteamento baseado em arquivos dentro do diretório `src/app`.
- **TypeScript:** Tipagem estática para maior segurança e prevenção de erros em tempo de desenvolvimento.
- **Tailwind CSS v4:** Estilização moderna e utilitária de alta performance.
- **Arquitetura Atomic Design:** Divisão de componentes em Átomos, Moléculas e Organismos para melhor organização do ecossistema front-end.

## 📦 Estrutura do Projeto

```text
├── src/
│   ├── app/
│   │   ├── sobre/
│   │   │   └── page.tsx         # Página Sobre o projeto
│   │   ├── usuarios/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx     # Página dinâmica de Detalhes do Usuário
│   │   │   └── page.tsx         # Página de Listagem de Usuários
│   │   ├── globals.css          # Estilos globais e diretivas do Tailwind v4
│   │   └── layout.tsx           # Layout principal da aplicação
│   ├── components/
│   │   ├── atoms/               # Componentes de menor granularidade
│   │   │   ├── CardBadge.tsx
│   │   │   ├── HeaderButtons.tsx
│   │   │   └── OverTitle.tsx
│   │   ├── molecules/           # Combinações de átomos
│   │   │   ├── AboutCard.tsx
│   │   │   ├── DetailCard.tsx
│   │   │   └── UserCard.tsx
│   │   └── organisms/           # Estruturas complexas e seções da página
│   │       ├── AboutContent.tsx
│   │       ├── Footer.tsx
│   │       ├── Header.tsx
│   │       ├── HeroAbout.tsx
│   │       ├── HeroUser.tsx
│   │       ├── UserDetails.tsx
│   │       └── UserList.tsx
│   ├── service/
│   │   └── UserService.ts       # Camada de serviços assíncronos para consumo da API
│   └── types/
│       └── User.ts              # Definições de interfaces e tipos do TypeScript
```

## 🛠️ Como Instalar e Executar o Projeto

Como o projeto utiliza o ecossistema do Next.js, siga os passos abaixo para rodar o ambiente de desenvolvimento local:

### Opção 1: Execução Direta (Local)
1. Faça o clone do repositório:
   ```bash
   git clone https://github.com/oliveira-cze/atividade-modelo-prova.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd atividade-modelo-prova
   ```
3. Instale as dependências:
    ```bash
    npm install
    ```
4. Execute a aplicação em um ambiente de desenvolvimento:
    ```bash
    npm run dev
    ```
5. Acesse seu navegador:
    
    Abra http://localhost:3000 para visualizar a aplicação rodando localmente.

## ⚙️ Scripts Disponíveis

No arquivo `package-json`, você encontrará os seguintes comandos executáveis

- `npm run dev`: Inicia o servidor de desenvolvimento local na porta 3000.
- `npm run build`: Cria o build de produção otimizado da aplicação.
- `npm run start`: Inicia o servidor Next.js em modo de produção (após rodar o build).
- `npm run lint`: Executa o validador ESLint para checagem de boas práticas e padronização do código.