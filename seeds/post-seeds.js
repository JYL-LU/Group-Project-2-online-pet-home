const { Post } = require("../models");

const postData = [
  {
    pet_name: "Cookie",
    age: 5,
    health_condition: "one eye is blind",
    gender: "female",
    address: "1st ave, Seattle",
    image_url: "https://images.dog.ceo/breeds/groenendael/n02105056_6567.jpg",
    user_id: 1,
  },
  {
    pet_name: "Red",
    age: 2,
    health_condition: "healthy",
    gender: "male",
    address: "e ave, San Francisco",
    image_url: "https://images.dog.ceo/breeds/pekinese/n02086079_11089.jpg",
    user_id: 2,
  },
  {
    pet_name: "Bao",
    age: 8,
    health_condition: "healthy",
    gender: "female",
    address: "w ave, San Francisco",
    image_url: "https://images.dog.ceo/breeds/ovcharka-caucasian/IMG_20190611_152047.jpg",
    user_id: 3,
  },
  {
    pet_name: "Joke",
    age: 1,
    health_condition: "healthy",
    gender: "female",
    address: "1st ave, Seattle",
    image_url: "https://images.dog.ceo/breeds/pyrenees/n02111500_2736.jpg",
    user_id: 3,
  },
  {
    pet_name: "Brown",
    age: 5,
    health_condition: "healthy",
    gender: "female",
    address: "4th ave, Seattle",
    image_url: "https://images.dog.ceo/breeds/komondor/n02105505_3723.jpg",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
