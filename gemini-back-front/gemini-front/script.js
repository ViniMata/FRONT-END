//INPUT DA MENSAGEM DIITADA PELO USUARIO
let inputMessage = document.getElementById("message");

// DIV ONDE IREI EXIBIR AS MENSAGENS DO USUARIO E DO ASSISTENTE
let chatlog = document.getElementById("chat-log");

//ARRAY QUE IRA SALVAR O HISTORICO LOCAL DE MENSAGENS TROCADAS COM O GEMINI
let messagesGemini = [];

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let messageText = inputMessage.value; // texto digirado pelo usuario

    let newMessageGemini = {
        "role" : "user",
        "parts" : [{"text": messageText}],

    };

    messagesGemini.push(newMessageGemini);

    inputMessage.value = "";

    console.log(messagesGemini);

    let messageElement = document.createElement("div")
    messageElement.classList.add("message");
    messageElement.classList.add("message--sent");
    messageElement.innerHTML =`
    <div class="message__text">${messageText}</div>
    `;
    chatlog.appendChild(messageElement);
    
    //REQUISIÇÃO PARA A MINHA API LOCAL!!!!
    fetch("http://localhost:3000/sendMessage", {
        mathod: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            messagesGemini
        })
    })

        .then(res => res.json());
});