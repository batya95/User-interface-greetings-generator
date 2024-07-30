const Pencil=()=>{
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let pos = { x: 0, y: 0 };

function draw() {
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    ctx.lineTo(pos.x + 10, pos.y + 10);
    ctx.stroke();
    pos.x += 10;
    pos.y += 10;
}

setInterval(draw, 100); 
return (
<>
<canvas></canvas>
</>

);

};
export default Pencil;
