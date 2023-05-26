import { Router } from "express";
import {
  getTodos,
  getTodoById,
  addTodo,
  updateTodo,
  deleteTodo
} from "../controllers/todos";
import isApiKeyAllowed from "../middleware/auth";

const router: Router = Router();

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Get all todos
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 */
router.get("/todos", getTodos)

/**
 * @swagger
 * /todos/{id}:
 *   get:
 *     summary: Get a specific todo by ID
 *     security:
 *       - ApiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the todo
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       404:
 *         description: Todo not found
 */
router.get("/todos/:id", isApiKeyAllowed, getTodoById)

/**
 * @swagger
 * /add-todo:
 *   post:
 *     summary: Add a new todo
 *     security:
 *       - ApiKeyAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TodoInput'
 *     responses:
 *       201:
 *         description: Todo added
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 */
router.post("/add-todo", isApiKeyAllowed, addTodo)

/**
 * @swagger
 * /edit-todo/{id}:
 *   put:
 *     summary: Update a todo by ID
 *     security:
 *       - ApiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the todo
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TodoInput'
 *     responses:
 *       200:
 *         description: Todo updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       400:
 *         description: Invalid request
 *       404:
 *         description: Todo not found
 */
router.put("/edit-todo/:id", isApiKeyAllowed, updateTodo)

/**
 * @swagger
 * /delete-todo/{id}:
 *   delete:
 *     summary: Delete a todo by ID
 *     security:
 *       - ApiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the todo
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Todo deleted
 *       400:
 *         description: Invalid request
 *       404:
 *         description: Todo not found
 */
router.delete("/delete-todo/:id", isApiKeyAllowed, deleteTodo)

export default router