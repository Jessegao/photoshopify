const graphql = require("graphql");
const _ = require("lodash");

const users = [
  { id: "1", username: "magsu", created_by_date: "2004-10-19 10:23:54" },
  { id: "2", username: "jejejao", created_by_date: "2004-10-19 23:23:54" },
  { id: "3", username: "y0h0n", created_by_date: "2004-10-19 12:23:54" },
  { id: "4", username: "t0ny", created_by_date: "2004-10-19 01:23:54" },
];

// GraphQL Data types
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

// Schema
const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    created_by_date: { type: GraphQLString },
  }),
});

// GETS
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // pass
        return _.find(users, { id: args.id });
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return users;
      },
    },
  },
});

// POSTS
// const Mutation = new GraphQLObjectType({
//   name: "Mutation",
//   fields: {
//     addUser: {
//       type: UserType,
//       args: {
//         username: { type: new GraphQLNonNull(GraphQLString) },
//         created_by_date: { type: new GraphQLNonNull(GraphQLString) },
//       },
//       resolve(parent, arts) {
//         //pass
//         let user = new UserType({
//           username: this.args.name,
//           created_by_date: this.args.data,
//         });
//       },
//     },
//   },
// });

module.exports = new graphql.GraphQLSchema({
  query: RootQuery,
});
