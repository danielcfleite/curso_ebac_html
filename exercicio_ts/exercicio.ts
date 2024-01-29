// uma função de multiplicação que deverá receber como argumentos dois números e retornar a
// multiplicação deles

function multiplicação(n1: number, n2: number): number {
  return n1 * n2;
}

// uma função de saudação que deverá receber um nome e retornar a concatenação “Olá “ + nome;

function saudacao(nome: string): string {
  return `Olá ${nome}`;
}

console.log(saudacao("daniel"));
console.log(multiplicação(5, 10));
