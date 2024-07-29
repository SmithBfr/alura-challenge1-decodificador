let listaSubstituicao = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
};

// Função para remover acentos
function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function criptografar() {
    var resultado = document.getElementById("resultado__div");
    var imagem = document.getElementById("mensagem-nao-encontrada");
    var palavra = document.getElementById("escrito").value;

    console.log("Original:", palavra);

    // Converter para minúsculas e remover acentos
    palavra = palavra.toLowerCase();
    palavra = removerAcentos(palavra);

    console.log("Normalizado:", palavra);

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

    console.log("Criptografado:", campoT);

    if (palavra === "") {
        alert("Digite algo válido");
    } else {
        imagem.style.display = "none";
        resultado.innerHTML = campoT;
    }
}

function descriptografar() {
    var resultado = document.getElementById("resultado__div");
    var imagem = document.getElementById("mensagem-nao-encontrada");
    var palavra = document.getElementById("escrito").value;

    console.log("Original:", palavra);

    // Converter para minúsculas e remover acentos
    palavra = palavra.toLowerCase();
    palavra = removerAcentos(palavra);

    console.log("Normalizado:", palavra);

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

    console.log("Descriptografado:", campoT);

    if (palavra === "") {
        alert("Digite algo válido");
    } else {
        imagem.style.display = "none";
        resultado.innerHTML = campoT;
    }
}