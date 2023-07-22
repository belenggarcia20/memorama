"use strict";
let escenas = document.querySelector(".escenas");
//let escena = document.querySelector(".escena");
//let carta = document.querySelectorAll(".carta");
let cartcarta_ver = document.querySelector(".carta_ver");
let carta_frente = document.querySelector(".carta_frente");
let carta_detras = document.querySelector(".carta_detras");
let encontrados = document.getElementById("encontrados");
let faltantes = document.getElementById("faltantes");

let array = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
let carta1 = 0;
let carta2 = 0;
let pares = 0;
let quedan = 6;
let card1;
let card2;

const mesclar = (arr) => {
  return (arr = arr.sort(() => {
    return Math.random() - 0.5;
  }));
};

const cartas = () => {
  let arr = mesclar(array);
  for (let i = 0; i < arr.length; i++) {
    escenas.innerHTML += `
<div class="escena ${arr[i]}">
    <div class="carta">
    <div class="carta_ver carta_frente"><img src="imagenes/back.png"></div>
    <div class="carta_ver carta_detras"><img src="imagenes/${arr[i]}.png">
    <input type="text" value="${arr[i]}" hidden>
    </div>
    </div>
</div>`;
  }
  let carta = document.querySelectorAll(".carta");
  [...carta].forEach((card) => {
    card.addEventListener("click", function () {
      let valor = card.children[1].children[1].value;
      valores(valor,card);
      card.classList.toggle("is-flipped");
    });
  });
};

const valores = (num,card) => {
  let valor = parseInt(num);

  if (carta1 == 0) {
    carta1 = valor;
    card1 = card;
    voltear();
  } else if (carta2 == 0) {
    carta2 = valor;
    card2 = card;
    comparar();
  }
};

const comparar = ()=>{
  if (carta1 == carta2) {
    encontrado(carta1);
    carta1 = carta2 = 0;
  } else if (carta1 != carta2) {
    console.log("diferentes");
    voltear();
    carta1 = carta2 = 0;
  }
}

const encontrado = ()=>{
  console.log("encontrado");
  pares ++;
  quedan --;
  encontrados.innerHTML = pares;
  faltantes.innerHTML = quedan;
  ocultar();
  if(quedan == 0){
    victoria();
  };
}

const voltear = ()=>{
  let carta = document.querySelectorAll(".is-flipped");
  [...carta].forEach((card) => {
      card.classList.toggle("is-flipped");
  });
}
const ocultar = ()=>{
  card1.classList.toggle("bye");
  card2.classList.toggle("bye");
  card1=card2=null;
}

const victoria = ()=>{} 

cartas();

  