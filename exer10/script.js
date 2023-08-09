// Leitura do nome e idade do usuário
let nomeUsuario = prompt("Digite o seu nome:");
let idadeUsuario = parseInt(prompt("Digite a sua idade:"));

const anoAtual = new Date().getFullYear();
const anoNascimento = anoAtual - idadeUsuario;

console.log("Nome: " + nomeUsuario + ", Idade: " + idadeUsuario + " anos, nasceu em " + anoNascimento);



// 10. Escreva um algoritmo que tenha como valores de entradas o nome
// e idade do usuário e imprima no terminal o nome, a idade e o ano
// de nascimento do usuário. Ex: “Nome: Pedro, Idade: 22 anos, nasceu
// em 2000”.
// OBS: Pegue o ano atual como base