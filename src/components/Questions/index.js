import './style.scss'
import info from '../../info.js'
import { createElem , createElemNew} from "helper/helper.js";

const Questions = () => {
    const questionsWrap = createElemNew("div", null, null,"questionsWrap")
    questionsWrap.innerHTML = `
    <img src="/assets/images/map.png" alt="img map" class="map">
    `
    let  questionsFild = createElem("div", questionsWrap, null,null, "questionsFild")
    let  questions = createElem("div", questionsFild, null,null, "questions")
    createElem("h4", questions, null, `${info.questions.h4}`, "h4Questions")
    createElem("p", questions, null, `${info.questions.text}`, "pQuestions")
    let  fild =  createElem("div", questionsFild, null,null, "fild")
    fild.innerHTML = `
    <input class = "fildInput" name="name" placeholder="${info.questions.fildOne}" type="text" />
    <input class = "fildInput" name="tel" placeholder="${info.questions.fildTwo}" type="text" />
    <button class = "btnInput">${info.questions.btn} </button>
    <img src="/assets/images/tel.png" alt="img" class="telImg"> 
    `
    return questionsWrap
}

export default Questions