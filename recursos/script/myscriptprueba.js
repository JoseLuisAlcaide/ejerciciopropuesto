let anho=1978
let mes =2
const dia1 = new Date(anho, mes-1, 1);
let limite=dia1.getDay()//esto nos da un valor comprendido enter 0 y 6 donde 0 Dom, 1 Lun  
console.log(limite)