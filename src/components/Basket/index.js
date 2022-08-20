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
    let infoForPay = createElem ("div", basket, null, null, "infoForPay")
    createElem ("h4", infoForPay, null, "Ваши данные", "infoForPayh4")
    let infoText = "Заполните все обязательные поля, чтобы мы смогли с вами связаться для уточнения заказа";
    createElem ("p", infoForPay, null, infoText, "infoForPayP")
    let formInfo =  createElem ("form", infoForPay, null, null, "blockFormInfo")
    formInfo.innerHTML = `
    <div class = "blockName">
    <input type="text" class = "formInfo">
    <div class = "LebelInputName">Ваше имя</div>
    </div>
    <input type="text" class = "formInfo"  placeholder="Электронная почта (не обязательно)">
    <input type="text" class = "formInfo"  placeholder="Телефон">
    `
    let infoAdr = createElem ("div", basket, null, null, "infoForPay infoAdr")
    createElem ("h4", infoAdr, null, "Доставка", "infoForPayh4")
    let inputInfoAdr =  createElem ("form", infoAdr, null, null, "inputInfoAdr")
    inputInfoAdr.innerHTML = `
    <div class = "formInfo select"><input name="selectInput" type="radio" value="varOne"> <div><h5 class = "selecth4">Самовывоз</h5> <p class = "textSelect">Краснобогатырская , д. 6 строение 5 - БЦ «ВИЛЛА-РИВА»</p></div> </div>
    <div class = "formInfo select"><input name="selectInput" type="radio" value="varOne"> <div><h5 class = "selecth4">Доставка курьером</h5> <p class = "textSelect">Стоимость — 750 рублей, от 3 дней</p></div> </div>
    <div class = "formInfo select"><input name="selectInput" type="radio" value="varOne"> <div><h5 class = "selecth4">Транспортной компании</h5> <p class = "textSelect">По всей стране, услуги ТК оплачиваются отдельно при получении</p></div> </div>
    `
    createElem ("h4", infoAdr, null, "Адрес доставки", "infoForPayh4")
    let infoTextblockTwo = "Уточните только город доставки. Остальные детали мы уточним по телефону";
    createElem ("p", infoAdr, null, infoTextblockTwo, "infoForPayP")
    let formInfoBlockTwo =  createElem ("form", infoAdr, null, null, "blockFormInfo")
    formInfoBlockTwo.innerHTML = `
    <input type="text" class = "formInfo"  placeholder="Город">
    `
    let infoPay = createElem ("div", basket, null, null, "infoForPay infoAdr infoPay")
    createElem ("h4", infoPay, null, "Оплата", "infoForPayh4")
    let inputInfoPay  =  createElem ("form", infoPay, null, null, "inputInfoPay")
    inputInfoPay.innerHTML = `
    <div class = "formInfo select"><input name="selectPay" type="radio" value="varOne"> <p class = "textSelect">Безналичный расчет для юр.лиц (счет на оплату)</p></div> 
    <div class = "formInfo select"><input name="selectPay" type="radio" value="varOne"> <p class = "textSelect">Оплата наличными</p></div> 
    <div class = "formInfo select"><input name="selectPay" type="radio" value="varOne"> <p class = "textSelect">Оплата Банковской картой (VISA, MasterCard, Maestro) без комиссии при доставке через платежный терминал</p></div> 
    `
    let btnPay = createElem ("div", basket, null, null, "BlockbtnPay")
    let textPay =`Нажимая «Оформить заказ», вы даете согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности.`
    createElem ("button", btnPay, null, "Оформить заказ", "btnPay")
    createElem ("p", btnPay, null, textPay, "BlockbtnPayText")
 
 
   } else {
    createElem ("h2", basket, null, "Ваша корзина пуста", "basketNull")
 }
 
 return basket
}
export default  Basket