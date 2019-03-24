var objetos = new Array();
var azar = 0;
objetos[0] = "img/headerA.jpg";
objetos[1] = "img/header1A.jpg";
objetos[2] = "img/header2A.jpg";
//objetos[3] = "img/header.png";
// objetos[4] = "img/header4.jpg";
// objetos[5] = "img/header5.jpg";
// objetos[6] = "img/header6.jpg";
// objetos[7] = "img/header7.jpg";

function aleatorio() {
	var azar = Math.floor(Math.random() * objetos.length);
    background = document.querySelector(".masthead");
    background.style.backgroundImage = "url(" + objetos[azar] + ")";
}

