const numero1 = parseInt(prompt('Ingrese el primer numero'));
const numero2 = parseInt(prompt('Ingrese el segundo numero'));
const numero3 = parseInt(prompt('Ingrese el tercer numero'));

if(numero1 <= 10 && numero2 <= 10 && numero3 <= 10){
    alert('Todos los numeros son mayores a 10')
}else{
    alert('hay algun numero menor a 10')
}