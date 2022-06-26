class ControlBall extends Game{
    constructor(interval, count ) {
        super(interval,count)
        this.lvl = 1; 
        this.size = 100 / Number(`1.${this.lvl}`);
        this.speed = 5;
        this.intervalMove = 50;  
        this.fail = 0;   
    }
    
    init(){
        this.generateBall();
        this.move()
    }
    
    addLvl (){
        if (controlBall.getCount(".spanCount") % 10 == 0 ) {
            this.lvl++
        }
    }

    updateInterval (){
        this.intervalMove = this.intervalMove - this.lvl * 0.5;
    }
    generateBall(){
        this.ball = new Ball(this.size, this.generateX())
        this.ball.addEventListener('click', () => {
            //ведем счет
            controlBall.addCount()
            //меняем lvl
            controlBall.addLvl()
            //увеличиваем скорость движения шарика
            controlBall.updateInterval()           
            this.destroy(); 
            this.speed = 0
        })
    }

    addFail () {
        this.fail++;
    }
    generateX(){
        return Math.floor(this.size + Math.random() * (window.innerWidth + 1 - this.size)) - this.size
    }
    destroy(){
        this.ball.remove();
        delete this;
    }

    move(){
        let y = 0;
        this.moveInterval = setInterval(() => {
            y += this.speed;
            this.ball.style.top = `${y}px`;
            if(y > window.innerHeight - this.size){
                //определяем окончание игры
                if (controlBall.fail > 1){
                    this.balls = document.querySelectorAll(".ball")
                    this.balls.forEach(el => el.remove())
                    clearInterval(game.intervalStart)
                    clearInterval(game.moveInterval)
                    this.updateTitle()
                    this.speed = 0;
                    y = 0 ;
                    
                 }
                clearInterval(this.moveInterval)
                this.destroy()
                controlBall.addFail();
               
            }
        }, controlBall.intervalMove)
        
    }
    
}