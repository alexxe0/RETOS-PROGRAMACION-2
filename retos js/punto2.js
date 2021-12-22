const notasAlm = parseInt(prompt('porfavor ingrese su nota') );
const notasAlm1 = parseInt(prompt('porfavor ingrese su segunda nota') );
const notasAlm2 = parseInt(prompt('porfavor ingrese su tercera nota') );

const sumaDeNotasTotal = notasAlm + notasAlm1 + notasAlm2;
const porcentaNotaTotal = 30;

if(sumaDeNotasTotal >= 21){
    alert('felicidades estas en condiciones de promocionar')
}else if( sumaDeNotasTotal >= 18){
    alert('aprobaste la materia pero tenes que ir a rendir un final')
}else{
    alert('perdon pero vas a tener que recursar la materia')
};