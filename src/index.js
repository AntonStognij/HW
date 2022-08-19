import './styles/all'
import Render from './components/Render'
import {showCatalog} from "./helper/route"

const root = document.getElementById('root')
Render(root)

const btnCatalog = document.querySelector(".buttonCatalog")
btnCatalog.onclick = showCatalog






