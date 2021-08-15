// implement the CRUD action
const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");

// //////////////////////////////// at "localhost:3001" path, render homepage handlebars with following info
router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["id", "title", "content", "address", "image_url","created_at"],
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
    .then((dbPostData) => {
      // console.log(dbPostData);
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      console.log(posts);
      // -------------------------------------------------------------------Render homepage handlebars
      res.render("homepage", { posts, loggedIn: req.session.loggedIn });
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

// //////////////////////////////// at "localhost:3001/post/1" path, render single-post handlebars with following function
router.get("/post/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "content", "address", "image_url","created_at"],
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
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      const post = dbPostData.get({ plain: true });
      console.log(post);
      // -------------------------------------------------------------------Render single-post handlebars
      res.render("single-post", { post, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;