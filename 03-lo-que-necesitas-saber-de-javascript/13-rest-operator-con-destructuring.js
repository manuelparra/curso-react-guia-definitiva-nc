const rest = (...argumentos) => {
  console.log(argumentos);
}

rest(1, 2, 3)

const rest2 = (a, ...argumentos) => {
  console.log(a);
  console.log(argumentos);
}

rest2(1, 2, 3, 4, 5, 6)

const obj = {
  a: 1, b: 2, c: 3, d: 4
}
const { a, b, ...restobj } = obj

console.log(a, b, restobj)

const arr = [1, 2, 3, 4, 5]

const [x, y, ...r] = arr

console.log(x, y, r)

const useState = () => ['valor', () => {}]

console.log(useState())

const [valor, setValor] = useState()

console.log(valor, setValor)

