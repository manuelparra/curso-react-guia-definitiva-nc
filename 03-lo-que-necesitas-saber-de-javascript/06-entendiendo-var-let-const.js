
/* Las variables creadas con var, al momento de ser procesadas por el compilador, la misma es llevada al comienzo del archivo 
 * Las variables creadas con let se procesan en la misma linea donde ha sido utilizada
 * Las variables declaradas con la palabra reservadas de const no pueden ser modificadas
 */

var miVariable = "Variable creada con var";
miVariable = "Otro valor de var";

let variable = "Variable creada con let";
variable = "Otro valor con let";

const constante = "Este valor es constante";

console.log(miVariable, variable);

// Durante el desarrollo de este curso no utilizaremos la palabra reservada var, unicamente trabajaremso con
// let y const
