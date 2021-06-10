class Rescatador {
    constructor(x, y) {
        this.x = x;
        this.y = y;

    }

    mostrar(){
        //aqui iria la imagen
        ellipse (this.x,this.y,50,50);
    }


    mover(){
        this.y =mouseY;  //Esto es temporal, se cambia por las flechas
        this.x =mouseX;
    }


    
    chocar(enemigoX,enemigoY) {
        if(dist(this.x,this.y,enemigoX,enemigoY)<50) { 
            return true;
        this.perderVidas();
      
      } else{
       return false;
     }
    } 


    perderVidas(){
        //IR QUITANDO DEL ARREGLO DE CORAZONES
        
    }


    matar(){
        
    }

}