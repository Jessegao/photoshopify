module.exports = `
  type Photo {
    id: ID!
    filepath: String!
    user: User
  }

  type Query {
    photo(id: ID!): User
    photos: [User]
  }
`;
