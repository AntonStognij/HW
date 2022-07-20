
const opt = {
    answerForElemForElem:"",
    answerForElemForCheck:[],
    qestion:"",
    rotate:0,
    res:0,
    win:false,
    time:30,
    words:"Назовите букву, что есть в этом слове!",
    arrQestions:[{"Гепард":"Самое быстрое животное на суше?" }, {"Земля":"Третья по удалённости от Солнца планета Солнечной системы.?" }, {"Зевс":"Верховный бог у древних греков?" },{"Константинополь":"До 1923 года как назывался турецкий город Стамбул?"},{"Сакура":"Какой национальный цветок Японии?"}],
    arranswerForElem:[],
    countLetter : 0,
    showRes:false,
    clickOnLetter:true,
    idInterval :0,
    //функция запускает интервал
    runInterval(){
        this.idInterval = setInterval( function() {
            opt.time--;
            $('.timer').text(""+opt.time+"");
            if(opt.time == 5){
                opt.makeYakubovichWords("Спешите, время истекает!");
            }
            if(opt.time == 0) {
                opt.stopInterval()
                opt.makeYakubovichWords ("К сожалению, время вышло... Вы проиграли!");
                opt.clickOnLetter = false;
                opt.clickOnLetter = false;
            }
            if(opt.res == "failed" ||opt.res == "win") {
                opt.stopInterval()
            }

        } , 1000);
    },
    //функция останавливает интервал
    stopInterval(){
        clearInterval(this.idInterval)
        this.time = 30;
        $('.timer').text(""+this.time+"");
    },
    //функция делает рандомное число
    random  (min, max) { return Math.floor(min + Math.random() * (max + 1 - min))} ,
    //функция отображает слова Якубовича
    showWords (){
            $('.yakubovichSay').text(this.words);
        },
    //функция отображает результат по очкам    
    showScore (){
        if(this.showRes){
            $('.score').text(this.res);
        }
            
    },
    //функция отпраделяет очки от угла поворота барабана
    getRes (){
        if(this.rotate >360){
            this.rotate = this.rotate - 360; 
        }
        if (this.rotate>= 0 &&this.rotate <= 11) {
            this.res +=300; 
        }
        if (this.rotate>= 12 &&this.rotate <= 35) {
            this.res +=500; 
        }
        if (this.rotate>= 36 &&this.rotate <= 57) {
            this.res = "win"; 
            this.showRes = false;
        }
        if (this.rotate>= 58 &&this.rotate <= 80) {
            this.res +=0;  
        }
        if (this.rotate>= 81 &&this.rotate <= 102) {
            this.res +=900;  
        }
        if (this.rotate>= 103 &&this.rotate <= 125) {
            this.res +=400;  
        }
        if (this.rotate>= 126 &&this.rotate <= 148) {
            this.res +=1;  
        }
        if (this.rotate>= 149 &&this.rotate <= 170) {
            this.res +=800;  
        }
        if (this.rotate>= 171 &&this.rotate <= 192) {
            this.res +=600;  
        }
        if (this.rotate>= 193 &&this.rotate <= 215) {
            this.res =this.res*2;  
        }
        if (this.rotate>= 216 &&this.rotate <= 238) {
            this.res +=100;  
        }
        if (this.rotate>= 239 &&this.rotate <= 260) {
            this.res +=1000;  
        }
        if (this.rotate>= 261 &&this.rotate <= 282) {
            this.showRes = false;
            this.res = "failed";  
        }
        if (this.rotate>= 283 &&this.rotate <= 305) {
            this.res +=700; 
        }
        if (this.rotate>= 306 &&this.rotate <= 327) {
            this.res =this.res*3;  
        }
        if (this.rotate>= 328 &&this.rotate <= 350) {
            this.res +=200; 
        }
        if (this.rotate>= 351 &&this.rotate <= 360) {
            this.res +=300; 
        }

     },
     //функция получает вопрос и ответ с массива
    getQestionAndanswerForElem() {
        let index = this.random(0, this.arrQestions.length-1)
        let obj = this.arrQestions[index];
        this.answerForElem = Object.keys(obj)["0"].toUpperCase();
        this.qestion = Object.values(obj)["0"];
        this.arrQestions.splice(index, 1);
        this.arranswerForElem = Array.from(this.answerForElem);
        this.answerForElemForCheck = this.arranswerForElem.slice();
        this.countLetter = this.arranswerForElem.length;
    },
    //функция проверяет ввод буквы
    checkLetter(letter){
        return (letter && letter.length == 1)
    },
    //функция отрисовывает вопрос
    setQestion() {
        $(".wrapQuest").text(this.qestion );
    },
    //функция делает поля для букв
    createElem() {
        this.arranswerForElem.forEach(function (elem, index){
            $(".wrapLetters").append('<li class="itemLetter letter'+index+'"></li>'); 
        })
        
    },
    //функция делает поворот барабана
    stepRoll() {
        let now = this.random(0, 360);
        opt.rotate += now;
        $('.baraban').css('-webkit-transform','rotate(-'+opt.rotate+'deg)');
    },
    // функция проверяет введенную букву и отрисовывает ее 
    checkAnswerForElem(letter, i) {
        if(this.answerForElemForCheck.indexOf(letter) !=-1){
            let index = this.arranswerForElem.indexOf(letter, i);
            this.answerForElemForCheck.splice(this.answerForElemForCheck.indexOf(letter), 1);
            if (index != -1) {
                $('.letter'+index+'').text(letter);
                this.checkAnswerForElem(letter, index+1)
            }
        }
        this.checkRes();  
    },
    //функция проверяет условия выигрыша и проигрыша
    checkRes(){
        if(this.answerForElemForCheck.length==0||this.res == "win"){
            this.makeYakubovichWords ("Мое почтение! ВЫ ПОБЕДИЛЬ! Ваш результат - "+$('.score').text()+" очков.");
            this.win = true;
            this.clickOnLetter = false;
            this.showRes = false;
        }
        if (this.res == "failed"){
            this.makeYakubovichWords ("Барабан решил, что Вы проиграли! Повезет в другой раз!");
            this.clickOnLetter = false; 
        }
    },
    //функция отрисовывает текст Якубовича
    makeYakubovichWords(text){
        this.words = text;
        opt.showWords ();
    },
    //функция проверяет указаную букву
    checkAnswer(letter){
        if(this.answerForElemForCheck.indexOf(letter) !=-1) {
            this.makeYakubovichWords ("Есть такая буква! Крутите барабан");
            opt.stopInterval();
            this.showRes = true;
            this.clickOnLetter = false; 
        } else if (this.answerForElemForCheck.indexOf(letter) ==-1 && this.arranswerForElem.indexOf(letter) !=-1 ){
            opt.makeYakubovichWords ("Не тупите, она ж уже открыта!")
        } else {
            this.makeYakubovichWords ("Такой буквы в слове нет! Вы проиграли!");
            this.clickOnLetter = false;  
        }
}

}
//функция определяет вопрос и ответ
opt.getQestionAndanswerForElem()

$(document).ready(function () {
    opt.setQestion();
    opt.createElem();
    opt.makeYakubovichWords (opt.words);
    //клик на ввод буквы
    $('.send').on('click', function (e) {
        if(opt.clickOnLetter){
            let letter = $(".myLetter").val();
             if (opt.checkLetter(letter)){
            //  opt.stopInterval()
             letter=letter.toUpperCase();
             if(!opt.win){
             opt.checkAnswer(letter)}
             opt.checkAnswerForElem(letter, 0)
             $(".myLetter").val("");
         } else {
             opt.makeYakubovichWords ("Подмайте еще и назовите одну букву!")
             $(".myLetter").val("");
             }
        }
       
    })
    //клик для поворота барабана
        $('.roll').on('click', function (e) {
            if(opt.showRes){
            opt.stepRoll();
            opt.getRes();
            opt.showScore();
            opt.clickOnLetter = true;
            opt.makeYakubovichWords("Укажите букву, что есть в этом слове!");
            opt.showRes = false;
            opt.checkRes();
            opt.runInterval();
        }
    })
  
}
)
