const express = require("express");
var cors = require('cors')
const app = express();
const { createServer } = require("http");
const httpServer = createServer(app);
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
require("dotenv").config({ path: "./config.env" });

const connectDb = require("./utilsServer/connectDb");
connectDb();

app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 3000;


nextApp.prepare().then(() => {
  app.use("/api/signup", require("./api/signup"));
  app.use("/api/auth", require("./api/auth"));
  app.use("/api/highscores", require("./api/highscores"));

  app.all("*", (req, res) => handle(req, res));

  httpServer.listen(PORT, err => {
    if (err) throw err;
    console.log("Express server running");
  });
});
    
