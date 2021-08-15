const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "this homeless dog is under urgent condiction",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "this homeless dog is feeded today",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "this homeless dog is moved to the shelter",
    user_id: 3,
    post_id: 3,
  },
  {
    comment_text: "this homeless dog's leg is under bad condition",
    user_id: 4,
    post_id: 4,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
