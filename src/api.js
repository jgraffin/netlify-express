const express = require("express");

const serverless = require("serverless-http");

const app = express();

const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      id: "1",
      name: "Julio",
      team: "Manchester",
    },
    {
      id: "2",
      name: "Mark ",
      team: "Arsenal",
    },
  ]);
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
