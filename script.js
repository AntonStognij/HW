//делаем варианты комбинаций (перестановка)
function make(arr, el) {
    var i, i_m;
    var len = arr.length;
    var res = [];
  
    for(i = len; i >= 0; i--) {
      res.push(
        ([]).concat(
          arr.slice(0, i),
          [el],
          arr.slice(i, i_m)
        )
      );
    }
  
    return res;
  }
  
  function getCombinations(arr) {
    var prev, curr, el, i;
    var len = arr.length;
  
    curr = [[arr[0]]];
  
    for(i = 1; i < len; i++) {
      el = arr[i];
      prev = curr;
      curr = [];
  
      prev.forEach(function(item) {
        curr = curr.concat(
          make(item, el)
        );
      });
    }
    return curr;
  }
  
  // функция, что собирает возможные комбинации с массива-линий
  function getAllCombinations (arr){
    var arrAll = [];
      if (arr.length == 1){
        arrAll = getCombinations(arr[0]);  
        return arrAll
      } else {
        arrAll = arrAll.concat(getCombinations(arr[arr.length-1]), getAllCombinations(arr.splice(0, arr.length-1)) );
        return arrAll
      }
  }

  //функция делает поле 
function createField (num){
    var field = document.createElement('div');
    field.classList.add('game-blok');
    field.setAttribute('data-id', num);
    return field;
}

//функция находит совпадение строки с элементами массива
function findElem (arr, str) {
  for (var i = 0; i<arr.length; i++ ){
      var  strArr = arr[i].join('');
      if (strArr === str) return true
  }  
  return false
}

//Функция проверяет результат 
function chechStr (arr, strRes) {
    if (strRes.length >2){
        for (var n = 0; n < strRes.length-2; n++ ){
            var strPart = strRes.slice(n, n+3)
            return (findElem (arr, strPart))
        }
    }
    return false
}


//массивы с линиями для победы
  var arrsFilds = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [7,5,3]];
//массив с возможными комбинациями победы
 var arrayWin = getAllCombinations(arrsFilds);
console.log('arrayWin',arrayWin)
//счет ходов
var count = 1;
//параметр для записывания ходов
var resPlayerOne = '';
var resPlayerTwo = '';
var opt = {
  stop :false,
}

var body = document.body;

var playerOne = prompt('Как зовут первого участника?');
var playerTwo = prompt('Как зовут второго участника?');
    
if (!playerOne ||!playerTwo) {
    alert('Для игры нужно 2 участника');
    } else {
      //отрисовываем поле
        for (var i=1; i < 10; i++ ){
            var id = ''+i;   
            var fieldDiv = createField(id); 
            var game = document.querySelector('.game')
            game.append(fieldDiv);
            var nameOne = document.querySelector('.one');
        }
        var step = document.querySelector('.step');
            step.innerHTML = playerOne + ', твой ход!'
            nameOne.innerHTML = playerOne ;
            var nameTwo = document.querySelector('.two');
            nameTwo.innerHTML = playerTwo;
            var button = document.createElement('button');
            button.textContent = 'Сначала';
            button.classList.add('button');
            var header = document.querySelector('.header');
            header.append(button);
    }
//дейсвия на клики по полю
document.addEventListener('click', function (e){
  var elem = e.target;
  var check = elem.matches('.game-blok');
  if (check) {
    var idField = elem.dataset.id+"";
      if (count % 2 != 0 && !elem.firstElementChild && !opt.stop){
        var symbol = document.createElement('span');
        symbol.innerHTML = 'X';
        elem.append(symbol);
        resPlayerOne = resPlayerOne + idField;
        if (chechStr (arrayWin, resPlayerOne)){
          step.innerHTML = playerOne + ', ты победитель!';
          opt.stop = true; 
          } else {
                if ((resPlayerOne+resPlayerTwo).length == 9){
                step.innerHTML = 'Ребята, да у вас ничья! Попробуйте еще раз определить победителя.';
                opt.stop = true; 
              } else {
                      step.innerHTML = playerTwo + ', твой ход!'
                      count++;
                      console.log(resPlayerOne, "resPlayerOne")
              }
          }
        } else if (count % 2 == 0 && !elem.firstElementChild && !opt.stop) {
          var symbol = document.createElement('span');
          symbol.innerHTML = 'O';
          elem.append(symbol);
          resPlayerTwo = resPlayerTwo + idField;
          if (chechStr (arrayWin, resPlayerTwo)){
            step.innerHTML = playerTwo + ', ты победитель!';
            opt.stop = true; 
          } else {
            step.innerHTML = playerOne + ', твой ход!';
            count++;
            console.log(playerTwo, "resPlayerOne")
            }
        }
      }    
})

//дейсвия по нажатию на кнопку
var button = document.querySelector('.button');
  button.addEventListener('click', function (e){
    //обновляю поле и параметры для счета
    count = 1;
    resPlayerOne = '';
    resPlayerTwo = '';
    opt.stop = false;
    step.innerHTML = playerOne + ', твой ход!';
    document.querySelectorAll('span').forEach(function (elem) {
    elem.remove();
      })  
  })



        

      







  
