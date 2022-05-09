//Задание 1.

function makePassword (pass){
    var ourPassword = "Password";
    function checkPassword (pass) {        
                return (pass === ourPassword);
            }
    return checkPassword(pass);
     
}

console.log("тест 'false' =>", makePassword("fdvdfvbg"));
console.log("тест 'true' =>", makePassword("Password"));

//Задание 2.

//функция делает рандомное число в интервале
function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  

//функция делает уникальные значения в интервале 1-100
function randomNum (){
    var arrNum = [];
    return function () {
       for ( ; ; ){
           var num = randomInteger(1, 100);
           if (arrNum.length === 100){
            arrNum = [];
           }
           if (!arrNum.includes(num)){
            arrNum.push(num);
            break;
           }
       }
       return num;  
 }

}
var test = randomNum ();

console.log(test());
console.log(test());
console.log(test());
console.log(test());
console.log(test());
console.log(test());
console.log(test());