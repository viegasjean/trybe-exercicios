let peca = "BisPo";



switch (peca.toLowerCase()) {
    case 'cavalo':
        console.log("cavalo movimenta em L");
        break;
    case 'dama':
        console.log("dama movimenta em qualquer direção");
        break;
    case 'torre':
        console.log("torre movimenta na horizontal e vertical");
        break;
    case 'bispo':
        console.log("bispo movimenta na diagonal");
        break;
    case 'peao':
        console.log("peao acança uma casa");
        break;
    default:
        console.log("peça invalida")
        break;
}