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

    for(const element of vowels){

        if(element === choise){
            return `La lettre "${choise}" est une voyelle.`
        }
    }
    
    return `La lettre "${choise}" est une consonne.`;

}

//**************** includes  *****************************/

// function checkVowels (choice, vowels){
//     let message;

//         if(vowels.includes(choice)){
//             message = `La lettre "${choice}" est une voyelle.`
//         } else {
//              message = `La lettre "${choice}" est une consonne.`
//             }

//     return message;

// }