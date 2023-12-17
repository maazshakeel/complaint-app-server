require("dotenv").config();
import express from "express";
import config from "config";

const app = express();

const port = config.get<string>("port");

app.get("/healthcheck", async (req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`App started at http://localhost:${port}`);
});
