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


