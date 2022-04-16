console.log('Задача 1:');

//Задача 1. 
var element = '#';
for (i=0; i <= 6; i++){
    if ( i < 1){
        console.log(element);
    } 
    else {
        element += "#";
        console.log(element);
    }
}


// "Не скучай"
console.log("Задание: 'Не скучай':");
for (i=0; i < 12; i++){
    switch(i) {
        case 0:console.log("############################");
        break;
        case 1:console.log("#####                 ######")
        break;
        case 2:console.log("##   ***                **##")
        break;
        case 3:console.log("#   *##**         **  O  *##")
        break;
        case 4:console.log("#    ***     O    ##**    *#")
        break;
        case 5:console.log("#       O         ##***    #")
        break;
        case 6:console.log("#                 ##**     #")
        break;
        case 7:console.log("#   O       #*             #")
        break;
        case 8:console.log("#*          #**       O    #")
        break;
        case 9:console.log("#***        ##**    O    **#")
        break;
        case 10:console.log("##****     ###***       *###")
        break;
        case 11:console.log("############################")
        break;
    }

}