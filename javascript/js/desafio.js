// function calculadoraAdicaoSubtracao(numero, outroNumero, operacao){
// 	let resultado;
// 	if(operacao =="-"){
// 		resultado = numero - outroNumero;
// 		console.log(resultado);
// 	}else if (operacao == "+") {
// 		resultado = numero + outroNumero;
// 		console.log(resultado);
// 	} else{
// 		resultado = 0;
// 		console.log(resultado);
// 	}
	
// }

// calculadoraAdicaoSubtracao(10, 75, "-");


// function somaDeGauss(numeroMaximo){
// 	let soma =0;
// 	for(var i =1; i <= numeroMaximo ; i++){
// 		soma = soma + i;
// 	}	
// 	return soma;
// }

// somaDeGauss(25)

function vezesLetraAparece(frase, letra) {
soma =0;

	for(var i=0; i < frase.length; i++){
		if(frase[i] == letra){
			soma = soma+1;
		}
	}
	return
}	

vezesLetraAparece("daniel da silva", "s")