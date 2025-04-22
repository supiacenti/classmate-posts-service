import { Request, Response } from 'express'
import * as postService from '../services/posts.service'

export const getAllPosts = (req: Request, res: Response) => {
  const data = postService.getAllPosts()
  res.status(200).json(data)
}

export const getPostById = (req: Request, res: Response) => {
  const post = postService.getPostById(req.params.id)
  if (!post) return res.status(404).json({ error: 'Post não encontrado' })
  res.status(200).json(post)
}

export const createPost = (req: Request, res: Response) => {
  const { title, content, author } = req.body
  const post = postService.createPost(title, content, author)
  res.status(201).json(post)
}

export const updatePost = (req: Request, res: Response) => {
  const { title, content } = req.body
  const updated = postService.updatePost(req.params.id, title, content)
  if (!updated) return res.status(404).json({ error: 'Post não encontrado' })
  res.status(200).json(updated)
}

export const deletePost = (req: Request, res: Response) => {
  const success = postService.deletePost(req.params.id)
  if (!success) return res.status(404).json({ error: 'Post não encontrado' })
  res.status(204).send()
}
