export class CanvasBase {
    canvas:HTMLCanvasElement;
    ctx:CanvasRenderingContext2D;

    constructor() {
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.resize();
    }

    private resize() {
        addEventListener("resize", () => {
            this.canvas.width = window.innerWidth;	
            this.canvas.height = window.innerHeight;
        });
    }
}