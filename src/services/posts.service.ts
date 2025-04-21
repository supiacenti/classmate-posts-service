import { Post } from '../models/post.model'
import { v4 as uuidv4 } from 'uuid'

let posts: Post[] = []

export const getAll = (): Post[] => posts

export const getById = (id: string): Post | undefined =>
  posts.find((p) => p.id === id)

export const create = (title: string, content: string, author: string): Post => {
  const newPost: Post = {
    id: uuidv4(),
    title,
    content,
    author,
    createdAt: new Date().toISOString()
  }
  posts.push(newPost)
  return newPost
}

export const update = (id: string, title: string, content: string, author: string): Post | undefined => {
  const post = posts.find((p) => p.id === id)
  if (!post) return undefined

  post.title = title
  post.content = content
  post.author = author
  return post
}

export const remove = (id: string): boolean => {
  const initialLength = posts.length
  posts = posts.filter((p) => p.id !== id)
  return posts.length < initialLength
}
