const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routes/auth");

require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/", router);

app.listen(3000, () => {
  console.log("SERVER RUNNING ON 3000");
});
