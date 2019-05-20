/*My javascript createElement*/

/*find nav bar*/
var nav = document.querySelector("nav");
/*buttons in nav bar*/
var buttons = nav.getElementsByTagName("a");
/*lope thought nav buttons*/
for(var i = 0; i < buttons.length; i++){
/*set buttons when clickted*/
  buttons[i].onclick = setActive;
}
function setActive(){
/*get current ative buttion*/
  var active = nav.querySelector(".active");
/*remove ative from current ative button*/
  active.className = "";
/*set clicked buttion to ative*/
  this.className = "active";
}

/*seting dates and functions for date*/
}
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/*live date and time*/
function startTime() {
  var today = new Date
  var dd = days[today.getDay()];
  var date = today.getDate();
  var mm = months[today.getMonth()];
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML =
  dd + " " + date + " " + mm + "<br>" + h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
