//Écrire un algorithme qui permet de savoir combien de jours comporte un mois donné.


function year (){
    let numb = parseInt(prompt("Veuillez saisir une année"));
    while (numb < 0){
        numb = parseInt(prompt("Veuillez saisir une année positif"));  
    }
    return numb
}


function month (){
    return prompt('Veuillez saisir un mois, par ex: "fevrier"').toLowerCase();
}



function numberOfDays(year, month){
    if (month === 'avril' || month === 'juin' || month === 'septembre' || month === 'novembre'){
        return 30;
    } if (month === 'janvier' || month === 'mars' || month === 'mai' || month === 'juillet' || month === 'aout' || month ==='octobre' || month === 'décembre'){
        return 31;
    } if (month === 'fevrier'){
        if(year % 4 == 0 && year % 100 != 0){
            return 29;
        }else {
            return 28;
        }
    }
}


console.log(numberOfDays(year(), month()));







































// program jours;
// uses wincrt;
// var nj,a,m:integer;
// begin
// writeln('entrer une année : ');
// readln(a);
// writeln('entrer l"ordre du mois : ');
// readln(m);
// case m of
// 1,3,5,7,8,10,12: nj:=31;
// 4,6,9,11: nj:=30;
// 2:begin
// if a mod 4=0 then nj:=29
// else nj:=28
// end;
// end;
// writeln('le mois ',m,' a pour nombre de jours ',nj);
// end.



// def nbre_jours (year,month):
//       if (month == 4) or (month == 6) or (month == 9) or (month == 11):
//             return(30)
//       elif (month == 1) or (month == 3) or (month == 5) or (month == 7) or (month == 8) or (month == 10) or (month == 12):
//             return(31)
//       elif (month == 2):
//             if year % 400 == 0 or (year % 4 == 0 and year % 100 != 0):
//                   return(29)
//             else:
//                   return(28)
