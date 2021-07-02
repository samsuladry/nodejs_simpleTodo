import { GraphQLInt, GraphQLString } from "graphql";
import { createTodo, deleteTodo, updateTodo } from "../../Entities/todo";
import { MessageType } from "../TypeDefs/Message";
import { TodoType } from "../TypeDefs/todo";



export const CREATE_TODO = {
    type: TodoType,
    args: {
        body: { type: GraphQLString },
    },
    resolve(parent: any, args: any) {
        const { body } = args
        const todo = createTodo(body)
        return todo
    },
}

export const UPDATE_TODO = {
    type: MessageType,
    args: {
        id: { type: GraphQLInt },
        body: { type: GraphQLString }
    },
    resolve(parent: any, args: any) {
        const { id, body } = args
        const todo = updateTodo(id, body)
        return { successful: true, message: "todo Updated"}
    },
}

export const DELETE_TODO = {
    type: MessageType,
    args: {
        id: { type: GraphQLInt },
    },
    resolve(parent: any, args: any) {
        
        const { id } = args
        const todo = deleteTodo(id)
        
        return { successful: true, message: "todo Deleted"}
        
    },
}