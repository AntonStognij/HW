import './style.scss'
import info from '../../info.js'
import { createElem, createElemNew, createUlElem } from "helper/helper.js";
import Card from '../Card/index'
import Catalog from "../Catalog/index"
import Questions from "../Questions/index"
//const createElemNew = (tag, src = null, text = null, className = null, dataAtr=null, href = null)
//createElem = (tag, append, src = null, text = null, className = null, dataAtr=null, href = null)
const CardPage = (id) => {
 const cardPage = createElemNew ("div", null, null, "cardPage")
 cardPage.append(Card(id))
 cardPage.append (Catalog(info.catalog.filter, info.catalog.armchair))
 return cardPage
}

export default CardPage