// Écrire un algorithme qui permet de calculer le prix à payer à partir du prix réel sachant que :
// - on dispose d’une remise de 1% si le prix réel est compris entre 200 € et 500 €
// - on dispose d’une remise de 2% si le prix réel est compris entre 500 € et 700 €
// - on dispose d’une remise de 3% si le prix réel est supérieur à 700 €



function inputPrice (){
    let price = parseInt(prompt("Veuillez saisir le prix réel"));
    while (price < 0){
        price = parseInt(prompt("Écrivez un numéro positif"));   
    }
    return price;
}


function totalPayment (spent){
    
    let discount = 0;

    if (spent >= 200 && spent <= 500) {
        discount = 0.01;
      } else if (spent > 500 && spent <= 700) {
        discount = 0.02;
      } else {
        discount = 0.03;
      } 

    return spent -= spent * discount;
    
}

console.log(totalPayment(inputPrice()))























// payment -= payment * discount;
// // payment = payment - payment * discount;

// console.log(
//   `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`,
// );

// totalSpent += payment;

// console.log(`Общая сумма потраченого в магазине: ${totalSpent}`);