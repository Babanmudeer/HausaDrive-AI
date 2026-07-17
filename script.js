const chat = document.getElementById("chat");
const input = document.getElementById("msg");
const sendBtn = document.getElementById("sendBtn");
const clearBtn = document.getElementById("clearBtn");
const typing = document.getElementById("typing");

function addMessage(sender, text) {
    const div = document.createElement("div");
    div.className = sender === "AI" ? "message ai" : "message user";

    div.innerHTML = `
        <strong>${sender === "AI" ? "🤖 HausaDrive AI" : "👤 Kai"}</strong>
        <p>${text}</p>
    `;

    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
}

function fakeReply(userText) {

    typing.style.display = "block";

    setTimeout(() => {

        typing.style.display = "none";

        addMessage(
            "AI",
            "Na karɓi saƙonka: \"" + userText + "\". A Version 3 za a haɗa ni da Gemini AI domin in ba da amsoshi na gaske."
        );

    },1000);

}

function sendMessage(){

    const text = input.value.trim();

    if(text==="") return;

    addMessage("USER",text);

    input.value="";

    fakeReply(text);

}

sendBtn.addEventListener("click",sendMessage);

input.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        sendMessage();

    }

});
