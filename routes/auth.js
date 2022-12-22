const router = require("express").Router();
const User = require("../models/User");

router.use("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await newUser.save(); //promise
    res.status(201).json(savedUser); //201 -> successfully added
  } catch (err) {
    res.status(500).json(err); // 500 -> error
  }
});

module.exports = router;
