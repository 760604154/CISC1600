const speak_button = document.getElementById('speakButton');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var cat = new Image();
var dog = new Image();
var bear = new Image();
var fox = new Image();
var mouse = new Image();

cat.src = './cat.jpg';
dog.src = './dog.jpg';
bear.src = './bear.jpg';
fox.src = './fox.jpg';
mouse.src = './mouse.jpg';


function draw() {

    ctx.save();


    drawText();

    speak_button.onclick = function(){

      if(speak_button.innerText === 'Speak')
      {
        drawText();
        speak_button.innerText = 'Stop';
        recognition.start();}
        else if(speak_button.innerText === 'Stop')
      {
        speak_button.innerText = 'Speak';
        recognition.stop();
        drawText();
      }
    };

    ctx.restore();
}

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log("We are listening. Try speaking into the microphone.");
};

recognition.onspeechend = function() {
    // when user is done speaking
    recognition.stop();
    speak_button.innerText = 'Speak';
    drawText();
}

// This runs when the speech recognition service returns result
recognition.onresult = function(event) {
    var transcript = event.results[0][0].transcript;
    findAnimal(ctx,transcript);
};


function drawText(){
  ctx.clearRect(0, 0, canvas.width, canvas.width);
  ctx.font = "25px Arial";
  ctx.fillText('say a name that is listed below to show image', 0, 20);
  ctx.fillText('say "help" to hear the instructions.', 80, 200);
  ctx.fillText('say "about" to hear my day.', 80, 230);
  ctx.font = "30px Arial";
  ctx.fillText('"cat"', 230, 50);
  ctx.fillText('"dog"', 230, 80);
  ctx.fillText('"bear"', 230, 110);
  ctx.fillText('"fox"', 230, 140);
  ctx.fillText('"mouse"', 230, 170);
}


function speak(text) {
  var msg = new SpeechSynthesisUtterance();
  msg.text = text;
  msg.lang = 'en-US';

  speechSynthesis.speak(msg);
}


function findAnimal(ctx, text)
{
  if(text.includes('cat'))
  {
    ctx.clearRect(0, 0, canvas.width, canvas.width);
    ctx.drawImage(cat, 25, 50);
  }
  else if(text.includes('dog'))
  {
    ctx.clearRect(0, 0, canvas.width, canvas.width);
    ctx.drawImage(dog, 55, 50);
  }
  else if(text.includes('bear'))
  {
    ctx.clearRect(0, 0, canvas.width, canvas.width);
    ctx.drawImage(bear, 55, 50);
  }
  else if(text.includes('fox'))
  {
    ctx.clearRect(0, 0, canvas.width, canvas.width);
    ctx.drawImage(fox, 55, 50);
  }
  else if(text.includes('mouse'))
  {
    ctx.clearRect(0, 0, canvas.width, canvas.width);
    ctx.drawImage(mouse, 55, 50);
  }
  else if(text.includes('help'))
  {
    ctx.clearRect(0, 0, canvas.width, canvas.width);
    ctx.font = "30px Arial";
    ctx.fillText('Help', 100, 150);
    speak('Say a animal in the list. or Say about, to hear about my day');
  }

  else if(text.includes('about'))
  {
    ctx.clearRect(0, 0, canvas.width, canvas.width);
    ctx.font = "30px Arial";
    ctx.fillText('About', 100, 150);
    speak('Written by ZeJun Ren, just finish my 4900 project, feeling good');
  }
  else
  {
    ctx.clearRect(0, 0, canvas.width, canvas.width);
    ctx.font = "30px Arial";
    ctx.fillText('Unknown', 100, 150);
  }
}
