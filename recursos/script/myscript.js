

   
// let textUser = prompt();
// let letraUser = prompt();

let textUser = "aadeaaadeaaaaa";
let letraUser = ["a","e"];
let nLetra = 0
// console.log(textUser);
function contar(cadena,letra) {
    let posicion=cadena.indexOf(letra);
    let cuenta=0
    while (posicion != -1) {
        console.info(posicion,letra)
        cuenta++
        posicion=cadena.indexOf(letra, posicion+1)
    }
    console.log(cuenta);
    return cuenta
}

for (i=0;i<letraUser.length;i++)
   nLetra+=contar(textUser,letraUser[i])
//console.log("El numero de veces que aparece la letra A es "+contar("A"))

console.log(nLetra)
document.write(`<p style="color:green">${textUser}</p>`)
document.write(`<p>La suma de todas la vocales Mayúsculas es ${nLetra}</p>`)