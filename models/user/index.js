const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  friendRequests: {
    sent: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    received: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  posts: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Post", date: new Date() },
  ],
  commentedOnPost: [
    {
      userId: type.mongoose.Schema.Types.ObjectId,
      content: string,
      timestamp: date,
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
