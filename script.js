function startTime() {
  var today = new Date()
  var h = today.getHours()
  var m = today.getMinutes()
  var s = today.getSeconds()
  m = checkTime(m)
  s = checkTime(s)
  document.querySelector(".clock").innerHTML = h + ":" + m + ":" + s
  var t = setTimeout(startTime, 1000)
  alarm(h, m, s)
}

function checkTime(i) {
  if (i < 10) { i = "0" + i }
  return i
}

function alarm(h, m, s) {
  if ((h >= 8 && h <= 11) || (h >= 13 && h <= 18)) {
    if ((m >= 0 && m <= 24) || (m >= 30 && m <= 54)) {
      document.querySelector(".description").innerHTML = "work work!!!"
    } else {
      document.querySelector(".description").innerHTML = "Get up and rest!!!"
    }
  } else {
    if ((m >= 0 && m <= 24) || (m >= 30 && m <= 54)) {
      document.querySelector(".description").innerHTML = "Do whatever you want"
    } else {
      document.querySelector(".description").innerHTML = "Get up!!!"
    }
  }
}

startTime()