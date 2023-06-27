// Écrire un algorithme qui demande à l’utilisateur de deviner un nombre secret.
// Si l’utilisateur saisit un nombre plus grand que le nombre secret, on affiche “Trop grand”
// Si l’utilisateur saisit un nombre plus petit que le nombre secret, on affiche “Trop petit”
// Si l’utilisateur saisit un nombre égale au nombre secret on affiche “Gagné ! ” et le programme quite
// Au bout de 20 tentatives on affiche “Perdu le nombre secret était %nombre%” et le programme
// quite



function checkNumb (){
    let numb = parseInt(prompt("Veuillez saisir un nombre"));
    while (numb < 0){
        numb = parseInt(prompt("Veuillez saisir un nombre positif"));   // stocke la nouvelle valeure
    }
    return numb;
}


function game (secretNumb){

    let insertNumb = checkNumb()
    let message;
         
         if(insertNumb > secretNumb){
            message = "Trop grand"
        }if(insertNumb < secretNumb){
            message = "Trop petit"
        }if(insertNumb === secretNumb){
            message = "Gagné!"
        }
        
        return message
}

let i = 0;
while(i < 5){
    console.log(game(15));
    if(i === 5){
    console.log(`Perdu le nombre secret était ${secretNumb}`)
    }
    i++
}

