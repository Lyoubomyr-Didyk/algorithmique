// Écrire un algorithme qui demande un nombre entier positif, et calcule la somme des entiers jusqu’à
// ce nombre. Par exemple, si on rentre 4, l’algorithme doit calculer : 1 + 2 + 3 + 4

function checkNumb (){
    let numb = parseInt(prompt("Veuillez saisir un nombre"));
    while (numb < 0){
        numb = parseInt(prompt("Veuillez saisir un nombre positif"));   // stocke la nouvelle valeure
    }
    return numb;
}

function totalSum(numb){
    
    let total = 0;
    for(let i = 0; i <= numb; i++){
        total += i;
    }
    return total
}

console.log(totalSum(checkNumb()));