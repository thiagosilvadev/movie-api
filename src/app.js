const express = require("express");
const app = express();
const { port } = require("./assets/assets.json")

app.get("/", (req, res) => {
    res.json({
        "message": "olá, mundo"
    })
})




app.listen(port);