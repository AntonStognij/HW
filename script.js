let slidesImg = ['https://picsum.photos/500/500', 'https://picsum.photos/600/600', 'https://picsum.photos/700/700'];

const body =document.querySelector('body');


//функция создает єлемент html
function createElem (type, classNme, perent){
let elem = document.createElement(`${type}`);
elem.setAttribute("class", `${classNme}`)
perent.append(elem)
}

//функция наполняет Li и создает dots
function createLi (arr, wrapSlide, wrapDots){
        
        arr.forEach(element => {
            let li = document.createElement('li');
            let img = document.createElement('img');
            let dots = document.createElement('div');
            dots.classList.add('dots');
            wrapDots.append(dots)
            img.setAttribute('src', element);
            img.setAttribute('alt', "image");
            li.append(img);
            wrapSlide.append(li)
        });
    }
// функция отрисовывает страницу
const renderElem = function (arr = false){
    if (arr) {
        createElem ("div", "wrap_slader", body)
        let  wrap_slader = document.querySelector('.wrap_slader');
        createElem ("div", "wrap_dots", body)
        createElem ("div", "btn_left btn", wrap_slader)
        createElem ("div", "slaler", wrap_slader)
        createElem ("div", "btn_right btn", wrap_slader)
        let  btnLeft = document.querySelector('.btn_left');
        createElem ("i", "fa fa-solid fa-angle-left", btnLeft)
        let  btnRigt = document.querySelector('.btn_right');
        createElem ("i", "fa fa-solid fa-angle-right", btnRigt);
        let  slaler = document.querySelector('.slaler');
        createElem ("ul", "picture_list", slaler);
        let picture_list = document.querySelector('.picture_list');
        let wrap_dots = document.querySelector('.wrap_dots');
        createLi(arr, picture_list, wrap_dots)
    } else {
        createElem ("H1", "text", body);
        let text = document.querySelector('.text');
        text.innerHTML = "Нет данных для отображения"
        return null
    }

}

//функция переназначает класс active 
function reassignClass (elemSlideActive, elemNext, elemDotActive, elemNextDot) {
    elemSlideActive.classList.remove('active');
    elemNext.classList.add('active');
    elemDotActive.classList.remove('active');
    elemNextDot.classList.add('active')
}

//пришлось сделать этот костыль, так как не придумал как в addEventListener передать аргумент в функцию
function clickRight (){
    shiftSlider(false)
}

// проверяем есть ли массив с изображениями 
img = typeof slidesImg != "undefined" ? slidesImg :false

// отрисовывем стрницу
renderElem(img)

if (img) {
//настраиваем слайдер если есть изображения

// функция переключает слайды
function movement (action, elemSlideActive, elemDotActive, elemNext,elemNextDot ){
    if (action == "left"){
        if(elemNext){
            width = getComputedStyle(elemNext).width
            count--;
            reassignClass (elemSlideActive, elemNext, elemDotActive, elemNextDot)
           
        }
         else {
            width = getComputedStyle(elemSlideActive).width
            count = slidesImg.length-1;
            reassignClass (elemSlideActive, slides[count], elemDotActive, dot[count])
        }
        picture_list.style.transform = `translateX(${-parseInt(width)* count}px)`
        return null
    }
    if (action == "right"){
        if(elemNext){
            width = getComputedStyle(elemNext).width
            count++;
            reassignClass (elemSlideActive, elemNext, elemDotActive, elemNextDot)
            
        } else {
            count = 0;
            reassignClass (elemSlideActive, slides[count], elemDotActive, dot[count])
        }
    } 
    picture_list.style.transform = `translateX(${-parseInt(width)* count}px)`
    return null
}
    
//функция переключает сайды по выбранному направлению
function shiftSlider (left=true) {
    const activeSlid = picture_list.querySelector('.active')
    const activeDot = document.querySelector('.wrap_dots .active');
    if(left) {
    const next = activeSlid.previousElementSibling;
    const nextDot = activeDot.previousElementSibling;
    const action = "left";
    movement(action,activeSlid,activeDot,next,nextDot)
    } else {
        const next = activeSlid.nextElementSibling;
        const nextDot = activeDot.nextElementSibling;
        const action = "right"
        movement(action,activeSlid,activeDot,next,nextDot)
    }
}
//ищем элементы
const btn = document.querySelectorAll('.btn');
const picture_list = document.querySelector('.picture_list');
const slides = picture_list.querySelectorAll('li');
const dot = document.querySelectorAll('.dots');
let count = 0;
slides[count].classList.add('active');
dot[count].classList.add('active');

// действия по нажатию
btn.forEach(elem => {
    if(elem.classList.contains('btn_right')){
        elem.addEventListener('click', clickRight)
    } else {
        elem.addEventListener('click', shiftSlider)
    }
})
}














