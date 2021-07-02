import { GraphQLInt, GraphQLList, GraphQLString } from "graphql";
import { getAllTodo, getTodo } from "../../Entities/todo";
import { TodoType } from "../TypeDefs/todo";


export const GET_ALL_TODOS = {
    type: new GraphQLList(TodoType),
    resolve() {
        return getAllTodo()
    }
}

export const GET_TODOS = {
    type: TodoType,
    args: {
        id: { type: GraphQLInt },
    },
    resolve(parent: any, args: any) {
        const { id } = args
        return getTodo(id)
    }
}