import './style.scss'
import { createElem, createElemNew, createUlElem } from "helper/helper.js";
// (tag, src = null, text = null, className = null, dataAtr=null, href = null) 
const Error = () => {
    let error = createElemNew("h2", null, "Виникла помилка при відображенні даних", "error")
    return error
}

export default Error