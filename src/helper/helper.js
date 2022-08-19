
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
    return elem
}


//функция делает элементы
const createElemNew = (tag, src = null, text = null, className = null, dataAtr=null, href = null) => {
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
    return elem
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

const createUl  = (arr, classNameUl, classNameLi, classNameLiA) =>{
    let li = ""
arr.forEach(element => {
    let a = `<a href="#" class="${classNameLiA}">${element}</a>`
    li = li + `<li class ="${classNameLi}">${a}</li>`
});
let ul = `<ul class = "${classNameUl}">${li}</ul>`
return ul
}

//функция делает ul елементом
const createUlElem  = (arr, perent, classNameUl, classNameLi, classNameLiA, route = false) =>{
    if(route) {
        let ul = createElem("ul", perent, null, null, classNameUl)
        arr.forEach(el => {
        let a = `<a href="${el.url}" class="${classNameLiA}">${el.text}</a>`
        createElem("li", ul, null, a, classNameLi)
        console.log("el", el)
})
    } else {
        let ul = createElem("ul", perent, null, null, classNameUl)
        arr.forEach(element => {
            let a = `<a href="#" class="${classNameLiA}">${element}</a>`
            createElem("li", ul, null, a, classNameLi)
        });
    }
   
}

//функция ищет элемент в массиве
const serchElem = (id,arr) =>{
    for(let i =0; i <= arr.length; i++) {
        if (arr[i]?.id){
            if(arr[i].id = id){
                return arr[i]
            }
        }
    }
    return null
}





export { createElem, createInput, createElemNew, createUl, createUlElem, serchElem};