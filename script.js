//функция проверяет элемент на целое число 
function isNum (elem){
    return (Number.isInteger(elem) === true && typeof elem === "number" )
}

//Задача 1.
var array = [2, 3, 4, 5, 6, 7]

//функция ищет целые числа и суммирует их
function toSum (arr) {
    var arrLength = arr.length;
    var summ;
    if (arrLength <= 1) {
        summ = isNum (arr[0]) ? arr[0] : 0;
        return summ;
    } else {
        var elem = isNum ( arr[arr.length-1]) ?  arr[arr.length-1] : 0;
        var newArr = arr.slice(0, arrLength-1);
        summ  = toSum (newArr) + elem;
        return summ
        } 
}

console.log( toSum (array));

//Задача 2.
function summ (start, end, step){
    var res ;
    //проверяем значения
    if (!isNum (start) || !isNum (end) || !isNum (step)){
        return 0
    }
    if (start < 0 || end < 0 || step < 0 ){
        return 0
    }
    if (start>end){
        return 0
    }
    //определяем сколько элементов для подсчета (формула по определнию количества элементов при арифметической прогрессии + округляем в меньшую сторону)
    var n = Math.floor(((end - start)/step)+1);
    //определяем последний элемент в последовательности (формула для определения n-го єлемента арифметической прогрессии)
    var newEnd = start+(n-1)*step
   //условия рекурсии 
    if (n == 2) { 
        return start+(start+step)
    } else {
        var lastNumbers = end - step; //определяем последний элемент для движения по рекурсии
        var elem = (start+(n-1)*step) //определяем последний элемент в текущем вызове функции
        return  summ(start, lastNumbers, step) + elem;
     }
}
console.log( summ (2, 8, 2))