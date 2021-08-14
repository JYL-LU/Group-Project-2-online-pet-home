const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// user has many posts
User.hasMany(Post, {
  foreignKey: "user_id",
});

// post belongs to one user
Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

// comment belongs to one post
Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "cascade",
});

// comment belongs to one post
Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

// user has many comments
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

// post has many comments
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "cascade",
});
module.exports = { User, Post, Comment };
