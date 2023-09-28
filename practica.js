var nombre = prompt("Bienvenido al cuestionario de las Olimpiadas. ¿Cual es tu nombre?");
var c = 0
var i = 0
alert("Buenos dias "+ nombre);
var p1 = prompt("¿Cuándo se realizará la inauguración de las Olimpiadas?\nA: Lunes 02 de octubre\nB: Viernes 29 de setiembre\nC: Jueves 28 de setiembre");
if (p1 == "B"){
    c = c + 1;
}else{
    i = i + 1;
}

var p2 = prompt("¿De qué color es la prompoción de 2do de secundaria?\nA: Celeste o Turquesa\nB: Rojo\nC: Morado");
if (p2 == "A"){
    c = c + 1;
}else{
    i = i + 1;
}

var p3 = prompt("Nuevo deporte incluido este año\nA: Futsal femenino\nB: Balonmano\nC: Marcha atlética");
if (p3 == "C"){
    c = c + 1;
}else{
    i = i + 1;
}

if(c > i){
    document.write("Lo has hecho bien " + nombre);
    document.write("Respuestas correctas: " + c + "<br>");
    document.write("Respuestas incirrectas: " + i);
}