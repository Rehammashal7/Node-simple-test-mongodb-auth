const router = require("express").Router();

router.get("/usertest", (req, res) => {
  res.send("usr test is successfull");
});

router.post("/userposttest", (req, res) => {
  const username = req.body.username;
  res.send("your user name is:" + username);
});

module.exports = router;

