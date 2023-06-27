// Écrire un algorithme qui demande à l’utilisateur de saisir un tableau de 10 nombres entiers.


function array(){
    let number = [];
    while(number.length < 10){
        number.push(parseInt(prompt("Veuillez saisir un nombre entier!")));
    }
    return number;
}
console.log(array());
