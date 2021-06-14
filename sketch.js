let x = 50;
let y = 300;
let jugadorCuchillo;
let jugadorPistola;
let jugador;
let cazador;
let disparos = [];
/* let mostrarse = true; */


let personaje = new Jugador(300, 50);
let enemigo1 = new Enemigos(300, 300);
let enemigo2 = new Enemigos(400, 300);

function preload() {
  jugador = loadImage("/assets/jugador default.png");
  jugadorCuchillo = loadImage("/assets/jugador cuchillo.png");
  jugadorPistola = loadImage("/assets/jugador pistola.png");
  cazador = loadImage("/assets/cazador.png");
}

function setup() {
  createCanvas(1000, 600);
}


function draw() {

  background(220);


  personaje.mostrar();

  enemigo1.mostrar();
  enemigo2.mostrar();

  enemigo1.mover();
  enemigo2.mover();

  //REPETITIVA PARA QUE SE PINTEN LOS DISPAROS
  for (let i = 0; i < disparos.length; i++) {
    const disparo = disparos[i];
    disparo.mostrar();
    disparo.mover();
  



  //corazón
  image(imgCora, 30,30);
  image(imgBat, 70,30);



} 



/* if (disparos.impacto(enemigo1.x, enemigo1.y)) {
  mostrarse = false;
  }
 

if (disparos.impacto(enemigo2.x, enemigo2.y)) {
  mostrarse = false;
  } */


}



    function keyPressed() {
      personaje.mover();
      personaje.disparar();

    }

