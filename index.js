const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

const chefs = require("./data/chefs.json");
const ChefDetails = require("./data/allChef.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("My Server is Running......");
});
app.get("/categories", (req, res) => {
  res.send(chefs);
});
app.get("/allchef", (req, res) => {
  res.send(ChefDetails);
});
app.get("/allchef/:id", (req, res) => {
  const id = req.params.id;
  const selectedChef = ChefDetails.find((chefD) => chefD.id == id);
  console.log(id);
  res.send(selectedChef);
});
app.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const categoryChef = ChefDetails.filter((c) => c.chefs_id == id);
  res.send(categoryChef);
});

app.listen(port, () => {
  console.log(`The server Is Running${port}`);
});
