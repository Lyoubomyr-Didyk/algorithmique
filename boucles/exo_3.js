// Écrire un algorithme qui calcule le reste de la division entière de deux entier positifs A et B saisi
// par l’utilisateur ( sans utiliser les opérateurs division // et modulo %

// Exemple de résultat attendu :
// Veuillez saisir un nombre positif : - 10
// Erreur, veuillez saisir un nombre positif : 20
// Veuillez saisir un nombre positif : 3
// Le reste de la division 20 / 3 est 2

// -------------------------------------------------
// const a = checkNumb();
// const b = checkNumb();


function checkNumb (){
    let numb = parseInt(prompt("Veuillez saisir un nombre"));
    while (numb < 0){
        numb = parseInt(prompt("Veuillez saisir un nombre positif"));   // stocke la nouvelle valeure
    }
    return numb;
}


function calc (a, b){
    
    while (a >= b ){
        a = a - b;
    }
    return a
}
// console.log(calc(a, b));
