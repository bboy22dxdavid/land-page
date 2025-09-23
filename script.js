//===========================================================
                //SLIDER AREA BANNER INICIAL 
//===========================================================

//variavel de controle
let contador = 0;

document.getElementById("radio1").checked = true;
let minhaDiv = document.getElementById("radio1");

setInterval(function () {
    nextImage();

}, 3000);

function nextImage() {
    contador++;
    if (contador >= 5) {
        contador = 1;

    }
    minhaDiv.id = "radio" + contador;
    //console.log( minhaDiv);
    //document.getElementById(minhaDiv).checked =true;

}


//===========================================================
                //SLIDER AREA NOSSO TIME
//===========================================================
const box = document.querySelector(".section-team .sliders");
const imagens = document.querySelectorAll(".section-team .slide");
let valeu = 0;

//console.log('DEBUG VARIAVEL BOX ' + imagens);

function slider() {
  valeu++;

  if (valeu > imagens.length - 1) {
    valeu = 0;
    //console.log('DEBUG VARIAVEL VALUE ' + valeu);
  }

  box.style.transform = `translateX(${-valeu * 200}px)`;
  //console.log(box.style.transform = `translateX(${-valeu * 280}px)`);
}

setInterval(slider, 2000);


//===========================================================
                //SLIDER AREA NOSSO TIME
//===========================================================
const container = document.querySelector(".section-testimonials .sliders");
const containerImg = document.querySelectorAll(".section-testimonials .slide ");
let valor = 0;

//console.log('DEBUG VARIAVEL BOX ' + containerImg);

function sliderComitt() {
  valor++;

  if (valor > containerImg.length - 1) {
    valor = 0;
    //console.log('DEBUG VARIAVEL VALUE ' + valor);
  }

  container.style.transform = `translateX(${-valor * 10}%)`;
  //console.log(box.style.transform = `translateX(${-valeu *700}px)`);
}

setInterval(sliderComitt, 2000);


//===========================================================
                //SLIDER AREA PLANO PREMIO  
//===========================================================

const contPremi = document.querySelector(".section-premium .sliders");
const premiImg = document.querySelectorAll(".section-premium .slide ");
const pointer = document.querySelectorAll(".section-premium .pointer");
let valuePremi = 0;

//console.log('DEBUG VARIAVEL pointer ' + pointer);

function sliderComitt() {
  valuePremi++;

  if (valuePremi > premiImg.length - 1) {
    valuePremi = 0;

    let valorAtual;

    valorAtual = `.active`;

    pointer.textContent = valorAtual;

     //console.log('DEBUG VARIAVEL pointer ' + valorAtual);


  }

  contPremi.style.transform = `translateX(${-valuePremi * 10}%)`;


    //pointer.textContent = +'active'; background-color:#B28756;
  
}

setInterval(sliderComitt, 2000);


/*=====================================================
                validando formulario
======================================================= */
/*function checkValidForm() {
  const form = document.getElementById("myForm");

  if (form.reportValidity()) {
    console.info('Formulário valido');
  } else {
    console.error('Formulário invalido');
  }
}*/


//AREA DO MAPS 
//VARIAVEL ONDE SERA ARMAZENDA AS CORDENADAS DE LAT E LONG PARA O MAP
var map = L.map('map').setView([-15.800445824353401, -47.86522780777504], 16);

//VARIAVEL PARA RECEBER O LAYER DO MAPS
const layer=L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,


});

layer.addTo(map);

//COLOCANDO O MARCADOR NO MAPS
const marker=L.marker([-15.800445824353401, -47.86522780777504]);

marker.addTo(map)