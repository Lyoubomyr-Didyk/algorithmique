// Écrire un algorithme qui demande à l’utilisateur de saisir trois nombres, puis affiche le nombre le plus grand.

const number = []; 
let biggestNumber = 0;

number.push(parseInt(prompt("Please enter your first number!")));
number.push(parseInt(prompt("Please enter your sedcond number!")));
number.push(parseInt(prompt("Please enter your last number!")));

console.log(number);
for(let i = 0; i < number.length; i++){
    if (number[i] > biggestNumber){
        biggestNumber = number[i]
    }
}

console.log("Le nombre le plus grand est: " + biggestNumber);
