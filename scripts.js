/************** PROGRAMA DE CUENTO************///////////
/*****************
console.log("Inicio de Programa");
var preguntas = 3;
var preguntasFaltantes = "Quedan " + preguntas + " preguntas.";
alert("Este es el juego del cuenta cuentos. Sigue las instrucciones.");
var sustantivo =prompt("Ingrese un sustantivo?" + preguntasFaltantes );
preguntas = preguntas - 1; 
preguntasFaltantes = "Quedan" + preguntas + "preguntas.";
var adjetivo =prompt("Ingrese un adjetivo?" + preguntasFaltantes );
preguntas -= 1;
preguntasFaltantes = "Quedan" + preguntas + "preguntas.";
var verbo =prompt("Ingrese un verbo?" + preguntasFaltantes);

document.write("<h1>Te cuento un cuento: </h1>");
document.write("<p>Se dice que el " +sustantivo+ " " +adjetivo+ " le gusta " +verbo+ " en la casa del vecino.</p>");
document.write("<p>El " +verbo+  " del " +sustantivo+ " asustaba por su " +adjetivo+ " feroz.</p>");
document.write("<p>Al verlo que era " +adjetivo+ " todos salieron despavoridos por el " +verbo+ " del tremendisimo " +sustantivo+ " .</p>");
console.log("Fin de Programa");
******************/
/*********calculadora de dias ***********/
/****************************************
var segundosPorMinuto = 60;
var minutosPorHora = 60;
var horasPorDia = 24;
var segundosPorDia = segundosPorMinuto * minutosPorHora * horasPorDia;
document.write("<h1>Calculadora del Tiempo</h1><p>Hay " + segundosPorDia + " segundos en un dia</p>");
var anios =prompt("Ingrese su edad?");
var aniosdevida = anios * 365;
document.write("<h1>Tu edad en dias</h1><p>Tienes " + aniosdevida + " dias vividos</p>");
**************************/
/**********
var peliculasVistas = prompt("Cuantas peliculas haz visto este mes?");
var seriesVistas = prompt("Cuantas series haz visto este mes?");
var tiempoPantalla = parseInt(peliculasVistas) + parseInt(seriesVistas);
alert ('Wow ! Haz visto ' + tiempoPantalla + " veces minimo la pantalla. ");
console.log("Programa completado");  
*/////////////
///////////*PROGRAMA DE UN DADO*//////////////////
/***********************************************/
/*****
console.log("Inicio del programa");
var dado = Math.floor(Math.random() * 6) + 1;
alert("Dado dice:" + dado); 
console.log("Programa completado");
******************/////
////*NUMERO ALEARIO ENTRE EL 1 Y EL NUMERO INGRESADO*/////
/*console.log("Inicio del programa");
var numero =prompt("Ingrese un numero?");
var numeroaleatorio = Math.floor(Math.random() * + numero) + 1;
alert("Su numero aleatorio es :" + numeroaleatorio); 
console.log("Programa completado");*/

console.log("Inicio del programa");
var adivinoCorrectamente = false;
document.write("<h1> Adivina el numero y gana un guiso!");
var numsave = Math.floor(Math.random()*10) + 1;
var numero =prompt("Adivina el numero secreto?");

if (parseInt(numero === numsave)){
adivinoCorrectamente = true;
	}
	else if (parseInt(numero)>numsave) {
		alert("El numero a adivinar es menor al que ingresastes");
		var nuevoIntento = prompt("Intentalo nuevamente");
		if (parseInt(nuevoIntento)===numsave) {
		adivinoCorrectamente = true;
		}
	}
	else if(parseInt(numero)<numsave)
	{alert("El numero es mayor al que escribistes");
	var nuevoIntento = prompt("Intentalo nuevamente");
	if(parseInt(nuevoIntento)===numsave)
	{adivinoCorrectamente = true;
	}
	}
if(adivinoCorrectamente){
	document.write("<p>Ganaste, Felicitaciones... eeeeeee</p>"); }
	else{
		document.write("<p>Ja, ja, perdiste. El numero correcto era: " + numsave + "</p>");
	}
console.log("Programa completado");