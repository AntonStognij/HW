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
console.log(shift)
const slides = shift.querySelectorAll('li');
const dot = document.querySelectorAll('.dots');
console.log(dot)
let count = 0;
slides[count].classList.add('active')
dot[count].classList.add('active')

// переключаем слайды

const onRight = () => {
    const activeSlid = shift.querySelector('.active')
    const activeDot = document.querySelector('.wrap_dots .active');
    const next = activeSlid.nextElementSibling;
    const nextDot = activeDot.nextElementSibling;
    let width = 0
    console. log(next)
    if(next){
        width = getComputedStyle(next).width
        count++;
        activeSlid.classList.remove('active')
        activeDot.classList.remove('active')
        next.classList.add('active')
        nextDot.classList.add('active')
    } else {
        count = 0;
        activeSlid.classList.remove('active')
        slides[count].classList.add('active')
        activeDot.classList.remove('active')
        dot[count].classList.add('active')
    }
    shift.style.transform = `translateX(${-parseInt(width) * count}px)`
    console.log(count)
}


const onLeft = () => {
    const activeSlid = shift.querySelector('.active')
    const activeDot = document.querySelector('.wrap_dots .active');
    const next = activeSlid.previousElementSibling;
    const nextDot = activeDot.previousElementSibling;
    if(next){
        width = getComputedStyle(next).width
            count--;
            activeSlid.classList.remove('active')
            next.classList.add('active')
            activeDot.classList.remove('active')
            nextDot.classList.add('active')
            console.log("next есть", count)
    }
     else {
        width = getComputedStyle(activeSlid).width
        count = slidesImg.length-1;
        activeDot.classList.remove('active')
        activeSlid.classList.remove('active')
        dot[count].classList.add('active')
        slides[count].classList.add('active')
    }
    shift.style.transform = `translateX(${-parseInt(width)* count}px)`
}


btn.forEach(elem => {
    if(elem.classList.contains('btn_right')){
        elem.addEventListener('click', onRight)
    } else {
        elem.addEventListener('click', onLeft)
    }

})