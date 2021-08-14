// implement the CRUD action
const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment, Pets } = require("../models");

// //////////////////////////////// at "localhost:3001" path, render homepage handlebars with following info
router.get("/", (req, res) => {
  Pets.findAll({
    attributes: ["id", "pet_name", "birthday", "health_condition", "gender", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPetsData) => {
      // console.log(dbPostData);
      const posts = dbPetsData.map((pet) => pet.get({ plain: true }));
      console.log(pets);
      // -------------------------------------------------------------------Render homepage handlebars
      res.render("homepage", { pets, loggedIn: req.session.loggedIn });
      // res.render("homepage", { posts });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// //////////////////////////////// at "localhost:3001/login" path, render login handlebars with following function
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  // -------------------------------------------------------------------Render login handlebars
  res.render("login");
});

// //////////////////////////////// at "localhost:3001/signup" path, render signup handlebars
router.get("/signup", (req, res) => {
  // -------------------------------------------------------------------Render signup handlebars
  res.render("signup");
});

module.exports = router;