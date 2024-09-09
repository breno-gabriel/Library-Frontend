# :green_book: BookParadise

A BookParadise é uma aplicação de gerenciamento de estoque de livros. Nela, é possível adicionar e remover livros, além de atualizar as suas informações. Navegue por uma interface simplês e intuitiva e encontre o seu livro ideal :blush:

# Ferramentas utilizadas

- **Tailwind CSS**: Tailwind CSS é um framework de CSS utilitário que permite criar interfaces de usuário rapidamente. Em vez de escrever CSS personalizado, você usa classes utilitárias pré-definidas diretamente no HTML para estilizar seus componentes. Isso facilita a criação de designs responsivos e consistentes sem sair do seu HTML.

- **ShadCN**: ShadCN é um gerador de componentes de interface de usuário (UI) headless para React. Ele permite que você componha bibliotecas de componentes personalizadas, desacoplando a lógica dos componentes do markup JSX e baseando seus estilos no TailwindCSS. É uma ferramenta útil para criar interfaces de usuário reutilizáveis e personalizáveis.

- **JSON Server**: JSON Server é uma ferramenta leve que permite criar rapidamente uma API RESTful usando um arquivo JSON como fonte de dados. É frequentemente usado para prototipagem rápida e testes, permitindo que desenvolvedores front-end simulem um servidor real sem precisar configurar um backend completo.

- **React**: React é uma biblioteca JavaScript para construir interfaces de usuário. Desenvolvida pelo Facebook, ela permite criar componentes reutilizáveis que gerenciam seu próprio estado, facilitando a construção de aplicações web interativas e dinâmicas. React utiliza um conceito chamado "Virtual DOM" para otimizar a atualização e renderização de componentes.


# :computer: Guia de instalação 

Clone o repositório

 ```bash
https://github.com/breno-gabriel/Library-Frontend.git
```

No terminal, vá para o caminho /library (`cd library`)

Instale as dependências

```bash
npm install
```

Abra outro terminal e vá para o caminho /api (`cd api`)

Instale o JSON Server

```bash
npm install json-server
```

Execute o JSON Server 

```bash
npx json-server db.json
```

Rode o projeto

```bash
npm run dev
```

Abra o link

```bash
http://localhost:5173/
```
