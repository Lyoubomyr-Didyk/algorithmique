
function checkNumb (){
    let numb = parseInt(prompt("Veuillez saisir une année"));
    while (numb < 0){
        numb = parseInt(prompt("Veuillez saisir une année positif"));  
    }
    return numb
}


function leapYear(year){
    
    if(year % 4 == 0 && year % 100 != 0){
        console.log(`L’année ${year} est une année bisextile`)
    } else{
        console.log(`L’année ${year} n'est pas une année bisextile`)
    }
}

//leapYear(checkNumb());

