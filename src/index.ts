import express from 'express'
import dotenv from 'dotenv'
import postsRoutes from './routes/posts.routes'

dotenv.config()
const app = express()
app.use(express.json())

app.use('/posts', postsRoutes)

const PORT = process.env.PORT || 5002
app.listen(PORT, () => {
  console.log(`Posts service running on port ${PORT}`)
})
