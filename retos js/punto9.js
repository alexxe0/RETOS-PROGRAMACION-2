const numero1 = parseInt(prompt('Escriba el primer numero'));
const numero2 = parseInt(prompt('Escriba el segundo numero'));
const numero3 = parseInt(prompt('Escriba el tercer numero'));

if(numero1 == numero2 && numero2 == numero3){
    const resultadoProblema = numero1 + (numero2 * numero3);
    alert(`el resultado es: ${resultadoProblema}`)
}else{
    alert(`Por favor trate que los numero sean iguales`)
}