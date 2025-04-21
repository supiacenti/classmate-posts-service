import { Request, Response } from 'express'
import * as service from '../services/posts.service'

export const getPosts = (req: Request, res: Response) => {
  const data = service.getAll()
  res.json(data)
}

export const getPostById = (req: Request, res: Response) => {
  const post = service.getById(req.params.id)
  if (!post) return res.status(404).json({ error: 'Post não encontrado' })
  res.json(post)
}

export const createPost = (req: Request, res: Response) => {
  const { title, content, author } = req.body
  const post = service.create(title, content, author)
  res.status(201).json(post)
}

export const updatePost = (req: Request, res: Response) => {
  const { title, content, author } = req.body
  const updated = service.update(req.params.id, title, content, author)
  if (!updated) return res.status(404).json({ error: 'Post não encontrado' })
  res.json(updated)
}

export const deletePost = (req: Request, res: Response) => {
  const success = service.remove(req.params.id)
  if (!success) return res.status(404).json({ error: 'Post não encontrado' })
  res.status(204).send()
}
