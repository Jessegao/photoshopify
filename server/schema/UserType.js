module.exports = `
  type User {
    id: ID!
    username: String!
    password: String!
    email: String!
    firstname: String
    lastname: String
    createdat: String!
    updatedat: String!
  }

  type Query {
    user(id: ID!): User
    users: [User]
  }

  type Mutation {
    addUser(
      username: String!, 
      password: String!, 
      email: String!, 
      firstname: String, 
      lastname: String,
    ): User
  }
`;
