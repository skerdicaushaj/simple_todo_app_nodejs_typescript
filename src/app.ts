import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import todoRoutes from "./routes"
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import options from './swagger';
import dotenv from 'dotenv';
dotenv.config()

const app: Express = express()
const PORT: string | number = process.env.PORT || 4000

// Initialize Swagger-jsdoc
const specs = swaggerJsdoc(options);

// Serve Swagger API documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use(cors())
app.use(express.json())
app.use(todoRoutes)

const uri = `YOUR_MONGO_URL`

mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () =>
      { console.log(`Server running on http://localhost:${PORT}`); }
    )
  )
  .catch((error) => {
    throw error
  });

  export default app;
