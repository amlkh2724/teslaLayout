
function updateTimer() {
  var timer = document.getElementById("timer");
  timer.innerHTML = parseInt(timer.innerHTML) + 1;
}

var timerInterval = setInterval(updateTimer, 200);

setTimeout(function () {
  clearInterval(timerInterval);
}, 600);


