import './style.scss'
import info from '../../info.js'
import { createElem , createElemNew, showCount, updateSumm} from "helper/helper.js";


const Order = ( img, nameArm, price, oldPrice, count, id) => {

//условные характеристики
let imgLine = info.catalog.armchair[1].line;
const imgBtnDel = `<svg width="20" height="20" class="buttonDelImg" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 5H4.16667H17.5" stroke="#959AAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66667 5.00008V3.33341C6.66667 2.89139 6.84226 2.46746 7.15482 2.1549C7.46738 1.84234 7.89131 1.66675 8.33334 1.66675H11.6667C12.1087 1.66675 12.5326 1.84234 12.8452 2.1549C13.1577 2.46746 13.3333 2.89139 13.3333 3.33341V5.00008M15.8333 5.00008V16.6667C15.8333 17.1088 15.6577 17.5327 15.3452 17.8453C15.0326 18.1578 14.6087 18.3334 14.1667 18.3334H5.83333C5.39131 18.3334 4.96738 18.1578 4.65482 17.8453C4.34226 17.5327 4.16667 17.1088 4.16667 16.6667V5.00008H15.8333Z" stroke="#959AAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.33333 9.16675V14.1667" stroke="#959AAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.6667 9.16675V14.1667" stroke="#959AAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
const opt = "Характеристики, цвет, механизм и прочее Артикул: 266-460"
const  orderBlock = createElemNew ("div", null, null, "orderBlock")
const  order = createElem ("div",orderBlock, null, null, "order")
createElem ("img", order, img, null, "orderImg")
const blockOrderText = createElem ("div",order, null, null, "blockOrderText")
createElem ("h4",blockOrderText, null, nameArm, "blockOrderTextH4")
createElem ("p",blockOrderText, null, opt, "blockOrderTextP")
const blockOrderBtn = createElem ("div",order, null, null, "blockOrderBtn")
createElem ("button",blockOrderBtn, null, "-", "buttonІubtract")
createElem ("span",blockOrderBtn, null, count, "spanCount")
createElem ("button",blockOrderBtn, null, "+", "buttonAdd")
const blockOrderPrice = createElem ("div",order, null, null, "blockOrderPrice")
createElem ("span",blockOrderPrice, null, price, "spanPrice")
const blockoldPrice = createElem ("div",blockOrderPrice, null, null, "blockoldPrice")
createElem("img", blockoldPrice, imgLine, null, "priceOldLine")
createElem ("span",blockOrderPrice, null, oldPrice, "oldPrice")
const buttonDel = createElem ("button",order, null, imgBtnDel, "buttonDel")
orderBlock.setAttribute("data-id", id+1);
buttonDel.addEventListener("click", function(event){
    let elem = event.target;
    let check = elem.matches(".buttonDel")
    let checkTwo = elem.matches(".buttonDelImg")
    if(check||checkTwo){
       let id = orderBlock.getAttribute("data-id")
        orderBlock.innerHTML= "";
        const purchases  = JSON.parse(sessionStorage.getItem("purchases"))
        let newPurchases = purchases.filter(function(el) {
           return el.id != id-1
        })
        if(newPurchases.length >0){
            sessionStorage.setItem("purchases", JSON.stringify(newPurchases))
            
        } else {
            sessionStorage.clear()
            const elem = document.querySelector(".basket");
            elem.innerHTML = `<h2 class="basketNull">Ваша корзина пуста</h2>`
        }
        showCount()
        updateSumm()
    }
})
return orderBlock
}

export default Order