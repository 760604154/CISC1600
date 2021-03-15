var fishspritesheet = {
  "frames": [
		{
			"frame": {
				"x": 1,
				"y": 1,
				"w": 567,
				"h": 567
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 567,
				"h": 567
			},
			"sourceSize": {
				"w": 567,
				"h": 567
			}
		},
	{
			"frame": {
				"x": 570,
				"y": 1,
				"w": 567,
				"h": 567
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 567,
				"h": 567
			},
			"sourceSize": {
				"w": 567,
				"h": 567
			}
		}
	]
}


var shark_img = new Image();
shark_img.src = './fishspritesheet.png';

var speechBubble_image = new Image();
speechBubble_image.src = './speechbubble.png';

var canvas_count = document.getElementById('canvas');
var ctx = canvas_count.getContext('2d');

let button = document.querySelector("button");

button.onclick = function(){
	 drawImg();
	 button.style.visibility = "hidden";
 }

 function drawNum(i){
  ctx.drawImage(shark_img,fishspritesheet.frames[i].frame.x,fishspritesheet.frames[i].frame.y, fishspritesheet.frames[i].frame.w, fishspritesheet.frames[i].frame.h, 300, 200, fishspritesheet.frames[i].sourceSize.w, fishspritesheet.frames[i].sourceSize.h);
}

function drawBubble(){
  ctx.drawImage(speechBubble_image, 890, 100, 239, 239);
}

function drawText(){
  ctx.font = "20px Century Gothic";
	ctx.fillStyle= "black";
	ctx.textAlign = "center";
  ctx.fillText("where is my food", 1010, 200);
}
var currentLoop = 0;

function drawImg(){
    drawBubble();
    drawText();
     ctx.clearRect(300,200, 567, 567);
     drawNum(currentLoop);
     currentLoop++;
     if (currentLoop == 2){
       currentLoop = 0;
    }
    setTimeout(drawImg, 500);

}
