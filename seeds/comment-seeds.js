const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "she's doing very well! She is off medication and is no longer a shy dog! ",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "Red is certainly a connoisseur of toys, with no lack of love for each and every one.",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "Bao does have some joint pain, especially in the back end.",
    user_id: 3,
    post_id: 3,
  },
  {
    comment_text: "this homeless dog is just moved to the shelter",
    user_id: 4,
    post_id: 4,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
