const express = require("express");
const router = express.Router();
const { generateImage } = require("../services/imageService");

router.post("/", async (req, res) => {
  console.log("Body recebido:", req.body);

  const { description, style, variation } = req.body;

  try {
    const result = await generateImage({ description, style, variation });

    // erro tratado corretamente
    if (!result.success) {
      if (result.errorType === "CONTENT_BLOCKED") {
        return res.status(400).json({
          error: "CONTENT_BLOCKED",
          message: result.message,
        });
      }

      return res.status(500).json({
        error: "INTERNAL_ERROR",
        message: result.message,
      });
    }

    // sucesso real
    return res.status(200).json({
      imageBase64: result.imageBase64,
    });

  } catch (err) {
    console.error("Erro inesperado:", err);

    return res.status(500).json({
      error: "INTERNAL_ERROR",
      message: "Erro interno ao gerar a imagem.",
    });
  }
});

module.exports = router;
