import './style.scss'
import info from '../../info.js'
import { createElem, createElemNew, createUlElem } from "helper/helper.js";
import Order from "../Order/index"

//const createElemNew = (tag, src = null, text = null, className = null, dataAtr=null, href = null)
//createElem = (tag, append, src = null, text = null, className = null, dataAtr=null, href = null)
const Basket = () => {
 const basket = createElemNew ("div", null, null, "basket")
 let img = info.catalog.armchair[0].line
 const ulCatalog = info.catalog.ulCatalog.slice(0, 1);
 const elemArr = {
 text:"Корзина",
 url:"/basket"
}
ulCatalog.push(elemArr);
 const arr = ulCatalog;
 createUlElem(arr, basket, "linkLocation", "linkLocationLi", "linkLocationA", true)

//получаем данные с Storage
 const purchases  = JSON.parse(sessionStorage.getItem("purchases"))
 if(purchases){
    createElem ("h2", basket, null, "Ваш заказ", "basketH2")
    let allSumm = 0;
    let allSummOld = 0
    purchases.forEach(element => {
       console.log(element)
       basket.append(Order(element.img, element.name, element.price , element.oldPrice, element.count))
       element.price = element.price.slice(0, -2)
       element.price = +element.price.replace(/\s/g,'')
       element.oldPrice = element.oldPrice.slice(0, -2)
       element.oldPrice = +element.oldPrice.replace(/\s/g,'')
       allSumm=allSumm+(element.price*element.count);
       allSummOld = allSummOld+(element.oldPrice*element.count);
    });
    
    const allSummBlock = createElem ("div", basket, null, null, "allSummBlock")
    createElem ("span", allSummBlock, null, "Итого:", "allSummBlockSpan")
    const allSummBlockOldPrice = createElem ("div", allSummBlock, null, null, "allSummBlockOldPrice")
    createElem ("span", allSummBlockOldPrice, null, `${allSummOld}`, "allSummBlockSpan")
    createElem("img", allSummBlockOldPrice, img, null, "priceOldLine")
    createElem ("span", allSummBlock, null, `${allSumm}`, "allSummBlockSpan")
 } else {
    createElem ("h2", basket, null, "Ваша корзина пуста", "basketNull")
 }
 
 return basket
}
export default  Basket