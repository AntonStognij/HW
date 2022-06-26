class Ball{
    constructor(size, x) {
        this.size = size;
        this.x = x;
        this.createBall();
        return this.ball;
    }

    createBall(){
        this.ball = document.createElement('div');
        this.ball.className = 'ball';
        this.ball.style.cssText = `
            position: fixed;
            width: ${this.size}px;
            height: ${this.size}px;
            background: rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255}, 0.7);
            border-radius: 50%;
            top: 0px;
            left: ${this.x}px;`
        document.body.append(this.ball)
    }
}