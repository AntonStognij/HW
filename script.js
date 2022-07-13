//функция отрисовывает элементы
const render = () => {
    const body  = document.querySelector(`body`)
    createImg (body, "img/pokemon.png", "imgPokemon", "Pokemon")
    createElem ("div", body, src = null, text = null, api = null, "filter", dataAtr=null)
    createElem ("div", body, src = null, text = null, api = null, "filterByType", dataAtr=null)
    createElem ("div", body, src = null, text = null, api = null, "wrap", dataAtr=null)
    const wrap = serchElem ("wrap");
    createElem ("div", wrap, src = null, text = null, api = null, "pokemon", dataAtr=null)
    const pokemon = serchElem ("pokemon");
    createElem ("h3", pokemon, src = null, "POKEMONS", api = null, "", dataAtr=null)
    createElem ("div", wrap, src = null, text = null, api = null, "info", dataAtr=null)
    const info = serchElem ("info");
    createImg (info, "img/pokemon-ball.png", "imgPokemonBall", "Pokemon-Ball")
    createElem ("div", body, src = null, text = null, api = null, "wrap-pagination", dataAtr=null)
}


//функция добавляет класс active
const addActive = (elem) =>{
    let arrElemActive = document.querySelectorAll(".active")
    arrElemActive.forEach(el => {
        el.classList.remove("active");
    })
    elem.classList.add("active");
}
//функция создает картинку
const createImg =  (perent, src, className, altName) =>{
    let img = document.createElement("img");
    img.setAttribute("src", `${src}`);
    img.setAttribute("altName", `${altName}`);
    img.setAttribute("class", `${className}`)
    perent.append(img)
}
//функция делает элемент выбора региона
const getList =  (name, perent,url, textLink, textBtn, className, textLinkTwo) =>{
    fetch(`${url}${textLink}/`)
    .then(res => res.json())
    .then(res => {
        const {results = {}} = res
        createSelect (results, name, name, perent );
        btnForArr (url, perent, name, textBtn, className, textLinkTwo)
        addLike() 
    })
}
//функция вырезает часть массива
const getNewArr = (arr, start, and) =>{
return arr.slice(start, and)
}
//функция создает выпадающий список
const createSelect =  (arr, name, className, perent) =>{
    let select = document.createElement("select")
    select.classList.add(className);
    select.setAttribute("name", `${name}`)
    arr.forEach(el => {
        let option  = document.createElement("option")
        option.setAttribute("value", `${el.name}`)
        option.innerHTML = el.name;
        perent.append(select);
        select.append(option);
    })

}

//функция клика отображения эволюций
const showEvolition = () =>{
 const buttonEvolution = document.querySelector('.button-Evolution')
 buttonEvolution.addEventListener('click', function (e){
 let id = buttonEvolution.getAttribute("data-id")
 info.innerHTML = '';
 clickOnEvolution(id)
 e.preventDefault();
 })
}
//функция добавляет в любимые
const clickOnLikePokemon = () =>{
    const buttonLike = document.querySelector('.buttonLike')
    buttonLike.addEventListener('click', function (e){
    const name =  getInnerHTML ("namePokemon")
    let likePokemon = JSON.parse(sessionStorage.getItem("likePokemon"))
    if (likePokemon){
    likePokemon.push({ 
        name: name,
    })
    } else {
    likePokemon = [{ 
        name: name
   }]
}
sessionStorage.setItem("likePokemon", JSON.stringify(likePokemon))
addLike() 
})
}
 
//функция добавляет класс like
const addLike = () => {
    let likePokemonArr = JSON.parse(sessionStorage.getItem("likePokemon"))
    if (likePokemonArr){
        likePokemonArr.forEach(el =>{
            let favoritePokemon = serchElemAll(el.name)
            favoritePokemon.forEach(elem => {
                elem.classList.add("like");
            })
        })
    }
}
//функция делает пагинацию с фильтрацией
const btnForArr = (url, perent, nameElemValue, text, textBtn, textInLink) => {
    createElem ("button", perent, src = null, text, api = null, textBtn, dataAtr=null);
    let elemValue = serchElem (nameElemValue);
    let buttonFiltrArea = serchElem (textBtn);
    buttonFiltrArea.addEventListener('click', function (e){
        let value = elemValue.value;
        fetch(`${url}${textInLink}/${value}/`).
        then(res => res.json())
        .then(res => {
            if(textInLink=="type"){
                listPokemon = res.pokemon ||{};
                newArrPokemon = getNewArr (listPokemon, 0, pagination.limit);
            } else {
                listPokemon = res.pokemon_encounters ||{};
                newArrPokemon = listPokemon;
            }
            wrapPagination.innerHTML= "";
            pokemon.innerHTML= "";
            criatePagination (listPokemon.length, pagination.limit, wrapPagination);
            const paginationButton =  document.querySelectorAll('.pagination');
            newArrPokemon.forEach(element => {
                createElem ("button", pokemon, null, text = `${element.pokemon.name}`, api = `${url}pokemon/${element.pokemon.name}`,  `${element.pokemon.name}`)
                });
            paginationRequestFromArr (listPokemon, paginationButton)
            addLike() 
        })
    })
}
//функция получает значение InnerHTML
const getInnerHTML = (className) =>  serchElem(className).innerHTML;
//функция ищет элемент по классу
const serchElem = (className) =>  document.querySelector(`.${className}`)
//функция ищет все элемент по классу
const serchElemAll = (className) =>  document.querySelectorAll(`.${className}`)
//функция делает элементы
const createElem = (tag, append, src = null, text = null, api = null, className = null, dataAtr=null) => {
    let elem = document.createElement(tag)
    if(src){
        elem.src = src
        elem.alt = text
        elem.title = text
    }
    if(!src && text){
        elem.innerHTML = text
    }
    if(className){
        elem.setAttribute("class", `${className}`)
    }
    if(dataAtr){
        elem.setAttribute("data-id", `${dataAtr}`)
    }
    if(api){
        elem.addEventListener('click', () => {
            fetch(api)
                .then(res => res.json())
                .then(res => {
                    const { sprites = {}, species = {} , id = {} } = res;
                    const { front_default } = sprites;
                    const { name  } = species;
                    info.innerHTML = '';
                    
                    createElem('h3', info, null, name, api = null, "namePokemon", dataAtr=null);
                    createElem('img', info, front_default, name);
                    createElem('button', info, null, "эволюции", null, "button-Evolution", id);
                    createElem('button', info, null, "Добавить в 'любимые'", null, "buttonLike", `${name}`);
                    let allElem = serchElemAll("highlight");
                    allElem.forEach(el =>{
                        el.classList.remove("highlight");

                    })
                     //клик на кнопку отображения эволюций
                     showEvolition()
                    //клик на кнопку добавить в "любимые" 
                     clickOnLikePokemon ()
            })
        })
    }
    append.append(elem)
}

//делаем пагинацию c массива
const paginationRequestFromArr = (arr, arrBtn) => {
arrBtn.forEach(elem => {
        let id = elem.getAttribute("data-id")
        elem.addEventListener('click', function (e){
            pokemon.innerHTML = '';
            let newArr = arr.slice(id*pagination.limit,id*pagination.limit +pagination.limit );
            newArr.forEach(el => {
                createElem('button', pokemon, null, el.pokemon.name, el.pokemon.url, el.pokemon.name)
            })
            e.preventDefault();
             //находим список областей
            const select = serchElem ("selectArea");
            select.remove()
            const selectBtn = serchElem ("btnForArea");
            selectBtn.remove()
            getList("selectArea", filter, url, "location-area", "Сортировать по региону", "btnForArea", "location-area")
            addLike() 
            
        })
    })
}

//делаем пагинацию где есь поход в API
const paginationRequest = (id) => {
        let customLink = `?limit=${pagination.limit}&offset=${pagination.limit * id}`
        fetch(`${url}pokemon${customLink}`)
            .then(res => res.json())
            .then(res => {
                const {results = {}} = res
                results.forEach(el => {
                    createElem('button', pokemon, null, el.name, el.url, el.name)
                })
                addLike() 
            })
}
//клик на кнопку "эволюции"
const clickOnEvolution = (id) => {
    fetch(`${url}pokemon-species/${id}/`)
    .then(res => res.json())
    .then(res => {
        const {evolution_chain = {}} = res
        getEvolution(evolution_chain.url)
    })
}
//функция определяет эволюции покемона
const getEvolution = (url) => {
    fetch(`${url}`).
    then(res => res.json())
    .then(res => {
        let arrEvolution = []
        const {chain = {}} = res
        const pokemonEvolutionOne = chain?.species?.name;
        const pokemonEvolutionTwo = chain?.evolves_to?.[0]?.species?.name;
        const pokemonEvolutionThree = chain?.evolves_to[0]?.evolves_to[0]?.species?.name;
        arrEvolution.push(pokemonEvolutionOne)
        arrEvolution.push(pokemonEvolutionTwo)
        arrEvolution.push(pokemonEvolutionThree)   
        createElem("h3", info, src = null, "Эволюции покемона", api = null, className = null, dataAtr=null)
        createElem("ul", info, src = null, text = null, api = null, "listEvolutionOne", dataAtr=null)
        const listEvolutionOne = document.querySelector('.listEvolutionOne')
        arrEvolution.forEach(elem => {
            if (elem){
                createElem("li", listEvolutionOne, src = null, elem, api = null, "evolution", dataAtr=null)
                let elemButton = serchElem(elem)
                if(elemButton){
                    elemButton.classList.add("highlight");
                }
            }
        })

    })
}
//функция делает кнопки пагинации
const criatePagination = (countElem, limit, parentElem) => {
    for (let i = 0; i <= Math.floor(countElem/limit); i++){
        createElem ("button", parentElem, src = null, text = `${i+1}`, api = null, `pagination button${i}`, `${i}`, true ) 
    }
    //делаем первую кнопку пагинации активной
    let firstButton = serchElem("button0")
    addActive(firstButton)
}
//функция делает кнопки пагинации при использовании фильтра
const criatePaginationButton = (arr) => {
        arr.forEach(elem => {
            let id = elem.getAttribute("data-id")
            elem.addEventListener('click', function (e){
                pokemon.innerHTML = '';
                paginationRequest(id)
                e.preventDefault();
                 //находим список областей
                const select = serchElem ("selectArea");
                select.remove()
                const selectBtn = serchElem ("btnForArea");
                selectBtn.remove()
                getList("selectArea", filter, url, "location-area", "Сортировать по региону", "btnForArea", "location-area")
                addLike() 
            })
        })
    } 



let url = 'https://pokeapi.co/api/v2/';
const pagination = {
    limit: 20,
}
//отрисовываем страницу
render ();
const pokemon = serchElem ("pokemon");
const info  = serchElem ("info");
const wrapPagination =  serchElem ("wrap-pagination");
const filter = serchElem ("filter")
const filterType = serchElem ("filterByType")


fetch(`${url}pokemon`)
.then(res => res.json())
.then(res => {
    const  {count = {}, results = {}} = res;
    //делаем пагинацию
    criatePagination (count, pagination.limit, wrapPagination);
    const paginationButton =  document.querySelectorAll('.pagination')
    results.forEach(element => {
        createElem ("button", pokemon, null, text = element.name, api = `${url}pokemon/${element.name}`,  `${element.name}`)
    });
    criatePaginationButton (paginationButton)
     //находим список областей
    getList("selectArea", filter, url, "location-area", "Сортировать по региону", "btnForArea", "location-area")
    getList("selectType", filterType, url, "type", "Сортировать по типу", "btnForType", "type")
    addLike() 
})

//подсвечиваем выбранную страницу
document.addEventListener('click', function (e){
    var elem = e.target;
    var check = elem.matches('.pagination');
    if (check) {
       addActive(elem)
    }
})
