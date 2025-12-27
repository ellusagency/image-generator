const OpenAI = require("openai");

function normalizeConflict(text) {
  return text
    .replace(/lutando contra/gi, "em confronto dinâmico com")
    .replace(/batalha/gi, "cena de tensão");
}

function normalizeConflict(text) {
  return text
    .replace(/lutando contra/gi, "em confronto dinâmico com")
    .replace(/batalha/gi, "cena de tensão");
}

function buildSafePrompt({ description, style, variation }) {
  return `
High quality, original, fictional illustration.

Rules:
- Characters must be original and not resemble copyrighted characters.
- Respect colors, materials and visual attributes described.
- Avoid explicit violence; depict dynamic tension or confrontation.

Style: ${style}
Detail level: ${variation}

Scene:
${description}
`.trim();
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateImage({ description, style, variation }) {

  // 1️⃣ Normaliza linguagem de conflito
  const normalizedDescription = normalizeConflict(description);

  // 2️⃣ Constrói o prompt final
  const prompt = buildSafePrompt({
    description: normalizedDescription,
    style,
    variation,
  });

  console.log("Prompt final:\n", prompt);

  try {
    const response = await openai.images.generate({
      model: "gpt-image-1",
      prompt,
      size: "1024x1024",
    });

    const imageBase64 = response?.data?.[0]?.b64_json;

    if (!imageBase64) {
      return {
        success: false,
        errorType: "CONTENT_BLOCKED",
        message:
          "Esse prompt não pode ser gerado por restrições de direitos autorais ou segurança.",
      };
    }

    return {
      success: true,
      imageBase64,
    };

  } catch (error) {
    console.error("Erro na geração da imagem:", error);

    if (error.code === "moderation_blocked") {
      return {
        success: false,
        errorType: "CONTENT_BLOCKED",
        message:
          "Esse prompt não pode ser gerado por restrições de direitos autorais ou segurança.",
      };
    }

    return {
      success: false,
      errorType: "INTERNAL_ERROR",
      message: "Erro ao gerar a imagem.",
    };
  }
}

module.exports = { generateImage };