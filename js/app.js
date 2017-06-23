$('.carousel').carousel();

var foto = document.getElementById("fotografia");
var botonFoto = document.getElementById("botonFoto");




botonFoto.addEventListener("click",abrirCerrar);

function abrirCerrar(){
  if(foto.style.display == "none"){
    foto.style.display= "block";
  }else{
    foto.style.display= "block";
  }
}
