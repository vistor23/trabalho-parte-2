function calcularPrestacao() {
    const valor = parseFloat(document.getElementById("valor").value);
    const taxa = parseFloat(document.getElementById("taxa").value) / 100 / 12;
    const numPrestacoes = parseInt(document.getElementById("prestacoes").value);

    if (isNaN(valor) || isNaN(taxa) || isNaN(numPrestacoes) || numPrestacoes <= 0) {
        document.getElementById("resultado").innerText = "Por favor, insira valores válidos.";
        return;
    }

    const prestacao = (valor * taxa) / (1 - Math.pow(1 + taxa, -numPrestacoes));
    document.getElementById("resultado").innerText = `O valor da prestação mensal será: R$ ${prestacao.toFixed(2)}`;
}
