class Veiculo {
  constructor(marca, modelo, ano, tipo) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.tipo = tipo;
  }
  acelerar() {
    console.log(`${this.modelo} está acelerando.`);
  }

  frear() {
    console.log(`${this.modelo} está freando.`);
  }

  ligar() {}
}

class Carro extends Veiculo {
  constructor(marca, modelo, ano, tipo, numPortas) {
    super(marca, modelo, ano, tipo);
    this.numPortas = numPortas;
  }
  ligar() {
    console.log(`${this.modelo} ligou o motor.`);
  }

  abrirPortas() {
    console.log(`${this.modelo} abriu as ${this.numPortas} portas.`);
  }
}

class Bicicleta extends Veiculo {
  constructor(marca, modelo, tipo, ano) {
    super(marca, modelo, ano);
    this.tipo = tipo;
  }

  ligar() {
    console.log(`${this.modelo} começou a pedalar.`);
  }

  pedalarRapido() {
    console.log(`${this.modelo} está pedalando rapidamente.`);
  }
}

class Moto extends Veiculo {
  constructor(marca, modelo, ano, tipo) {
    super(marca, modelo, ano);
    this.tipo = tipo;
  }

  ligar() {
    console.log(`${this.modelo} ligou.`);
  }
}

const carro1 = new Carro("Toyota", "Corolla", 2020, "híbrido", 4);
const bicicleta1 = new Bicicleta("Caloi", "Mountain Bike", "MTB", 2020);
const moto1 = new Moto("Honda", "CG160", 2024, "Combustível");

carro1.acelerar();
carro1.ligar();
carro1.abrirPortas();

bicicleta1.acelerar();
bicicleta1.ligar();
bicicleta1.pedalarRapido();

moto1.acelerar();
moto1.ligar();

console.log(carro1, bicicleta1, moto1);
