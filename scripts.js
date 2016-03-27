/************** PROGRAMA DE CUENTO************///////////
/*****************
console.log("Inicio de Programa");
var sustantivo =prompt("Ingrese un sustantivo?");
var adjetivo =prompt("Ingrese un adjetivo?");
var verbo =prompt("Ingrese un verbo?");
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
var peliculasVistas = prompt("Cuantas peliculas haz visto este mes?");
var seriesVistas = prompt("Cuantas series haz visto este mes?");
var tiempoPantalla = parseInt(peliculasVistas) + parseInt(seriesVistas);
alert ('Wow ! Haz visto ' + tiempoPantalla + " veces minimo la pantalla. ");
console.log("Programa completado");  
