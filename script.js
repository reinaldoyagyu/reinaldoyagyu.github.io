function startTime() {
  var today = new Date()
  var h = today.getHours()
  var m = today.getMinutes()
  var s = today.getSeconds()
  m = checkTime(m)
  s = checkTime(s)
  document.querySelector("#clock").innerHTML = h + ":" + m + ":" + s
  if (h >= 8 && h <= 18) { var workHour = true }
  else { workHour = false }
  if ((m >= 55) || (m >= 25 && m <= 30)) { var interval = true }
  else { interval = false }
  if (workHour && !interval) {
    document.querySelector("#description").innerHTML = "Work work!!!"
    document.body.className = "focus"
  }
  if (workHour && interval) {
    document.querySelector("#description").innerHTML = "Get up and rest!!!"
    document.body.className = "rest"
  }
  if (!workHour && !interval) {
    document.querySelector("#description").innerHTML = "Do whatever you want"
    document.body.className = "play"
  }
  if (!workHour && interval) {
    document.querySelector("#description").innerHTML = "Get up!!!"
    document.body.className = "getUp"
  }
  switch (m) {
    case 0:
    case 5:
    case 25:
    case 30:
    case 55:
      if (document.querySelector("#withSound").checked == true && s == 0) {
        var audio = document.querySelector("#myAudio")
        audio.play()
      }
      break
  }
  var t = setTimeout(startTime, 1000)
}

function checkTime(i) {
  if (i < 10) { i = "0" + i }
  return i
}

startTime()