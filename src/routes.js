const express = require("express");

const router = express.Router();


router.get("/", (req, res) => {
    res.json({
        Olá: "mundo"
    })

})




module.exports = router;