const alunos = [
  {
    nome: "Carlos",
    nota: 5,
  },
  {
    nome: "Pedro",
    nota: 6,
  },
  {
    nome: "Julia",
    nota: 10,
  },
  {
    nome: "José",
    nota: 4,
  },
  {
    nome: "Amanda",
    nota: 7,
  },
  {
    nome: "Rafael",
    nota: 10,
  },
  {
    nome: "Letícia",
    nota: 5,
  },
  {
    nome: "Eduardo",
    nota: 9,
  },
  {
    nome: "Maria Eduarda",
    nota: 6,
  },
  {
    nome: "Emanuel",
    nota: 5,
  },
  {
    nome: "Carla",
    nota: 9,
  },
];

const alunosAprovados = alunos.filter((aluno) => aluno.nota >= 6);
// const todosAprovados = alunos.every((aluno) => aluno.nota >= 6);
console.log(alunosAprovados);
// console.log(todosAprovados);
