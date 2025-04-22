# 📝 Posts Service — ClassMate

> Microsserviço responsável por gerenciamento de posts (criação, listagem, edição e remoção).

---

## Testes

![CI](https://github.com/supiacenti/classmate-posts-service/actions/workflows/ci.yml/badge.svg)  
Cobertura: ![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)

---

## 🚀 Como rodar localmente

1. Instale as dependências: `npm install`  
2. Copie o arquivo de exemplo: `cp .env.example .env`  
3. Inicie em modo desenvolvimento: `npm run dev`

---

## ⚙️ Variáveis de Ambiente

```
PORT=5002
```

---

## 🧪 Rotas da API

### GET /posts  
Lista todos os posts

### GET /posts/:id  
Busca um post por ID

### POST /posts  
Cria um novo post  
Body:

```json
{
  "title": "Meu primeiro post",
  "content": "Conteúdo do post",
  "author": "Fulano"
}
```

### PUT /posts/:id  
Atualiza um post existente  
Body:

```json
{
  "title": "Novo título",
  "content": "Novo conteúdo",
  "author": "Fulano"
}
```

### DELETE /posts/:id  
Remove um post

---

## 📦 Estrutura

```css
src/
├── controllers/
├── routes/
├── services/
├── models/
└── index.ts
```

---

## 🧰 Scripts

```
npm run dev    # modo desenvolvimento
npm run build  # compilar TS
npm start      # iniciar serviço buildado
```
