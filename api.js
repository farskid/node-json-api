const express = require("express");
const PORT = 3000;
const cors = require("cors");
const { paginateCollection } = require("./utils");

const server = express();
const PER_PAGE = 10;
const db = require("./data.json");

server.use(cors());
server.listen(PORT);

server.get("/api/posts", (req, res) => {
  let { page, perPage = PER_PAGE } = req.query;
  const paginatedPosts = paginateCollection(db.posts)(page, perPage);
  return res.status(200).json(paginatedPosts);
});
