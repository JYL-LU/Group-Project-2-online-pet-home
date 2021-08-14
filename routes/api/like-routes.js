const router = require("express").Router();
const { Like } = require("../../models");

router.get("/", (req, res) => {
  Like.findAll()
    .then((dbLikeData) => res.json(dbLikeData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Like.findOne({
    attributes: ["id", "comment_text", "title"],
    where: {
      id: req.params.id,
    },
    //include: [
    //   {
    //   model: User,Post,Comment,
    // attributes: ["username"],
    // },
  })
    .then((dbLikeData) => {
      if (!dbLikeData) {
        res.status(404).json({ message: "no activity is found" });
        return;
      }
      res.json(dbLikeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Like.create({
    post_id: req.body.post_id,
    comment_id: req.body.comment_id,
  })
    .then((dbLikeData) => res.json(dbLikeData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Like.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbLikeData) => {
      if (!dbLikeData) {
        res.status(404).json({ message: "No activity is found" });
        return;
      }
      res.json(dbLikeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
