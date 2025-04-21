# 🔐 Auth Service — ClassMate

> Microsserviço responsável por autenticação de usuários (login, cadastro e emissão de JWT).

---

## 🚀 Como rodar

```bash
npm install
cp .env.example .env
npm run dev
```

## ⚙️ Variáveis de Ambiente

```
PORT=5002
JWT_SECRET=algumasecretkeyfortoken
```

## 🧪 Rotas da API

### GET /posts
Lista todos os posts

### GET /posts/:id
Busca post por ID

### POST /posts
Cria um novo post

### PUT /posts/:id
Atualiza post

### DELETE /posts/:id
Remove um post

## 🐳 Docker

```
docker build -t classmate-auth-service .
docker run -p 5002:5002 classmate-auth-service
```

## 📦 Estrutura

``` css
src/
├── controllers/
├── routes/
├── services/
├── models/
├── middlewares/
└── index.ts
```

## 🛡️ Autenticação

As rotas protegidas usam JWT. Para acessar, envie:

``` makefile
Authorization: Bearer <seu_token_jwt>
```

## 🧰 Scripts

```
npm run dev    # modo desenvolvimento
npm run build  # compilar TS
npm start      # iniciar serviço buildado
```