const User = require("../models/UserModel");

module.exports = {
  Query: {
    users: () => User.findAll(),
  },

  Mutation: {
    addUser: (parent, args) => {
      let user = User.build({
        username: args.username,
        password: args.password,
        email: args.email,
        firstname: args.firstname,
        lastname: args.lastname,
      });
      return user.save();
    },
  },
};
