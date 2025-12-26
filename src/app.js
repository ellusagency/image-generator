const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// servir frontend
app.use(express.static(path.join(__dirname, "../public")));

// rotas
app.use("/generate-image", require("./routes/generateImage"));

// fallback para SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;
