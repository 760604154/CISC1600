var spritesheet = {
	"frames": [
		{
			"frame": {
				"x": 1,
				"y": 1,
				"w": 67,
				"h": 76
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 67,
				"h": 76
			},
			"sourceSize": {
				"w": 67,
				"h": 76
			}
		},
	{
			"frame": {
				"x": 70,
				"y": 1,
				"w": 67,
				"h": 76
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 67,
				"h": 76
			},
			"sourceSize": {
				"w": 67,
				"h": 76
			}
		},
			{
			"frame": {
				"x": 139,
				"y": 1,
				"w": 67,
				"h": 76
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 67,
				"h": 76
			},
			"sourceSize": {
				"w": 67,
				"h": 76
			}
		},
			{
			"frame": {
				"x": 1,
				"y": 79,
				"w": 67,
				"h": 76
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 67,
				"h": 76
			},
			"sourceSize": {
				"w": 67,
				"h": 76
			}
		},
	 		{
			"frame": {
				"x": 70,
				"y": 79,
				"w": 66,
				"h": 76
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 66,
				"h": 76
			},
			"sourceSize": {
				"w": 66,
				"h": 76
			}
		},
			{
			"frame": {
				"x": 138,
				"y": 79,
				"w": 67,
				"h": 75
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 67,
				"h": 75
			},
			"sourceSize": {
				"w": 67,
				"h": 75
			}
		},
			{
			"frame": {
				"x": 208,
				"y": 1,
				"w": 67,
				"h": 75
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 67,
				"h": 75
			},
			"sourceSize": {
				"w": 67,
				"h": 75
			}
		},
	 		{
			"frame": {
				"x": 208,
				"y": 78,
				"w": 67,
				"h": 75
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 67,
				"h": 75
			},
			"sourceSize": {
				"w": 67,
				"h": 75
			}
		},
			{
			"frame": {
				"x": 207,
				"y": 155,
				"w": 67,
				"h": 75
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 67,
				"h": 75
			},
			"sourceSize": {
				"w": 67,
				"h": 75
			}
		},
			{
			"frame": {
				"x": 1,
				"y": 232,
				"w": 66,
				"h": 75
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 66,
				"h": 75
			},
			"sourceSize": {
				"w": 66,
				"h": 75
			}
		}
	]
}

var num_img = new Image();
num_img.src = './spritesheet.png';

var canvas_count = document.getElementById('canvas');
var ctx = canvas_count.getContext('2d');

//const canvas_count = document.getElementById('canvas');
//const ctx = canvas_count.getContext('2d');


let button = document.querySelector("button");

button.onclick = function(){
	 drawImg();
	 button.style.visibility = "hidden";
 }

 var currentLoop = 0;

function drawNum(i){
  ctx.drawImage(num_img,spritesheet.frames[i].frame.x,spritesheet.frames[i].frame.y, spritesheet.frames[i].frame.w, spritesheet.frames[i].frame.h, 300, 200, spritesheet.frames[i].sourceSize.w, spritesheet.frames[i].sourceSize.h);
}


function drawNum2(x,y){
  ctx.drawImage(num_img,spritesheet.frames[x].frame.x,spritesheet.frames[x].frame.y, spritesheet.frames[x].frame.w, spritesheet.frames[x].frame.h, 250, 200, spritesheet.frames[x].sourceSize.w, spritesheet.frames[x].sourceSize.h);
	ctx.drawImage(num_img,spritesheet.frames[y].frame.x,spritesheet.frames[y].frame.y, spritesheet.frames[y].frame.w, spritesheet.frames[y].frame.h, 300, 200, spritesheet.frames[y].sourceSize.w, spritesheet.frames[y].sourceSize.h);
}

function drawImg(){
   if (currentLoop <= 9){
     ctx.clearRect(0,0, canvas_count.width, canvas_count.height);
     drawNum(currentLoop);
     setTimeout(drawImg, 500);
   } else if (currentLoop = 10){
		 ctx.clearRect(0,0, canvas_count.width, canvas_count.height);
		 drawNum2(1,0);
     setTimeout(drawImg, 500);
	 }
  /*for(var i = 0; i < 10; i++){
    ctx.clearRect(0,0, canvas_count.width, canvas_count.height);
    drawNum(i);
    setTimeout(500);
  }*/
  currentLoop++
}
