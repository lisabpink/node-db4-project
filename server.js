const express = require("express");
const recipeRouter = require("../recipes/recipes-router.js");
const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/recipes", recipeRouter);

server.get("/", (req, res) => {
  db.getRecipes().then(recipes => {
    res.status(200).json(recipes);
  });
}); 
//GET /api/recipes/: all recipes (without details about ingredients or steps)
server.get("/api/recipes", (req, res) => {
  db("recipes")
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});



server.get('/:id', (req, res) => {
  db.getInstructions(req.params.id)
     .then(recipes => {
        res.status(200).json(recipes);
     })
     .catch(error => {
        res.status(500).json({message: 'problem getting steps', error})
     })
})
module.exports = server;
