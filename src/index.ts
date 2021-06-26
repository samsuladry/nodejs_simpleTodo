import express, { Request, Response} from 'express'
import { graphqlHTTP } from 'express-graphql'
import { schema } from './Schema'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'


const main = async () =>
{
    const prisma = new PrismaClient()
    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    }))

    app.get('/', (req: Request, res: Response) =>
    {
        res.status(200).json("Hello")
    })

    app.listen(3001, () =>
    {
        console.log("Server is running on port 3001")
    })
}

main().catch((err) =>
{
    console.log(err)
})
