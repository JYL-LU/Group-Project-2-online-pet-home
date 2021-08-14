const { User } = require("../models/User");

const userData = [
  {
    user_name: "Jane Lu",
    email: "jyl.janelu@gmail.com",
    password: 1234,
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
