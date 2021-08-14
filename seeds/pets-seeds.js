const { Pet } = require("../models/Pets");

const petData = [
  {
    image_url: "",
    pet_name: "Cookie",
    id: 0123,
    birthday: 0210, //how to get years
    health_condition: "healthy",
    gender: "female",
  },
];

const seedPets = () => Pets.bulkCreate(petsData);

module.exports = seedPets;
