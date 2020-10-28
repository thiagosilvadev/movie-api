const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({
        "message": "olá, mundo"
    })
})




app.listen(3000, () => {
    console.log("hello world");
});