document.getElementById("encrypt-btn").addEventListener("click", function() {
    let inputText = document.getElementById("input-text").value;
    if (isValidText(inputText)) {
        let encryptedText = encrypt(inputText);
        displayMessage(encryptedText);
    } else {
        alert("El texto no cumple con los requisitos: solo letras minúsculas y sin acentos.");
    }
});

document.getElementById("decrypt-btn").addEventListener("click", function() {
    let inputText = document.getElementById("input-text").value;
    if (isValidText(inputText)) {
        let decryptedText = decrypt(inputText);
        displayMessage(decryptedText);
    } else {
        alert("El texto no cumple con los requisitos: solo letras minúsculas y sin acentos.");
    }
});

document.getElementById("copy-btn").addEventListener("click", function() {
    let outputMessage = document.getElementById("output-message").innerText;
    navigator.clipboard.writeText(outputMessage);
});

const isValidText = (text) => {
    // Verificar si el texto solo contiene letras minúsculas y sin acentos
    return /^[a-z\s]+$/.test(text);
}

const encrypt = (text) => {
    return text.replace(/e/g, "enter")
               .replace(/i/g, "imes")
               .replace(/a/g, "ai")
               .replace(/o/g, "ober")
               .replace(/u/g, "ufat");
}

const decrypt = (text) => {
    return text.replace(/enter/g, "e")
               .replace(/imes/g, "i")
               .replace(/ai/g, "a")
               .replace(/ober/g, "o")
               .replace(/ufat/g, "u");
}

const displayMessage = (message) => {
    let outputDiv = document.getElementById("output-message");
    outputDiv.innerHTML = `<p>${message}</p>`;
}