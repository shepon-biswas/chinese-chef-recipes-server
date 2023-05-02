const express = require('express');
var cors = require('cors')
const app = express();
const port = 5000;

const chefs = require('./data/chefs.json');

app.use(cors())

app.get('/', (req, res)=>{
    res.send("The Chinese Chef Recipe is Running..")
})
// Send Data Response for chefs
app.get('/chefs', (req, res)=>{
    res.send(chefs);
})

app.listen(port, ()=>{
    console.log("App is running...")
})






