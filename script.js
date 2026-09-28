function calcularMedia() {

    // Pegando os valores dos inputs
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);

    // Calculando a média
    let media = (nota1 + nota2 + nota3) / 3;

    // Mostrando o resultado
    document.getElementById("resultado").textContent =
        "Sua média é: " + media.toFixed(2);
}
