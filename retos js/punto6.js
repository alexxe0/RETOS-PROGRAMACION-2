const cifraNumero = parseInt(prompt('Por favor escriba un numero'));

if(cifraNumero <= 9){
    alert(`el numero: ${cifraNumero} tiene una cifra`);
}else if(cifraNumero >= 10 && cifraNumero <= 99){
    alert(`el numero: ${cifraNumero} tiene dos cifras`)
}else if(cifraNumero >= 100 && cifraNumero < 1000 ){
    alert(`el numero: ${cifraNumero} tiene tres cifra`)
}else if(cifraNumero >= 1000){
    alert('Error')
}else{
    alert(`Por favor ingrese de nuevo el numero`)
}