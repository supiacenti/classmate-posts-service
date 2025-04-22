import * as postService from '../src/services/posts.service'

describe('Post Service', () => {
  beforeEach(() => {
    // @ts-ignore
    postService.__TEST__.posts.length = 0
  })

  it('deve criar um novo post', () => {
    const post = postService.createPost('Título', 'Conteúdo', 'Autor')
    expect(post).toHaveProperty('id')
    expect(post.title).toBe('Título')
  })

  it('deve retornar todos os posts', () => {
    postService.createPost('Um', 'Dois', 'Três')
    const posts = postService.getAllPosts()
    expect(posts.length).toBe(1)
  })

  it('deve retornar um post por ID', () => {
    const post = postService.createPost('Título', 'Conteúdo', 'Autor')
    const found = postService.getPostById(post.id)
    expect(found).toEqual(post)
  })

  it('deve atualizar um post', () => {
    const post = postService.createPost('A', 'B', 'C')
    const updated = postService.updatePost(post.id, 'Novo', 'Conteúdo atualizado')
    expect(updated?.title).toBe('Novo')
  })

  it('deve deletar um post', () => {
    const post = postService.createPost('A', 'B', 'C')
    const result = postService.deletePost(post.id)
    expect(result).toBe(true)
  })
})
