//функция проверки ввода времени
function checkTime(time){
    if(!time ||!time.includes(':')|| time.length != 5) return false; 
    var patStingOne = +time.slice(0, 2); //отделяем часы
    var patStingTwo = +time.slice(3, 5); //отделяем минуты
    if (typeof patStingOne != "number" || typeof patStingTwo != "number"||isNaN(patStingOne) || isNaN(patStingTwo)||patStingOne >23|| patStingOne < 0 || patStingTwo > 59 || patStingTwo < 0) return false; 
    return true
}

//запускаем цикл с вопросом 
for (;;){
    var timeEnd = prompt('Когда Вас разбудить? Укажите время в формате "чч:мм".');
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

//отображаем время и делаем сигнал будильника
setInterval(function (){
    var date = new Date();
    var time = date.toLocaleTimeString()
    document.getElementById('block').innerHTML = time
    if (time === timeEnd) {
        alert('Звонок.');
    }
    
}, 1000)


