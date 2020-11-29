export class CanvasBase {
    private canvas:HTMLCanvasElement;
    ctx:CanvasRenderingContext2D;
    height:number;
    width:number;

    constructor() {
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');

        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.resize();
    }

    private resize() {
        addEventListener("resize", () => {
            this.canvas.width = this.width;	
            this.canvas.height = this.width;
        });
    }
}