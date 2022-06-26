class Game{
    constructor() {
        this.interval = 1000;
        this.count = 0;
    }
    createCount(){
        this.divCount = document.createElement('div');
        this.divCount.className = 'blockCount';
        this.divCount.style.cssText = `
            text-align: center;
            margin-top: 50px;
            font-size: 36px;
            font-weight: bold;`
        document.body.append(this.divCount)
        this.blockCount = document.querySelector('.blockCount')
        this.span = document.createElement('span');
        this.spanTitle = document.createElement('span');
        this.spanTitle.className = 'spanTitle';
        this.span.className = 'spanCount';
        this.span.innerHTML = this.count;
        this.spanTitle.innerHTML = "Ваш счет: ";
        this.blockCount.append(this.spanTitle);
        this.blockCount.append(this.span);
    }
    getElem (nameclass) { 
      return document.querySelector(nameclass);
    }
    getCount (nameclass){
        this.elem = this.getElem(nameclass) ;
        return this.elem.innerHTML
    }
    addCount() {
        this.elem = this.getElem(".spanCount") ;
        this.count++;
        this.elem.innerHTML = this.count;
       
    }
    updateCounter (){
        this.span = document.querySelector('.spanCount');
        this.span.innerHTML =  this.count;
    }
    updateTitle (){
        let title = this.getElem('.spanTitle');
        title.innerHTML = "Игра окончена! Ваш счет: ";
    }
    start(){
        this.createCount()
        this.balls = [];
        this.intervalStart = setInterval(() => {
            this.balls.push(new ControlBall().init());
        }, this.interval)
    }
}