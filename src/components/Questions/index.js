import './style.scss'
import info from '../../info.js'
import { createElem } from "helper/helper.js";

const Questions = (perent) => {
    createElem("div", perent, null,null, "questionsWrap")
    let  questionsWrap = document.querySelector(".questionsWrap")
    questionsWrap.innerHTML = `
    <img src="/assets/images/map.png" alt="img map" class="map">
    `
    createElem("div", questionsWrap, null,null, "questionsFild")
    let  questionsFild = document.querySelector(".questionsFild")
    createElem("div", questionsFild, null,null, "questions")
    let  questions = document.querySelector(".questions")
    createElem("h4", questions, null, `${info.questions.h4}`, "h4Questions")
    createElem("p", questions, null, `${info.questions.text}`, "pQuestions")
    createElem("div", questionsFild, null,null, "fild")
    let  fild = document.querySelector(".fild")
    fild.innerHTML = `
    <input class = "fildInput" name="name" placeholder="${info.questions.fildOne}" type="text" />
    <input class = "fildInput" name="tel" placeholder="${info.questions.fildTwo}" type="text" />
    <button class = "btnInput">${info.questions.btn} </button>
    <img src="/assets/images/tel.png" alt="img" class="telImg"> 
    `
}
//(tag, append, src = null, text = null, className = null, dataAtr=null, href = null)

//<input name="guruweba_example_text" type="text" />
export default Questions