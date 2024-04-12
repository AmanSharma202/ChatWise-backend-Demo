// Assuming `user` is the authenticated user
Post.find({ "comments.userId": { $in: user.friends } })
  .populate("userId", "username")
  .exec(function (err, posts) {
    // Write a code to handle a post
  });
