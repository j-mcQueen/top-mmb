const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Jack McQueen will become a professional front end web developer!",
    user: "Jack McQueen",
    added: new Date(),
  },
  {
    text: "Message from the future - Jack McQueen will achieve everything he wants in life",
    user: "Angel",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

router.get("/new", (req, res, next) => {
  res.render("form", {
    heading: "Add a message",
    author: "Author",
    message: "Message",
  });
});

router.post("/new", (req, res, next) => {
  messages.push({
    text: req.body.msg,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
