import Catalog from "../components/Catalog/index";
import CardPage from "../components/CardPage/index"


const showCatalog = () =>{
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

export {showCatalog, showCard}


// import Home from "views/Home"
// import ErrorPage from "views/ErrorPage"
// import About from "views/About";
// import Product from "views/Product";

// const onHandleRoute = (e) => {
//     e = e || e.window
//     e.preventDefault()
//     window.history.pushState({}, '', e.target.href)
//     onLocation()
// }

// const routes = {
//     '404': ErrorPage(),
//     '/': Home(),
//     '/about': About(),
//     '/product': Product(),
// }

// const onLocation = () => {
//     const { pathname } = window.location
//     const route = routes[pathname] || routes[404]
//     const main = document.getElementById('main')
//     main.innerHTML = '';
//     main.append(route)
// }

// window.onpopstate = onLocation
// window.route = onHandleRoute

// export { onHandleRoute, onLocation }