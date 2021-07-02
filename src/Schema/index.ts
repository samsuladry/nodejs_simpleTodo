import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { CREATE_TODO, DELETE_TODO, UPDATE_TODO } from "./Mutation/todo";
import { GET_ALL_TODOS, GET_TODOS } from "./Queries/todo";



const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllTodos: GET_ALL_TODOS,
        getTodo: GET_TODOS,
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createTodo: CREATE_TODO,
        updateTodo: UPDATE_TODO,
        deleteTodo: DELETE_TODO,
    }
})



export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})