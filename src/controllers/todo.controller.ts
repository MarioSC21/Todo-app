import { Request, Response } from 'express'
import { createTodo, deleteTodo, getTodo, updateTodo } from '../service/todos.service'

export const getTodos = async (_: Request, res: Response) => {
  try {
    const todos = await getTodo()
    res.status(200).json(todos)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

export const createTodos = async (req: Request, res: Response) => {
  try {
    const { description, complete } = req.body
    const todo = await createTodo({
      description,
      complete
    })
    res.status(201).json(todo)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

export const updateTodos = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { description, complete } = req.body
    const todo = await updateTodo(id, {
      description,
      complete
    })
    res.status(200).json(todo)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

export const deleteTodos = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const todo = await deleteTodo(id)
    res.status(200).json(todo)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
