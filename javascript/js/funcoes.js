var statusCarro = "desligar";
var aceleracao = 120;
var rotacao = 0;
numeros = [5,1,2,3,4,5];

function ligarDesligar(){
    if (statusCarro ==="desligar") {
        statusCarro = "ligar";
    }else{
        statusCarro ="desligar";
    }
   return statusCarro;
}
console.log(ligarDesligar());


function acelerar(incrimento){
    aceleracao += incrimento;
    return aceleracao;
}
console.log(acelerar(50));


function frear (decremento){
    aceleracao -= decremento;
    return aceleracao;
}
console.log(frear(15));

function girarVolante(anguloRotacao){
 if (anguloRotacao < 0) {
    rotacao = "Virou a esquerda";
 }else if(anguloRotacao > 0){
 rotacao = "Virou a direita";
 }else {
 rotacao = "Volante parado, em frente";
 } 

 return(rotacao)
}
console.log(girarVolante(5));

function ligarDesligar(){
    if (statusCarro ==="desligar") {
        statusCarro = "ligar";
    }else{
        statusCarro ="desligar";
    }
   return statusCarro;
}
console.log(ligarDesligar());



function imprimeSaudacao(nome){
    console.log("Olá, "+nome+"!")
}
imprimeSaudacao("Grace")


function somaDoisElementos(elementoA, elementoB){
   console.log(elementoA+elementoB);
}
somaDoisElementos(10,20);

function calculaIMC(altura,peso){
    var resultado = peso/(altura*altura);
    return resultado;
}
console.log(calculaIMC(1.60,70));

function multiplicaPorDois(numeros) {
    var x2 =[];
    for(var i=0; i < numeros.length; i++){
        x2.push(numeros[i] *2)
    }
    return x2;
}

console.log(multiplicaPorDois(numeros));