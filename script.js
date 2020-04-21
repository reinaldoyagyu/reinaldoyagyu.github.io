if (!("Notification" in window)) {
  alert("This browser does not support notification")
}
if (Notification.permission != "granted") { Notification.requestPermission() }
var audio = document.querySelector("#myAudio")

function startTime() {
  var today = new Date()
  var h = today.getHours()
  var m = today.getMinutes()
  var s = today.getSeconds()
  m = checkTime(m)
  s = checkTime(s)
  document.querySelector("#hour").innerHTML = h + ":" + m
  document.querySelector("#sec").innerHTML = ":" + s

  if (h >= 8 && h <= 18) { var workHour = true }
  else { workHour = false }

  if ((m >= 55) || (m >= 25 && m < 30)) { var interval = true }
  else { interval = false }

  if (workHour && !interval) {
    document.querySelector("#doit").innerHTML = "Work work!!!"
    document.body.className = "focus"
    document.querySelector("#timeLeft").innerHTML = timeLeft(m, s)
  }
  if (workHour && interval) {
    document.querySelector("#doit").innerHTML = "Get up and rest!!!"
    document.body.className = "rest"
    document.querySelector("#timeLeft").innerHTML = timeLeft(m, s)
  }
  if (!workHour && !interval) {
    document.querySelector("#doit").innerHTML = "Do whatever you want"
    document.body.className = "play"
    document.querySelector("#timeLeft").innerHTML = timeLeft(m, s)
  }
  if (!workHour && interval) {
    document.querySelector("#doit").innerHTML = "Get up!!!"
    document.body.className = "getUp"
    document.querySelector("#timeLeft").innerHTML = timeLeft(m, s)
  }

  if (s == 0) {
    if (m == 0 || m == 5 || m == 25 || m == 30 || m == 55) {
      if (document.querySelector("#withSound").checked == true) {
        audio.play()
        console.log('sound played')
      }
      if (interval) {
        const notification = new Notification('Stand up', {
          body: 'Get out!!'
        })
      } else {
        const notification = new Notification('Atention', {
          body: 'Get back!!'
        })
      }
    }
  }
  var t = setTimeout(startTime, 1000)
}

function checkTime(i) {
  if (i < 10) { i = "0" + i }
  return i
}

function timeLeft(m, s) {
  if (m >= 0 && m < 25) {
    return (24 - m) + ":" + checkTime(60 - s) + " left"
  }
  if (m >= 25 && m < 30) {
    return (29 - m) + ":" + checkTime(60 - s) + " left"
  }
  if (m >= 30 && m < 55) {
    return (54 - m) + ":" + checkTime(60 - s) + " left"
  }
  if (m >= 55) {
    return (59 - m) + ":" + checkTime(60 - s) + " left"
  }
}

startTime()