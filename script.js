var clueHoldTime = 1000; // how long to play the clue
const cluePauseTime = 333; //how long to pause in between clues
var nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

var pattern = [2, 6, 4, 3, 2, 1, 2, 5];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  
  document.getElementById("playing").classList.remove("hidden");
  
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime
  }
  
  setTimeout(help, delay - 100);
}

function help() {
  document.getElementById("playing").classList.add("hidden");
}

function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  document.getElementById("startButton").classList.add("hidden");
  document.getElementById("stopButton").classList.remove("hidden");
  playClueSequence();
}
function stopGame(){
  gamePlaying = false;
  document.getElementById("startButton").classList.remove("hidden");
  document.getElementById("stopButton").classList.add("hidden");
  document.getElementById("playing").classList.add("hidden");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  // Correct guess
  if (btn == pattern[guessCounter]) {
    // At the end of the round
    if (guessCounter == progress) {
      // At the end of the pattern (lat round)
      if (progress == pattern.length - 1) {
        winGame();
      }
      // Not last clue
      else {
        progress++;
        playClueSequence();
        if (clueHoldTime > 250) {
          clueHoldTime -= 200;
          nextClueWaitTime -= 200; 
        }
        else {
          clueHoldTime = 100;
        }
      }
    } // if guessCounter == progress
    else {
      guessCounter++;
    }
  } // if btn == pattern[guessCounter]
  // Incorrect guess
  else {
    loseGame();
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function lightButton(btn){
  document.getElementById("b"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("b"+btn).classList.remove("lit")
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 293.6,
  3: 329.6,
  4: 349.2,
  5: 392,
  6: 440
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)