let form = document.forms.form

//функция делает первую букву в слове большой
function changeWord (word){
  let newWord = word.toLowerCase();
  let firstLetter = newWord.slice(0,1);
  let secondPart = newWord.slice(1,newWord.length);
  firstLetter = firstLetter.toUpperCase();
  return firstLetter+secondPart;
}

//функция меняет строку
function getNewStr (str){
    let regCap = /[А-ЯA-Z]/;
    let regHyphen = /\-/;
    let newArr;
    let strArr = str.split(' ')
    // console.log(strArr)
    for (var i=0; i < strArr.length; i++){
      if (regCap.test(strArr[i])){
        if(regHyphen.test(strArr[i])){
          newArr = strArr[i].split('-');
          for (var j=0; j < newArr.length; j++){
            newArr[j] =  changeWord (newArr[j])
            }
            strArr[i] = newArr.join('-')
        } else {
            strArr[i] = changeWord(strArr[i]);
        }
      }
    }
    newStr = strArr.join(' ')
    return newStr
}

//функция проверяет ввод
function ceckText (reg, str, mess){
  if(!reg.test(str)){
    alert(mess);  
    return false;   
  } 
return true;
}

//1.
let inputText = form.textName;
inputText.addEventListener ('blur', function( event ) {
  let validName = /^[а-яА-Яa-zA-Z\s]{1,25}$/;
  if (!ceckText (validName, inputText.value, 'Проверьте правильность заполнения поля "Название"! Это должен быть текст с общим количеством символов до 25 знаков.')){
    inputText.value = ''
  }
  });

inputText.addEventListener ('blur', function( event ) {
    inputText.value = getNewStr(inputText.value)
  });

  //2.
let inputPrice = form.textPrice;
inputPrice.addEventListener ('blur', function( event ) {
  let validPrice = /^\d+((\.|\,)\d\d)?$/;
  if (!ceckText (validPrice, inputPrice.value, 'Проверьте правильность заполнения поля "Цена"! Необходимо указывать цифры (допускается два знака после запятой).')){
    inputPrice.value = ''
  }
  });
    //3.
let inputUnit = form.textUnit;
inputUnit.addEventListener ('blur', function( event ) {
  let validUnit = /^шт$|^кг$|^л$|^ед$/;
  if (!ceckText (validUnit, inputUnit.value, 'Проверьте правильность заполнения поля "Единица измерения"! Доступные значения "шт","кг","л","ед".')){
    inputUnit.value = ''
  }
  });

//3.
let textareaDescription = form.textDescription;
textareaDescription.addEventListener ('blur', function( event ) {
  let validDescription =/^[а-яА-Яa-zA-Z\s\-]{0,150}$/;
  if (!ceckText (validDescription, textareaDescription.value, 'Проверьте правильность заполнения поля "Описание"! Это должен быть текст с общим количеством символов до 150 знаков.')){
    textareaDescription.value = ''
  }
});

textareaDescription.addEventListener ('blur', function( event ) {
    textareaDescription.value = getNewStr(textareaDescription.value)
  });

//4.
let inputLink = form.textlink;
inputLink.addEventListener ('blur', function( event ) {
  let validLink =/^(http:|https:)\/\//;
  if (!ceckText (validLink, inputLink.value, 'Указанна некоректная ссылка на товар.')){
    inputLink.value = ''
  }
});

//проверяем форму перед отправкой
form.addEventListener('submit', function (e){
      e.preventDefault();
      var msgArr = []
      if(!inputText.value){
        msgArr.push('Не заполнено поле "Название"')
      }
      if(!inputPrice.value){
        msgArr.push('Не заполнено поле "Цена"')
      }
      if(!inputUnit.value){
        msgArr.push('Не заполнено поле "Единица измерения"')
      }
      if(!inputLink.value){
        msgArr.push('Не указана ссылка на товар')
      }

      if (msgArr.length > 0){
        alert(msgArr.join(', '))
      } else {
        console.log('Ok, можно отправлять.')
      }
  })