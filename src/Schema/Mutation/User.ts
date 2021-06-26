import { GraphQLString } from "graphql";
import { createUser, updateUser, deleteUser } from "../../Entities/Users";
import { MessageType } from "../TypeDefs/Message";
import { UserType } from "../TypeDefs/User";


export const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString }, 
    },
    resolve(parent: any, args: any) {
        const { name, username, password } = args
        const user = createUser(name, username, password)
        return user
    },
}

export const UPDATE_USER = {
    type: MessageType,
    args: {
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString }, 
    },
    resolve(parent: any, args: any) {
        const { name, username, password } = args
        const user = updateUser(name, username, password)
        return { successful: true, message: "User Updated"}
    },
}

export const DELETE_USER = {
    type: MessageType,
    args: {
        name: { type: GraphQLString },
        password: { type: GraphQLString }, 
    },
    resolve(parent: any, args: any) {
        
        const { name, password } = args
        const user = deleteUser(name, password)
        
        return { successful: true, message: "User Deleted"}
        
    },
}