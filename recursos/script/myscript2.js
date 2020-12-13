
// const texto = prompt(`introduszca una cadena de texto`,`AAAAAAAABBBAACCCCCCCAAAAAA`);
const texto = prompt(`introduszca una cadena de texto`);
const textUser = texto.split("");
let nLetra=textUser[0];
let maxLetra="";
let contTemporal = 1;
let contFinal = 0;

for(i=1 ; i<textUser.length ; i++)
if (textUser[i]===nLetra){
    contTemporal++;
    if (contTemporal>=contFinal){
        maxLetra=nLetra;
        contFinal=contTemporal;
    }
}else{
    nLetra = textUser[i];
    contTemporal=1;
    console.log(nLetra);
    
}
console.log(textUser);
console.log(`contTemporal ${contTemporal}`);
console.log(`contFinal ${contFinal}`);
console.log(`Letra con mas repeticiones es: "${maxLetra}" que se repite ${contFinal} veces`);

