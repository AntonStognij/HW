import './style.scss'
import info from '../../info.js'
import { createElem, createElemNew, createUlElem } from "helper/helper.js";


const Footer  = () => {
    const footer = createElemNew("div", null, null,"footer")
    let blockFooter = createElem("div", footer, null, null, "blockFooter")
    createUlElem (info.footer.arrLeft, blockFooter, "elemLeft", "elemLeftLi", "elemLeftA")
    createUlElem (info.footer.arrCentr, blockFooter, "elemCentr", "elemCentrLi", "elemCentrA")
    createUlElem (info.footer.arrRight, blockFooter, "elemRight", "elemRightLi", "elemRightA")
    return footer
}

export default Footer