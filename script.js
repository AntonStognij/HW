let slidesImg = ['https://picsum.photos/500/500', 'https://picsum.photos/600/600', 'https://picsum.photos/700/700'];

const picture_list = document.querySelector('.picture_list');
const wrap_dots = document.querySelector('.wrap_dots');;

const li = function (arr){
    arr.forEach(element => {
        let li = document.createElement('li');
        let img = document.createElement('img');
        let dots = document.createElement('div');
        dots.classList.add('dots');
        wrap_dots.append(dots)
        img.setAttribute('src', element);
        img.setAttribute('alt', "image");
        li.append(img);
        picture_list.append(li)
    });
}
//отрисовываем элементы
const render = li (slidesImg);
//ищем элементы
const btn = document.querySelectorAll('.btn');
const shift = document.querySelector('.picture_list');
const slides = shift.querySelectorAll('li');
const dot = document.querySelectorAll('.dots');
let count = 0;
slides[count].classList.add('active')
dot[count].classList.add('active')


// переключаем слайды
const movement = function (action, elemSlideActive, elemDotActive, elemNext,elemNextDot ){
    if (action == "left"){
        if(elemNext){
            width = getComputedStyle(elemNext).width
            count--;
            elemSlideActive.classList.remove('active')
            elemNext.classList.add('active')
            elemDotActive.classList.remove('active')
            elemNextDot.classList.add('active')
        }
         else {
            width = getComputedStyle(elemSlideActive).width
            count = slidesImg.length-1;
            elemDotActive.classList.remove('active')
            elemSlideActive.classList.remove('active')
            dot[count].classList.add('active')
            slides[count].classList.add('active')
        }
        shift.style.transform = `translateX(${-parseInt(width)* count}px)`
        return
    }
    if (action == "right"){
        if(elemNext){
            width = getComputedStyle(elemNext).width
            count++;
            elemSlideActive.classList.remove('active')
            elemDotActive.classList.remove('active')
            elemNext.classList.add('active')
            elemNextDot.classList.add('active')
        } else {
            count = 0;
            elemSlideActive.classList.remove('active')
            slides[count].classList.add('active')
            elemDotActive.classList.remove('active')
            dot[count].classList.add('active')
        }
    } 
    shift.style.transform = `translateX(${-parseInt(width)* count}px)`
    return
}


const onLeft = () => {
    const activeSlid = shift.querySelector('.active')
    const activeDot = document.querySelector('.wrap_dots .active');
    const next = activeSlid.previousElementSibling;
    const nextDot = activeDot.previousElementSibling;
    const action = "left";
    movement(action,activeSlid,activeDot,next,nextDot)
}
const onRight = () => {
    const activeSlid = shift.querySelector('.active')
    const activeDot = document.querySelector('.wrap_dots .active');
    const next = activeSlid.nextElementSibling;
    const nextDot = activeDot.nextElementSibling;
    const action = "right"
    movement(action,activeSlid,activeDot,next,nextDot)
}


btn.forEach(elem => {
    if(elem.classList.contains('btn_right')){
        elem.addEventListener('click', onRight)
    } else {
        elem.addEventListener('click', onLeft)
    }
})