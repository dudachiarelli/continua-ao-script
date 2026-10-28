let peso = parseFloat( prompt ("Digite o seu peso (Kg)"))
let altura = parseFloat( prompt ("informe sua altura (m)"))

let resultado = calcularIMC (peso, altura)
function calcularIMC (peso, altura){
    let imc =peso / (altura * altura)
   return imc
}
alert(resultado)
let imc = resultado
function classificarIMC(imc){
    if (imc >= 18.5 && imc <= 24,9){
        alert("Peso normal")
    }else if (imc >= 17,0 && imc <= 18,04){
        alert ("magreza leve")
    }else if (imc >= 25,0 && imc <=29,09){
        alert ("sobrepeso")
    }


}
gerarRelatorio(peso, altura)
function gerarRelatorio(peso, altura){
    let imc = calcularIMC(peso, altura)
    classificarIMC(imc)
}














