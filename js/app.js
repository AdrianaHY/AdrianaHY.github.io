$('.carousel').carousel();

var foto = document.getElementById("fotografia");
var botonFoto = document.getElementById("botonFoto");


// for (var i = 0; i < span.length; i++){
//   span[i].addEventListener("click",cerrar);
// }
//
//
// function cerrar() {
//   var div = this.parentElement;
//   div.style.display = "none";
// }

botonFoto.addEventListener("click",abrirCerrar);

function abrirCerrar(){
  if(foto.style.display == "none"){
    foto.style.display= "block";
  }else{
    foto.style.display= "block";
  }
}

// botonDos.addEventListener("click", abrirCerrarParrafoDos);
//
// function abrirCerrarParrafoDos(){
//   if(parrafoDos.style.visibility == "visible"){
//     parrafoDos.style.visibility = "hidden";
//   }else{
//     parrafoDos.style.visibility = "visible";
//   }
// }
//
// botonRestaurar.addEventListener("click", restaurar);
//
// function restaurar(){
//   for(var i=0; i < span.length; i++){
//     span[i].parentElement.style.display= "inline";
//   }
// }
