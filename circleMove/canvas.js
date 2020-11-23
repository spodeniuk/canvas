class BaseElement {
    getRandomColor() {
        return "#"+((1<<24)*Math.random()|0).toString(16);
    }
    
    getRandomDirection(speed) {
        return (Math.random() - 0.5) > 0 ? speed : -speed;
    }
    
    getRandomRadius() {
        return Math.floor(Math.random() * 30) + 6;
    }

    getRandomPosition(direction, radius) {
        const width = direction === 'x' ? window.innerWidth : window.innerHeight;
        const result = Math.random() * (width - this.radius);
    
        return result - radius > width / 2 ? result - radius : result + radius;
    }
}

class Circle extends BaseElement {
    constructor(context) {
        super();

        this.context = context;
        this.radius = super.getRandomRadius();
        this.x = super.getRandomPosition('x', this.radius);
        this.y = super.getRandomPosition('y', this.radius);
        this.xDirection = super.getRandomDirection(5);
        this.yDirection = super.getRandomDirection(5);
        this.color = super.getRandomColor();
    }

    changeColor() {
        this.color = super.getRandomColor();
    }

    update() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        this.context.fillStyle = this.color;
        this.context.fill();

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

class Animation {
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.context = this.canvas.getContext('2d');
        this.circlesLength = 10;
        this.circles = [];

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    start() {
        this.initCircles();
        this.run();
    }

    run() {
        requestAnimationFrame(this.run.bind(this));
        this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        for(let circle of this.circles) circle.update();
    }

    initCircles() {
        let i = 0;

        while(i < this.circlesLength) {
            this.circles.push(new Circle(this.context));
            i++;
        }
    }
}

const animation = new Animation();

animation.start();
