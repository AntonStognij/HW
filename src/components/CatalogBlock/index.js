import './style.scss'
import info from '../../info.js'
import { createElem, createElemNew,  memoryLoad} from "helper/helper.js";
import {showCard} from "helper/route.js"



const Catalog = (arr= null, arrArm, isFilter = null) => {
    const catalogBlock = createElemNew("div", null, null,"blockCatalog")
    let h3CatalogBlock = createElem("div", catalogBlock, null, null, "h3CatalogBlock")
    createElem("h3", h3CatalogBlock, null, info.catalog.textH3, "h3Catalog")
    if(isFilter) {
        let spanCatalogFilter = createElem("select", h3CatalogBlock, null, null, "spanCatalogFilter")
        createElem("option", spanCatalogFilter, null, info.catalog.filrerText, "spanCatalogFilter")
    }
    let filter = createElem("div", catalogBlock, null, null, "filter")
    arr.forEach(function (element, i) {
        let option = ""
        element.option.forEach(element => {
            option = option + `<option value="1" class = "option${i}">${element}</option>`
        });
        let filterElem = createElem("div", filter, null, null, `elemCatalog filterElem${i}`)
        filterElem.innerHTML = `
        <div class = "tittle">${element.text}</div>
        <select name="filterCatalog"> ${option}</select>
       `
    });
    let blockArmchair = createElem("div", catalogBlock, null, null, "blockArmchair")
    arrArm.forEach(function (elem){
        let armchair =  createElem("div", blockArmchair, null, null, `elemArmchair Armchair${elem.id}`, `${elem.id}`)
        armchair.addEventListener("mouseover", function(event){
            armchair.classList.add("active") 
        })
        armchair.addEventListener("mouseout", function(event){
            armchair.classList.remove("active")
        })
        armchair.addEventListener("click", function(event){
            var elem = event.target;
            var check = elem.matches('.button');
            if(!check) {
                const idElem = showCard(elem.parentNode)
                const test = {img:info.catalog.armchair[1].img,
                    name: info.catalog.armchair[1].name ,
                    price:info.catalog.armchair[1].price,
                    oldPrice:info.catalog.armchair[1].oldPrice,
                    count :1,
                    id:idElem
                 }
                 memoryLoad("purchases", idElem, test )
            }
           
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
        createElem("button", catalogBlock, null, "Показать все", "buttonShowAll")
        return catalogBlock
}
export default Catalog
