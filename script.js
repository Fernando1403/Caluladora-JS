var resultado = document.getElementById('resultado');

function somar(){
    //Entrada
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);

    //Processamento
    var soma = n1 + n2
    //var menos = n1 - n2
    //var mult = n1 * n2
    //var div = n1 / n2

    //Saida
    resultado.innerText = `O resultado da soma é ${soma}`
}

function subtrair(){
    //Entrada
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);

    //Processamento
    var menos = n1 - n2

    //Saida
    resultado.innerText = `O resultado da soma é ${menos}`
}

function multiplicar(){
    //Entrada
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);

    //Processamento
    var mult = n1 * n2

    //Saida
    resultado.innerText = `O resultado da soma é ${mult}`
}

function divisao(){
    //Entrada
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);

    //Processamento
    if (n2 === 0){
        resultado.innerText = "Erro: divisão por zero"
    }
    else{
        var div = n1 / n2;
        resultado.innerText = `O resultado da soma é ${div}`
    }

    //Saida

}