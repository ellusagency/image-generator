# Gerador de Imagens com IA

## Visão geral

Este projeto é um pequeno aplicativo web que permite gerar imagens a partir de descrições em texto utilizando a API da OpenAI.  
A aplicação expõe um endpoint no backend em Node.js com Express e uma interface simples no frontend para envio do prompt, escolha de estilo e nível de detalhamento.

O objetivo do projeto é demonstrar, na prática, o uso de modelos de geração de imagem, com código organizado, parâmetros controláveis e documentação clara, de forma que o sistema possa ser facilmente evoluído ou integrado a um produto maior.

# Gerador de Imagens com IA

Este projeto é um pequeno aplicativo web que utiliza a API da OpenAI para gerar imagens a partir de descrições em texto.  
A aplicação permite controlar o **prompt**, o **estilo visual** e o **nível de detalhamento**, simulando um cenário real de uso em produto.

O objetivo do projeto é demonstrar, na prática, a integração com LLMs e modelos generativos de imagem, com código organizado, escolhas conscientes de parâmetros e possibilidade de evolução futura.

---

## Funcionalidades

- Geração de imagens a partir de texto
- Controle de estilo (ex: realista, ilustração, cinematográfico)
- Controle de nível de detalhamento
- Interface web simples
- Backend desacoplado da lógica de prompt
- Pronto para deploy em ambiente cloud (ex: Render)
=======
- Interface simples para descrever uma cena em texto
- Seleção de estilo visual (ex: realista, ilustração, cinematográfico)
- Controle de variação / nível de detalhamento
- Geração de imagem via API da OpenAI
- Download da imagem gerada
- Feedback visual de carregamento durante a geração

---

## Stack utilizada

- **Node.js**
- **Express**
- **OpenAI API**
- **HTML, CSS e JavaScript (frontend simples)**
- **Render** para deploy
- **GitHub** para versionamento

---

## Estrutura do projeto

```text
image-generator/
├── index.js
├── package.json
├── .env.example
├── src/
│   ├── app.js
│   ├── routes/
│   │   └── imageRoutes.js
│   └── services/
│       └── imageService.js
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── src/
│   ├── app.js
│   ├── config/
│   ├── routes/
│   │   └── generateImage.js
│   ├── services/
│   │   └── imageService.js
│   ├── prompts/
│   │   └── imagePrompt.js
│   └── utils/
├── index.js
├── package.json
├── package-lock.json
├── response.json
└── README.md
```

---

## Tecnologias utilizadas

- Node.js
- Express
- OpenAI API
- HTML, CSS e JavaScript

---

## Configuração do ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
OPENAI_API_KEY=SUACHAVEAQUI
```

---

## Instalação e execução local

```bash
npm install
npm run dev
```

---

## Como funciona a geração de imagens

1. O usuário descreve uma cena na interface.
2. O frontend envia os dados para `/generate-image`.
3. A rota chama o serviço de geração.
4. O prompt é montado em `prompts/imagePrompt.js`.
5. A OpenAI gera a imagem e retorna base64.
6. A imagem é exibida e pode ser baixada.

---

## Como trocar o modelo de geração de imagem

Arquivo responsável:

```
src/services/imageService.js
```

Exemplo:

```js
const response = await openai.images.generate({
  model: "gpt-image-1",
  prompt,
  size: "1024x1024"
});
```

Para trocar o modelo:
- Altere o campo `model`
- Ajuste parâmetros conforme o modelo escolhido
- Se necessário, ajuste o prompt

---

## Decisões de arquitetura

- Separação de responsabilidades
- Prompt isolado para fácil manutenção
- Variáveis sensíveis fora do código
- Estrutura preparada para evolução

---

## Deploy

O projeto pode ser publicado em plataformas como Render, configurando a variável `OPENAI_API_KEY`.

---

## Observações finais

Este projeto foi estruturado para ser simples, mas com padrões próximos de um produto real, facilitando manutenção, evolução e integração futura.

