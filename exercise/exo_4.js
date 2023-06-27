// Écrire un algorithme qui permet de savoir si un candidat à obtenu son bac et dans le cas échéant la
// mention de celui-ci.
// Les mentions ne concernent que les élèves qui ont obtenu une moyenne supérieure ou égale à 12 à l’issue
// du premier groupe.
// mention « Assez bien » : moyenne supérieure ou égale à 12 et inférieure à 14 ;
// mention « Bien » : moyenne supérieure ou égale à 14 et inférieure à 16 ;
// mention « Très bien » : moyenne supérieure ou égale à 16.


function checkNumb (){
    let numb = parseInt(prompt("Veuillez saisir le moyenne obtenue"));
    while (numb < 0){
        numb = parseInt(prompt("Veuillez saisir le moyenne positif"));  
    }
    return numb;
}

function notion (note){
    let message;

    if(note >=12 && note < 14){
        message = 'Obtenu avec mention "Assez bien "';
    }if(note >=14 && note < 16){
        message = 'Obtenu avec mention "Bien"';
    }if(note >=16){
    message = 'Obtenu avec mention "Très bien"';
    }if(note > 5 && note < 12){
        message = 'Obtenu sans mention';
    }if(note <= 5){
        message = 'Recalé';
    }
    return message;
}

console.log(notion(checkNumb()))








