import prisma from '../lib/prisma'

interface postData {
  description: string
  complete: boolean
}

export const getTodo = async () => {
  const todos = await prisma.todo.findMany()
  return todos
}

export const createTodo = async (data: postData) => {
  const todo = await prisma.todo.create({
    data
  })
  return todo
}

export const updateTodo = async (id: string, data: postData) => {
  const todo = await prisma.todo.update({
    where: { id },
    data
  })
  return todo
}

export const deleteTodo = async (id: string) => {
  const todo = await prisma.todo.delete({
    where: { id }
  })
  return todo
}
