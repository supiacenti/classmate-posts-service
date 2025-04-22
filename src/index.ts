import express from 'express'
import dotenv from 'dotenv'
import postsRoutes from './routes/posts.routes'
import client from 'prom-client'

// Cria um registro padrão
const collectDefaultMetrics = client.collectDefaultMetrics
collectDefaultMetrics()

dotenv.config()
const app = express()
app.use(express.json())

// Expor as métricas na rota /metrics
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType)
  res.end(await client.register.metrics())
})

app.use('/posts', postsRoutes)

const PORT = process.env.PORT || 5002
app.listen(PORT, () => {
  console.log(`Posts service running on port ${PORT}`)
})
