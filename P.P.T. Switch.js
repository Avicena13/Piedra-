var op1 = "Tijera";
var op2 = "Papel";
var op3 = "Piedra";

function play (player, ai){ 

    switch (player != ai) {
    case (player === op1 && ai === op2): console.log ("Gana player")
        break;
    case (player === op2 && ai === op1): console.log ("Gana ai")
        break;
    case (player === op2 && ai === op3): console.log ("Gana player")
        break;
    case (player === op3 && ai === op2): console.log ("Gana ai")
        break;
    case (player === op1 && ai === op3): console.log ("Gana ai")
        break;
    case (player === op3 && ai === op1): console.log ("Gana player")
        break; 
    default: console.log ("Empate")
        break; }
}

