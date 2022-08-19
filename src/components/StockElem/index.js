import './style.scss'
import { createElem, createElemNew } from "helper/helper.js";


const StockElem = (arr) => {
    const blockStock = createElemNew('div', null, null, "stock")
    arr.forEach(function(element, i) {
    let stockElem = createElem("div", blockStock, null, null, `stockElem${i} blockStockElem`)
    stockElem.innerHTML = `<img src="${element.srs}" alt="imgStock" class="imgStock">
    ${element.text}
    <a href="#" class="StockTextLittle">${element.textLittle}</a>`
});
return blockStock
}

export default StockElem
