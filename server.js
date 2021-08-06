const express = require("express");
const fs = require("fs");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const app = express();
const newUser = [];

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "dogshelter_db",
});

//connect my connection to mysql database

connection.connect(function (err) {
  if (err) throw err;
  userProfileQuest();
});

function userProfile() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstname",
        message: "What is your first name?",
      },

      {
        type: "input",
        name: "lastname",
        message: "What is your last name?",
      },

      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },

      {
        type: "input",
        message: "What is the best number to contact you?",
        name: "number",
      },
    ])
    .then((data) => {
      //user.js section
      const newUser = new user(
        data.firstname,
        data.lastname,
        data.email,
        data.number
      );
      userArr.push(newUser);
      userProfile();
    });
}
