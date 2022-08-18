import './style.scss'
import info from '../../info.js'
import { createElem } from "helper/helper.js";

const Description = (perent) => {
    console.log(perent)
    createElem("div", perent, null, null, "descriptionElem")
    let descriptionElem = document.querySelector(".descriptionElem")
    createElem("h3", descriptionElem, null, info.description.h3, "h3descriptionWrap")
    createElem("p", descriptionElem, null, info.description.p, "pdescriptionWrap")
    createElem("div", descriptionElem, null,null, "elDescription")
    let elDescription = document.querySelector(".elDescription")
    info.description.arr.forEach(function(elem, i) {
        createElem("div", elDescription, null, null, `elem elemDescription${i}`)
        let elemDescription = document.querySelector(`.elemDescription${i}`)
        createElem("h4", elemDescription, null, elem.h4, `h4elemDescription`)
        createElem("p", elemDescription, null, elem.text, `pelemDescription`)

    });

}

export default Description