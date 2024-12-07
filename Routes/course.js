const { Router } = require("express");

const courseRouter = Router();

courseRouter.get("/purchase", (req, res) => {});

module.exports = {
  courseRouter: courseRouter,
};
