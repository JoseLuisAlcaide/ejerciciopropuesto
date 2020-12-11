
// const textUser = prompt(`Introduzca un texto`,`abaabaaaabaaaba`).split("");
// const letraUser = prompt(`letra a buscar`, `a`);
const textUser = prompt(`Introduzca un texto`,"abaabaaaabaaaba").split("");
const letraUser = prompt(`letra a buscar`, "a");
let contFinal = 0;
let contTemporal = 0;

for (i=0 ; i<textUser.length ; i++)
 if (textUser[i]===letraUser){
     contTemporal++;
     if (contTemporal>=contFinal){
        contFinal=contTemporal;
     }

 }else {
    contTemporal = 0;
 }
console.log(textUser);
console.log(contTemporal);
console.log(contFinal);