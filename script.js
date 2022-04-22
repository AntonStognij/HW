//Задача 1

//функция определяет число ли переменная 
function checkNumber (number) {
    if ((number <= 0 || number >= 0) && number){
        return true;
    } else {
        return false;
    }
}

// функция сравнивает значения
function compareNumbers (numberOne, numberTwo) {
        if (numberOne > numberTwo) {
        return 'второе число меньше';
    } else if (numberOne < numberTwo) {
        return 'первое число меньше';
    } else if (numberOne === numberTwo) {
        return 'числа равны';
    }
}
//запускаем цикл с вопросами
for ( ; ; ) {
   var numberOne = prompt('введите первое число');
   if (checkNumber (numberOne) == false) {
       alert('первый ввод – не число.');
       break;
   }
   var numberTwo = prompt('введите второе число.');
   if (checkNumber (numberTwo) == false) {
       alert('Второй ввод – не число.');
       break;
}
alert(compareNumbers(numberOne,numberTwo ));
}

//Задача 2
//функция определяет допустимые значения
function checkValue (min, max, value) {
 if ((min && max && value )&& (min < max) && (value >= min && value<= max )){
     return true;
 }
 return false;
}
//запускае циклы с опросом 
for ( ; ; ){
    var numberFloor = +prompt('На каком этаже вы проживаете?');
    if (checkValue(1, 25, numberFloor) == false) {
        alert('Вы ввели некорректное значение этажа, повторите попытку');
    } else {
        break;
    }
}

for ( ; ; ){
    var numberExit = +prompt('В каком подьезде вы проживаете?');
    if (checkValue(1, 10, numberExit) == false) {
        alert('Вы ввели некорректное значение подьезда, повторите попытку');
    } else {
        break;
    }
}

for ( ; ; ){
    var numberApartment = +prompt('В какой квартире вы проживаете?');
    if (checkValue(1, 20, numberApartment) == false) {
        alert('Вы ввели некорректное значение подьезда, повторите попытку');
    } else {
        break;
    }
}
alert('Указанный номер подьеза - ' + numberExit + '.');

//Задача 3

//функция определяет четное число
function checkNum (num){
    if(num % 2 == 0){
        return true;
    } 
    return false;
}

//функция делает вычисления
function getResult (oneNum, twoNam) {
    if (checkNum (oneNum) && checkNum (twoNam)) {
        return oneNum * twoNam;
    }
    else if (checkNum (oneNum) == false && checkNum (twoNam) == false){
        return oneNum + twoNam;
    } else {
        if (checkNum (oneNum) == false ) {
            return oneNum;
        } else {
            return twoNam;
        }
    }
}
console.log(getResult(3,0));

//Задача 4

//функция проверяет фигуру
function checkRectangle (Ax, Ay, Bx, By, Cx, Cy, Dx, Dy) {
    if  (Ax !== Dx || Ay !== By || Bx !== Cx || Cy !== Dy) {
    return false
    }
    else if  (Ax === Bx && Ax === Cx && Ax === Dx) {
    return false
    }
    else if  (Ay === By && Ay === Cy && Ay === Dy) {
    return false
    } else { 
        return true
        }
    }
// функция проверяет ввод
function checkInput (input) {
    if (input === null) {
        return false;
    } else{
        +input;
        if ((input && (input <= 0 || input >= 0)) ||input == 0){
            return true;
        }
        return false;
    } 
}

//запускаем цикл ддя ввода значений

for (; ; ) {
    var aX = prompt('Введите координату X точки А.');
    if (checkInput (aX) == false) {
        alert('Некорректное значение.');
    } else {
        break;
    }
}

for (; ; ) {
    var aY = prompt('Введите координату Y точки А.');
    if (checkInput (aY) == false) {
        alert('Некорректное значение.');
    } else {
        break;
    }
}

for (; ; ) {
    var bX = prompt('Введите координату X точки B.');
    if (checkInput (bX) == false) {
        alert('Некорректное значение.');
    } else {
        break;
    }
}

for (; ; ) {
    var bY = prompt('Введите координату Y точки B.');
    if (checkInput (bY) == false) {
        alert('Некорректное значение.');
    } else {
        break;
    }
}

for (; ; ) {
    var cX = prompt('Введите координату X точки C.');
    if (checkInput (cX) == false) {
        alert('Некорректное значение.');
    } else {
        break;
    }
}

for (; ; ) {
    var cY = prompt('Введите координату Y точки C.');
    if (checkInput (cY) == false) {
        alert('Некорректное значение.');
    } else {
        break;
    }
}

for (; ; ) {
    var dX = prompt('Введите координату X точки D.');
    if (checkInput (dX) == false) {
        alert('Некорректное значение.');
    } else {
        break;
    }
}

for (; ; ) {
    var dY = prompt('Введите координату Y точки D.');
    if (checkInput (dY) == false) {
        alert('Некорректное значение.');
    } else {
        break;
    }
}
//определяем фигуру 
if (checkRectangle (aX, aY, bX, bY, cX, cY, dX, dY ) == true) {
    alert('Фигура прямоугольник!');
} else {
    alert('Фигура не прямоугольник!');
}

//Задача 5

//смог реализовать только с глобальными переменными
var newNum ; //переменная, где храню полученное число
var oldStep; // переменная где храню значение шага с предыдущего вызова
var oldsSart; // переменная где храню значение start с предыдущего вызова

function getSequence(start = 0, step = 1) {
    if ( typeof newNum == 'undefined') {
        oldStep = step;
        oldsSart = start;
        newNum = start;
        return newNum ;
    } 
    if (oldsSart != start){
        newNum = start;
        oldsSart = start;
        return newNum ; 
    } else {
        newNum = newNum +  step;
        return newNum ; 
    }
}

console.log(getSequence());
console.log(getSequence());
console.log(getSequence());
