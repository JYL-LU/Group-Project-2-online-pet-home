const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");
const mysql = require("mysql2");
const inquirer = require("inquirer");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});

//const newUser = [];

/*const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "dogshelter_db",
});*/

//connect my connection to mysql database

//connection.connect(function (err) {
// if (err) throw err;
// userProfileQuest();
//});

/*function userProfile() {
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
}*/
