import './style.scss'
import { createElem } from "helper/helper.js";
const StockElem = (parent, arr) => {
 arr.forEach(function(element, i) {
    createElem("div", parent, null, null, `stockElem${i} blockStockElem`)
    let stockElem = document.querySelector(`.stockElem${i}`)
    stockElem.innerHTML = `<img src="${element.srs}" alt="imgStock" class="imgStock">
    ${element.text}
    <a href="#" class="StockTextLittle">${element.textLittle}</a>`
});
}
export default StockElem
