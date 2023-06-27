// Écrire un algorithme qui demande à l’utilisateur de saisir un nombre compris entre 50 et 100 


console.log(choseNumb ())


function choseNumb (){
    let nombre = parseInt(prompt("Veuillez saisir un nombre compris entre 50 et 100"));

    while (nombre < 50 || nombre > 100){
        if (nombre < 50){
            nombre = parseInt(prompt("Ce nombre est trop petit, veuillez saisir un autre nombre"));
        } else if (nombre > 100){
            nombre = parseInt(prompt("Ce nombre est trop grand, veuillez saisir un autre nombre"));
        } 
    }
    return `Vous avez saisi ${nombre}`;
     
}