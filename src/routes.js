const { json } = require("express");
const express = require("express");

const router = express.Router();


router.get("/", (req, res) => {
    res.json({
        nome: "Thiago"
    })
})




module.exports = router;