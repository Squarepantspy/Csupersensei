// clase padre
class Ninja {
    constructor(nombre){
        this.nombre= nombre;
        this.salud= 100;
        this.velocidad= 3; // valores por defecto de la clase padre
        this.fuerza=3;
    }

    sayName(){
        console.log(`El nombre del ninja es ${this.nombre}`);
    }
    showStats(){
        console.log( `Las Estadisticas son nombre : ${this.nombre} , fuerza : ${this.fuerza} , velocidad : ${this.velocidad} , salud :${this.salud}`);
    }
    drinkSake(){
        this.salud+=10;
    }

}
// clase hijo Sensei extiende de Ninja
class Sensei extends Ninja {
    constructor(nombre){
        super(nombre); //llama al constructor de la clase padre
        this.salud=200;
        this.velocidad=10; //valor nuevo por defecto de la clase hijo, se sobreescribe lo que se hereda de la clase padre 
        this.fuerza=10;
        this.sabiduria=10;
    }

    //metodos de la clase hijo
    speakWisdom(){
        super.drinkSake(); // llama a un metodo de la clase padre 
        console.log("It is health that is real wealth and not pieces of gold and silver")
    }

}

// Salida 

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom(); //llama al metodo drinkSake() aumenta salud en 10 e imprime un mensaje de sabiduria
superSensei.showStats(); //metodo que hereda de la clase Ninja