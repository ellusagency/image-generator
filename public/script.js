console.log("Script carregado");

const button = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const image = document.getElementById("resultImage");
const status = document.getElementById("status");
const loader = document.getElementById("loader");

button.addEventListener("click", generateImage);
downloadBtn.addEventListener("click", downloadImage);

async function generateImage() {
  const description = document.getElementById("description").value;
  const style = document.getElementById("style").value;
  const variation = document.getElementById("variation").value;

  // Reset visual
  status.innerText = "";
  image.src = "";
  image.style.display = "none";
  downloadBtn.style.display = "none";
  loader.style.display = "block";

  try {
    const response = await fetch("/generate-image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description,
        style,
        variation,
      }),
    });

    const data = await response.json();

    // Conteúdo bloqueado
    if (!response.ok && data.error === "CONTENT_BLOCKED") {
      status.innerText =
        "Esse prompt não pode ser gerado por restrições de direitos autorais ou segurança.";
      return;
    }

    // Outro erro
    if (!response.ok) {
      status.innerText =
        "Erro ao gerar a imagem. Tente novamente.";
      return;
    }

    // Sucesso
    image.src = `data:image/png;base64,${data.imageBase64}`;
    image.style.display = "block";
    downloadBtn.style.display = "inline-block";

  } catch (err) {
    console.error("Erro de conexão:", err);
    status.innerText =
      "Erro de conexão com o servidor.";
  } finally {
    loader.style.display = "none";
  }
}

function downloadImage() {
  const link = document.createElement("a");
  link.href = image.src;
  link.download = "imagem-gerada-ia.png";
  link.click();
}