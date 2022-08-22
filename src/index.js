import './styles/all'
import Render from './components/Render'
import {showCatalog, onHandleRoute, showBasket} from "./helper/route"
import {showCount} from "./helper/helper"

const root = document.getElementById('root')
Render(root)
const btnCatalog = document.querySelector(".buttonCatalog")
btnCatalog.onclick = showCatalog
const link = document.querySelectorAll("a")
link.forEach(element => {
    let link = element.pathname
    if (link == "/basket"){
        element.addEventListener("click", showBasket)
    } else {
        element.addEventListener("click", onHandleRoute)
    }
    
});

showCount()







