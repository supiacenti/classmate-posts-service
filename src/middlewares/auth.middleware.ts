// src/middlewares/auth.middleware.ts

import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization
  if (!authHeader) return res.status(401).json({ error: 'Token não fornecido' })

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string)
    req.user = decoded // agora o TS reconhece a propriedade 'user'
    next()
  } catch (error) {
    return res.status(403).json({ error: 'Token inválido' })
  }
}
