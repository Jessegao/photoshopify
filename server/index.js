const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

// Create instance of ApolloServer
const server = new ApolloServer({ typeDefs, resolvers });

// Run Server
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
