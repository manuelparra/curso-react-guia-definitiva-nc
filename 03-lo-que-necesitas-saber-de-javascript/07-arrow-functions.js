/* En este video veremos las fat arrow functions
 * Veremos cúales son las diferencias entre las fat arrow functions y las fuctions tradiconales o normales
 */

function Fn() {
  return 'Chanchito feliz'
}

const r = Fn()

console.log(r)

/* JavaScript al ser un lenguaje multiparadigma este también implementa la herrencia basada en prototipos.
 * La palabra reservada de class en ES6 es azucar sintactica por sobre lo que hace la palabra reservada function en JavaScript
 * A continución escribire la demostración del funcionamiento de function utilizando la palabra new 
 */

function AnotherFn() {
  this.prop = 'propiedad'
  return 'Another function'
}

AnotherFn.prototype.lala = function FuncionDePrototipo() {

}

const ar = new AnotherFn()

console.log(ar)
console.log(ar.__proto__)

// Al llamar a la función con la palabra reservada de new esto lo que hace es crear una instancia de la función, devolviendo un objeto literal, 
// para esto se supone que deberiamos estar llamando a una clase, entonces ¿como es que es esto posible si hemos utilizado la palabra reservada 
// function en vez de la palabar reservada class?, esto es posible porque las funciones en JavaScript tienen un contexto de this, 
// siendo esto lo que se devuelve al momento del return de la funcion que fue llamada con la palabra reservada new. Entonces lo que sucede se resume a continuación:
// 1.- Se crea un objeto del aire
// 2.- Este objeto literal empieza a tomar todas las propiedades que nosotros asignemos mediante la palabra reservada de this
// 3.- Luego se va a ignorar completamente el return que le indiquemes a nuestra función, retornado en su lugar y de manera implicita todas las
//     propiedades y metodos definidos dentro de la misma.
// 4.- Y por ultimo el prototipo de las funciones se va a asignar al valor de this
// Esto quiere decir que sin importar lo que este en el return, la función devolvera un objeto literal con las propiedades y métodos que se 
// hayan definido dentro de la misma.

