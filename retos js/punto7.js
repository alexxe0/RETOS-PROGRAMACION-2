const cantidadTotalP = parseInt(prompt('cantidad de preguntas'));
const preguntasRespondidas = parseInt(prompt('cantidad de preguntas respondidas correctamente'));

const porcentajesPreg = Math.floor( (preguntasRespondidas*100)/cantidadTotalP ) ;


 if(porcentajesPreg >= 90){
     alert(`felicidades has resuelto el ${porcentajesPreg + '%'} del examen correctamente, estas contratado!!`)
}else if(porcentajesPreg >= 75 && porcentajesPreg < 90){
        alert(`felicidades has resuelto el ${porcentajesPreg + '%'} del examen correctamente, en unos dias te llamaremos!!`)
}else if(porcentajesPreg >= 50 && porcentajesPreg < 75){
    alert(`felicidades has resuelto el ${porcentajesPreg + '%'} del examen correctamente, ya veremos si entras a la empresa`)
}else if(porcentajesPreg < 50){
    alert(`has resuelto el ${porcentajesPreg + '%'} del examen correctamente, lo sentimos pero no podemos contratarte`)
}