import Catalog from "../components/Catalog/index";
import CardPage from "../components/CardPage/index";
import Basket from "../components/Basket/index"
import Error from "../components/Error/index"



const showCatalog = () =>{
    window.history.pushState({}, '', "/")
    let main = document.querySelector(".main")
    main.innerHTML = ""
    main.append(Catalog())
}

const showCard = (elem) =>{
    const id = elem.getAttribute("data-id")
    let main = document.querySelector(".main")
    main.innerHTML = ""
    main.append(CardPage(id))
    return id
}

const showBasket = (e) => {
    e = e || e.window
    e.preventDefault()
    let main = document.querySelector(".main")
    const purchases  = JSON.parse(sessionStorage.getItem("purchases"))
    main.innerHTML = ""
    main.append(Basket(purchases))
}

const onHandleRoute = (e) => {
    e = e || e.window
    e.preventDefault()
    window.history.pushState({}, '', e.target.href)
    onLocation()
}

const routes = {
    '404': Error(),
}

const onLocation = () => {
    const { pathname } = window.location
    const route = routes[pathname] || routes[404]
    const main = document.querySelector('.main')
    main.innerHTML = '';
    main.append(route)
}


window.onpopstate = onLocation
window.route = onHandleRoute
export {showCatalog, showCard, onLocation, onHandleRoute, showBasket}
