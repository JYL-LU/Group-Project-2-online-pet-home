const { Post } = require("../models");

const postData = [
  {
    title: "Cookie",
    content:
      "Cookie is a gentle soul. Made for extreme couch snuggles, rolling around on your lap and wiggles. She adores people. People are her best thing and all she wants is to be at home with them. She is polite and courteous of her toys and food. Also perfectly housetrained.",
    address: "1st ave, Seattle",
    image_url: "https://images.dog.ceo/breeds/groenendael/n02105056_6567.jpg",
    user_id: 1,
  },
  {
    title: "Red",
    content: "This handsome, quirky-eared guy is looking for a best-bud. Someone who can hang, go on long walks with and play some ball!",
    address: "e ave, San Francisco",
    image_url: "https://images.dog.ceo/breeds/pekinese/n02086079_11089.jpg",
    user_id: 2,
  },
  {
    title: "Bao",
    content: "Bao is in a foster home, and is currently not at the shelter. Please find info below on how to adopt him, thanks!",
    address: "w ave, San Francisco",
    image_url:
      "https://images.dog.ceo/breeds/ovcharka-caucasian/IMG_20190611_152047.jpg",
    user_id: 3,
  },
  {
    title: "Joke",
    content: "He will need an adult only home (ages 12+) as he can be a bit skeptical of new people. In addition, Joke will need continued guidance on helping to build his confidence around new folks. Treats help lots!",
    address: "1st ave, Seattle",
    image_url: "https://images.dog.ceo/breeds/pyrenees/n02111500_2736.jpg",
    user_id: 3,
  },
  {
    title: "Brown",
    content: "We're still getting to know Brown, so please check back later for more information",
    address: "4th ave, Seattle",
    image_url: "https://images.dog.ceo/breeds/komondor/n02105505_3723.jpg",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
