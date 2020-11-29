import { CanvasBase } from "./canvasBase";

const SYMBOLS = "10";
const FONT_SIZE = 15;

export class Matrix extends CanvasBase {
    $columns:number[];
    matrix: string[];

    constructor() {
        super();
        this.matrix = SYMBOLS.split('');
        this.$columns = new Array(Math.round(this.width / FONT_SIZE)).fill(1);
    }

    start() {
        this.run();
    }

    drawBackground() {
        this.ctx.fillStyle = "rgba(0, 0, 0, 0.04";
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    run() {
        requestAnimationFrame(this.run.bind(this));
        this.drawBackground();

        this.ctx.fillStyle = "#0F0";
        this.ctx.font = FONT_SIZE + "px arial";

        for(let i = 0; i < this.$columns.length; i++) {
            const text = this.matrix[Math.floor(Math.random() * this.matrix.length)];
            this.ctx.fillText(text, i * FONT_SIZE, this.$columns[i] * FONT_SIZE);
            if(this.$columns[i] * FONT_SIZE > this.height && Math.random() > 0.975) this.$columns[i] = 0;
            this.$columns[i]++;
        }
    }
}