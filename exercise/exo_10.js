// Écrire un algorithme qui permet de calculer l’indemnité kilométrique voiture :

let inputPower = parseInt(prompt("Indique puissance administrative"));
let inputKm = parseInt(prompt("Indique km"));

console.log(calcCompensation(inputPower, inputKm))


function calcCompensation (power, km){
    if(km <= 5000){
        return smallDistance(power, km)
    }else if(km > 5000 && km <= 20000){
        return mediumDistance(power, km)
    }else {
        return largeDistance(power, km)
    }
}


function smallDistance(power, inputKm){
   if(power <= 3){
    return (inputKm * 0.502);
   }
   if(power === 4){
    return (inputKm * 0.575);
   }
   if(power === 5){
    return (inputKm * 0.603)
   }
   if(power === 6){
    return (inputKm * 0.631);
   } 
   if(power >= 7){
    return (inputKm * 0.661);
   }

}


function mediumDistance(power, inputKm){
    if(power <= 3){
        return (inputKm * 0.3) + 1007;
       }
       if(power === 4){
        return (inputKm * 0.323) + 1262;
       }
       if(power === 5){
        return (inputKm * 0.339) + 1320;
       }
       if(power === 6){
        return (inputKm * 0.355) + 1382;
       }
       if(power >= 7) {
        return (inputKm * 0.374) + 1435;
       }
}


function largeDistance(power, inputKm){
    if(power <= 3){
        return (inputKm * 0.35);
       }
       if(power === 4){
        return (inputKm * 0.387);
       }
       if(power === 5){
        return (inputKm * 0.405);
       }
       if(power === 6){
        return (inputKm * 0.425);
       }
       if(power >= 7){
        return (inputKm * 0.446)
       }
}