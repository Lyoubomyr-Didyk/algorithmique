// Écrire un algorithme qui permet de savoir si une lettre saisie par l’utilisateur est une voyelle ou une consonne.

const vowels = ["a", "e", "i", "o", "u", "y"];


function choiseLetter (){
    let lettre = prompt("Veuillez saisir une lettre").toLowerCase();
    
    while (lettre.length !== 1){
        lettre = prompt("Veuillez saisir une seule lettre");  
    }
    return lettre
}

function checkVowels (choise, vowels){
    let message;
    for(let i = 0; i < vowels.length; i++){

        console.log(vowels[i])

        if(vowels[i] === choise){
            message = `La lettre "${choise}" est une voyelle.`
        }
        
        else {
            message = `La lettre "${choise}" est une consonne.`
        }
    }
    return message;

}


console.log(checkVowels(choiseLetter (), vowels));
