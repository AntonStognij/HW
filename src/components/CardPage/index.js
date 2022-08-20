import info from '../../info.js'
import {createElemNew } from "helper/helper.js";
import Card from '../Card/index'
import Catalog from "../Catalog/index"


const CardPage = (id) => {
 const cardPage = createElemNew ("div", null, null, "cardPage")
 cardPage.append(Card(id))
 cardPage.append (Catalog(info.catalog.filter, info.catalog.armchair))
 return cardPage
}

export default CardPage