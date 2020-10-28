const express = require("express");
const app = express();
const { port } = require("./assets/assets.json");

const router = require("./routes")

app.use(router);



app.listen(port);