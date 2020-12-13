
const texto = prompt(`introduszca una cadena de texto`,`ABBBAACCCCCCCAAAAAA`);
const textUser = texto.split("");
let nLetra="";
let maxLetra="";
let contTemporal = 0;
let contFinal = 0;
console.log(textUser);

for(i=0 ; i<textUser.length ; i++)
if (textUser[i]===nLetra){
    contTemporal++;
    if (contTemporal>=contFinal){
        maxLetra=nLetra;
        contFinal=contTemporal+1;
    }
}else{
    nLetra = textUser[i];
    contTemporal=0;
    console.log(nLetra);
    
}
console.log(textUser);
console.log(`contTemporal ${contTemporal}`);
console.log(`contFinal ${contFinal}`);
console.log(`Letra con mas repeticiones es: "${maxLetra}" que se repite ${contFinal} veces`);

