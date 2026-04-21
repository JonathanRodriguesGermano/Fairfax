# 💈 Fairfax - SaaS de Gestão para E-commerce

![Banner do Projeto](/public/cover.png)
## 📋 Sobre o Projeto

O **Fairfax** é uma plataforma SaaS full stack desenvolvida para modernizar a experiência de e-commerce.


A solução oferece uma base completa para criação e gestão de lojas online, com foco em performance, escalabilidade e experiência do usuário, seguindo uma arquitetura moderna com Next.js 15 e TypeScript.
O sistema permite que usuários realizem pagamentos de forma transparente, tudo otimizado para dispositivos móveis (Mobile First).

## ✨ Funcionalidades Principais

-   🛒 **Gestão de E-commerce Completa:** Estrutura robusta para criação e gerenciamento de lojas online.
-   📦 **Catálogo de Produtos:** Organização e exibição dinâmica de produtos com alta performance.
-   🛍️ **Carrinho e Checkout:** Fluxo de compra otimizado e responsivo.
-   💳 **Pagamentos Integrados:** Checkout seguro e gestão de assinaturas via **Stripe**.
-   🔐 **Autenticação Moderna:** Sistema de login seguro utilizando **BetterAuth**.
-   🎨 **UI/UX Premium:** Interface construída com **shadcn/ui** e **Tailwind CSS**, focada em usabilidade e acessibilidade.
-   📱 **Totalmente Responsivo:** Design pensado primariamente para a experiência mobile.

## 🚀 Tech Stack

Este projeto utiliza as tecnologias mais recentes do ecossistema React e Node.js:

-   **Frontend:** [Next.js 15+](https://nextjs.org/) (App Router), [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/)
-   **Componentes:** [shadcn/ui](https://ui.shadcn.com/), [Lucide React](https://lucide.dev/)
-   **Backend:** Next.js Server Actions, [Drizzle ORM](https://orm.drizzle.team/)
-   **Database:** PostgreSQL (Neon/Supabase/Local)
-   **Auth:** [BetterAuth](https://www.better-auth.com/)
-   **Formulários:** React Hook Form + Zod, [React Hook Form](https://react-hook-form.com/), [zod](https://zod.dev/)
-   **Pagamentos:** [Stripe SDK](https://stripe.com/)

## 📸 Screenshots

<details>
  <summary>Clique para ver mais telas</summary>

  <br> <h3>Tela de Home</h3>
  <img src="/.github/assets/home.png" alt="Home" width="100%" />

  <br> <h3>Tela de Login</h3>
  <img src="/.github/assets/login.png" alt="Login" width="100%" />

  <br> <h3>Tela de Produtos</h3>
  <img src="/.github/assets/produtos.png" alt="Produtos do usuario" width="100%" />

  <br> <h3>Tela de Pedidos</h3>
  <img src="/.github/assets/pedidos.png" alt="Pedidos do usuario" width="100%" />

  <br> <h3>Tela de Endereço</h3>
  <img src="/.github/assets/endereco.png" alt="Endereço do usuario" width="100%" />

  <br> <h3>Tela de Sucesso</h3>
  <img src="/.github/assets/sucesso.png" alt="Sucesso do pedido" width="100%" />
</details>

## 🔧 Como Rodar Localmente

Pré-requisitos: Node.js (v18+) e gerenciador de pacotes (pnpm, npm ou yarn).

1. **Clone o repositório**
   ```bash
   git clone https://github.com/JonathanRodriguesGermano/Fairfax.git
   cd Fairfax
   ```

2. **Instale as dependências**
    ```bash
   pnpm install
   ou npm install
    ```

3. **Configure as Variáveis de Ambiente crie o arquivo .env**
    ```bash
    DATABASE_URL="postgresql://..."
    BETTER_AUTH_SECRET="sua_secret_aqui"

    # Stripe
    STRIPE_SECRET_KEY="sk_test_..."
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY="pk_test_..."
    STRIPE_WEBHOOK_SECRET="whsec_..."
    ```

4. **Configure o Banco de Dados**
    ```bash
    npx drizzle-kit generate
    npx drizzle-kit push
    ```

5. **Execute o servidor de desenvolvimento**
    ```bash
    npm run dev
    ou yarn dev
    ```
## 🧪 Webhooks (Stripe)

Para testar os pagamentos localmente, utilize a CLI do Stripe:

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

## 🤝 Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um Pull Request.

## 📝 Licença
Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Feito com 💜 por Jonatan Germano
