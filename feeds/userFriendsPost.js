Post.find({ userId: { $in: user.friends } })
  .populate("userId", "username")
  .exec(function (err, posts) {
    // Write code to handle post
  });
