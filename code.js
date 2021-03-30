var time = setInterval(function() {
  var date = new Date();
  document.getElementByClass("Time").innerHTML = (date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " по Москве/Минску");
}, 1000);
