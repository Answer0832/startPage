function timer(){
 var now     = new Date,
     hours   = now.getHours(),
     minutes = now.getMinutes(),
     seconds = now.getSeconds(),
     t_str   = [hours,
                (minutes < 10 ? "0" + minutes : minutes),
                (seconds < 10 ? "0" + seconds : seconds)]
                 .join(':');
 document.getElementById('txt').innerHTML = t_str;
 setTimeout(timer,1000);
}
function writeDate(){
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  if(dd<10) {
    dd='0'+dd
  }

  if(mm<10) {
    mm='0'+mm
  }

  today = dd+'/'+mm+'/'+yyyy;
  document.getElementById("date").innerHTML=today;
}
$(document).ready(function(){
    timer();
    writeDate();
    $("#arrow1").blink();
    $("#arrow2").blink();
    $("#url").keypress(function(e){
      var url = $("#url").val();
      var key = e.which;
      if(key == 13) {
        console.log("You were supposed to redirect");
        window.location.href = "http:" + url + ".com";
      }
    });
    $("#google").keypress(function(e){
      var question = $("#google").val();
      var key = e.which;
      if(key == 13) {
        console.log("You were supposed to redirect");
        window.location.href = "http:www.google.com/search?q=" + question;
      }
    });
});
