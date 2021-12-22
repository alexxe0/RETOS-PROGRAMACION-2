const dia = parseInt(prompt('Escriba el dia'));
const mes = parseInt(prompt('Escriba el mes'));
const año = parseInt(prompt('Escriba el año'));


if(dia === 25 && mes === 12){
    alert(`${dia}/${mes}/${año} felicidades hoy es navidad`)
}else{
    alert(`${dia}/${mes}/${año} hoy no es navidad :(`)
}