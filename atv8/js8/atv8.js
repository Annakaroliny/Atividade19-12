var peso = 50;
var altura = 1.72;
var imc = peso / (altura * altura);

if (imc < 18.5) {
  console.log('O IMC é: ' + imc);
  console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
  console.log('O IMC é: ' + imc);
  console.log("Peso normal");
} else if (imc >= 25 && imc < 30) {
  console.log('O IMC é: ' + imc);
  console.log("Acima do peso");
} else {
  console.log('O IMC é: ' + imc);
  console.log("Obeso");
}