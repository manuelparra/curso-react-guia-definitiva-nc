const Rectangulo = class R { // Expresión de clase

}

const r = new Rectangulo()

class Triangulo { // Declaración de clase

}

function Cuadrado() {

}

console.log(Cuadrado, Triangulo)

// Hoisting 
// Y esto es cuando el compilador tama variables definidas con var y funciones definidas con 
// function y las lleva la comienzo del archivo dentro del cual fueron definidas

// Las clases que nosotros escribimos, bien sea como expresión o como declaración, estas no
// tienen Hoisting, por tanto no se puede acceder a una definición o expresión de clase
// antes de su definición,

class Chancho {
  constructor() {
    console.log('Soy un chancho feliz.')
  }
}

const feliz = new Chancho()

// Cada vez que nosontros llamemos a una clase con la palabra reservada de new, esta va a
// ejecutar el contructor de la clase. Siempre que queramos declarar una nueva instancia de 
// una clase debemos utilizar la palabra reservada de new
