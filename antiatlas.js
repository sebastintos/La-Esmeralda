//variables
var herramienta = 0;
var estado = 0;
var HOMEPAGE = 1;
var CATALOGO = 2;
//imagenes

var imagenhp;
var laesmeralda;
var piscina1;
var piscina2;
var piscina3;
var piscina4;
var piscina5;
var piscina6;
var piscina7;
var piscina8;



// botones

//imagenes inflables

var inflable1;
var inflable2;
var inflable3;
var inflable4;
var inflable5;
var inflable6;

var tel;

var boton1x = 400;//boton1
var boton1y = 600;
var boton1tam = 60;

var boton2x = 500;//boton2
var boton2y = 600;
var boton2tam = 60;

var boton3x = 600;//boton3
var boton3y = 600;
var boton3tam = 60;

var boton4x = 700;//boton4
var boton4y = 600;
var boton4tam = 60;

var boton5x = 800;//boton5
var boton5y = 600;
var boton5tam = 60;

var boton6x = 900;//boton6
var boton6y = 600;
var boton6tam = 60;

var boton7x = 1000;//boton7
var boton7y = 600;
var boton7tam = 60;

var boton8x = 1100;//boton8
var boton8y = 600;
var boton8tam = 60;

var song;





function preload () {
  soundFormats('ogg', 'mp3');
  song=loadSound('assets/song.ogg');

  imagenhp=loadImage('assets/agua.jpg');
  laesmeralda=loadImage('assets/laesmeralda.png');
  piscina1=loadImage('assets/1.jpg');
  piscina2=loadImage('assets/2.jpg');
  piscina3=loadImage('assets/3.jpg');
  piscina4=loadImage('assets/4.jpg');
  piscina5=loadImage('assets/5.jpg');
  piscina6=loadImage('assets/6.jpg');
  piscina7=loadImage('assets/7.jpg');
  piscina8=loadImage('assets/8.jpg');

  //botones 

  inflable1=loadImage('assets/plastico6.png');
  inflable2=loadImage('assets/plastico3.png');
  inflable3=loadImage('assets/plastico4.png');
  inflable4=loadImage('assets/plastico1.png');
  inflable5=loadImage('assets/plastico5.png');
  tel=loadImage('assets/tel.png');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  song.loop();

  estado=HOMEPAGE;
}

//estados
function draw() {

  if (estado==HOMEPAGE) {
    image(imagenhp, 0, 0);
    image(laesmeralda, 0, 0, windowWidth, windowHeight);
  } else if (estado==CATALOGO) {

    image(imagenhp, 0, 0);
    //image(tel, 0, 0, windowWidth, windowHeight);

    push();
    strokeWeight(4);
    stroke(250, 250, 250);
    fill(120, 30, 80);
    rect(400, 600, 770, 60);
    pop();

    image(inflable1, boton1x, boton1y, 60, 60);



    image(inflable2, boton2x, boton2y, 60, 60);


    push();
    image(inflable3, boton3x, boton3y, 60, 60);
    pop();

    push();
    image(inflable4, boton4x, boton4y, 60, 60);
    pop();

    push();
    image(inflable5, boton5x, boton5y, 60, 60);
    pop();

    push();
    image(inflable2, boton6x, boton6y, 60, 60);
    pop();

    push();
    image(inflable4, boton7x, boton7y, 60, 60);
    pop();

    push();
    image(inflable3, boton8x, boton8y, 60, 60);
    pop();



    push();
    noStroke();
    noFill();
    rect(boton1x, boton1y, boton1tam, boton1tam);

    noFill();
    rect(boton2x, boton2y, boton2tam, boton2tam);

    noFill();
    rect(boton3x, boton3y, boton3tam, boton3tam);

    noFill();
    rect(boton4x, boton4y, boton4tam, boton4tam);

    noFill();
    rect(boton5x, boton5y, boton5tam, boton5tam);

    noFill();
    rect(boton6x, boton6y, boton6tam, boton6tam);

    noFill();
    rect(boton7x, boton7y, boton7tam, boton7tam);

    noFill();
    rect(boton8x, boton8y, boton8tam, boton8tam);
    pop();

    // botones catalogo 

    if (mouseIsPressed) {

      if (mouseX > boton1x && mouseX < boton1x + boton1tam &&
        mouseY > boton1y && mouseY < boton1y + boton1tam) {
        herramienta = 0;
      }
      if (mouseX > boton2x && mouseX < boton2x + boton2tam &&
        mouseY > boton2y && mouseY < boton2y + boton2tam) {
        herramienta = 1;
      }

      if (mouseX > boton3x && mouseX < boton3x + boton3tam &&
        mouseY > boton3y && mouseY < boton3y + boton3tam) {
        herramienta = 2;
      }
      if (mouseX > boton4x && mouseX < boton4x + boton4tam &&
        mouseY > boton4y && mouseY < boton4y + boton4tam) {
        herramienta = 3;
      }
      if (mouseX > boton5x && mouseX < boton5x + boton5tam &&
        mouseY > boton5y && mouseY < boton5y + boton5tam) {
        herramienta = 4;
      }
      if (mouseX > boton6x && mouseX < boton6x + boton6tam &&
        mouseY > boton6y && mouseY < boton6y + boton6tam) {
        herramienta = 5;
      }
      if (mouseX > boton7x && mouseX < boton7x + boton7tam &&
        mouseY > boton7y && mouseY < boton7y + boton7tam) {
        herramienta = 6;
      }
      if (mouseX > boton8x && mouseX < boton8x + boton8tam &&
        mouseY > boton8y && mouseY < boton8y + boton8tam) {
        herramienta = 7;
      }

      // funciones de botones 

      if (herramienta == 0) {
        image(piscina1, 550, 100, 400, 400);
      }

      if (herramienta == 1) {
        image(piscina2, 550, 100, 400, 400);
      }

      if (herramienta == 2) {
        image(piscina3, 550, 100, 400, 400);
      }

      if (herramienta == 3) {
        image(piscina4, 550, 100, 400, 400);
      }

      if (herramienta == 4) {
        image(piscina5, 550, 100, 400, 400);
      }

      if (herramienta == 5) {
        image(piscina6, 500, 150, 500, 300);
      }

      if (herramienta == 6) {
        image(piscina7, 500, 150, 500, 300);
      }

      if (herramienta == 7) {
        image(piscina8, 550, 100, 400, 400);
      }
    }
  }
}

function touchStarted() {
  if (estado == HOMEPAGE) {
    estado = CATALOGO;
  }
}
