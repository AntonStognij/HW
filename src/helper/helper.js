
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
// const createInput  = (perent, tyoe, labelText=null, id=null, ) =>{
//     let form = document.createElement("form")
//     form.setAttribute("id", `${id}`)
//     let input = document.createElement("input")
//     let label = document.createElement("label")
//     perent.append(form)
//     let formElem = document.getElementById("formElem")
//     input.setAttribute("type", `text`)
//     input.setAttribute("id", `input`)
//     input.setAttribute("placeholder", `Название модели или артикул`)
//     formElem.append(label)
//     formElem.append(input)
// }

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
            if(arr[i].id == id){
                return arr[i]
            }
        }
    }
    return null
}
//функция проверяет есть ли такое кресло в корзине
const checkStor = (key, id) =>{
    const purchases  = JSON.parse(sessionStorage.getItem(key))
    if (!purchases) {
        return ({res:true,
            element:[]
        })
    }
    for(let i =0; i<= purchases.length; i++){
        console.log("rrrr",purchases[i])
        if (purchases[i]?.id == id) {
            return ({res:false,
                element:purchases
                })
            }
        }
        return ({res:true,
            element:purchases
        }
    )
}

//функция записывает данные в стор
const memoryLoad = (key, id, elem) => {
    let a =checkStor(key, id);
   let {res, element} = checkStor(key, id);
    if(res){
        element.push(elem)
        sessionStorage.setItem("purchases", JSON.stringify(element))
    }
}



export { createElem, createElemNew, createUl, createUlElem, serchElem, memoryLoad};