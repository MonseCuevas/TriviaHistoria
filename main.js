function guardaNombre() {
  var nombre = document.getElementById("nombre").value;
  var botones = document.getElementById("botones");
  botones.style.display = "block";
  document.getElementById("titulo").innerHTML = "¡Hola " + nombre + "!";
  }

window.onload = function(){
  document.getElementById("btnNombre").addEventListener("click",function(){
    guardaNombre();
  });
  document.getElementById("btnHistoriaU").addEventListener("click",function(){
    
  });
  document.getElementById("btnHistoriaA").addEventListener("click",function(){
    seleccion.style.display = "block";
    document.getElementById("titulo2").innerHTML = "Muy bien" ; 

  });
};