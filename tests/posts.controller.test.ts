import * as postController from '../src/controllers/posts.controller'
import * as postService from '../src/services/posts.service'

const mockResponse = () => {
  const res: any = {}
  res.status = jest.fn().mockReturnValue(res)
  res.json = jest.fn().mockReturnValue(res)
  res.send = jest.fn().mockReturnValue(res)
  return res
}

describe('Post Controller', () => {
  beforeEach(() => {
    // @ts-ignore
    postService.__TEST__.posts.length = 0
  })

  it('deve criar um post e retornar 201', () => {
    const req: any = {
      body: { title: 'Título', content: 'Texto', author: 'Autor' }
    }
    const res = mockResponse()

    postController.createPost(req, res)
    expect(res.status).toHaveBeenCalledWith(201)
  })

  it('deve listar todos os posts', () => {
    postService.createPost('a', 'b', 'c')
    const req: any = {}
    const res = mockResponse()

    postController.getAllPosts(req, res)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith(expect.any(Array))
  })

  it('deve atualizar um post', () => {
    const post = postService.createPost('a', 'b', 'c')
    const req: any = {
      params: { id: post.id },
      body: { title: 'Atualizado', content: 'Novo conteúdo' }
    }
    const res = mockResponse()

    postController.updatePost(req, res)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      title: 'Atualizado'
    }))
  })

  it('deve deletar um post', () => {
    const post = postService.createPost('a', 'b', 'c')
    const req: any = { params: { id: post.id } }
    const res = mockResponse()

    postController.deletePost(req, res)
    expect(res.status).toHaveBeenCalledWith(204)
  })
})
