import './style.scss'
import info from '../../info.js'

import { createElem } from "helper/helper.js";
import StockElem from "../StockElem/index"
import Catalog from "../Catalog/index"
import Description from "../Description/index"
import Questions from "../Questions/index"
import Footer from "../Footer/index"

const Main = () => {
    createElem ('main', root, null, null, "main")
    let main = document.querySelector(".main");
    createElem ('div', main, null, null, "wrapSlader")
    let wrapSlader = document.querySelector(".wrapSlader");
    createElem ('div', wrapSlader, null, null, "slader")
    let slader = document.querySelector(".slader");
    createElem ('img', slader, `/assets/images/armchair.png`, "armchair", "armchair")
    createElem ('img', slader, `/assets/images/armchair_two.png`, "armchair_two", "armchair_two")
    
    createElem ('div', slader, null, null, " blockTextSlader")
    let blockTextSlader = document.querySelector(".blockTextSlader");
    blockTextSlader.innerHTML =`<h2>${info.h2}</h2>
    <p>${info.p}</p>
    <button class = "btn"> ${info.textBtn}</button>`
    createElem ('button', wrapSlader, null, `<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 1L1 7L7 13" stroke="#576077" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`, "buttonSliderOne")
    createElem ('button', wrapSlader, null, `<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L7 7L1 13" stroke="#576077" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`, "buttonSliderTwo")
    createElem ('div', wrapSlader, null, null, "blockPoint")
    let blockPoint = document.querySelector(".blockPoint");
    createElem ('div', blockPoint, null, null, "point")
    createElem ('div', blockPoint, null, null, "point active")
    createElem ('div', blockPoint, null, null, "point")
    createElem ('div', blockPoint, null, null, "point")
    createElem ('div', main, null, null, "stock")
    let stock = document.querySelector(".stock")
    StockElem(stock, info.stock)
    createElem ('div', main, null, null, "blockCatalog")
    let blockCatalog =  document.querySelector(".blockCatalog")
    Catalog(blockCatalog , info.catalog.filter, info.catalog.armchair)
    createElem ('div', main, null, null, "blockDescription")
    let blockDescription = document.querySelector(".blockDescription")
    Description(blockDescription)
    Questions(main)
    Footer(main)
}


export default Main