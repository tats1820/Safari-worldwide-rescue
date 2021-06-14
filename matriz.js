//Aquí puse la matriz del primer nivel, a ver si sí funciona el mapa

//Se definen la matriz
let arregloA = [];
let arregloB = new Array();

let arregloMapa = [
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
];

//construcción del mapa
let mapa = []; // 1- [...]

let coinX;
let coinY;
let coinCol;
let coinFil;
let coinTrapped;

let xPos; //pixeles
let yPos; //pixeles
let pjCol; //validamos el mapa en la matriz
let pjFill; // validamos el mapa en la matriz

function setup (){
  
    pjCol = 0; //pixeles
    pjFill = 0; // pixeles
    xPos = (pjCol * 40)+ 20;
    xPos = (pjFill * 40)+ 20;


// Crear arreglo de arreglos
for (let index = 0; index < 20; index ++){

    mapa.push (new Array(20));
}

//Asignar valores iniciales
for (let fill = 0; fill < 20; fill++){
    for (let col = 0; col < 6; col++){
        mapa [fill][col] = 0;
    }
}

//seleccionamos algunos [fill][col] --> y, x
mapa [0][0] = 1;
mapa [0][1] = 1;
mapa [0][4] = 1;
mapa [0][5] = 1;
mapa [1][0] = 1;
mapa [1][1] = 1;
mapa [1][4] = 1;
mapa [1][5] = 1;
mapa [2][0] = 1;
mapa [2][1] = 1;
mapa [2][4] = 1;
mapa [2][5] = 1;
mapa [3][4] = 1;
mapa [4][4] = 1;
mapa [3][5] = 1;
    
}
