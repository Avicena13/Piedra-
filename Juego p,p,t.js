var opcion1 = "Piedra";
var opcion2 = "Papel"; 
var opcion3 = "Tijera";
        
 function Game (player1, player2) {
    if (opcion1 === player1 &&  opcion2 === player2){console.log("Gana Papel");}
    else if (opcion1 === player1 && opcion3 === player2) {console.log("Gana Piedra");}
    else if (opcion2 === player1  && opcion3 === player2) {console.log("Gana Tijera");}
    else  {console.log("Empate")};} 


    