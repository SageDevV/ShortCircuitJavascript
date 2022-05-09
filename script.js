//Operadores lógicos

//&&//

//Exemplo: O método retorna a primeira expressão que for avaliada com falsa
//1-
console.log("value" && null && "")

//2-
console.log(NaN && null && true);

//3- 
console.log(true && "value" && false)

//Exemplo: O método retorna a ultima expressão que retorna verdadeira
//4-
console.log(true && "value" && 5);

//5-
console.log("value" && true && "true" && 10 && 101);

//||//

//Exemplo: O método retorna a expressão que for verdadeira ou, caso ambas sejam, a primeira que for.
//6-
console.log("null" || true);

//7- 
console.log("5" || 5 || true || undefined || null)

//Se todas as expressões forem avaliadas como false, retornará o valor da ultima expressão
//8-
console.log(NaN || undefined || NaN || undefined || null)

//9
console.log("" || false || undefined || undefined || "")

//10
console.log("" || false || "" || NaN || undefined)