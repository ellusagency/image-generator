 # Gerador de Imagens com IA

Este projeto é uma aplicação web simples que integra a API da OpenAI para geração de imagens a partir de descrições em texto.
O objetivo é demonstrar, de forma prática, o uso de modelos de IA generativa em um pequeno produto funcional, com código organizado, parâmetros controláveis e estrutura preparada para evolução.

A aplicação permite que o usuário descreva uma cena, selecione estilo e nível de detalhamento, e receba uma imagem gerada dinamicamente.

Funcionalidades

Interface web para descrição de cenas em texto

Controle de estilo visual (ex: realista, ilustração, cinematográfico)

Controle de nível de detalhamento da imagem

Endpoint backend responsável pela integração com a OpenAI

Código organizado por responsabilidade

Configuração segura via variáveis de ambiente

Deploy funcional em ambiente web

Estrutura do Projeto
image-generator/
├── index.js
├── package.json
├── .env.example
├── src/
│   ├── routes/
│   │   └── imageRoutes.js
│   └── services/
│       └── imageService.js
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js

Organização

index.js: ponto de entrada da aplicação, responsável apenas por iniciar o servidor e configurar middlewares.

src/routes: define as rotas HTTP da aplicação.

src/services: concentra a lógica de negócio e a integração com a API da OpenAI.

public: interface web (HTML, CSS e JavaScript).

.env.example: documenta as variáveis de ambiente necessárias, sem expor dados sensíveis.

Essa separação facilita manutenção, leitura do código e futuras evoluções do projeto.

Tecnologias Utilizadas

Node.js

Express

OpenAI API

HTML, CSS e JavaScript (frontend)

Fetch API para comunicação com o backend

Configuração do Ambiente

Clone o repositório:

git clone https://github.com/ellusagency/image-generator.git
cd image-generator


Instale as dependências:

npm install


Crie um arquivo .env baseado no exemplo:

cp .env.example .env


Adicione sua chave da OpenAI no .env:

OPENAI_API_KEY=your_api_key_here


Rode o projeto:

npm run dev

Escolha de Parâmetros de Geração

A geração da imagem é controlada por três elementos principais:

Prompt (descrição): texto livre fornecido pelo usuário, usado como base da geração.

Estilo: influencia o tom visual da imagem (ex: realista, ilustração).

Variação / detalhamento: ajusta o nível de complexidade visual da imagem gerada.

Esses parâmetros são tratados no frontend e enviados ao backend, onde são incorporados ao prompt final enviado para a API da OpenAI.

Como Trocar o Modelo de Geração

A aplicação foi estruturada para facilitar a troca do modelo de geração de imagens no futuro.

Atualmente, o modelo é definido no serviço responsável pela integração com a OpenAI:

Arquivo:
src/services/imageService.js

Exemplo simplificado:

const result = await openai.images.generate({
  model: "gpt-image-1",
  prompt: finalPrompt,
  size: "1024x1024"
});

Para trocar o modelo:

Acesse o arquivo imageService.js

Altere o valor da propriedade model para o novo modelo desejado

Ajuste parâmetros adicionais, se necessário (tamanho, qualidade, variações)

Exemplo:

model: "novo-modelo-aqui"


Como a lógica de integração está isolada na camada de serviço, essa troca não exige mudanças nas rotas nem na interface, mantendo o restante da aplicação intacto.

Essa decisão permite que o projeto evolua facilmente para novos modelos ou APIs sem refatorações grandes.

Considerações Finais

O projeto foi pensado para ir além de uma demo simples, seguindo boas práticas de organização, separação de responsabilidades e configuração segura.
A estrutura permite que a aplicação seja facilmente integrada em um produto maior, com espaço para evolução futura, como autenticação, histórico de gerações ou persistência de dados.
