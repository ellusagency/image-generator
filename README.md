 # Gerador de Imagens com IA

Aplicação web que gera imagens a partir de descrições em texto utilizando Inteligência Artificial (OpenAI).  
O usuário pode escolher o estilo visual, nível de detalhamento e baixar a imagem gerada.

---

## Demo
Aplicação em produção (Render):  
https://image-generator-p0yy.onrender.com/

---

## Funcionalidades
- Geração de imagens a partir de texto
- Seleção de estilo:
  - Realista
  - Ilustração
  - Cinematográfico
- Controle de nível de detalhamento
- Indicador de carregamento durante a geração
- Download da imagem gerada
- Interface responsiva e centralizada

---

## Tecnologias utilizadas

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla)

### Backend
- Node.js
- Express
- OpenAI API
- dotenv

### Infraestrutura
- GitHub
- Render

---

## Estrutura do projeto

```txt
image-generator/
│
├── index.js
├── package.json
├── .env.example
│
├── src/
│   ├── app.js
│   ├── routes/
│   │   └── generateImage.js
│   └── services/
│       └── imag
