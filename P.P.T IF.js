var opcion1 = "Piedra";
var opcion2 = "Papel"; 
var opcion3 = "Tijera";
        
 function Game (player, ia) {
    if (player === opcion1  &&  ia === opcion2) {console.log("Gana ia");}
    else if (player === opcion2 && ia === opcion1) {console.log("Gana player");}
    else if ( player === opcion2 && ia === opcion3) {console.log("Gana ai");}
    else if (player === opcion3 && ia === opcion2) {console.log("Gana player");}
    else if (player === opcion1 && ia === opcion3) {console.log("Gana player");}
    else if (player === opcion3 && ia === opcion1) {console.log("Gana ai")}
    else  {console.log("Empate")};}

