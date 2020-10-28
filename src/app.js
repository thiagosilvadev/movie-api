const express = require("express");
const app = express();
require('dotenv/config');
const router = require("./routes")

app.use(router);



app.listen(process.env.PORT);