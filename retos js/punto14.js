const num1 = parseInt(prompt('Por favor ingrese el primer numero'));
const num2 = parseInt(prompt('Por favor ingrese el segundo numero'));
const num3 = parseInt(prompt('Por favor ingrese el tercer numero'));

if (num1 > num2) {
    if(num1 > num3){
        alert(`el numero mayor es el: ${num1} y el numero menor es el: ${num3} `)
    }
} else if (num2 > num3) {
    alert(`el numero mayor es el: ${num2} es mayor que ${num3}`)
}else if(num3 > num1 && num3 > num2 ){
    alert(`el numero mayor es el: ${num3} es mayor que ${num1}`)
}else{
    alert('Por favor vuelva a re-escribir los numero de nuevos, algo salio mal')
}