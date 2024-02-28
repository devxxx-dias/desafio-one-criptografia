let areaDeTexto = document.getElementById("areaDeTexto");
let botaoCodificar = document.getElementById("botaoCodificar");

let areaDeTextoCodificada = document.getElementById("areaDeTextoCodificada");
let botaoDescodificar = document.getElementById("botaoDescodificar");


botaoCodificar.addEventListener("click", function () {
    mostrarCaixaSecundaria()
    let mensagemOriginal = areaDeTexto.value;
    let mensagemCodificada = codificarMensagem(mensagemOriginal);

    areaDeTextoCodificada.value = mensagemCodificada;

    console.log("Mensagem Original:", mensagemOriginal);
    console.log("Mensagem Codificada:", mensagemCodificada);
});


botaoDescodificar.addEventListener("click", function () {
    mostrarCaixaSecundaria()
    let mensagemOriginal = areaDeTexto.value;

    let mensagemDescodificada = descodificarMensagem(mensagemOriginal);

    areaDeTextoCodificada.value = mensagemDescodificada;


    console.log("Mensagem Original parte2:", mensagemOriginal);
    console.log("Mensagem Descodificada parte 2:", mensagemDescodificada);
});

function limparAreaDeTexto(campo) {
    let limpar = document.getElementById(campo);
    limpar.value = '';
}

function codificarMensagem(mensagem) {
    let palavraCodificada = '';
    let mensagemCodificada = '';

    for (let word of mensagem.split(' ')) {
        for (let letter of word.toLowerCase().split('')) {
            switch (letter) {
                case "a":
                    palavraCodificada += "ai";
                    break;
                case "e":
                    palavraCodificada += "enter";
                    break;
                case "i":
                    palavraCodificada += "imes";
                    break;
                case "o":
                    palavraCodificada += "ober";
                    break;
                case "u":
                    palavraCodificada += "ufat";
                    break;
                default:
                    palavraCodificada += letter;
            }
        }
        palavraCodificada += ' ';
    }
    return mensagemCodificada += palavraCodificada;
}

function descodificarMensagem(message) {
    while (message.includes("ai") ||
        message.includes("enter") ||
        message.includes("imes") ||
        message.includes("ober") ||
        message.includes("ufat")) {
        message = message.replace("ai", "a")
            .replace("enter", "e")
            .replace("imes", "i")
            .replace("ober", "o")
            .replace("ufat", "u");
    }
    return message
}

function CopyTexto(text) {
    text = document.getElementById(text);
    text.select();
    text.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência");
}

function mostrarCaixaSecundaria() {
    document.querySelector('.caixaInicial').style.display = 'none';
    document.querySelector('.caixaSecundaria').style.display = 'block';
}





function exibirMensagemCriptografada() {

}



function colarTexto(campo) {
    let campoDeTexto = document.getElementById(campo);
    navigator.clipboard.readText()
        .then((texto) => {
            campoDeTexto.value = texto;
        })
        .catch((erro) => {
            console.error('Erro ao colar texto: ', erro);
        });
}

function lerTexto() {
    responsiveVoice.speak(areaDeTexto.value, 'Brazilian Portuguese Female', { rate: 1.2 });
}




