var playing = false;
var score;
var action;
var timeremaining;

document.getElementById("startreset").onclick = function(){
  if(playing==true){
    location.reload();
  }else{
    playing = true;
    score=0;
    document.getElementById("scorevalue").innerHTML =score;
    document.getElementById("timeremaining").style.display = "block";
    timeremaining = 60;
    document.getElementById("startreset").innerHTML = "Reset Game";

    startCountdown()
  }
}
function startCountdown(){
  action = setInterval(function(){
    timeremaining -= 1;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;
    if(timeremaining==0){
      clearInterval(action);
    }
  },1000)
  
}

function stopCountdown(){
  clearInterval(action);
}