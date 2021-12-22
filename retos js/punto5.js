const valorNumero = parseInt(prompt('Por favor ingrese el numero'));

if(valorNumero >= 1){
    alert(`el valor que ingresaste: (${valorNumero}) es de tipo positivo`)
}else if(valorNumero <= -1){
    alert(`el valor que ingresaste: (${valorNumero}) es de tipo negativo`)
}else{
    alert(`el valor que ingresaste: (${valorNumero}) es de tipo nulo`)
}