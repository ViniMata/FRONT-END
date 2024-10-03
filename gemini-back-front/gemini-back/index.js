//IMPORTANDO O GEMINI
import { GoogleGenerativeAI } from "@google/generative-ai";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

// CONFIGURAR O ENDPOINT

const app = express()
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

//CRIANDO O ENDPOINT PARA RECEBER E ENVIAR MENSAGENS À DO GEMINI E RETORNAR A RESPOSTA PARA O FRONT-END

app.post("/sendMessage", async (req, res) => {

    const { messagesGemini } = req.body;
    console.log(messagesGemini[0]);

    // ACESASNDO A API DO GEMINI VIA SUA API KEY
    const genAI = new GoogleGenerativeAI("AIzaSyBlmBCzwyKZJeouno5ZMoaub667dJ-vB9k");

    //INSTANCIANDO SEU MODELO
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    //COLOCANDO O PROMPT
    const prompt = messagesGemini[0].parts[0].text;

    //ENVIANDO O PROMPT PARA O GEMINI E ESPERADNO A RESPOSTA DELE
    const result = await model.generateContent(prompt);
    console.log(result.response.text());


    res.json({
        chat_completion: result.response.text()
    })

})

app.listen(port, () => (
    console.log(`Exemplo de app consumindo http://localhost:${3001}`)
))