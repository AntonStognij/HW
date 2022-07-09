const dinoOpion = { 
    click: false,
    dino: ["img/body_color/1.png", "img/body_color/2.png", "img/body_color/3.png", "img/body_color/4.png", "img/body_color/5.png", "img/body_color/6.png"],
    eyes: ["img/eyes/1.png", "img/eyes/2.png", "img/eyes/3.png", "img/eyes/4.png"],
    head: ["img/head/1.png", "img/head/2.png", "img/head/3.png"],
    mouth: ["img/mouth/1.png", "img/mouth/2.png", "img/mouth/3.png"],
    scale: ["img/scale/1.png", "img/scale/2.png", "img/scale/3.png"],
    spots: ["img/spots/1.png", "img/spots/2.png", "img/spots/3.png", "img/spots/4.png"], 
    icons: ["img/icons/1.png", "img/icons/2.png", "img/icons/3.png", "img/icons/4.png", "img/icons/5.png", "img/icons/6.png"],
    arrClassNamechoiceDetails:["eyes","head","mouth", "scale","spots","dino"],
    arrClassNameResult:["dino1","dino2","dino3", "dino4","dino5","dino6","eyes1","eyes2", "eyes3","eyes4", "head1", "head2","head3", "mouth1","mouth2", "mouth3", "scale1","scale2", "scale3", "spots1", "spots2","spots3","spots4"],
    arrClassNameMain : ["img0", "img1", "img2", "img3","img4","img5"],
    objRes :{},
    maxElemArr : 6,
    fillObjRes(arr) {
        for(i=0; i < arr.length; i++ ){
            this.objRes[arr[i]] = "";
        }
    },
    createElem(type, className) {
        return '<'+type+' class="' + className + '"></'+type+'>'
    },
    createImg(className, src) {
        return '<img class="'+ className + '" src="'+src+'" alt="img"></img>'
    },
    createBtn(className, url, index) {
        return '<div class="btn ' + className + '"><img class="img-btn" src="' + url + '" alt="' + className + index + '"></div>'
    },
    addImgWithArrinBtn(arr, nameDive, className) {
        for (i=0; i < arr.length; i++){
           
        this.addElem(nameDive + i , this.createImg(className+ (i + 1), arr[i]))
    }},
    addImgWithArr(arr, nameDive, className) {
        
        for (i=0; i < arr.length; i++){
        this.addElem(nameDive, this.createImg(className+ (i + 1), arr[i]))
    }},
    addElem(perent, elem) {
       $('.'+perent+'').append(elem);
    },
    openElemByName(arr, openElem) {
        for (i=0; i<arr.length; i++){
            if(arr[i]==openElem){
                $('.'+openElem+'').removeClass('hidden');
            } else {
                $('.'+arr[i]+'').addClass('hidden'); 
            }
        }
     },
     delBorder(arr, openElem){
        for (i=0; i<arr.length; i++){
            if(arr[i]==openElem){
                $('.'+openElem+'').addClass('click');
            } else {
                $('.'+arr[i]+'').removeClass('click'); 
            }
        }
     },
     openElemByArr(arrAll, objRes) {
        //получаем массив со значениями
        let arrResValue = Object.values(objRes);
        //проверяем кого открываем
        for (i=0; i<arrAll.length; i++){
            if (arrResValue.includes(arrAll[i])){
                $('.'+arrAll[i]+'').removeClass('hidden');
            } 
            else {
                $('.'+arrAll[i]+'').addClass('hidden');
            };
        }
     },
     clickOnElem(className, twoClassName){
        this.objRes[""+twoClassName+""] = className;
        this.openElemByArr(this.arrClassNameResult, this.objRes)
        $('.'+twoClassName+'').removeClass('hidden');
        this.openElemByName( dinoOpion.arrClassNamechoiceDetails,""+twoClassName+"");
     },

    render() {
        $('body').append('<div class="wrap"></div>');
        $('.wrap').append('<div class="choice-main"></div>');
        $('.wrap').append('<div class="choice-details"></div>');
        $('.wrap').append('<div class="result"></div>');

    for (i=0; i < this.maxElemArr; i++){
    this.addElem("choice-main", this.createBtn("img"+i, this.icons[i], i))
    this.addElem("choice-details", this.createElem("div", " btn not-border choice-details"+i+""))
}
    this.addImgWithArrinBtn(this.dino, "choice-details", "img-btn hidden dino dino")
    this.addImgWithArrinBtn(this.eyes, "choice-details", "img-btn hidden eyes eyes")
    this.addImgWithArrinBtn(this.head, "choice-details", "img-btn hidden head head")
    this.addImgWithArrinBtn(this.mouth, "choice-details", "img-btn hidden mouth mouth")
    this.addImgWithArrinBtn(this.scale, "choice-details", "img-btn hidden scale scale")
    this.addImgWithArrinBtn(this.spots, "choice-details", "img-btn hidden spots spots")
    this.addElem("result", this.createElem("div", "result-dino"))
    this.addImgWithArr(this.dino, "result-dino", 'img-btn hidden dino')
    this.addImgWithArr(this.eyes, "result-dino", "img-btn little-elem hidden eyes")
    this.addImgWithArr(this.head, "result-dino", "img-btn little-elem hidden head")
    this.addImgWithArr(this.mouth, "result-dino", "img-btn little-elem hidden mouth")
    this.addImgWithArr(this.scale, "result-dino", "img-btn little-elem hidden scale")
    this.addImgWithArr(this.spots, "result-dino", "img-btn little-elem hidden spots")
    this.addElem("result-dino", this.createElem("h1", "text"))
    $(".text").text("My little Dino")
    this.fillObjRes(this.arrClassNamechoiceDetails)
    }
}


$(document).ready(function () {
    //отрисовываем страницу
    dinoOpion.render()
    //клики на элементы
    $('.img0').on('click', function (e) {
        $('.choice-details').addClass('click-dino')
        dinoOpion.openElemByName( dinoOpion.arrClassNamechoiceDetails,"dino");  
        $('.img0').addClass('click')      
    })

    $('.img1').on('click', function (e) {
        if (dinoOpion.click == true) {
            dinoOpion.openElemByName(dinoOpion.arrClassNamechoiceDetails,"eyes");
            dinoOpion.delBorder(dinoOpion.arrClassNameMain, "img1") 
        }

    })
    $('.img2').on('click', function (e) {
        if (dinoOpion.click == true) {
            dinoOpion.openElemByName(dinoOpion.arrClassNamechoiceDetails,"head");
            dinoOpion.delBorder(dinoOpion.arrClassNameMain, "img2")  
        }

    })
    $('.img3').on('click', function (e) {
        if (dinoOpion.click == true) {
            dinoOpion.openElemByName(dinoOpion.arrClassNamechoiceDetails,"mouth");
            dinoOpion.delBorder(dinoOpion.arrClassNameMain, "img3")  
        }

    })
       $('.img4').on('click', function (e) {
        if (dinoOpion.click == true) {
            dinoOpion.openElemByName(dinoOpion.arrClassNamechoiceDetails,"spots");
            dinoOpion.delBorder(dinoOpion.arrClassNameMain, "img4")  
        }

    })
    $('.img5').on('click', function (e) {
        if (dinoOpion.click == true) {
            dinoOpion.openElemByName(dinoOpion.arrClassNamechoiceDetails,"scale");
            dinoOpion.delBorder(dinoOpion.arrClassNameMain, "img5")   
        }

    })
    $('.not-border').on('click', function (e) {
        $(".text").addClass('hidden');
    })
//клики на динозавров
    $('.dino1').on('click', function (e) {
        dinoOpion.clickOnElem("dino1", "dino");
        dinoOpion.click = true;
    })
    $('.dino2').on('click', function (e) {
        dinoOpion.clickOnElem("dino2", "dino");
        dinoOpion.click = true;
    })
    $('.dino3').on('click', function (e) {
        dinoOpion.clickOnElem("dino3", "dino");
        dinoOpion.click = true;
    })
    $('.dino4').on('click', function (e) {
        dinoOpion.clickOnElem("dino4", "dino");
        dinoOpion.click = true;
    })
    $('.dino5').on('click', function (e) {
        dinoOpion.clickOnElem("dino5", "dino");
        dinoOpion.click = true;
    })
    $('.dino6').on('click', function (e) {
        dinoOpion.clickOnElem("dino6", "dino");
        dinoOpion.click = true;
    })
//клики на глаза
    $('.eyes1').on('click', function (e) {
        dinoOpion.clickOnElem("eyes1", "eyes")
    })
    $('.eyes2').on('click', function (e) {
        dinoOpion.clickOnElem("eyes2", "eyes")
    })
    $('.eyes3').on('click', function (e) {
        dinoOpion.clickOnElem("eyes3", "eyes")
    })
    $('.eyes4').on('click', function (e) {
        dinoOpion.clickOnElem("eyes4", "eyes")
    })
    //клики на кепку
    $('.head1').on('click', function (e) {
        dinoOpion.clickOnElem("head1", "head")
    })
    $('.head2').on('click', function (e) {
        dinoOpion.clickOnElem("head2", "head")
    })
    $('.head3').on('click', function (e) {
        dinoOpion.clickOnElem("head3", "head")
    })
     //клики на рот
     $('.mouth1').on('click', function (e) {
        dinoOpion.clickOnElem("mouth1", "mouth")
    })
    $('.mouth2').on('click', function (e) {
        dinoOpion.clickOnElem("mouth2", "mouth")
    })
      $('.mouth3').on('click', function (e) {
        dinoOpion.clickOnElem("mouth3", "mouth")
    })
    //клики на рот
    $('.mouth1').on('click', function (e) {
        dinoOpion.clickOnElem("mouth1", "mouth")
    })
    $('.mouth2').on('click', function (e) {
        dinoOpion.clickOnElem("mouth2", "mouth")
    })
      $('.mouth3').on('click', function (e) {
        dinoOpion.clickOnElem("mouth3", "mouth")
    })
    //клики на пятна
    $('.spots1').on('click', function (e) {
        dinoOpion.clickOnElem("spots1", "spots")
    })
    $('.spots2').on('click', function (e) {
        dinoOpion.clickOnElem("spots2", "spots")
    })
    $('.spots3').on('click', function (e) {
        dinoOpion.clickOnElem("spots3", "spots")
    })
    $('.spots4').on('click', function (e) {
        dinoOpion.clickOnElem("spots4", "spots")
    })
     //клики на спину
     $('.scale1').on('click', function (e) {
        dinoOpion.clickOnElem("scale1", "scale")
    })
     $('.scale2').on('click', function (e) {
        dinoOpion.clickOnElem("scale2", "scale")
    })
    $('.scale3').on('click', function (e) {
        dinoOpion.clickOnElem("scale3", "scale")
    })
})
