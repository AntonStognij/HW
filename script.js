//функция переводит время в формпт чч:мм:сс
function secTotime(s) {
  var t;
  if(s > -1){
    var hour = Math.floor(s/3600)
    var min = Math.floor(s/60) % 60
    var sec = s % 60
    if(hour < 10) {
      t = '0'+ hour + ":"
    } else { 
      t = hour + ":"
    } 
    if(min < 10){
      t += "0"
    } 
    t += min + ":"
    if(sec < 10){
      t += "0"
    } 
    t += sec
  } 
  return t
}

//функция делает число в интервале
function random(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
var body = document.querySelector('body');
//создаем поле
var wrap = document.createElement('div');  
wrap.classList.add('wrap');
body.append(wrap);
//Создаем описание
var h1 = document.createElement('h1');
h1.classList.add('description')
wrap.append(h1);
h1.innerHTML = "Не дайте коту поймать вас!"
var h2 = document.createElement('h2');
h2.classList.add('description')
wrap.append(h2);
h2.innerHTML = "Не забывайте, что преград нельзя касаться. Кликай на мышь и беги!"
var id = 0;
//создаем мыщ
var mouse = document.createElement('img');
mouse.setAttribute('src', "img/2.png");
mouse.setAttribute('alt', "mouse");
mouse.classList.add('mouse');
wrap.append(mouse);
var mouseElem = document.querySelector('.mouse')
var mouseHight = mouseElem.getBoundingClientRect().height;
var mouseWidth = mouseElem.getBoundingClientRect().width;

//создаем кота
var cat = document.createElement('img');
cat.setAttribute('src', "img/1.png");
cat.setAttribute('alt', "cat");
cat.classList.add('cat');
wrap.append(cat);

//делаем таймер
var time = document.createElement('div');
time.classList.add('time');
body.prepend(time);
time.innerHTML = "<span>00:00:00</span>"
var opt = {
    click:true,
    move:true,
}

//дейсвия на клики по полю
document.addEventListener('click', function (e){
var elem = e.target;
var check = elem.matches('.mouse');
if (check && opt.click) {
  //меняем флаг
  opt.click = false;
  h1.innerHTML = '';
  h2.innerHTML = '';

//запускаем таймер 
var timeStart = Math.round(new Date().getTime()/1000)
time.setAttribute('data-time', ""+timeStart);
var setIntervaTime = setInterval( function (){
var timeNaw = Math.round(new Date().getTime()/1000)
timeElem= document.querySelector('.time');
timeStart = timeElem.getAttribute('data-time')
var difference = timeNaw - timeStart;
var time = secTotime(difference);
timeElem.innerHTML = "<span>"+time+"</span>"
}, 1000)

//получаем координаты при клике
var x = e.clientX - (mouseElem.offsetWidth / 1.2) ;
var y = e.clientY - mouseHight*1.2 ;
if (opt.move === true){
  mouseElem.style.left = x + 'px';
  mouseElem.style.top = y + 'px';
//задержка для кота 
setTimeout(function (){
  catElem.style.left = x  - mouseWidth + 20 +'px';
  catElem.style.top = y - catHight + 20+ 'px';
  if ((mouseElem.getBoundingClientRect().left === catElem.getBoundingClientRect().left-20 + mouseWidth)&&
      (mouseElem.getBoundingClientRect().top === catElem.getBoundingClientRect().top - 20 + catHight)){
      var blockEnd = document.createElement('div');
      blockEnd.classList.add('blockEnd');
      body.append(blockEnd);
      blockEnd.innerHTML =  "<span>Ээхх... Тебя поймали! Но ты все равно молодец! Твой результат: </span> <div class ='timeEnd'> <span>"+timeElem.textContent+" c.</span> </div> <span>Пробуй еще и ты сможешь лучше!</span> "
      console.log(timeElem.textContent)
      //все останавливаем
      opt.move = false;
      clearInterval(setIntervaTime);
      clearInterval(setIntervalId)
    }
}, 2000)
}

  var catElem = document.querySelector('.cat')
  var catHight = catElem.getBoundingClientRect().height;
  
  var setIntervalId = setInterval( function (){
    id++;
    var randomWidth = random(50, 150);
    var randomHight = random(50, 150);
    var block = document.createElement('div');
    block.setAttribute('style', "width:"+randomWidth+"px; height:"+randomHight+"px");  
    block.setAttribute('id', ""+id);  
    block.classList.add('block');
    wrap.append(block);
    var blockElem = document.getElementById(id)
    if(blockElem.getBoundingClientRect().top + blockElem.getBoundingClientRect().height > window.innerHeight - 150 ){
        clearInterval(setIntervalId)
        block.remove();
    }
  }, 5000)

  body.addEventListener('mousemove', function (e){

//получаем координаты
  var x = e.clientX - (mouseElem.offsetWidth / 1.2) ;
  var y = e.clientY - mouseHight*1.2 ;
  if( y > window.innerHeight - mouseHight*1.5){
          y = window.innerHeight - mouseHight*1.5 +  'px'
    } 
  if( y +mouseHight/2 < 0){
        y = 0 + 'px'
    } 
  if( x >= window.innerWidth - mouseWidth*1.5){
        x = window.innerWidth - mouseWidth*1.5+ 'px'
  } 
  if(x < 0){
    x = 0 - mouseWidth*1.5  +'px'
  }

//делаем условие позиционирование мыши
  if (opt.move === true){
    mouseElem.style.left = x + 'px';
    mouseElem.style.top = y + 'px';
  //задержка для кота
  setTimeout(function (){
    catElem.style.left = x  - mouseWidth + 20 +'px';
    catElem.style.top = y - catHight + 20+ 'px';
      if ((mouseElem.getBoundingClientRect().left === catElem.getBoundingClientRect().left-20 + mouseWidth)&&
      (mouseElem.getBoundingClientRect().top === catElem.getBoundingClientRect().top - 20 + catHight)){
      var blockEnd = document.createElement('div');
      blockEnd.classList.add('blockEnd');
      body.append(blockEnd);
      blockEnd.innerHTML =  "<span>Ээхх... Тебя поймали! Но ты все равно молодец! Твой результат: </span> <div class ='timeEnd'> <span>"+timeElem.textContent+" c.</span> </div> <span>Пробуй еще и ты сможешь лучше!</span> "
      console.log(timeElem.textContent)
      //все останавливаем
      opt.move = false;
      clearInterval(setIntervaTime);
      clearInterval(setIntervalId)
    }
    }, 2000)
  }
    
//определяем попадание на поле
    wrap.addEventListener('mouseover', function (e){
        var target = e.target.closest('.block');
        if (!target) return;
            opt.move = false;
            mouseElem.classList.add("index");
            catElem.classList.add("index");
            })
    })
    }
})













