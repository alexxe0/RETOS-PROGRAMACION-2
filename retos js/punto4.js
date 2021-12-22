const num1 = parseInt(prompt('Por favor ingrese el primer numero'));
const num2 = parseInt(prompt('Por favor ingrese el segundo numero'));
const num3 = parseInt(prompt('Por favor ingrese el tercer numero'));

if (num1 > num2) {
    if(num1 > num3){
        alert(`el numero: ${num1} es mayor que ${num2} y ${num3}`)
    }
} else if (num2 > num3) {
    alert(`el numero: ${num2} es mayor que ${num1} y ${num3}`)
}else if(num3 > num1 && num3 > num2 ){
    alert(`el numero: ${num3} es mayor que ${num1} y ${num2}`)
}else{
    alert('Por favor vuelva a re-escribir los numero de nuevos, algo salio mal')
}