import { v4 as uuidv4 } from 'uuid'

interface Post {
  id: string
  title: string
  content: string
  author: string
}

const posts: Post[] = []

export const createPost = (title: string, content: string, author: string): Post => {
  const newPost: Post = { id: uuidv4(), title, content, author }
  posts.push(newPost)
  return newPost
}

export const getAllPosts = (): Post[] => posts

export const getPostById = (id: string): Post | undefined =>
  posts.find(p => p.id === id)

export const updatePost = (id: string, title: string, content: string): Post | null => {
  const post = posts.find(p => p.id === id)
  if (!post) return null
  post.title = title
  post.content = content
  return post
}

export const deletePost = (id: string): boolean => {
  const index = posts.findIndex(p => p.id === id)
  if (index === -1) return false
  posts.splice(index, 1)
  return true
}

// Exportar array para testes
export const __TEST__ = { posts }
