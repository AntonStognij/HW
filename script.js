var ships = ['1-a', '3-a', '4-a', '6-b', '2-c', '6-c', '2-d', '2-e', '6-f', '7-f', '8-f', '1-h', '2-h', '3-h', '4-h'];
var field = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
// делаю копию массива и параметры для счета
var shipsCopy =ships.slice('')
var success = 0;
var notSuccess = 0;

//функция детает поле для корабля
function createField (num){
    var field = document.createElement('div');
    field.classList.add('field');
    field.setAttribute('data-id', num);
    return field;
}

// создаю єлементы HTML
var body = document.body;
var wrap = document.createElement('div');
wrap.classList.add('wrap');
var blokGame = document.createElement('div');
blokGame.classList.add('blokGame');
var h1 = document.createElement('h1');
h1.textContent = "Найдите все корабли!"
var h2 = document.createElement('h2');
var result = document.createElement('div');
result.classList.add('result');
h2.textContent = "Наши успехи:"
var textСheck = document.createElement('p');
var textSuccess = document.createElement('p');
var textNotSuccess = document.createElement('p');
textСheck.textContent = "Осталось необнаруженных кораблей: " + shipsCopy.length;
textSuccess.textContent = "Попадений: " + success;
textNotSuccess.textContent = "Промахов: " + notSuccess;

//добавляю элементы в html
body.append(h1);
body.append(blokGame);
result.append(h2);
blokGame.append(wrap);
blokGame.append(result);
result.append(textSuccess);
result.append(textNotSuccess);
result.append(textСheck);

//циклом делаю поле боя
for (var i = 1; i < 9; i++){
    for (var j=0; j < field.length; j++ ){
        var id = ''+i+'-'+field[j];   
        var fieldShip = createField(id);   
        wrap.append(fieldShip);
    }
}
  
document.addEventListener('click', function (e){
    var elem = e.target;
    var check = elem.matches('.field');
    if (check) {
        //определяю id вібранного поля
        var idField = elem.dataset.id+"";
        //сравниваю его с массивом ответов
        var indexId = shipsCopy.indexOf(idField);
        if (indexId != -1 && !elem.firstElementChild) {
            //добавляю карабыль на поле и обновялю данные по счету
            var ship = document.createElement('span');
            ship.innerHTML = '<i class="fa fa-regular fa-ship ship"></i>';
            elem.append(ship)
            success++
            shipsCopy.splice(indexId, 1)
            textСheck.textContent = "Осталось необнаруженных кораблей: " + shipsCopy.length;
            textSuccess.textContent = "Попадений: " + success;
            //если все корабли нашли 
            if (shipsCopy.length == 0){
                alert('Успех! Вы нашли все корабли допустив всего лишь ' + notSuccess + ' промахов.');
                //обновляю поле и параметры для счета
                document.querySelectorAll('span').forEach(function (elem) {
                    elem.remove();
                })
                shipsCopy =ships.slice('');
                console.log(shipsCopy);
                success = 0;
                notSuccess = 0;
                textСheck.textContent = "Осталось необнаруженных кораблей: " + shipsCopy.length;
                textSuccess.textContent = "Попадений: " + success;
                textNotSuccess.textContent = "Промахов: " + notSuccess;
            }
            }  
        else if (indexId == -1 && !elem.firstElementChild)     {
            var missed = document.createElement('span');
            missed.innerHTML = 'Х';
            missed.classList.add('missed')
            elem.append(missed);
            notSuccess++
            textNotSuccess.textContent = "Промахов:  " + notSuccess;
        }      
    }
})
