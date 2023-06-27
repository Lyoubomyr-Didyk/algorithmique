// Écrire un algorithme qui vérifie si le nombre saisi par l’utilisateur est pair ou impair
let number = (parseInt(prompt("Please enter your number!")));

if(number % 2 == 0){
    console.log(`${number} est nombre pair`);
}else 
    console.log(`${number} est nombre impair`);
