
// Écrire un algorithme qui affiche la plus petite valeur d’un tableau.

const newArray = array();            // function exo_5


function smallestNumb(array){
    let smallestNumber = array[0];

    for(let i = 0; i < array.length; i++){
        if (array[i] < smallestNumber){
            smallestNumber = array[i]
        }
    }
    return smallestNumber
}

console.log(smallestNumb(newArray));
