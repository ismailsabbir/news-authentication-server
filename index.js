const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
app.use(cors());
const categories = require("./data/categories.json");
const news = require("./data/news.json");
const product = require("./data/product.json");
app.get("/", (req, res) => {
  res.send("Hello World! news authentication");
});
app.get("/categories", (req, res) => {
  res.send(categories);
});
app.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  const categories_news = news.filter((n) => n.category_id === id);
  res.send(categories_news);
});
app.get("/news", (req, res) => {
  res.send(news);
});
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selected_news = news.find((n) => n._id === id);
  res.send(selected_news);
});
app.get("/shop", (req, res) => {
  res.send(product);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
