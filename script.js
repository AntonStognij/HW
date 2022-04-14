//Задача 1.
var min = 5;
if (min >= 0 && min <= 14){
    console.log('Первая четверть часа');
}
else if (min >= 15 && min <= 29){
    console.log('Вторая четверть часа');
}
else if (min >= 30 && min <= 44){
    console.log('Третья четверть часа');
}
else if (min >= 45 && min <= 59){
    console.log('Четвертая четверть часа');
}

//Задача 2.
var a = '1';
if (a === "1"){
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Задача 3.

var test = true;

//длинная запись
if (test !== true){
    console.log('Верно');
    
} else {
    console.log('Неверно');
}
//короткая запись
test !== true ? console.log('Верно') : console.log('Неверно');

//Задача 4

var a = undefined;
if (a > 0 && a < 5) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Задача 5
var num = 5;
var result;
if (num === 1) {
    result  = 'зима';
    console.log(result);
}
 else if (num === 2) {
    result  = 'весна';
    console.log(result);
} 
else if (num === 3) {
    result  = 'лето';
    console.log(result);
}
else if (num === 4) {
    result  = 'осень';
    console.log(result);
}





























