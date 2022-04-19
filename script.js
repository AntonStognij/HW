console.log('Задача 1:');

//Задача 1. 
var element = '';
for (var i=0; i <= 6; i++){
        element += "#";
        console.log(element);
    
}

 //"Не скучай"
 console.log('Задание "Не скучай":');
for (var i=0; i < 12; i++){
   if (i == 0 || i == 11) {
    var element = '';
    for (var j=0; j < 28 ; j++) {
        element = element + '#';
    }
    console.log(element);
   }
  else if (i == 1){
    var element = '';
    for (var j=0; j < 28 ; j++){
        if (j < 5){
            element = element + '#';
        }
        else if (j > 4 && j < 22) {
            element = element + ' ';
        } else {
            element = element + '#';
        }
        
    }
    console.log(element);
   }
  else if (i == 2){
    var element = '';
    for (var j=0; j < 28 ; j++){
        if (j < 2){
            element = element + '#';
        }
        else if ((j > 1 && j < 5)||(j > 7 && j < 24)) {
            element = element + ' ';
        } else if ((j > 4 && j < 8)||(j > 23 && j < 26)){
            element = element + '*';
        } else {
            element = element + '#';
        }
    }
    console.log(element);
   }
   else if (i == 3){
    var element = '';
    for (var j=0; j < 28 ; j++){
        if (j < 1){
            element = element + '#';
        } else if ((j > 0 && j < 4 ) ||(j > 8 && j < 18)||(j > 19 && j < 22)||(j > 22 && j < 25)){
            element = element + ' ';
        } else if (j == 4 || (j > 6 && j < 9 )||(j > 17 && j < 20)||(j == 25)){
            element = element + '*';
        } else if (j > 4 && j < 7 ){
            element = element + '#';
        }  else if (j == 22 ){
            element = element + 'O';
        } else {
            element = element + '#';
        } 
    }
    console.log(element);
   }
   else if (i == 4){
    var element = '';
    for (var j=0; j < 28 ; j++){
        if (j == 0 ||(j >= 18 &&j <= 19)){
            element = element + '#';
        } else if ((j >= 1 &&j <= 4 )||(j >= 8 &&j <= 12)||(j >= 14 &&j <= 17)||(j >= 22 &&j <= 25)){
            element = element + ' ';
        } else if ((j >= 5 &&j <= 8)||(j >= 20 &&j <= 21)|| j == 26){
            element = element + '*';
        } else if (j == 13 ){
            element = element + 'O';
        } else {
            element = element + '#';
        } 
    }
    console.log(element);
   }
   else if (i == 5){
    var element = '';
    for (var j=0; j < 28 ; j++){
        if (j == 0 ||(j >= 18 &&j <= 19)){
            element = element + '#';
        } else if ((j >= 1 &&j <= 7 )||(j >= 9 &&j <= 17)||(j >= 23 &&j <= 26)){
            element = element + ' ';
        } else if (j >= 18 &&j <= 22){
            element = element + '*';
        } else if (j == 8 ){
            element = element + 'O';
        } else {
            element = element + '#';
        } 
    }
    console.log(element);
   } else if (i == 6){
    var element = '';
    for (var j=0; j < 28 ; j++){
        if (j == 0 ||(j >= 18 &&j <= 19)){
            element = element + '#';
        } else if ((j >= 1 && j <= 17 )||(j >= 22 && j <= 26)){
            element = element + ' ';
        } else if (j >= 20 &&j <= 21){
            element = element + '*';
        }  else {
            element = element + '#';
        } 
    }
    console.log(element);
   }
   else if (i == 7){
    var element = '';
    for (var j=0; j < 28 ; j++){
        if (j == 0 ||j == 12 || j == 27){
            element = element + '#';
        } else if ((j >= 1 && j <= 3 )||(j >= 5 && j <= 11)||(j >= 14 && j <= 26)){
            element = element + ' ';
        } else if (j == 13){
            element = element + '*';
        } 
        else if (j == 4){
            element = element + 'O';
        } 
    }
    console.log(element);
   }
   else if (i == 8){
    var element = '';
    for (var j=0; j < 28 ; j++){
        if (j == 0 ||j == 12 || j == 27){
            element = element + '#';
        } else if (j == 1||j == 13 || j == 14){
            element = element + '*';
        } 
        else if (j == 22){
            element = element + 'O';
        }  else {
            element = element + ' ';
        }
    }
    console.log(element);
   }
   else if (i == 9){
    var element = '';
    for (var j=0; j < 28 ; j++){
        if (j == 0 ||j == 27 || (j >= 12 && j <= 13)){
            element = element + '#';
        } else if ((j >= 1 && j <= 3)||(j >= 14 && j <= 15)||(j >= 25 && j <= 26)){
            element = element + '*';
        } 
        else if (j == 20){
            element = element + 'O';
        }  else {
            element = element + ' ';
        }
    }
    console.log(element);
   }
   else if (i == 10){
    var element = '';
    for (var j=0; j < 28 ; j++){
        if ((j >= 0 && j <= 1)||(j >= 11 && j <= 13)||(j >= 25 && j <= 27)){
            element = element + '#';
        } else if ((j >= 6 && j <= 10)||(j >= 17 && j <= 23)){
            element = element + ' ';
        } 
          else {
            element = element + '*';
        }
    }
    console.log(element);
   }
}