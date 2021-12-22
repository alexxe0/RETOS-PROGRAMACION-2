const x = parseInt(prompt('ingrse la cordenada X'));
const y = parseInt(prompt('ingrese la cordenada Y'));

if(x > 0 && y > 0){
    alert('primer cuadrante')
}else if(x < 0 && y > 0){
    alert('segundo cuadrante')
}else if(x < 0 && y < 0){
    alert('tercer cuadrante')
}else if(x > 0 && y < 0){
    alert('cuarto cuadrante')
}else{
    alert('se encuentra en un eje')
}