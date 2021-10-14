const custo = 100;
const precoFinal = 221;
const imposto = 0.2;

const custoTotal = custo + imposto;
const lucro = precoFinal - custoTotal;
if (custo < 0 || precoFinal < 0 || imposto < 0){
    console.log("Erro! algum dos valores de entrada são menores que zero");
} else {
    console.log("Seu lucro é " + lucro.toFixed(2) + " R$");
}
