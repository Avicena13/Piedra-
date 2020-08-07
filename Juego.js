var Piedra = 1;
var Papel = 2; 
var Tijera = 3; 

function Game (Piedra, Papel, Tijera){
    if (Piedra ===  Piedra ) {console.log("Empate");}
    if (Piedra < Papel) {console.log("Gana Papel");}
    if (Piedra < Tijera) {console.log("Gana Piedra")};
    if (Tijera > Papel) {console.log("Gana Tijera")};
    if (Tijera === Tijera){console.log("Empate")};
    if (Papel === Papel){console.log("Empate")};
    
}


