const express = require("express");
const router = express.Router();
const { generateImage } = require("../services/imageService");

router.post("/", async (req, res) => {
  try {
    console.log(" Body recebido:", req.body);

    const { description, style, variation } = req.body;

    const result = await generateImage({
      description,
      style,
      variation,
    });

    console.log(" Enviando resposta para o cliente");

    return res.status(200).json(result);
  } catch (error) {
    console.error(" Erro no endpoint:", error);
    return res.status(500).json({ error: "Failed to generate image" });
  }
});

module.exports = router;
