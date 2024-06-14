# Expense Manager Frontend

Expense Manager é uma aplicação web para gerenciar transações financeiras, permitindo que os usuários adicionem, visualizem e filtrem transações.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Styled Components**: Biblioteca para estilização de componentes.
- **React Hook Form**: Biblioteca para gerenciamento de formulários em React.
- **Zod**: Biblioteca para validação de dados.
- **Radix UI**: Biblioteca de componentes acessíveis.
- **Phosphor Icons**: Conjunto de ícones.

## Funcionalidades

- Adicionar novas transações (Entrada/Despesa).
- Visualizar lista de transações.
- Filtrar transações por descrição, categoria e data.
- Exibir resumo das transações (total de entradas, total de despesas, saldo).
- Validação de formulários com Zod.
- Carregamento de dados com indicador de progresso.

## Pré-requisitos

- Node.js (v14 ou superior).

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/expense-manager.git
    cd expense-manager-frontend
    ```

2. Instale as dependências do projeto:
    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento:
    ```bash
    npm start
    ```

## Uso

1. Abra seu navegador e vá para `http://localhost:3000`.
2. Utilize a interface para adicionar, visualizar e filtrar transações.

## Estrutura do Projeto

- `components`: Componentes React reutilizáveis (Header, Summary, etc.).
- `contexts`: Contextos do React para gerenciar estado global (TransactionsContext).
- `pages`: Páginas principais da aplicação (Transactions).
- `styles`: Estilos globais e temas da aplicação.
- `utils`: Utilitários e funções auxiliares (formatter.js).

## Exemplos de Uso

### Adicionar Transação

1. Clique no botão "Nova Transação".
2. Preencha o formulário com a descrição, preço, categoria e tipo (Entrada/Despesa).
3. Clique em "Cadastrar" para adicionar a transação.

### Filtrar Transações

1. Utilize o formulário de busca para filtrar transações por descrição, categoria e data.
2. Os resultados serão exibidos em uma tabela ordenada pela data de criação.

## Contribuição

1. Fork o projeto.
2. Crie uma nova branch: `git checkout -b minha-nova-feature`.
3. Faça suas alterações e commit: `git commit -m 'Adiciona nova feature'`.
4. Envie para a branch original: `git push origin minha-nova-feature`.
5. Crie um pull request.
