const express = require("express");

const router = express.Router();
const blogs = require("../models/blogs");

router.get("/blogs/:id", async (req, res) => {
  const { id } = req.params;
  const blog = await blogs.findById({ _id: id });
  res.render("index", {
    blog,
  });
});

module.exports = router;
