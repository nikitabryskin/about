 var Time = setInterval(function() {
  var date = new Date();
  document.getElementById("Time").innerHTML = (date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
  }, 1000);
