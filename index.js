const express = require('express');
var cors = require('cors')
const app = express();
const port = 5000;

const chefs = require('./data/chefs.json');
const recipes = require('./data/recipes.json');

app.use(cors())

app.get('/', (req, res)=>{
    res.send("The Chinese Chef Recipe is Running..")
})
// Send Data Response for chefs
app.get('/chefs', (req, res)=>{
    res.send(chefs);
})

// Send Data Response for Recipes
app.get('/recipes', (req, res) =>{
    res.send(recipes);
})
app.get('/recipes/:id', (req, res) =>{
    const chefId = req.params.id;
    const chefRecipes = recipes.filter(recipe => recipe.chef_id == chefId);
    res.send(chefRecipes);
})

app.listen(port, ()=>{
    console.log("App is running...")
})






