let palavra;

let listaSubstituicao = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
};

function criptografar() {
    var resultado = document.getElementById("resultado__div");
    var imagem = document.getElementById("mensagem-nao-encontrada");
    var palavra = document.getElementById("escrito").value;

    console.log(palavra);

    // Função para aplicar todas as substituições de listaSubstituicao
    function substituirTudo(texto, substituicoes) {
        for (let chave in substituicoes) {
            if (substituicoes.hasOwnProperty(chave)) {
                texto = texto.replaceAll(chave, substituicoes[chave]);
            }
        }
        return texto;
    }

    // Aplicar substituições
    let campoT = substituirTudo(palavra, listaSubstituicao);

    console.log(campoT);

    if (palavra == "") {
        alert("digite algo valido");
    } else {
        imagem.style.display = "none";
        resultado.innerHTML = campoT;
    }
}


function descriptografar() {
    var resultado = document.getElementById("resultado__div");
    var imagem = document.getElementById("mensagem-nao-encontrada");
    var palavra = document.getElementById("escrito").value;

    console.log(palavra);

    // Função para aplicar todas as substituições de listaSubstituicao
    function substituirTudo(substituicoes, texto) {
        for (let chave in substituicoes) {
            if (substituicoes.hasOwnProperty(chave)) {
                texto = texto.replaceAll(substituicoes[chave], chave);
            }
        }
        return texto;
    }

    // Aplicar substituições
    let campoT = substituirTudo(listaSubstituicao, palavra);

    if (palavra == "") {
        alert("digite algo valido");
    } else {
        imagem.style.display = "none";
        resultado.innerHTML = campoT;
    }
}