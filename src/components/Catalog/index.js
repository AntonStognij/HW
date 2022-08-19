import './style.scss'
import info from '../../info.js'
import { createElem, createElemNew, createUlElem } from "helper/helper.js";
import Catalog from '../CatalogBlock/index'
import Questions from "../Questions/index"

const CatalogRoute = () => {
    const catalog = createElemNew("div", null, null,"catalog")
    let blockUlCatalog = createElem("div", catalog, null, null, "blockUlCatalog")
    createUlElem(info.catalog.ulCatalog, blockUlCatalog, "linkLocation", "linkLocationLi", "linkLocationA", true)
    catalog.append(Catalog(info.catalog.filter, info.catalog.armchair, true))
    catalog.append (Questions())
    return catalog
}

export default CatalogRoute