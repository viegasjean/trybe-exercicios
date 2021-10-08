const a = 10;
const b = 5;

const c = 17;

const n = -10;

// Adição (a + b)
console.log(a + b);

// Subtração (a - b)
console.log(a - b);

// Multiplicação (a * b)
console.log(a * b);

// Divisão (a / b)
console.log(a / b);

// Módulo (a % b)
console.log(a % b);


// maior de dois números

if (a > b){
    console.log(a + " é maior");
} else {
    console.log(b + " é maior");
}

// maior de três números

if (a > b && a > c) {
    console.log(a + " é maior");
} else if (b > a && b > c){
    console.log(b + " é maior");
} else {
    console.log(c + " é maior");
}

// "positive", "negative" ou "zero" 

if (n > 0) {
    console.log(a + " é positivo");
} else if (n < 0){
    console.log(n + " é negativo");
} else {
    console.log(c + " é zero");
}

//triângulo válido

if (a + b + b === 180) {
    console.log("triangulo valido")
} else {
    console.log("triangulo invalido")
}
