const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');

//Square
context.fillStyle = 'red';
context.fillRect(100, 100, 100, 100);

//Line
context.beginPath();
context.moveTo(50, 300);
context.lineTo(300, 100);
context.lineTo(100, 500);
context.strokeStyle = "red";
context.stroke();

//Circle
function drawCircle() {
    const color = "#"+((1<<24)*Math.random()|0).toString(16);
    const radius = Math.floor(Math.random() * 30) + 6;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    context.beginPath();
    context.arc(x, y, radius, Math.PI * 2, false);
    context.strokeStyle = color;
    context.stroke();
}

drawCircle();

let n = 0;

while (n < 5) {
    drawCircle();
    n++;
}