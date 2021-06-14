class Enemigos {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dir = 0;
    }

    mostrar() {
        /* if (this.mostrarse === true){ */
            image(cazador, this.x, this.y, 50, 50);
            this.especial();
       /*  } */
    }


    especial() {
        if (frameCount % 90 == 0) {
            this.cambiarDeDireccion();
        }
    }


    cambiarDeDireccion() {
        //0 arriba, 1 abajo, 2 derecha, 3 izquierda 
        this.dir = int(random(4));
        //dir = aleatorio;
    }


    mover() {
        switch (this.dir) {
            case 0:
                this.y--;
                break;
            case 1:
                this.y++;
                break;
            case 2:
                this.x++;
                break;
            case 3:
                this.x--;
                break;

        }

        /*  if(this.y>400){
             this.y = 150;
             }  */


    }


    morir() {

        }    

    
    

}
