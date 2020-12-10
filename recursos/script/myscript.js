// let textUser ="aedaadeaaadeaa".split("");
// let letraUser = "a";

const textUserHtml = document.getElementById("textUserHtml");
const letraUserHtml = document.getElementById("letraUserHtml");
const btn_calcular = document.getElementById("userBoton");
const resultado = document.getElementById("resultado");

btn_calcular.addEventListener("click",inicializar);

    function inicializar(){
        const textUser = (textUserHtml.value).split("");
        const letraUser = letraUserHtml.value;
        let contadorFinal=0;
        let contadorTemp=0;
        // const textUser = prompt(`Itroduzca un texto`).split("");
        // const letraUser = prompt(`Introduzca letra consecutiva a buscar`);

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
    resultado.innerHTML="<h2>El numero de veces máximo consecutivo que se repite "+letraUser+" en el texto "+textUserHtml.value+" es "+contadorFinal+" veces</h2>"
    //document.write(`El numero de veces máximo consecutivo que se repite "${letraUser}" en el texto "${textUser}" es ${contadorFinal} veces`);

}


