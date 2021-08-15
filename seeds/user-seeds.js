// deconstruct models and insert "userData" into "User" models
const { User } = require("../models");

const userData = [
  {
    username: "hunter1",
    password: "password1",
  },
  {
    username: "hunter2",
    password: "password2",
  },
  {
    username: "hunter3",
    password: "password3",
  },
  {
    username: "hunter4",
    password: "password4",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;