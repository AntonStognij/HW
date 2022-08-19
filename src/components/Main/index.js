import './style.scss'
import info from '../../info.js'

import { createElem , createElemNew} from "helper/helper.js";
import StockElem from "../StockElem/index"
import Catalog from "../CatalogBlock/index"
import Description from "../Description/index"
import Questions from "../Questions/index"


const MainRender = () => {
    let main = createElemNew ('main', null, null, "main")
    let wrapSlader = createElem ('div', main, null, null, "wrapSlader")
    let slader =  createElem ('div', wrapSlader, null, null, "slader")
    createElem ('img', slader, `/assets/images/armchair.png`, "armchair", "armchair")
    createElem ('img', slader, `/assets/images/armchair_two.png`, "armchair_two", "armchair_two")
    let blockTextSlader = createElem ('div', slader, null, null, " blockTextSlader")
    blockTextSlader.innerHTML =`<h2>${info.h2}</h2>
    <p>${info.p}</p>
    <button class = "btn"> ${info.textBtn}</button>`
    createElem ('button', wrapSlader, null, `<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 1L1 7L7 13" stroke="#576077" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`, "buttonSliderOne")
    createElem ('button', wrapSlader, null, `<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L7 7L1 13" stroke="#576077" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`, "buttonSliderTwo")
    let blockPoint = createElem ('div', wrapSlader, null, null, "blockPoint")
    createElem ('div', blockPoint, null, null, "point")
    createElem ('div', blockPoint, null, null, "point active")
    createElem ('div', blockPoint, null, null, "point")
    createElem ('div', blockPoint, null, null, "point")
    main.append(StockElem(info.stock))
    main.append (Catalog(info.catalog.filter, info.catalog.armchair))
    main.append (Description())
    main.append (Questions())
    return main
}
export default MainRender