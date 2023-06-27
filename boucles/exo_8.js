// Écrire un algorithme qui affiche la valeur la plus proche de zéro contenue dans un tableau

const myArray = [5, 3, -5, 7, 10, 5, 4, 6, 8, 1];

let min = myArray[0];


for(i = 1; i < myArray.length; i++){

    if (Math.abs(min) > Math.abs(myArray[i])){
        min = myArray[i];
    }
}
console.log(min);

