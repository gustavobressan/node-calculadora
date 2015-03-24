var num1 = process.argv[2]
var operador = process.argv[3]
var num2 = process.argv[4]

if (operador === '+'){
	console.log('Resultado é:',num1 + num2);
} else if (operador === '*'){
	console.log('Resultado é:',num1 * num2);
} else if (operador === '-'){
	console.log('Resultado é:',num1 - num2);
}
