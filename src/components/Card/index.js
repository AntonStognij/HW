import './style.scss'
import info from '../../info.js'
import { createElem, createElemNew, createUlElem, serchElem } from "helper/helper.js";

//const createElemNew = (tag, src = null, text = null, className = null, dataAtr=null, href = null)
//createElem = (tag, append, src = null, text = null, className = null, dataAtr=null, href = null)
const Card = (id) => {
   const arrArmchair = info.catalog.armchair;
   const armchair = serchElem(id, arrArmchair)
   const card = createElemNew("div", null, null, "card")
   const ulCatalog = info.catalog.ulCatalog.slice(0, 2);
   const elemArr = {
   text:armchair.name,
   url:"#"
}
    ulCatalog.push(elemArr);
   const arr = ulCatalog;
   createUlElem(arr, card, "linkLocation", "linkLocationLi", "linkLocationA", true)
   const blockCard = createElem("div",card, null, null, "blockCard")
   const blockCardImg = createElem("div", blockCard, null, null, "blockCardImg")
   createElem("img", blockCardImg, armchair.img, null, "CardImg")
   const blockCardDeskription = createElem("div", blockCard, null, null, "blockCardDeskription")
   createElem("h3", blockCardDeskription, null, armchair.name, "blockCardDeskriptionH3")
   createElem("h3", blockCardDeskription, null, armchair.description, "blockCardDeskriptionP")
   const blockCardDeskriptionBlockOpt = createElem("div", blockCardDeskription, null, null, "blockCardDeskriptionBlockOpt")
   armchair.options.forEach(function (el) {
    const blocOpt = createElem("div", blockCardDeskriptionBlockOpt, null, null, `blocOpt`)
    createElem("h4", blocOpt, null, el.text, `blocOptH4`)
    createElem("img", blocOpt, el.url, null, `blocOptImg`)
   });
   createElem("h4", blockCardDeskription, null, "Механизм", "h4Opt")
   createElem("p", blockCardDeskription, null, armchair.mechanism, "mechanism")
   const blockoldPrice = createElem("div", blockCardDeskription, null, null, "blockoldPrice")
   createElem("img", blockoldPrice, armchair.line, null, "priceOldLine")
   createElem("span", blockoldPrice, null, armchair.price, "oldPrice")
   createElem("span", blockCardDeskription, null, armchair.oldPrice, "Price")
   const blocOptBtn = createElem("div", blockCardDeskription, null, null, "blocOptBtn")
   createElem("button", blocOptBtn, null,"Добавить в корзину", "button btnCard")
   const blocOptBtnTwo = createElem("div", blocOptBtn, null, null, "blocOptBtnTwo")
   createElem("button", blocOptBtnTwo, null,"-", "buttonІubtract")
   createElem("span", blocOptBtnTwo, null,"1", "spanCount")
   createElem("button", blocOptBtnTwo, null,"+", "buttonAdd")
   const deskription = createElem("div",card, null, null, "deskription")
   const deskriptionLeft = createElem("div",deskription, null, null, "deskriptionLeft")
   const deskriptionRight = createElem("div",deskription, null, null, "deskriptionRight")
    return card
  
  
}

export default Card