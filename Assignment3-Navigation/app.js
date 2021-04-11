const express = require("express");
const path = require("path");
const userRoute = require("./routes/userRoute");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(userRoute);

app.listen(3000);
