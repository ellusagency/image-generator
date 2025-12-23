const OpenAI = require("openai");
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateImage({ description, style, variation }) {
  const prompt = `
High quality, professional illustration, realistic lighting, detailed composition.
${style} style.
${variation} detail level.
Scene: ${description}
`.trim();

  console.log("🧠 Prompt gerado:\n" + prompt);
  console.log("🔹 Chamando OpenAI...");

  const response = await openai.images.generate({
    model: "gpt-image-1",
    prompt,
    size: "1024x1024",
  });

  console.log("Imagem gerada com sucesso");

  return {
    imageBase64: response.data[0].b64_json,
    promptUsed: prompt,
    size: "1024x1024",
  };
}

module.exports = { generateImage };
