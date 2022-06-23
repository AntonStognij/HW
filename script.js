//функция делает рандом
const random = (min, max) => Math.floor(min + Math.random() * (max + 1 - min))

//функция создает єлемент html
function createElem (type, className, perent, dataId){
    let elem = document.createElement(`${type}`);
    elem.setAttribute("class", `${className}`)
    if(dataId)elem.setAttribute("data", `${dataId}`)
    perent.append(elem)
    }

//функция ищет элемент по классу
const serchElem = (className) =>  document.querySelector(`.${className}`)

//функция движет кубик
function moves (num, classNameOld, className ){
    let oldDiv = serchElem(classNameOld);
    oldDiv.remove()
    let newDiv = document.querySelector(`.${className}[data="${num}"]`);
    createElem ("img", `fishka`, newDiv);
    let fishka = serchElem("fishka");
    fishka.setAttribute("src", opt.imgfishka);
    fishka.setAttribute("alt", "fishka");
}
    
//функция отрисовывает страницу
function renderHtml (){
    createElem ("div", "wrapBlock", body)
    let wrapBlock = serchElem("wrapBlock");
    for(let i = opt.start; i <= opt.cells; i++ ){
    createElem ("div", `cell${i}`, wrapBlock)
    let cell = serchElem(`cell${i}`);
    cell.setAttribute("data", `${i}`);
    cell.classList.add("block")
    }
    let start = serchElem("cell1");
    createElem ("img", `fishka`, start);
    let fishka = serchElem("fishka");
    fishka.setAttribute("src", opt.imgfishka);
    fishka.setAttribute("alt", "fishka");
    createElem ("div", "wrapBlockDice", body)
    createElem ("div", "btn", body)
    let btn = serchElem(`btn`);
    createElem ("span", "text", btn);
    let text = serchElem(`text`);
    text.innerHTML = "GO"
    }

//обьект с параметрами
const opt = {
    arrImgDice:['img/1.png', 'img/2.png', 'img/3.png', 'img/4.png', 'img/5.png', 'img/6.png'],
    imgfishka : "img/fishka.png",
    start: 1,
    cells:8,
    min:1,
    max:6,
    count: function (num){
        this.start+=num;
        if (this.start > this.cells){this.start=1}
    }
}
opt.min
const body = document.querySelector("body")

//отрисовываем страницу
renderHtml ()

document.addEventListener('click', function (e){
    var elem = e.target;
    var check = elem.matches('.btn');
    if (check) {
        //1 Рандомно находить значения от 1 до 6
       let numberImg = random(opt.min, opt.max);
       //2 Передавать эти значения кубику и выдавать тот кубик которому равно число
       let wrapBlockDice = serchElem("wrapBlockDice");
       createElem ("img", `dice`, wrapBlockDice);
        let dice = serchElem("dice");
        dice.setAttribute("src", opt.arrImgDice[numberImg-1]);
        dice.setAttribute("alt", "dice");
        //3 Значение умножить на 100
        let result = numberImg*100;
        console.log(result)
        //4 Перемещать Фишку по клеткам на значение равное кубику
        opt.count(numberImg)
        moves ( opt.start, "fishka", "block" )
    }
})