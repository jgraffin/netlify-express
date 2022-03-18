const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

router.get("/", (req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
  res.json([
    {
      id: "1",
      name: "Julio",
      team: "Manchester",
      slugTeam: "manchester",
    },
    {
      id: "2",
      name: "Mark ",
      team: "Arsenal",
      slugTeam: "arsenal",
    },
  ]);
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
