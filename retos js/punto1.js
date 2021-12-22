const num1 = prompt('por favor ingrese el primer numero');
const num2 = prompt('por favor ingrese el segundo numero');

if(num1 > num2){
    const sumarDeNumero = Number(num1) + Number(num2);
    const restaDeNumero = Number(num1) - Number(num2);
    alert('La suma es de: ' + Number(sumarDeNumero));
    alert('La resta es de: '+ Number(restaDeNumero));
}else if(num1 < num2){
    const MDeNumero = Number(num1) * Number(num2);
    const DDeNumero = Number(num1) / Number(num2);
    alert('La multiplicacion es de: ' + Number(MDeNumero));
    alert('La la divion es de: ' + Number(DDeNumero));
}else{
    console.log('no se puede hacer la operacion')
}

// parseInt