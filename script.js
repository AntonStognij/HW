//Задача 1
let str = 'ahb acb aeb aeeb adcb axeb'
let reg = /(a\wb+)/g;
console.log(str.match(reg));
//Задача 2.
let strTwo = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
let regTwo = /(\*q+[+])/g;
console.log(strTwo.match(regTwo));
//Задача 3.
let strThree = '2013/09/09 09:09'
let regthree = /^(1\d{3}|200\d|201[012])\/(0\d|1[0-2])\/(0[1-9]|[1-2]\d|30)\s+(0\d|1\d|2[0-3]):[0-5]\d$/;
console.log(regthree.test(strThree));

//Задача 4.
function getNewText (str) {
  let regFour = /(\s{2,})/g; 
  let regFourTwo = /\.\s/g
  str = str.replace(regFour, ' ')
  str = str.replace(regFourTwo, '.  ')
  return str
}
console.log(getNewText ('Extra   spaces')); 
console.log(getNewText ('Sentence.   Sentence.')); 
