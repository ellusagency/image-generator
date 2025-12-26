# Gerador de Imagens com IA

Este projeto é um pequeno aplicativo web que utiliza a API da OpenAI para gerar imagens a partir de descrições em texto.  
A aplicação permite controlar o **prompt**, o **estilo visual** e o **nível de detalhamento**, simulando um cenário real de uso em produto.

O objetivo do projeto é demonstrar, na prática, a integração com LLMs e modelos generativos de imagem, com código organizado, escolhas conscientes de parâmetros e possibilidade de evolução futura.

---

## Funcionalidades

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
└── README.md
````

## Organização

- index.js
Arquivo de entrada da aplicação. Responsável apenas por inicializar o servidor.

- src/app.js
Configuração principal do Express, middlewares e registro das rotas.

- routes/
Camada responsável exclusivamente por lidar com requisições HTTP.

- services/
Camada onde fica a lógica de negócio e a integração com a API da OpenAI.

Essa separação mantém o código mais legível, facilita manutenção e permite evolução do projeto sem grandes refatorações.

## Configuração do ambiente
1. Clonar o repositório

````
git clone https://github.com/ellusagency/image-generator.git
cd image-generator
````
2. Instalar dependências

````
npm install

````

2. Configurar variáveis de ambiente

Crie um arquivo .env na raiz do projeto com base no .env.example:

````
OPENAI_API_KEY=YOUR_API_KEY_HERE

````
O arquivo .env não é versionado para evitar exposição de dados sensíveis.

Executar localmente

````
npm run dev

````

O servidor ficará disponível em:
````
http://localhost:3000
````


## Como funciona a geração da imagem

1. O usuário descreve a cena no frontend
2. O backend recebe a requisição
3. O serviço de geração monta o prompt com base em:
   * Texto da descrição
   * Estilo selecionado
   * Nível de detalhamento
4. A requisição é enviada para a API da OpenAI
5. A imagem gerada é retornada e exibida na interface

Escolha consciente de parâmetros

 Prompt:
 Construído de forma explícita para refletir o estilo e o detalhamento escolhidos.

 Estilo:
 Controla a direção estética da imagem, simulando diferentes usos em produto.

 Variação / detalhamento:
  Ajusta a complexidade visual da imagem, permitindo resultados mais simples ou mais ricos.

Esses parâmetros foram pensados para serem facilmente ajustáveis e extensíveis.

## Como trocar o modelo no futuro

A troca de modelo é simples e isolada na camada de serviço.

  Arquivo:
````
src/services/imageService.js

````

  Basta alterar o parâmetro de modelo utilizado na chamada da API, por exemplo:
  
````
model: "gpt-image-1"

````

Pode ser substituído por outro modelo compatível sem impactar:

  * Rotas
  * Frontend
  * Estrutura geral do projeto

Essa abordagem permite:

  * Testar novos modelos
  * Ajustar custo vs qualidade
  * Evoluir o produto sem refatoração estrutural

## Deploy

A aplicação está publicada utilizando Render.
O deploy é automático a partir da branch principal do repositório no GitHub.

## Considerações finais

Este projeto não foi pensado como uma demo simples, mas como uma base um pouco mais sólida com a possibilidade e estrutura já otimizada para ser integrada a um produto.
A organização, separação de responsabilidades e documentação foram pensadas para facilitar manutenção, evolução e entendimento do código.
