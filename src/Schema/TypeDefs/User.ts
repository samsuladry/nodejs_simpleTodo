import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLScalarType, } from "graphql";


// const timeStamp = async () =>
// {
//     const time = new GraphQLScalarType({
//         name: 'Odd',
//         serialize: oddValue,
//         parseValue: oddValue,
//         parseLiteral(ast) {
//           if (ast.kind === Kind.INT) {
//             return oddValue(parseInt(ast.value, 10));
//           }
//           return null;
//         }
//       })
// }

export const UserType = new GraphQLObjectType({
    name: "user",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        createdAt: { type: GraphQLString } 
    })
})
