// const { GoogleGenerativeAI } = require("@google/generative-ai");


//IMPORTANDO O GEMINI
import { GoogleGenerativeAI } from "@google/generative-ai";

// ACESASNDO A API DO GEMINI VIA SUA API KEY
const genAI = new GoogleGenerativeAI("AIzaSyBlmBCzwyKZJeouno5ZMoaub667dJ-vB9k");

//INSTANCIANDO SEU MODELO
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//COLOCANDO O PROMPT
const prompt = "Me explica fatoração.";

//ENVIANDO O PROMPT PARA O GEMINI E ESPERADNO A RESPOSTA DELE
const result = await model.generateContent(prompt);
console.log(result.response.text());