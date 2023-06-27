
// Écrire un algorithme qui demande un nombre entier positif et l’affiche à l'envers


function reverseNumber(a){

    while(a > 0){
        console.log(a % 10);               
        a = Math.floor(a / 10);
    }
}

 console.log(reverseNumber(checkNumb ()));      // func checkNumb  exo 3 





// ------------------------------------------

// function reverseNumber(nombre){
// return nombre.toString().split('').reverse().join('')
// }

// console.log(reverseNumber(checkNumb()));
 


