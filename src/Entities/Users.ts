import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export const getAllUser = async () =>
{
    try 
    {
        const users = await prisma.user.findMany()
        
        return users
    } 
    catch (error) 
    {
        return null
    }
    
}

export const getUser = async (name: string) =>
{
    try 
    {
        const users = await prisma.user.findUnique({
            where: {
                name: name
            }
        })
        
        return users
    } 
    catch (error) 
    {
        return null
    }
    
}

export const createUser = async (name: string, username: string, password: string) =>
{

    try 
    {
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await prisma.user.create({
            data: {
                name: name,
                username: username,
                password: hashedPassword,
            }
        })

        return user
    } 
    catch (error) 
    {
        return null
    }
}

export const updateUser = async (name: string, username: string, password: string) =>
{
    try 
    {
        const getUser = await prisma.user.findUnique({
            where: {
                name: name
            }
        })
        if(getUser)
        {
            const hashedPassword = await bcrypt.compare(password, getUser.password)
            if(hashedPassword)
            {
                const user = await prisma.user.update({
                    where:
                    {
                        name: name
                    },
                    data:
                    {
                        username: username
                    }
                })
                
                return user
            }
        }
    } 
    catch (error) 
    {
        return error
    }
}

export const deleteUser = async (name: string, password: string) =>
{
    try 
    {
        const getUser = await prisma.user.findUnique({
            where: {
                name: name
            }
        })
        
        if(getUser)
        {
            const hashedPassword = await bcrypt.compare(password, getUser.password)
            if(hashedPassword)
            {
                const user = await prisma.user.delete({
                    where: {
                        name: name
                    }
                })
                return true
            }
        }
    } 
    catch (error) 
    {
        return false
    }
}

