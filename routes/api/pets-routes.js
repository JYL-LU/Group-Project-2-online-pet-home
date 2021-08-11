const router = require("express").Router();
const { Pets } = require("../../models");

router.get("/", (req, res) => {
  Pets.findAll()
    .then((dbPetsData) => res.json(dbPetsData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Pets.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "pet_name"],
    include: [
      {
        model: Pets,
        attributes: ["id", "pet_name"],
      },
    ],
  })
    .then((dbPetsData) => {
      if (!dbPetsData) {
        res.status(404).json({ message: "No pets found under this id" });
        return;
      }
      res.json(dbPetsData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Pets.create({
    image_url: req.body.image_url,
    pet_name: req.body.pet_name,
    id: req.body.id,
    birthday: req.body.birthday,
    health_condition: req.body.health_condition,
    gender: req.body.gender,
  })
    .then((dbPetsData) => res.json(dbPetsData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  Pets.update({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPetsData) => {
      if (!dbPetsData) {
        res.status(404).json({ message: "No pets found under this id" });
        return;
      }
      res.json(dbPetsData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Pets.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPetsData) => {
      if (!dbPetsData) {
        res.status(404).json({ message: "No pets found under this id" });
        return;
      }
      res.json(dbPetsData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
