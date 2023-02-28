const fn = (a, b, c) => console.log(a + b + c)

const arr = [1, 2, 3]

fn(arr[0], arr[1], arr[2])

fn(...arr)

// Si nuestra función tiene 3 argumentos y le pasamos 2 parametro durante la llamada, la misma contendra un tercer argumento o variable undefined
// Si nuestra función tiene 3 argumentos y le pasamos 4 parametros el 4 sera ignorado por la función 
// Todo lo anterior aplica al ambito de spread operator

const arr1 = [5, 6]

const arr2 = [...arr, ...arr1]
const arr3 = [...arr, ...arr1, 5, 1] 

console.log(arr)
console.log(arr1)
console.log(arr2)
console.log(arr3)

