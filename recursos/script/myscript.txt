// let textUser ="aedaadeaaadeaa".split("");
// let letraUser = "a";

const textUser =prompt(`Itroduzca un texto`).split("");
const letraUser = prompt(`Introduzca letra consecutiva a buscar`);

let contadorFinal=0;
let contadorTemp=0;

for (i=0 ; i<textUser.length ; i++)
if (textUser[i]===letraUser){
    contadorTemp++;
    if(contadorTemp>=contadorFinal){
        contadorFinal=contadorTemp;
    }
}else{
    contadorTemp=0;
}

console.log(textUser);
console.log(contadorTemp);
console.log(contadorFinal);
document.write(`El numero de veces máximo consecutivo que se repite "${letraUser}" en el texto "${textUser}" es ${contadorFinal} veces`);