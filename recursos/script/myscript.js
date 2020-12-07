

   

// let textUser =prompt(`texto`).split("");
// let letraUser = prompt();

let textUser ="aaadeaa".split("");
let letraUser = "a";
let nLetra = 0
let nConsecutivos=0;


console.log(textUser);

for (i=0 ; i<textUser.length ; i++)
if (textUser[i]==textUser[i+1]){
    // let nConsecutivos=0
    console.log(`consecutivo`)
    nConsecutivos++
    console.log(nConsecutivos)
    }else {
        console.log(`no consecutivo`)
    
    }



function contar(cadena,letra) {
    let posicion=cadena.indexOf(letra);
    let cuenta=0
    while (posicion != -1) {
        console.log(posicion,letra)
        cuenta++
        posicion=cadena.indexOf(letra, posicion+1)
    }
    console.log(cuenta);
    return cuenta
}


for (i=0;i<letraUser.length;i++)
 nLetra+=contar(textUser,letraUser[i])

console.log("El numero de veces que aparece la letra A es "+contar("A"))

console.log(nLetra)

document.write(`<p style="color:green">${textUser}</p>`)
document.write(`<p>Las veces que aparece la letra ${letraUser} es ${nLetra}</p>`)
