//new Date(anho, mes-1, dia, hora, min, seg)

let anho = parseInt(prompt(`Introduzca un año`,`1978`));
let mes = parseInt(prompt(`introduzca un mes`,`2`));
//definimos la fecha con el dia 1
const dia1 = new Date(anho, mes-1, 1);
//definimos el ultimo dia del mes dependiendo si es bisiesto o el mes tiene 30 0 31 dia
let diaFin
if (mes=="2"){
    diaFin=(new Date(anho, mes-1, 28)).getMonth()==(new Date(anho, mes-1, 29)).getMonth()
    ?new Date(anho, mes-1, 29)
    :new Date(anho, mes-1, 28)
}else{
    diaFin=(new Date(anho, mes-1, 30)).gethMonth()==(new Date(anho, mes-1, 31)).getMonth()
    ?new Date(anho, mes-1,31)
    :new Date(anho, mes-1,30)
}
console.log(diaFin)

let ndias=1
let limite=dia1.getDay()//esto nos da un valor comprendido enter 0 y 6
if (limite==0)//lo que seria Domingo
    limite=7//para que sea el dia en que acaba la semana
//Definimos la tabla
document.write("<table border>")//etiqueta de html para abrir una tabla

do {
    if ((new Date(anho,mes-1,ndias)).getDay()==1 && ndias!=1)
       document.write("<tr>")
    if (ndias==1) {
      document.write("<tr>")
      for (let i=1;i<limite;i++)
        document.write(`<td></td>`)   
    }
    dia=ndias<10?`0${ndias}`:ndias
    document.write(`<td>${dia}</td>`)
    if ((new Date(anho,mes-1,ndias)).getDay()==0)
       document.write("</tr>")
    ndias++
} while (ndias<=diaFin.getDate())
if (diaFin.getDay()!=0) {
   for (let i=1;i<=7-diaFin.getDay();i++)
      document.write("<td></td>")
   document.write("</tr>")
}
document.write("</table>")
/*
let mes=prompt("Mes")
let anho=prompt("Año")

let dia_1=new Date(anho,mes-1,1)
let dia_fin
if (mes=="2") {
  dia_fin=(new Date(anho,mes-1,28)).getMonth()==(new Date(anho,mes-1,29)).getMonth()?new Date(anho,mes-1,29): new Date(anho,mes-1,28)
} else {
  dia_fin=(new Date(anho,mes-1,30)).getMonth()==(new Date(anho,mes-1,31)).getMonth()?new Date(anho,mes-1,31): new Date(anho,mes-1,30)
}

ndias=1
limite=dia_1.getDay()
if (limite==0)
    limite=7
document.write("<table border>")
do {
    if ((new Date(anho,mes-1,ndias)).getDay()==1 && ndias!=1)
       document.write("<tr>")
    if (ndias==1) {
      document.write("<tr>")
      for (let i=1;i<limite;i++)
        document.write(`<td></td>`)   
    }
    dia=ndias<10?`0${ndias}`:ndias
    document.write(`<td>${dia}</td>`)
    if ((new Date(anho,mes-1,ndias)).getDay()==0)
       document.write("</tr>")
    ndias++
} while (ndias<=dia_fin.getDate())
if (dia_fin.getDay()!=0) {
   for (let i=1;i<=7-dia_fin.getDay();i++)
      document.write("<td></td>")
   document.write("</tr>")
}
document.write("</table>")
*/
