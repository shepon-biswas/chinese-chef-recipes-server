const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res)=>{
    res.send("The Chinese Chef Recipe is Running..")
})

app.listen(port, ()=>{
    console.log("App is running...")
})






