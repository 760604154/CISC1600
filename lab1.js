function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    var fruit = [
		{name:"Apple", quantity:20, color:"red"},
		{name:"Orange", quantity:10, color:"orange"},
		{name:"Banana", quantity:15, color:"yellow"},
		{name:"Kiwi", quantity:3, color:"green"},
		{name:"Blueberry", quantity:5, color:"blue"},
		{name:"Grapes", quantity:8, color:"purple"}
	];
    var x = 50, y=0, i=0;
    drawName(ctx);
    flipY(ctx);
    for (var i=0;i<fruit.length;i++){
      drawChart(ctx,x,y,i,fruit);
       x+=100;
    }
  }
}
function drawName(ctx){
	ctx.save();
	ctx.beginPath();
	ctx.font="30px Arial";
	ctx.textAlign="center";
	ctx.fillText("ZeJun Ren", 400, 50);
	ctx.restore();
}

function drawChart(ctx,x,y,i,fruit){
  var length = 20 * fruit[i].quantity;
  ctx.save;
  ctx.beginPath();
  ctx.fillStyle = fruit[i].color;
  ctx.fillRect(x,y, 100, length);
  ctx.fill();
  ctx.restore();
  flipY(ctx);
  ctx.font = "20px Arial";
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.fillText(fruit[i].name, x+50, y+590);
  ctx.fillText(fruit[i].quantity, x+50, y+570);
  flipY(ctx);
}

function drawText(ctx,x,y,i,fruit){
  ctx.font = "30px Arial";
  ctx.fillStyle = "black";
  ctx.fillText(fruit[i].name, x+10, y+550);
  ctx.fillText(fruit[i].quantity, x+10, y+50);
}

function flipY(ctx) {
  var canvas = ctx.canvas;
  var w = canvas.clientWidth;
  var h = canvas.clientHeight;
  ctx.translate(0,h);
  ctx.scale(1,-1);
}
