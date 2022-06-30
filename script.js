//функция создает элемент html
function createElem (type, className, perent, dataId = null, typeInput = null, value = null ){
    let elem = document.createElement(`${type}`);
    elem.setAttribute("class", `${className}`);
    if(dataId)elem.setAttribute("data", `${dataId}`);
    if(typeInput)elem.setAttribute("type", `${typeInput}`);
    if(value)elem.setAttribute("value", `${value}`);
    perent.append(elem)
    }

//функция ищет элемент по классу
const serchElem = (className) =>  document.querySelector(`.${className}`);

//функция получает значение value
const getValue = (className) =>  serchElem(className).value;

//функция получает значение InnerHTML
const getInnerHTML = (className) =>  serchElem(className).innerHTML;

//функция обновляет текст элемента
function updateText (elem, name, text ){
    elem.innerHTML = `${name}, ${text}`
}

//функция создает li
function createLi (index, perentForLi){
    createElem("li", `li_action${index}`, perentForLi);
    let li = serchElem(`li_action${index}`)
    createElem("span", `text_action${index}`, li)
    return  serchElem(`text_action${index}`);
}

//функция создает li c массива
function createLiFromArr (arr, parent){
    let span;
    arr.forEach( function(element, index) {
        if (!element.done) {
            span = createLi(index, parent)
            span.innerHTML = element.action;
            let li = serchElem(`text_action${index}`);
            createElem("input", "btn_done", li, `${index+1}`,"button", "Выполнено");
        } else {
            span = createLi(index, parent)
            span.innerHTML = element.action;
            span.style.textDecoration = 'line-through'
        }
    });
}

//функция чистить value
function clearValue (nameClacc){
    let elemValue = serchElem(nameClacc);
    elemValue.value = "";
}

//функция чистить innerHTML
function clearFilds (nameClacc){
    let elemInnerHTML = serchElem(nameClacc)
    elemInnerHTML.innerHTML = ""
}

//парамтетры приложения
const option = {
    "textOne":"Как ваше имя?",
    "textTwo":"список Ваших дел показан ниже. Если хотите в него что-то добавить - заполните необходимое поле!",
    "textThree":"список ваших дел пуст. Если хотите в него что-то добавить - заполните необходимое поле!",
    "nameUser":"Гость",
    render () {
        createElem("H2", "ask", body)
        createElem("input", "text", body, null,"text")
        createElem("input", "btn", body, null,"button", "ОК");
        createElem("ul", "ul_action", body)
        let text = serchElem("ask");
        text.innerHTML = option.textOne;
    }
}

//отрисовываем страницу
const body = document.querySelector("body")
option.render()

//действия на кнопку ОК
document.addEventListener('click', function (e){
    let elem = e.target;
    let check = elem.matches('.btn');
    let ul_action = serchElem("ul_action")
    if (check) {
        text = serchElem("ask");
        //определяю действие по тексту вопроса
        if (getInnerHTML("ask") == option.textOne){
            option.nameUser = getValue("text") ? getValue("text"): option.nameUser
            users = JSON.parse(sessionStorage.getItem(option.nameUser))
            //меняю текст в зависимости от результата поиска данных
            if (!users){
                updateText(text, option.nameUser, option.textThree);
            } else {
                updateText(text, option.nameUser, option.textTwo)
                clearFilds ("ul_action")
                createLiFromArr(users, ul_action)
            }   
        } else {
            //действия когда задается не первый вопрос
            updateText(text, option.nameUser, option.textTwo)
            users = JSON.parse(sessionStorage.getItem(option.nameUser))
            if (users){
                users.push({ 
                        action: getValue("text"),
                        id:users.length+1,
                        done:false
                    })
                } else {
                    users = [{ 
                    action: getValue("text"),
                    id:1,
                    done:false
                   }]
                }
                sessionStorage.setItem(option.nameUser, JSON.stringify(users))
                clearFilds ("ul_action")
                createLiFromArr(users, ul_action)
        }
        clearValue("text")
    }

})

//действия на кнопку Выполнено
document.addEventListener('click', function (e){
    let elem = e.target;
    let check = elem.matches('.btn_done');
    if (check) {
    let ul_action = serchElem("ul_action")
    let dataID = elem.getAttribute("data")
    users = JSON.parse(sessionStorage.getItem(option.nameUser))
    users.forEach(function (elem) {
        if (elem.id == dataID){
            elem.done = true
        } 
    })
    sessionStorage.setItem(option.nameUser, JSON.stringify(users))
    clearFilds ("ul_action")
    createLiFromArr(users, ul_action)
    }
})


