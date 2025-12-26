console.log("Script carregado");

const button = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const image = document.getElementById("resultImage");
const status = document.getElementById("status");
const loader = document.getElementById("loader");

button.addEventListener("click", generateImage);
downloadBtn.addEventListener("click", downloadImage);

async function generateImage() {
  console.log("Botão clicado");

  const description = document.getElementById("description").value;
  const style = document.getElementById("style").value;
  const variation = document.getElementById("variation").value;

  if (!description) {
    status.innerText = "Descreva a cena primeiro.";
    return;
  }

  // Estado: loading
  button.disabled = true;
  downloadBtn.style.display = "none";
  status.innerText = "Gerando imagem...";
  loader.style.display = "block";
  image.style.display = "none";

  try {
    console.log("Enviando request para backend...");

    const response = await fetch("/generate-image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description, style, variation }),
    });

    console.log("Status da resposta:", response.status);

    const data = await response.json();
    console.log("Dados recebidos:", data);

    if (!data.imageBase64) {
      throw new Error("Resposta sem imageBase64");
    }

    // Sucesso
    image.src = `data:image/png;base64,${data.imageBase64}`;
    image.style.display = "block";
    status.innerText = "Imagem gerada com sucesso!";
    downloadBtn.style.display = "block";

    setTimeout(() => {
      image.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 100);

  } catch (error) {
    console.error("Erro no frontend:", error);
    status.innerText = "Erro ao gerar imagem.";
  } finally {
    loader.style.display = "none";
    button.disabled = false;
  }
}

function downloadImage() {
  const link = document.createElement("a");
  link.href = image.src;
  link.download = "imagem-gerada-ia.png";
  link.click();
}
