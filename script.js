
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");



function calcular(){
console.log ("Calculando...");


let adultos = inputAdultos.value;
let criancas= inputCriancas.value;
let duracao = inputDuracao.value;     

let carne = carnePessoa(duracao) * adultos + (carnePessoa(duracao)/  2 * criancas);
let cerveja = CervejaPessoa ( duracao) * adultos;
let bebidas = bebidasPessoa( duracao) * adultos + (bebidasPessoa ( duracao)/ 2 * criancas);


resultado.innerHTML = `<p>${carne/1000}Kg de carne</p>`
resultado.innerHTML += `<p>${Math.ceil(cerveja/355)} Latas de Cerveja</p>`
resultado.innerHTML += `<p>${Math.ceil(bebidas/2000)} Garrafa de Bebidas</p>`


}

function carnePessoa(duracao){

 if ( duracao >= 6) {
    return 650;
 } else {
  return 400;
 }

}


function CervejaPessoa(duracao){
  if ( duracao >= 6){
      return 2000;
    } else{
      return 1200;
    }
}

function bebidasPessoa(duracao){
  if ( duracao >= 6){
      return 1500;
    } else{
      return 1000;
    }
}