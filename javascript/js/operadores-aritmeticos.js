var salario = 3500.20;
var aumento = 1500.8;
var fgts = 150;
var comissao = 1.5;
var conjugue = 2;

console.log("Salario Liquido: R$",salario)

salario += aumento;
console.log("Salario com aumento(R$1500.8): R$",salario);

salario*=comissao;
console.log("Salario com comissao (R$2.500.5): R$",salario);

salario -=fgts;
console.log("Salario com desconto FGTS(R$150): R$",salario);

salario /=conjugue;
console.log("Salario dividido com o conjugue(R$3675.75): R$",salario);


console.log("4 elevado 7= ",4**7);
console.log("Resto de 6356565/353=",6356565%353);

 