import { CanvasBase } from "./canvasBase";

import { RandomHelper } from "../helpers";

const NUMBER_OF_DOTS = 70;

class Dot {
    private ctx:CanvasRenderingContext2D;
    private y:number;
    private x:number;
    private dy:number;
    private radiusX:number;
    private radiusY:number;
    private gravity:number;
    private friction:number;

    constructor(context:CanvasRenderingContext2D) {
        this.ctx = context;
        this.radiusX = RandomHelper.getNumber(10, 20);
        this.radiusY = this.radiusX;
        this.gravity = RandomHelper.getNumber((this.radiusY * 5) / 1.5, (this.radiusY * 5) / 1.5) / 100;
        this.friction = 0.8;
        this.x = RandomHelper.getNumber(0, window.innerWidth - this.radiusY);
        this.y = RandomHelper.getNumber(-window.innerHeight / 2, window.innerHeight - this.radiusY);
        this.dy = RandomHelper.getNumber(-2, 2);
    }

    public update() {
        if (this.y + this.radiusX + this.dy > window.innerHeight) {
			this.dy = -this.dy;
			this.dy = this.dy * this.friction;
		} else {
			this.dy += this.gravity;
		}

        this.y += this.dy;
        this.draw();
    }

    private draw() {
        this.ctx.beginPath();
        this.ctx.ellipse(this.x, this.y, this.radiusX, this.radiusY, 0, Math.PI * 2, 0);
        this.ctx.fillStyle = 'red';
        this.ctx.fill();
    }
}

export class GravityCircles extends CanvasBase {
    $dots:Dot[];

    constructor() {
        super();
        this.$dots = [];
    }

    start() {
        this.run();
        this.populateCircles();
    }

    run() {
        requestAnimationFrame(this.run.bind(this));
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        for(let dot of this.$dots) dot.update();
    }

    populateCircles() {
        let i = 0;

        while(i < NUMBER_OF_DOTS) {
            this.$dots.push(new Dot(this.ctx));
            i++;
        }
    }

}