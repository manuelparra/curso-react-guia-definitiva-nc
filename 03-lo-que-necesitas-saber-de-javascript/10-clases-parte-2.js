class Chanchito {
  propiedad = "Mi propiedad"  // propiedad publica
  #hambre = false  // propiedad privada, estos deben ser definidos necesariamente
  static estatico = 42  // propiedad estatica
  constructor(estado = 'feliz') {
    this.estado = estado 
  }

  hablar() {
    console.log(`Soy un chanchito ${this.estado} ${this.#hambre ? 'con mucha hambre!' : 'satisfecho!'}`)
  } 

  static comer() {  // método estatico
    console.log(this.estatico, 'Estoy comiendo')  // los métodos estaticos solo pueden ser llamados desde la clase sin necesidad de generar una instancia,
                                                  // y estos solo pueden acceder a propiedades entaticas definidos previamente en la clase. No pueden acceder
                                                  // a propiedades ni publicas ni privadas de la instancia de una clase
  }
}

Chanchito.comer()

const chanchitoFeliz = new Chanchito('triste')
chanchitoFeliz.hablar()

const chanchitoAburrido = new Chanchito('aburrido')
chanchitoAburrido.hablar()

const chanchitoAlegre = new Chanchito('alegre')
chanchitoAlegre.hablar()

