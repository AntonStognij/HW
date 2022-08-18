
//функция делает элементы
const createElem = (tag, append, src = null, text = null, className = null, dataAtr=null, href = null) => {
    let elem = document.createElement(tag)
    if(src){
        elem.src = src
        elem.alt = text
        elem.title = text
    }
    if(!src && text){
        elem.innerHTML = text
    }
    if(className){
        elem.setAttribute("class", `${className}`)
    }
    if(dataAtr){
        elem.setAttribute("data-id", `${dataAtr}`)
    }
    if(href){
        elem.setAttribute("href", `${href}`)
        elem.innerHTML = text
    }
    
    append.append(elem)
}
//функция делает поле для ввода
const createInput  = (labelText=null, id=null, perent) =>{
    let form = document.createElement("form")
    form.setAttribute("id", `formElem`)
    let input = document.createElement("input")
    let label = document.createElement("label")
    perent.append(form)
    let formElem = document.getElementById("formElem")
    input.setAttribute("type", `text`)
    input.setAttribute("id", `input`)
    input.setAttribute("placeholder", `Название модели или артикул`)
    formElem.append(label)
    formElem.append(input)
}


//функция делает li с массива
const createUl  = (arr, perent, classNameUl, classNameLi, classNameLiA) =>{
    let ul = createElem("ul", perent, null, null, classNameUl)
    let ulElem = document.querySelector(`.${classNameUl}`);
arr.forEach(element => {
    let a = `<a href="#" class="${classNameLiA}">${element}</a>`
    createElem("li", ulElem, null, a, classNameLi)
});
}
export { createElem, createInput, createUl};