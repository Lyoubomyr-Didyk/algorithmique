// Écrire un algorithme qui permet de calculer le prix à payer à partir du prix réel sachant que :
// - on dispose d’une remise de 1% si le prix réel est supérieur à 200 €



let a = 250;
const discount = 0.01;

if(a > 200){
a = a - a * discount;
}
console.log(a);         //247.5

