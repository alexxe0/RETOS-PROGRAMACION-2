const sueldo = parseInt(prompt('Por favor ingrese el monto del sueldo'));
const añosDeAntiguedad = parseInt(prompt('ingrese los años de antiguedad que tiene en la empresa'));

if(sueldo > 500){
    alert('sin cambios')
}else if(sueldo < 500 && añosDeAntiguedad >= 10){
    const aumentoSueldo = sueldo*(20/100);
    const sumaTotal = sueldo + aumentoSueldo;
    alert(`èl total del sueldo sera de: $${sumaTotal} dolares`)
}else if(sueldo < 500 && añosDeAntiguedad < 10){
    const aumentoSueldo = sueldo*(5/100);
    const sumaTotal = sueldo + aumentoSueldo;
    alert(`èl total del sueldo sera de: $${sumaTotal}$ dolares`)
}