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
  console.log('m = ' + m + ", s = " + s)
  switch (m, s) {
    default: console.log('switch case de teste ok')
  }
  switch (m, s) {
    case 0, 0:
    case 5, 0:
    case 25, 0:
    case 30, 0:
    case 55, 0:
      console.log('switch case ok')
      if (document.querySelector("#withSound").checked == true) {
        audio.play()
        console.log('sound played')
      }
      if (interval) {
        const notification = new Notification('Atention', {
          body: 'Get Out!!'
        })
      } else {
        const notification = new Notification('Atention', {
          body: 'Get Back!!'
        })
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