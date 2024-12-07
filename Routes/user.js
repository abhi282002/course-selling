const { Router } = require("express");

const userRouter = Router();

userRouter.get("/signin", (req, res) => {
  //signin router
});

module.exports = {
  userRouter: userRouter,
};
