import { Router } from 'express'
import * as controller from '../controllers/posts.controller'
import { verifyToken } from '../middlewares/auth.middleware'

const router = Router()

router.get('/', controller.getAllPosts)
router.get('/:id', controller.getPostById)
router.post('/', verifyToken, controller.createPost)
router.put('/:id', verifyToken, controller.updatePost)
router.delete('/:id', verifyToken, controller.deletePost)

export default router
