import './style.scss'
import info from '../../info.js'
import { createElem, createUl } from "helper/helper.js";

const Footer  = (perent) => {
    createElem("footer", perent, null, null, "footer")
    let footer = document.querySelector(".footer")
    createElem("div", footer, null, null, "blockFooter")
    let blockFooter = document.querySelector(".blockFooter")
    createUl (info.footer.arrLeft, blockFooter, "elemLeft", "elemLeftLi", "elemLeftA")
    createUl (info.footer.arrCentr, blockFooter, "elemCentr", "elemCentrLi", "elemCentrA")
    createUl (info.footer.arrRight, blockFooter, "elemRight", "elemRightLi", "elemRightA")
}

export default Footer