class Disparos {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    mostrar() {
        fill(0);
        rect(this.x, this.y, 8, 3);
    }

    mover() {
        this.x += 4;
    }

   /*  impacto (){
        if (dist(this.x, this.y, enemigox, enemigoy) < 50) {
            mostrarse = false;
          }
    }
     */
}