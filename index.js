const express = require('express');

const app = express();

app.get("/", (req, res) =>{
    res.json({
        "message": "App containerized using dockerss desktop"
    })
})

app.listen(3001, ()=>{
    console.log("Server is running on port 3001");
})