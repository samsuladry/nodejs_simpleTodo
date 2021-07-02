import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLScalarType, GraphQLInt, } from "graphql";



export const TodoType = new GraphQLObjectType({
    name: "todo",
    fields: () => ({
        id: { type: GraphQLInt },
        body: { type: GraphQLString },
    })
})
