const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// servir frontend
app.use(express.static(path.join(__dirname, "../public")));

// suas rotas
app.use("/generate-image", require("./routes/generateImage"));

// fallback para SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;



/*const express = require("express");
const path = require("path");
const generateImageRoute = require("./routes/generateImage");

const app = express();

app.use(express.json());

// 👇 ESSA LINHA É A NOVA
app.use(express.static(path.join(__dirname, "../public")));

app.use("/generate-image", generateImageRoute);

module.exports = app;*/
