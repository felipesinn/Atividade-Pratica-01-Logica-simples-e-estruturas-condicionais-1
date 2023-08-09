
let numeroDeMacas = parseInt(prompt("Digite o número de maçãs compradas:"));
const precoMenosDeDoze = 0.30;
const precoDozeOuMais = 0.25;
let valorTotal;

if (numeroDeMacas < 12) {
    valorTotal = numeroDeMacas * precoMenosDeDoze;
} else {
    valorTotal = numeroDeMacas * precoDozeOuMais;
}
console.log("Valor total da compra: R$" + valorTotal.toFixed(2));
