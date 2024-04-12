const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  content: String,
  comments: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      content: String,
      timestamp: Date,
    },
  ],
  timestamp: Date,
  likes: Number,
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
