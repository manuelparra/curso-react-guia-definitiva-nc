/* El primer método que veremos es el método filter, este método lo que hace este
 * tomar todos los elementos de un arreglo y devolver todos los que evalue a verdadero */

const arr = [5, 1, 2, 3, 4]

const r = arr.filter((el, i) => {
  console.log(i)
  return el > 2
})

console.log(r)

const mapped = arr.map((el) => el * 2)
console.log(mapped)

const mappedhtml = arr.map((el) => `<h1>${el}</h1>`)
console.log(mappedhtml)

const users = [
  { id: 1, name: 'Chanchito feliz'},
  { id: 2, name: 'Chanchito triste'},
  { id: 3, name: 'Chanchito emocionado'},
  { id: 4, name: 'Chanchito molesto'},
]

const mappedusers = users.map((user) => `<h1>${user.name}</h1>`)

console.log(mappedusers)

