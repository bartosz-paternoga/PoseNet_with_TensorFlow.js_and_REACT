 
const DrawSegment = ([ay, ax], [by, bx], color, scale, ctx) =>{
            ctx.beginPath();
            ctx.moveTo(ax * scale, ay * scale);
            ctx.lineTo(bx * scale, by * scale);
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'aqua';
            ctx.stroke();
          }

  
export default DrawSegment;