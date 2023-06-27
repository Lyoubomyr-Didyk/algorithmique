// Écrire un algorithme qui vérifie si le nombre saisi par l’utilisateur est divisible par 7 et 13

function checkNumb (){
    let numb = parseInt(prompt("Veuillez saisir un nombre"));
    while (numb < 0){
        numb = parseInt(prompt("Veuillez saisir un nombre positif"));   // stocke la nouvelle valeure
    }
    return numb;
}

function divisible(numbDone){
    let message;
    if(numbDone % 7 === 0 && numbDone % 13 === 0){
        message = `${numbDone} est divisible par 7 et 13`
    } else {
        message = `${numbDone} n'est pas divisible par 7 et 13`
    }
    return message

}


console.log(divisible(checkNumb()));