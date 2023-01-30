/* En este apartado veremos como ruetilizar código con la exportación e importación de código
 */

const chanchosFelices = ['chancho 1', 'chancho 2', 'chancho 3']

const chanchosTristes = ['triste 1', 'triste 2']

const otrosChanchos = []

//module.exports = {
//  chanchosFelices,
//  chanchosTristes
//}

const fn1 = () => {
  console.log('Soy la función 1')
}

function fn2() {
  console.log('Soy la función 2')
}

export { chanchosTristes, otrosChanchos, fn1, fn2 }
export default chanchosFelices
