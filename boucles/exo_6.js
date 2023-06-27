// Écrire un algorithme qui affiche la somme de tous les éléments d’un tableau



const newArray = array();


function sumArray(array){
    let total = 0;
    for(i = 0; i < array.length; i++ ){
        total = total + array[i];
    }
    return total;
}

console.log(sumArray(newArray)); 
