async function sendMessage() {
    const text = input.value.trim();

    if (text === "") return;

    addMessage("USER", text);

    input.value = "";

    typing.style.display = "block";

    try {

        const response = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: text
            })
        });

        const data = await response.json();

        typing.style.display = "none";

        addMessage("AI", data.reply);

    } catch (error) {

        typing.style.display = "none";

        addMessage(
            "AI",
            "⚠️ An samu matsala wajen haɗawa da AI. Ka sake gwadawa."
        );
    }
}

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

clearBtn.addEventListener("click", () => {

    chat.innerHTML = `
        <div class="message ai">
            <strong>🤖 HausaDrive AI</strong>
            <p>Sannu! Ni ne HausaDrive AI. Yaya zan taimaka maka yau?</p>
        </div>
    `;
});

window.onload = () => {
    input.focus();
};
