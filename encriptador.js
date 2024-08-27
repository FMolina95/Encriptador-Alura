//FUNACION PARA ENCRIPTAR TEXTO

function encriptarTexto() {
    let textoInput = document.getElementById("textoInput").value;
    let textoEncriptado = textoInput
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("textoSalida").innerText = textoEncriptado;
}


//FUNCION PARA DESENCRIPTAR TEXTO

function desencriptarTexto() {
    let textoInput = document.getElementById("textoInput").value;
    let textoDesencriptado = textoInput
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("textoSalida").innerText = textoDesencriptado;
}


// FUNCION PARA COPIAR TEXTO

function copiarTexto() {
    let textoSalida = document.getElementById("textoSalida").innerText;
    navigator.clipboard.writeText(textoSalida).then(() => {
        alert("Texto copiado al portapapeles");
    });
}