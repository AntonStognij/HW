import './style.scss'
import info from '../../info.js'
import { createElem, createElemNew } from "helper/helper.js";

const Description = () => {
    const blockDescription = createElemNew("div", null, null,"blockDescription")
    let descriptionElem = createElem("div", blockDescription, null, null, "descriptionElem")
    createElem("h3", descriptionElem, null, info.description.h3, "h3descriptionWrap")
    createElem("p", descriptionElem, null, info.description.p, "pdescriptionWrap")
    let elDescription = createElem("div", descriptionElem, null,null, "elDescription")
    info.description.arr.forEach(function(elem, i) {
        let elemDescription = createElem("div", elDescription, null, null, `elem elemDescription${i}`)
        createElem("h4", elemDescription, null, elem.h4, `h4elemDescription`)
        createElem("p", elemDescription, null, elem.text, `pelemDescription`)

    });
  return blockDescription
}

export default Description