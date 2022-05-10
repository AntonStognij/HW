//функция проверки ввода времени
function checkTime(time){
    if(!time) return false; //проверяем на пустоту ':'
    if(!time.includes(':')) return false; //проверяем наличие ':'
    if (time.length != 5) return false; //проверяем длину текста
    var patStingOne = +time.slice(0, 2); //отделяем часы
    var patStingTwo = +time.slice(3, 5); //отделяем минуты
    console.log(patStingOne, patStingTwo)
    if (typeof patStingOne != "number" || typeof patStingTwo != "number") return false; // проверяме значения на тип
    if (isNaN(patStingOne) || isNaN(patStingTwo)) return false; // проверяме значения на NaN
    if (patStingOne >23 || patStingOne < 0) return false;  // проверяме часы (не больше 23 часов)
    if (patStingTwo > 59 || patStingTwo < 0) return false; // проверяме минуты (не больше 59 часов)
    return true
}

//запускаем цикл с вопросом 
for (;;){
    var timeEnd = prompt('Когда Вас разбудить? Укажите время в формате "чч:мм"');
    if (timeEnd === null) {
        break;
    } 
    else if (!checkTime(timeEnd)) {
        alert("Некорректно указано время, исправьте значение.")
    } else {
        timeEnd = timeEnd + ":00"
        break;
    }
}
console.log(timeEnd);

//проверям время
setInterval(function (){
    var date = new Date();
    var time = date.toLocaleTimeString()
    document.getElementById('block').innerHTML = time
    if (time === timeEnd) {
        document.getElementById('audio').setAttribute('muted', false)
        alert('Звонок');
    }
    
}, 1000)


