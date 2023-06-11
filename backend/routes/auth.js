const express = require("express");
const router = express.Router();

router.route("/signup").get((req, res) => {
  res.send("HELLO SIGNUP");
});
router.route("/login").get((req, res) => {
  res.send("HELLO LOGIN");
});

module.exports = router;
