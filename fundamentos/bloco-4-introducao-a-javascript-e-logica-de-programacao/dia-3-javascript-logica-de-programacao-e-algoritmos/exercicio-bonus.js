//imprime piramide de asteriscos vazada
/* let n = 7;
let nivel = ''

let meio = (n + 1)/2;
let esquerda = meio;
let direita = meio;

for (let linha = 0; linha< meio; linha += 1) {
  for (let coluna = 0; coluna<= n; coluna += 1){
    if(coluna == esquerda || coluna == direita || linha == meio - 1){
      nivel +='*'
    } else{
      nivel +=' '
    } 
  }
  console.log(nivel);
  nivel = '';
  esquerda -= 1
  direita += 1
} */

// verifica se é primo
let  n = 7;
let ehPrimo = false
let contaZero = 0;
for(let i = 2; i < n; i += 1){
  console.log(n, i, n % i)
  if(n % i == 0){
    contaZero += 1
  } 
}

if (contaZero > 0){
  console.log("Não é primo")
} else{
  console.log("É primo")
}


