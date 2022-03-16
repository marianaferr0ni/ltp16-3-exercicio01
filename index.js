class Pessoa
{
  constructor(nome, dataNascimento, altura)
  {
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.altura = altura;
  }
  mostrarAtributos()
  {
    return this.nome + ", " + this.dataNascimento + ", " + this.altura;
  }
  anoAtual()
  {
    let data1 = new Date();
    return data1.getFullYear();
  }
  anoNascimento()
  {
    let data2 = this.dataNascimento;
    return data2.split("/")[2];
  }
  calculaAno()
  {
    return this.anoAtual() - this.anoNascimento();
  }
}
let atributos = new Pessoa("mari", "07/06/2006", "1,58");
console.log(atributos.mostrarAtributos())
console.log(atributos.calculaAno())