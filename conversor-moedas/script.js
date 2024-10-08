//alert("Boa noite!");

//let || var || const
let nome = "Ingrid"; //isso é uma variavel do tipo let
var idade = 24; //isso é uma variavel do tipo var
const altura = 1.5; //isso é uma variavel do tipo const

// console.log("Nome: ", nome);
// console.log("Idade: ", idade);
// console.log("Atura: ", altura);

// function soma(){
//     let valorSoma = 1;
//     return (idade + valorSoma);
// }

let inputNome = document.getElementById("idNome");
let inputValor = document.getElementById("idValor");
let selectMoeda = document.getElementById("formConversor");
let selectMoedaValor = selectMoeda.value;


selectMoeda.addEventListener("change", () => selectMoedaValor = selectMoeda.value);

// function converteRealDolar(valorReal){
//     return (valorReal * 0.18);
// }


const converteRealDolar = (valorReal) => valorReal * 0.18;
const converteRealEuro = (valorReal) => valorReal * 0.16;

const converteDolarReal = (valorDolar) => valorDolar * 5.5;
const converteDolarEuro = (valorDolar) => valorDolar * 0.90;

const converteEuroReal = (valorEuro) => valorEuro * 6.13;
const converteEuroDolar = (valorEuro) => valorEuro * 1.11;

const buscaOpcao = () => {
    const opcaoSelecionada = document.querySelector('input[name="formConverter"]:checked')
    if (opcaoSelecionada) {
       return opcaoSelecionada.value;
    }
}

const verificaMoedaSelecionada = () => {
    let opc = buscaOpcao();
    let textoRetorno = ''
    if (selectMoedaValor == 'real') {
        if (opc == 'dolar'){
            textoRetorno = `
                Valor em dólar: ${converteRealDolar(inputValor.value)}
            `
        }else if (opc == 'euro'){
            textoRetorno = `
                Valor em Euro: ${converteRealEuro(inputValor.value)}
            `
        }else {
            textoRetorno = `Selecione uma moeda para converter`
        }
        
    } else if (selectMoedaValor == 'dolar') {
        if (opc == 'real'){
            textoRetorno = `
                Valor em Euro: ${converteDolarEuro(inputValor.value)}
            `
        } else if (opc == 'euro'){
            textoRetorno = `
                Valor em Euro: ${converteDolarEuro(inputValor.value)}
            `
        }else {
            textoRetorno = `Selecione uma moeda para converter`
        }

    } else if (selectMoedaValor == 'euro') {
        if (opc == 'real') {
            textoRetorno = `
                Valor em Real: ${converteEuroReal(inputValor.value)}
            `
        }else if (opc == 'dolar'){
            textoRetorno = `
                Valor em Dolar: ${converteEuroDolar(inputValor.value)}
            `
        }else {
            textoRetorno = `Selecione uma moeda para converter`
        }
    }
    return textoRetorno
}



function exibeNome() {
    //concatenação
    // alert("Nome: " + inputNome.value + " Valor: " + inputValor.value);
    
    //interpolação
    // alert(`Nome: ${inputNome.value} Valor: ${inputValor.value}`);

    if(inputNome.value == '' || inputValor.value == '' || selectMoedaValor == 'Selecione a moeda') {
       // alert("Preencha todos os campos!");
       document.getElementById("txtExibeResult").innerHTML = "Preencha todos os campos!"
    }
    else {
        // alert(`
        //     Nome: ${inputNome.value} 
        //     ${verificaMoedaSelecionada()}
        // `); 
        document.getElementById("txtExibeResult").innerHTML = `Olá, ${inputNome.value}, o valor convertido é: ${verificaMoedaSelecionada()}`
    }
}










