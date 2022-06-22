
//функция делает рандом
const random = (min, max) => Math.floor(min + Math.random() * (max + 1 - min))

//функция создает єлемент html
    function createElem (type, classNme, perent){
    let elem = document.createElement(`${type}`);
    elem.setAttribute("class", `${classNme}`)
    perent.append(elem)
    }

//функция определяет значение размера
const getSize = function (count){
 return 30 - count*10
}

//функция меняет ширину блока
const changesSize = function (block,size){
    block.style.width=`${size}%`
}

//функция ведет счет
const getСount = function (resultPlayr, resultComputer ){
    if (resultPlayr == 0 && resultComputer == 2) {paramForGame.chanCountPlayr() }
    else if (resultPlayr == 1 && resultComputer == 0) {paramForGame.chanCountPlayr()}
    else if (resultPlayr == 2 && resultComputer == 1) {paramForGame.chanCountPlayr()}
    else if (resultPlayr == resultComputer) {}
    else {paramForGame.chanCountComputer()}
}

//функция определяет результат 
const getResult = function (countPlayr, countComputer, end ){
   if (countPlayr == end) return "win" 
   if (countComputer == end) return "lost" 
   return null
}

//функция рендерит страницу игры
function startGame () {
    //удаляем єлементы
    text.remove();
    start.remove();
    //делаем оболочку для жизней
    createElem ("div", "wrapLife", body)
    const wrapLife = document.querySelector(`.wrapLife`);
    //делаем жизни
    createElem ("div", "life playerOne", wrapLife)
    createElem ("div", "life playerTwo", wrapLife)
    const life = document.querySelectorAll(`.life`);
    //делаем рекомендацию
    createElem ("h1", "recommend", body)
    const recommend = document.querySelector(`.recommend`);
    recommend.innerHTML = "Сделай выбор чем ударить и мы посмотрим кто победил!"
    //делаем оболочку для батла
    createElem ("div", "battlWrap", body)
    const battlWrap = document.querySelector(`.battlWrap`);
    //делаем поля для отображения выбора
    createElem ("div", "myChoice", battlWrap)
    const myChoice = document.querySelector(`.myChoice`);
    //делаем игроков
    createElem ("img", "player", myChoice)
    const player = document.querySelector(`.player`);
    player.setAttribute("src", "img/beard.png");
    player.setAttribute("alt", "img");
    createElem ("h3", "namePlayer", myChoice)
    const namePlayer = document.querySelector(`.namePlayer`);
    namePlayer.innerHTML = "Игрок"
    createElem ("div", "computerChoice", battlWrap)
    const computerChoice = document.querySelector(`.computerChoice`);
    createElem ("img", "playerComputer", computerChoice)
    const playerComputer = document.querySelector(`.playerComputer`);
    playerComputer.setAttribute("src", "img/ai.png");
    playerComputer.setAttribute("alt", "img");
    createElem ("h3", "nameComputer", computerChoice)
    const nameComputer = document.querySelector(`.nameComputer`);
    nameComputer.innerHTML = "Компьютер";
    //делаем кнопки для выбора атаки
    createElem ("div", "choice", body)
    const choice = document.querySelector(`.choice`);
    paramForGame.arrImg.forEach(function (elem, index){
        createElem ("div", `choice${index}`, choice, index)
        const blockImg = document.querySelector(`.choice${index}`);
        createElem ("img", `img${index}`, blockImg, index)
        const img = document.querySelector(`.img${index}`);
        img.setAttribute("src", elem);
        img.setAttribute("alt", "img");
        img.setAttribute("data", `${index}`);
        img.classList.add("btn")
    } )
    
}

//функция ищет єлемент по класу
const serchElem = (className) =>  document.querySelector(`.${className}`)

//Функция удадяет изменяет картинку в блоке 
const updateImg = function (oldElem, className, perent, id) {
    oldElem.remove();
    createElem ("img", className, perent);
    let newImg = document.querySelector(`.${className}`);
    newImg.setAttribute("src", paramForGame.arrImg[id]);
    newImg.setAttribute("alt", "img");
}

//обьект с параметрами для игры
const paramForGame = {
    arrImg:['img/hand.png', 'img/palm.png', 'img/peace.png' ],
    classNamePlayer : "player",
    classNamePlayerParent:"myChoice",
    classNameComputer:"playerComputer",
    classNameComputerParent:"computerChoice",
    countPlayr:0,
    countComputer:0,
    min:0,
    max:2,
    end:3,
    chanCountPlayr: function(){
        this.countPlayr++
    },
    chanCountComputer: function(){
        this.countComputer++
    }, 
}


const body = document.querySelector("body")
const text = document.querySelector(`.text`);
const start = document.querySelector(`.start`);
start.addEventListener('click', startGame )


document.addEventListener('click', function (e){
    var elem = e.target;
    var check = elem.matches('.btn');
    if (check) {
        //получаем значение атрибута data
        const attribute = elem.getAttribute("data");
       //отрисовываем свою картинку
       updateImg(serchElem(paramForGame.classNamePlayer), paramForGame.classNamePlayer, serchElem(paramForGame.classNamePlayerParent), attribute )
       //отрисовываем картинку компютера
       let numberImg = random (paramForGame.min,paramForGame.max)
       updateImg(serchElem(paramForGame.classNameComputer), paramForGame.classNameComputer, serchElem(paramForGame.classNameComputerParent), numberImg )
       getСount(attribute, numberImg) ;
       const result = getResult (paramForGame.countPlayr, paramForGame.countComputer, paramForGame.end);
       
       //уменьшаем шкалу жизни
       const sizePlayer = getSize (paramForGame.countPlayr);
       const sizeComputer = getSize (paramForGame.countComputer);
       
        //ищем блоки жизни 
       const blockPlayerOne = document.querySelector(`.playerOne`);
       const blockPlayerTwo = document.querySelector(`.playerTwo`);
       //меняем размер по результату
       changesSize(blockPlayerTwo, sizePlayer )
       changesSize(blockPlayerOne, sizeComputer )
       console.log(result)
       //останавливаем игру
       if (result){
        createElem ("div", "stop", body);
        const blockEnd = document.querySelector(`.stop`);
        createElem ("h2", "result", blockEnd);
        const h2 = document.querySelector(`.result`);
        h2.innerHTML = result == "win"? "Похоже у нас новый чемпион!" : "Не повезло ... :( Может в другой раз все получится!"
        const choice = document.querySelector(`.choice`);
        choice.remove();
       }
    }
})

