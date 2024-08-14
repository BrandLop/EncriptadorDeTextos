document.getElementById("encrypt-btn").addEventListener("click", function() {
    let inputText = document.getElementById("input-text").value;
    let encryptedText = encrypt(inputText);
    displayMessage(encryptedText);
});

document.getElementById("decrypt-btn").addEventListener("click", function() {
    let inputText = document.getElementById("input-text").value;
    let decryptedText = decrypt(inputText);
    displayMessage(decryptedText);
});

document.getElementById("copy-btn").addEventListener("click", function() {
    let outputMessage = document.getElementById("output-message").innerText;
    navigator.clipboard.writeText(outputMessage);
});

function encrypt(text) {
    return text.replace(/e/g, "enter")
               .replace(/i/g, "imes")
               .replace(/a/g, "ai")
               .replace(/o/g, "ober")
               .replace(/u/g, "ufat");
}

function decrypt(text) {
    return text.replace(/enter/g, "e")
               .replace(/imes/g, "i")
               .replace(/ai/g, "a")
               .replace(/ober/g, "o")
               .replace(/ufat/g, "u");
}

function displayMessage(message) {
    let outputDiv = document.getElementById("output-message");
    outputDiv.innerHTML = `<p>${message}</p>`;
}
