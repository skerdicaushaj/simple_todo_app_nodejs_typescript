import dotenv from 'dotenv'
import { Request, Response, NextFunction } from 'express'
dotenv.config()

function isApiKeyAllowed (req: Request, res: Response, next: NextFunction): void {
  const apiKeyFromEnv = process.env.API_KEY
  const apiKeyFromHeader = req.headers['x-api-key']

  if (!apiKeyFromEnv || !apiKeyFromHeader || apiKeyFromHeader !== apiKeyFromEnv) {
    res.status(401).json({ message: 'Unauthorized' })
    return;
  }

  next()
}

export default isApiKeyAllowed