import { CanvasBase } from "./canvasBase";

class Text extends CanvasBase {
    size:string;
    text:string;
    font:string;

    constructor(text:string, size:string, font:string) {
        super();

        this.text = text;
        this.size = size;
        this.font = font;

        this.draw();
    }

    draw() {
        this.ctx.fillStyle = "#fe9915";
        this.ctx.font = `${this.size} ${this.font}`;
        this.ctx.textBaseline = 'middle'; 
        this.ctx.textAlign = 'center'; 
        this.ctx.fillText(this.text, this.width / 2, this.height / 2);
    }
}

class Circle extends CanvasBase {
    x:number;
    y:number;
    radius:number;
    gradient:CanvasGradient;

    constructor(x:number, y:number) {
        super();

        this.x = x;
        this.y = y;
        this.radius = 26;

        this.initGradient();
        this.draw();
    }

    initGradient() {
        this.gradient = this.ctx.createRadialGradient(this.x, this.y, this.radius / 3, this.x, this.y, this.radius);
        this.gradient.addColorStop(0, "#FFC72F");
        this.gradient.addColorStop(1, "#fe9915");
    }

    draw() {
        new Text("#Insurance", "20px", "san-serif");

        this.ctx.globalCompositeOperation = "source-atop";
        this.ctx.beginPath();
        this.ctx.ellipse(this.x, this.y, this.radius, this.radius, 0, Math.PI * 2, 0);
        this.ctx.fillStyle = this.gradient;
        this.ctx.fill();
    }
}

export class TextHover extends CanvasBase {
    circleX:number;
    circleY:number;

    constructor() {
        super();

        this.subscription();
    }

    subscription() {
        this.canvas.addEventListener('mousemove', e => {
            this.circleX = e.clientX;
            this.circleY = e.clientY;
            requestAnimationFrame(this.update.bind(this));
        });
    }

    start() {
        this.update();
    }


    update() {
        new Circle(this.circleX, this.circleY);
    }
}