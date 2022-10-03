var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

//SOLO PALABRAS HASTA 16 CARACTERES
var palabra;
var palabras = ["ARBOL", "AMIGOS", "CUADERNO", "ESCUELA", "CASA", "LLUVIA", "MAESTRA", "MUSICA"];
var palabraSeleccionada;
var caracteres;
var letra;
var contador = 0;
var pasos;
var add = 10;
var coincide = false;
var suma = 1;
var existe = false;
var acumulador = " ";
var habilitar = true;
var sumador = 0;
var espacioTotal = 750;
var xInicial = 0;
var radio = 20;
var y = 350;

  function bienvenida() {
    document.getElementById("bienvenida").style.display = "flex";
    document.getElementById("canvas").style.display = "none";
    document.getElementById("palabra").style.display = "none";
    document.getElementById("boton1").style.display = "flex";
    document.getElementById("boton2").style.display = "none";
    document.getElementById("boton3").style.display = "none";
  }
  bienvenida();

  function inicio() {
    suma = 1;
    pincel.clearRect(0, 0, 750, 433);
    seleccionPalabra();
    document.getElementById("bienvenida").style.display = "none";
    document.getElementById("canvas").style.display = "flex";//"inline-block";
    document.getElementById("palabra").style.display = "none";
    document.getElementById("boton1").style.display = "none";
    document.getElementById("boton2").style.display = "none";
    document.getElementById("boton3").style.display = "flex";
    add = 10;
    acumulador = " ";
    habilitar = true;
  }

    function seleccionPalabra() {
      palabraSeleccionada = "";
      caracteres = "";
      xInicial = 20;
      contador = 0;
      palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)];
      caracteres = palabraSeleccionada.length;
      xInicial += Math.floor((espacioTotal - (caracteres * radio * 2)) / 2);

      while(contador < caracteres) {
	pasos = xInicial;
	pincel.fillStyle = "#000044";
        pincel.beginPath();
        pincel.arc(xInicial, y, radio, 0, Math.PI * 2);
	pincel.closePath();
        pincel.fill();
	xInicial += (radio * 2);
        contador++;
      }
    }

document.addEventListener("keydown", function(evento) {
        if (habilitar == true && evento.keyCode > 64 && evento.keyCode < 91) {
	letra = evento.key.toUpperCase();
    comparar();}}, false);

    function comparar() {

      for(var i = 0; i < caracteres; i++) {
        if(letra == palabraSeleccionada[i]) {
	  coincide = true;
//aqui comienzo los cambios
	  if (suma == caracteres) {ganaste();}
	  suma++;
	  pincel.font = "bold 32px serif";
	  pincel.fillStyle = "white";
	  if (letra == "I") {pasos = (xInicial - 10 - caracteres * 40) + 5;}
	  else if (letra == "M") {pasos = (xInicial - 10 - caracteres * 40) - 5;}
	  else if (letra == "O" || letra == "G" || letra == "C" || letra == "U") {pasos = (xInicial - 10 - caracteres * 40) -1;}      else if (letra == "S") {pasos = (xInicial - 10 - caracteres * 40) +1;}
	  else {pasos = (xInicial - 10 - caracteres * 40);}
	  pincel.fillText(letra, pasos + 40 * i, y + 11);
	}
      }

	  if(coincide == true) {
	    coincide = false;
	  } else {
          for(var i = 0; i < acumulador.length; i++) {
            if(letra == acumulador[i]) {
	      existe = true;
	      break;
	    }
	  } 
	  
	  if(existe) {
	    existe = false;
	  } else {
	  pincel.font = "bold 20px serif";
	  pincel.fillStyle = "#000044";
          pincel.fillText(letra, add, 410);
	  add += 20;
	  acumulador += letra;
	  existe = false;
	  pincel.lineCap = "round";
	  pincel.lineJoin = "round";
	  
	  if(acumulador.length == 2) {
	    pincel.strokeStyle = "#000044";
	    pincel.lineWidth = 12;
	    pincel.beginPath();
	    pincel.moveTo(300, 330);
	    pincel.lineTo(300, 30);
	    pincel.stroke();
	  } else if(acumulador.length == 3) {
	    pincel.strokeStyle = "#000044";
	    pincel.lineWidth = 12;
	    pincel.beginPath();
	    pincel.moveTo(300, 30);
	    pincel.lineTo(450, 30);
	    pincel.stroke();
	  } else if(acumulador.length == 4) {
	    pincel.strokeStyle = "#000044";
	    pincel.lineWidth = 12;
	    pincel.beginPath();
	    pincel.moveTo(450, 30);
	    pincel.lineTo(450, 50);
	    pincel.stroke();
	    pincel.beginPath();
	    pincel.arc(450, 100, 50, 0, Math.PI * 2);
	    pincel.stroke();
	  } else if(acumulador.length == 5) {
	    pincel.strokeStyle = "#000044";
	    pincel.lineWidth = 12;
	    pincel.beginPath();
	    pincel.moveTo(450, 150);
	    pincel.lineTo(450, 230);
	    pincel.stroke();
	  } else if(acumulador.length == 6) {
	    pincel.strokeStyle = "#000044";
	    pincel.lineWidth = 12;
	    pincel.beginPath();
	    pincel.moveTo(450, 170);
	    pincel.lineTo(400, 200);
	    pincel.stroke();
	  } else if(acumulador.length == 7) {
	    pincel.strokeStyle = "#000044";
	    pincel.lineWidth = 12;
	    pincel.beginPath();
	    pincel.moveTo(450, 170);
	    pincel.lineTo(500, 200);
	    pincel.stroke();
	  } else if(acumulador.length == 8) {
	    pincel.strokeStyle = "#000044";
	    pincel.lineWidth = 12;
	    pincel.beginPath();
	    pincel.moveTo(450, 230);
	    pincel.lineTo(410, 300);
	    pincel.stroke();
	  } else if(acumulador.length == 9) {
	    pincel.strokeStyle = "#000044";
	    pincel.lineWidth = 12;
	    pincel.beginPath();
	    pincel.moveTo(450, 230);
	    pincel.lineTo(490, 300);
	    pincel.stroke();
	    habilitar = false;
	    pincel.fillStyle = "red";
	    pincel.font = "bold 25px serif";
	    pincel.fillText("FIN DEL JUEGO", 515, 120);
	    pincel.fillText("Perdiste", 570, 160);
	    pincel.fillText("Intentalo de nuevo", 510, 200);
	  }
}
}
}

    function ganaste() {
      suma = 1;
      habilitar = false;
      pincel.strokeStyle = "white";
      pincel.lineWidth = 12;
      pincel.fillStyle = "#004400";
      pincel.font = "bold 40px serif";
      pincel.strokeText("FELICITACIONES", 15, 120);
      pincel.strokeText("GANASTE EL JUEGO", 70, 160);
      pincel.fillText("FELICITACIONES", 15, 120);
      pincel.fillText("GANASTE EL JUEGO", 70, 160);
      
}
  function agregar() {
    document.getElementById("bienvenida").style.display = "none";
    document.getElementById("canvas").style.display = "none";
    document.getElementById("palabra").style.display = "inline-block";
    document.getElementById("nuevaPalabra").value = "";
    document.getElementById("nuevaPalabra").focus();
    document.getElementById("boton1").style.display = "none";
    document.getElementById("boton2").style.display = "flex";
    document.getElementById("boton3").style.display = "none";
  }
  function guardar() {
    palabra = document.getElementById("nuevaPalabra").value.toUpperCase();
    palabras.push(palabra);
    inicio();
  }
  function cancelar() {
    bienvenida();
  }
  function nuevo() {
    inicio();
  }
  function salir() {
    bienvenida();
  }

