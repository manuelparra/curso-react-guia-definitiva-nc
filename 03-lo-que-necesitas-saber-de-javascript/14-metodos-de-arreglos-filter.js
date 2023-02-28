/* El primer método que veremos es el método filter, este método lo que hace este
 * tomar todos los elementos de un arreglo y devolver todos los que evalue a verdadero */

const arr = [0, 1, 2, 3, 4]

const r = arr.filter((el, i) => {
  console.log(i)
  return el < 2
})

console.log(r)

