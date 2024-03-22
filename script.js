/*
  Bora praticar e rever tudo o que foi ensinado na aula? 💜
Nesse desafio, você irá solicitar ao usuário que ele insira dois números e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par (ou ímpar);
- [ ]  Verifique se os dois números inseridos são iguais (ou diferentes).
*/ 



let firstNumber = prompt("Insira aqui o primeiro número")
let secondNumber = prompt("Insira aqui o segundo número")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

//- [ ]  A soma dos dois números;
const sum = firstNumber + secondNumber

//- [ ]  A subtração dos dois números;
const sub = firstNumber - secondNumber

//- [ ]  A multiplicação dos dois números;
const multi = firstNumber * secondNumber

//- [ ]  A divisão dos dois números;
const div =  firstNumber / secondNumber

//- [ ]  O resto da divisão dos dois números;
const divRest = firstNumber % secondNumber 

alert('Soma: ' + sum)
alert('Subtração: ' + sub )
alert('Multiplicação: ' + multi )
alert('Divisão: ' + div )
alert('resto da divisão: ' + divRest )

//- [ ]  Verifique se a soma dos dois números é par (ou ímpar);

if (sum % 10 === 0 ||sum % 10 === 2 || sum % 10 === 4 || sum % 10 === 6 ||sum % 10 === 8 ) {
  alert('A soma dos números é par.')
} else {
  alert('A soma dos números é ímpar.')
}


//- [ ]  Verifique se os dois números inseridos são iguais (ou diferentes);

if(firstNumber === secondNumber) {
  alert('Os números inseridos são iguais')
} else {
  alert('Os números inseridos são diferetes.')
}