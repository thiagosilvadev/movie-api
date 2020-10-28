const {
    response
} = require("express");
const express = require("express");
const router = express.Router();
const film = require("./film.js");



router.get("/film/:search", async (req, res) => {
    const {search} = req.params;
    const data = await film.search(search);
    res.json(data);

})




module.exports = router;