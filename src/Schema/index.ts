import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { getUser } from "../Entities/Users";
import { CREATE_USER, UPDATE_USER, DELETE_USER } from "./Mutation/User";
import { GET_ALL_USERS, GET_USER } from "./Queries/User";


const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUsers: GET_ALL_USERS,
        getUser: GET_USER,
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: CREATE_USER,
        updateUser: UPDATE_USER,
        deleteUser: DELETE_USER,
    }
})



export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})