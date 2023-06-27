// Écrire un algorithme qui demande à l’utilisateur de saisir son âge (un entier positif), puis
// l’algorithme affiche son stade de vie.


function checkAge (){
    let age = parseInt(prompt("Indique votre age"));
    while (age < 0){
        age = parseInt(prompt("Écrivez un numéro positif"));   // stocke la nouvelle valeure
    }
    return age;
}


function stageLife (age){
    let message;
    if (age <= 2){
        message = "Vous etes bébe";
    }if (age >= 3 && age <= 12){
        message = "Vous etes Enfant";
    }if (age > 13 && age <= 17){
        message = "Vous etes Adolescent";
    }if (age > 18 && age <= 69){
        message = "Vous etes Adulte";
    }if (age >= 70){
        message = "Vous etes Personne âgée";
    }
    return message;
}

//console.log(stageLife(checkAge()));




