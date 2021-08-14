// deconstruct models and insert "userData" into "User" models
const { User } = require("../models");

const userData = [
  {
    username: "hunter1",
    email: "hunter1@gmail.com",
    password: "password1",
  },
  {
    username: "hunter2",
    email: "hunter2@gmail.com",
    password: "password2",
  },
  {
    username: "hunter3",
    email: "hunter3@gmail.com",
    password: "password3",
  },
  {
    username: "hunter4",
    email: "hunter4@gmail.com",
    password: "password4",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;