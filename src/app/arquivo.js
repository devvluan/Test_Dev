//Crie um Array contendo os numerais de 0 à 30 e filtre quais desses números são ímpares
const array = Array.from({ length: 31 }, (_, index) => index);
const impNumbers = array.filter(num => num % 2 !== 0);

console.log(impNumbers)

//Crie um Array contendo a lista de palavras abaixo e filtre apenas quais dessas palávras são palíndromos.
const namesPalin = ["arara", "amor", "asa", "longo", "ele", "dinossauro", "esse", "peppa", "mamam", "tartaruga", "bandolin", "matam", "desodorante", "mundo", "metem", "terra", "agua", "mirim", "fogo", "sopapos"]

const isPalin = (namesPalin) =>{
const reversePalin = namesPalin.split('').reverse().join('');
return namesPalin === reversePalin;
};

const palindromos = namesPalin.filter(isPalin);

console.log(palindromos)

//Crie uma automação que calcule a sequencia fibonacci até o número máximo 100.
const gerarFibonacci = (max) =>{
  const sequence = [0, 1];
  let = i = 1;

  while (sequence[i] + sequence[i - 1] <= max) {
    sequence.push(sequence[i] + sequence[i - 1]);
    i++;
  }
    return sequence;
  };
  const fibonacciSequence = gerarFibonacci(100);

  console.log('Sequência de Fibonacci até 100:', fibonacciSequence);


  //array desafios
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //coloque o numero 0 no começo
  numeros.unshift(0);
  //coloque o numero 11 no final
  numeros.push(11)
  //remova o numero 5 do array
  let removeNumber5 = numeros.indexOf(5);
  if (removeNumber5 !== -1){
    numeros.splice(removeNumber5, 1)
  }
  //remova o numero 8 e coloque 20, 21, 22 no lugar dele
  let removeNumber8 = numeros.indexOf(8);
  if (removeNumber8 !== -1){
    numeros.splice(removeNumber8, 1, 20, 21, 22)
  }

  console.log(numeros)

  // novo desafio array
  const dados = [
  {id: 1, nome: 'Liz', idade: 2},
  {id: 2, nome: 'Thaís', idade: 32},
  {id: 3, nome: 'Jonathan', idade: 30},
  {id: 4, nome: 'Thainá', idade: 29},
  {id: 5, nome: 'Fabiano', idade: 45}
];
console.log(dados);

//Crie uma automação que remova todas as propriedades do objeto abaixo que não comecem com a letra "j"
let names = {
  jason: "Jason",
  thais: "Thaís",
  liz: "Liz",
  jennei: "Jennei",
  jenyffer: "Jennyfer",
  joao: "João",
  bola: "Bola",
  gato: "Gato",
  jaguar: "Jaguar"
};

let resultado = {};
for (let key in names){
  if (key.startsWith(`j`)){
    resultado[key] = names[key];
  }
}

console.log (resultado)
