// Solicitar ao usuário o número de eleitores, votos brancos, nulos e válidos
let totalEleitores = Number(prompt("Digite o número total de eleitores:"));
let votosBrancos = Number(prompt("Digite o número de votos brancos:"));
let votosNulos = Number(prompt("Digite o número de votos nulos:"));
let votosValidos = Number(prompt("Digite o número de votos válidos:"));

// Calcular percentuais
let percentualBrancos = (votosBrancos / totalEleitores) * 100;
let percentualNulos = (votosNulos / totalEleitores) * 100;
let percentualValidos = (votosValidos / totalEleitores) * 100;

console.log("Resultados da Eleição");

console.log(`Percentual de votos brancos: ${percentualBrancos.toFixed(2)}%`);
console.log(`Percentual de votos nulos: ${percentualNulos.toFixed(2)}%`);
console.log(`Percentual de votos válidos: ${percentualValidos.toFixed(2)}%`);


// 7. Desenvolva um algoritmo para ler o número total de eleitores de um
// município, o número de votos brancos, nulos e válidos. Calcular e
// escrever o percentual que cada um representa em relação ao total
// de eleitores.