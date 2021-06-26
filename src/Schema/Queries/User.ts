import { GraphQLList, GraphQLString } from "graphql";
import { getAllUser, getUser } from "../../Entities/Users";
import { UserType } from "../TypeDefs/User";


export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve() {
        return getAllUser()
    }
}

export const GET_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
    },
    resolve(parent: any, args: any) {
        const { name } = args
        return getUser(name)
    }
}