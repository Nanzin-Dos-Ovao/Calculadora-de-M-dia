function calcularMedia() {

    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);

    let resultado = document.getElementById("resultado");

    if (
        nota1 < 0 || nota1 > 10 ||
        nota2 < 0 || nota2 > 10 ||
        nota3 < 0 || nota3 > 10
    ) {
        resultado.innerHTML = "Digite notas entre 0 e 10.";
        resultado.style.color = "red";
        return;
    }

    // Calcula a média
    let media = (nota1 + nota2 + nota3) / 3;

    // Média 6 ou maior = aprovado
    if (media >= 6) {

        resultado.innerHTML =
            `Média: ${media.toFixed(1)}<br>Aluno APROVADO!`;

        resultado.style.color = "green";

    } else {

        resultado.innerHTML =
            `Média: ${media.toFixed(1)}<br>Aluno REPROVADO!`;

        resultado.style.color = "red";
    }
}
