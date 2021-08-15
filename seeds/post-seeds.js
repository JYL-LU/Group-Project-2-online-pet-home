const { Post } = require("../models");

const postData = [
  {
    title: "Cookie",
    content: "one eye is blind",
    address: "1st ave, Seattle",
    image_url: "https://images.dog.ceo/breeds/groenendael/n02105056_6567.jpg",
    user_id: 1,
  },
  {
    title: "Red",
    content: "healthy",
    address: "e ave, San Francisco",
    image_url: "https://images.dog.ceo/breeds/pekinese/n02086079_11089.jpg",
    user_id: 2,
  },
  {
    title: "Bao",
    content: "healthy",
    address: "w ave, San Francisco",
    image_url: "https://images.dog.ceo/breeds/ovcharka-caucasian/IMG_20190611_152047.jpg",
    user_id: 3,
  },
  {
    title: "Joke",
    content: "healthy",
    address: "1st ave, Seattle",
    image_url: "https://images.dog.ceo/breeds/pyrenees/n02111500_2736.jpg",
    user_id: 3,
  },
  {
    title: "Brown",
    content: "healthy",
    address: "4th ave, Seattle",
    image_url: "https://images.dog.ceo/breeds/komondor/n02105505_3723.jpg",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
