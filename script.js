var fire = document.querySelector('.fire');
var tank = document.querySelector('.tank');    
var step = 3;
    
function leftElemTank (code, elem, step){
    if(code==='KeyD'){
        if( elem.getBoundingClientRect().left >= window.innerWidth - elem.getBoundingClientRect().width - step){
            return window.innerWidth - elem.getBoundingClientRect().width - step + 'px'
        } 
        return elem.getBoundingClientRect().left + step + 'px'
    }
    if(code==='KeyA'){
        if( elem.getBoundingClientRect().left < 0){
            return 0 +'px'
        } 
        return elem.getBoundingClientRect().left - step + 'px' 
    }
}

function topElemTank (code, elem, step){
    if(code==='KeyS'){
        if( elem.getBoundingClientRect().top > window.innerHeight - elem.getBoundingClientRect().height- step - 10){
            return window.innerHeight - elem.getBoundingClientRect().height/1.4 + 'px'
        } 
        return elem.offsetTop +step + 'px'
    }
    if(code==='KeyW'){
        if( elem.getBoundingClientRect().top < 0){
            return elem.getBoundingClientRect().height/3.1 + 'px'
        } 
        return elem.offsetTop - step + 'px'
    }
}




document.addEventListener('keydown', function (e){
    var widthFire = fire.getBoundingClientRect().width;
    if(e.code === "KeyD"){
        tank.style.transform = 'rotate(180deg)';
        tank.style.left = leftElemTank (e.code, tank, step);
        fire.style.transform = 'rotate(90deg)'; 
        fire.style.left = tank.getBoundingClientRect().left+ tank.getBoundingClientRect().width +'px'
        fire.style.top  = tank.getBoundingClientRect().top + tank.getBoundingClientRect().height/2  - widthFire/2 + 'px'     
            
    } else if(e.code === "KeyA"){
        tank.style.transform = 'rotate(0deg)';
        tank.style.left = leftElemTank (e.code, tank, step);
        fire.style.transform = 'rotate(270deg)'; 
        fire.style.left = tank.getBoundingClientRect().left - fire.getBoundingClientRect().width +'px'
        fire.style.top  = tank.getBoundingClientRect().top + tank.getBoundingClientRect().height/2 - widthFire/2 + 'px' 
            
    } 
      else if(e.code === "KeyS"){
        tank.style.top =  topElemTank (e.code, tank, step)
        tank.style.transform = 'rotate(270deg)';
        fire.style.transform = 'rotate(180deg)'; 
        fire.style.left = tank.getBoundingClientRect().left + tank.getBoundingClientRect().width/2 - widthFire/1.5 +'px'
        fire.style.top  = tank.getBoundingClientRect().top+ tank.getBoundingClientRect().height + 'px' 
    } else if(e.code === "KeyW"){
        tank.style.top = topElemTank (e.code, tank, step)
        tank.style.transform = 'rotate(90deg)';
       fire.style.transform = 'rotate(0deg)'; 
       fire.style.left = tank.getBoundingClientRect().left + tank.getBoundingClientRect().width/2 - widthFire/2  +'px'
       fire.style.top  = tank.getBoundingClientRect().top - fire.getBoundingClientRect().height  + 'px'
    }
    else if(e.code === "Space"){
        fire.style.visibility = 'visible';
        setTimeout(function (){
            fire.style.visibility = 'hidden'
                }, 400)
    }

})


