class Jugador {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.default = 1;
    }

    mostrar() {
        if (this.default === 1){
            image(jugador, this.x, this.y, 50, 50);
        }

        if (this.default === 2){
            image(jugadorPistola,this.x,this.y,50,50);
            }

        if (this.default === 3){
            image(jugadorCuchillo,this.x,this.y,50,50);
            }
    }

    mover() {

        switch (keyCode) {

            case UP_ARROW:

                this.y -= 50;
                this.default = 1;
                break;

            case LEFT_ARROW:

                this.x -= 50;
                this.default = 1;
                break;

            case DOWN_ARROW:

                this.y += 50;
                this.default = 1;
                break;

            case RIGHT_ARROW:

                this.x += 50;
                this.default = 1;
                break;
        }

        this.disparar();
        this.acuchillar();
    }

    disparar() {

        if (keyCode === ENTER) {
        this.default =2;
        disparos.push(new Disparos(this.x+30, this.y+25));
        }

    }

    acuchillar() {
        if (keyCode === SHIFT) {
            this.default =3;
         }
        /*  if (dist(this.x, this.y, enemigo.x, enemigo.y) < 50) {
            mostrarse = false;
          } */
    }
    

    perderCorazones() {

    }

}