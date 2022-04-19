//Странный калькулятор
for ( ; ; ){
    var action = prompt('Какое действие нужно выполнить ?');
    var result = undefined;
   switch(action){
       case "+": for (;;){
        var amount = +prompt('Вы планируете суммировать числа, сколько их будет ?');
        if (typeof amount == "number" && amount > 1){
            for (var i = 1; i < amount+1; i++){
                    for (; ;){
                        var number = +prompt('Укажите операнд под номером ' + i + " ?");
                        if (typeof number == "number" && (number <= 0 || number >= 0)){
                            if (typeof result == 'undefined') {
                                var result = number;
                                break
                            } else { 
                                result = result+number;
                                break ;
                            }
                        } 
                    }       
            }
            if (i == amount+1) {
                alert('Результат вычисления: ' + result ) ;
            }
            break 
        }
       }
       break
       case "-": for (;;){
        var amount = +prompt('Вы планируете вычитать числа, сколько их будет ?');
        if (typeof amount == "number" && amount > 1){
            for (var i = 1; i < amount+1; i++){
                    for (; ;){
                        var number = +prompt('Укажите операнд под номером ' + i + " ?");
                        if (typeof number == "number" && (number <= 0 || number >= 0)){
                            if (typeof result == 'undefined') {
                                var result = number;
                                break
                            } else {
                                result = result - number;
                                break ;
                            }
                           
                        } 
                    }       
            }
            if (i == amount+1) {
                alert('Результат вычисления: ' + result ) ;
            }
            break;
        }
       }
       break;
       case "*": for (;;){
        var amount = +prompt('Вы планируете умножать числа, сколько их будет ?');
        if (typeof amount == "number" && amount > 1){
            
            for (var i = 1; i < amount+1; i++){
                    for (; ;){
                        var number = +prompt('Укажите операнд под номером ' + i + " ?");
                        if (typeof number == "number" && (number <= 0 || number >= 0)){
                            if (typeof result == 'undefined') {
                                var result = number;
                                break
                            } else { 
                                result = result * number;
                                break ;
                            }
                        } 
                    }       
            }
            if (i == amount+1) {
                alert('Результат вычисления: ' + result);
            }
            break;
        }
       }
       break;
       case "/": for (;;){
        var amount = +prompt('Вы планируете делить числа, сколько их будет ?');
        if (typeof amount == "number" && amount > 1){
            
            for (var i = 1; i < amount+1; i++){
                    for (; ;){
                        var number = +prompt('Укажите операнд под номером ' + i + " ?");
                        if (typeof number == "number" && (number <= 0 || number >= 0)){
                            if (typeof result == 'undefined') {
                                var result = number;
                                break
                            } else {
                                if ( number != 0) {
                                    result = result / number;
                                    break ;
                                }
                                
                            }
                           
                        }
                    }       
            }
            if (i == amount+1) {
                alert('Результат вычисления: ' + result ) ;
            }
            break 
        }
       }
       break
   }
}     
