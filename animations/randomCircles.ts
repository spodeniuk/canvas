import { CanvasBase } from './canvasBase';

import { RandomHelper } from '../helpers';

const MOVE_SPEED = 5;
const NUMBER_OF_CIRCLES = 10;

class Circle {
    ctx:CanvasRenderingContext2D;
    radius:number;
    x:number;
    y:number;
    xDirection:number;
    yDirection:number;
    color:string;

    constructor(context) {
        this.ctx = context;
        this.radius = RandomHelper.getNumber(6, 30);
        this.x = RandomHelper.getPosition('x', this.radius);
        this.y = RandomHelper.getPosition('y', this.radius);
        this.xDirection = this.getDirection();
        this.yDirection = this.getDirection();
        this.changeColor();
    }

    getDirection() {
        return RandomHelper.isBiggerZero() ? MOVE_SPEED : -MOVE_SPEED;
    }

    changeColor() {
        this.color = RandomHelper.getColor();
    }

    update() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();

        if(this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
            this.changeColor();
            this.xDirection = -this.xDirection;
        }
    
        if(this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
            this.changeColor();
            this.yDirection = -this.yDirection;
        }

        this.x += this.xDirection;
        this.y += this.yDirection;
    }
}

export class RandomCircles extends CanvasBase {
    $circles:Circle[];

    constructor() {
        super();
        this.$circles = [];
    }

    start() {
        this.initCircles();
        this.run();
    }

    run() {
        requestAnimationFrame(this.run.bind(this));
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        for(let circle of this.$circles) circle.update();
    }

    initCircles() {
        let i = 0;

        while(i < NUMBER_OF_CIRCLES) {
            this.$circles.push(new Circle(this.ctx));
            i++;
        }
    }
}
