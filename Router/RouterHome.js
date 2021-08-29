const router = require("express").Router();
const path = require("path");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../view/login_signup.html"));
});

router.get("/Home", (req, res) => {
  res.sendFile(path.join(__dirname, "../view/Home.html"));
});
module.exports = router;
