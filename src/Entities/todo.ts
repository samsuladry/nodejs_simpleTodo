import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export const getAllTodo = async () =>
{
    try 
    {
        const users = await prisma.todos.findMany()
        
        return users
    } 
    catch (error) 
    {
        return null
    }
    
}

export const getTodo = async (id: number) =>
{
    try 
    {
        const todo = await prisma.todos.findUnique({
            where: {
                id: id
            }
        })
        
        return todo
    } 
    catch (error) 
    {
        return null
    }
    
}

export const createTodo = async (body: string) =>
{

    try 
    {
        const user = await prisma.todos.create({
            data: {
                body: body
            }
        })

        return user
    } 
    catch (error) 
    {
        return null
    }
}

export const updateTodo = async (id: number, body: string) =>
{
    try 
    {
        const getTodo = await prisma.todos.findUnique({
            where: {
                id: id
            }
        })
        if(getTodo)
        {
            const user = await prisma.todos.update({
                where:
                {
                    id: id
                },
                data:
                {
                    body: body
                }
            })
            
            return user
        }
    } 
    catch (error) 
    {
        return error
    }
}

export const deleteTodo = async (id: number) =>
{
    try 
    {
        const getTodo = await prisma.todos.findUnique({
            where: {
                id: id
            }
        })
        
        if(getTodo)
        {
            const user = await prisma.todos.delete({
                where: {
                    id: id
                }
            })
            return true
        }
    } 
    catch (error) 
    {
        return false
    }
}

