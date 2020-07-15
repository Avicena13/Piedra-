var piedra = 1
var papel = 2
var tijera = 3

var player1 = "Yo"
var player2 = "PC"

var resultado = piedra === piedra ? "No pasa nada": "No pasa nada"; 
var resultado1 = papel === papel ? "No pasa nada" : "No pasa nada";
var resultado2 = tijera === tijera ? "No pasa nada" : "Nopasa nada"; 
var resultado3 = piedra < papel ? "Gana papel" : "Gana piedra";
var resultado4 = piedra < tijera ? "Gana piedra" : "Gana tijera";
var resultado5 = papel < tijera ? "Gana papel" : "Gana tijera"; 


function Game (player1 = piedra, player2 = piedra) {
    var resultado = piedra === piedra ? "No pasa nada": "No pasa nada";
    return resultado;
}
function Game (player1 = papel, player2 =papel) {
    var resultado1 = papel === papel ? "No pasa nada" : "No pasa nada";
    return resultado1;
}
function Game (player1 = tijera, player2 = tijera) {
    var resultado2 = tijera === tijera ? "No pasa nada" : "Nopasa nada"; 
    return resultado2;
}
function Game (player1 = piedra, player2 = papel) {
    var resultado3 = piedra < papel ? "Gana papel" : "Gana piedra";
    return resultado3;
}
function Game (player1 = piedra, player2 = tijera) {
    var resultado4 = piedra < tijera ? "Gana piedra" : "Gana tijera";
    return resultado4;
}
function Game (player1 = papel, player2 = tijera ) {
    var resultado5 = papel < tijera ? "Gana papel" : "Gana tijera"; 
    return resultado5;
}
