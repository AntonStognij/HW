import './style.scss'
import info from '../../info.js'
import { createElem } from "helper/helper.js";

const Catalog = (perent, arr= null, arrArm) => {
    createElem("h3", perent, null, info.catalog.textH3, "h3Catalog")
    createElem("div", perent, null, null, "filter")
    let filter = document.querySelector(".filter")
    arr.forEach(function (element, i) {
        let option = ""
        element.option.forEach(element => {
            option = option + `<option value="1" class = "option${i}">${element}</option>`
        });
        createElem("div", filter, null, null, `elemCatalog filterElem${i}`)
        let filterElem = document.querySelector(`.filterElem${i}`)
        filterElem.innerHTML = `
        <div class = "tittle">${element.text}</div>
        <select name="filterCatalog"> ${option}</select>
       `
    });
    createElem("div", perent, null, null, "blockArmchair")
    let blockArmchair = document.querySelector(".blockArmchair")
    arrArm.forEach(function (elem){
        createElem("div", blockArmchair, null, null, `elemArmchair Armchair${elem.id}`, `${elem.id}`)
        let armchair = document.querySelector(`.Armchair${elem.id}`)
        
        armchair.addEventListener("mouseover", function(event){
            armchair.classList.add("active")
           console.log(armchair.style) 
        })
        armchair.addEventListener("mouseout", function(event){
            armchair.classList.remove("active")
           console.log(armchair.style) 
        })
        armchair.innerHTML = `
        <img src="${elem.img}" alt="img" class="img"> 
        <p class = "name">${elem.name}</p> 
        <p class = "price">${elem.price}</p> 
        <p class = "priceOld">${elem.oldPrice}</p>
        <img src="${elem.line}" alt="img line" class="line">
        <button class="button">${elem.textBtn}</button> 
        `
        
    });
    let blockCatalog =  document.querySelector(".blockCatalog")
        createElem("button", blockCatalog, null, "Показать все", "buttonShowAll")
}
export default Catalog
