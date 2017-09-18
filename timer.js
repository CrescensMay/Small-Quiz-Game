$("#start").one("click",function(){
  var endTime = 20;
  function setClock() {
      endTime--;
      var m = parseInt( endTime / 60 );
      var s = parseInt(endTime % 60);
      if(endTime == 0){
        // clearInterval(endTime);
        $(".timer").css({
          'background-color':'red',
          'color' : '#000'
        });
        var result = "Time left => " + "0" + m + " : " + "0" + s;
        document.querySelector('.timer').innerHTML = result;
        return;
      }
      var result;
      if(m < 10){
         result = "Time left => " + "0" + m + " : " + s;
      }else if (s < 10 || m < 10) {
          result = "Time left => " + m + " : " + "0" + s;
      }else{
        result = "Time left => " + m + " : " + s;
      }
      document.querySelector('.timer').innerHTML = result;
      setTimeout(setClock, 1000);
  }
  setClock();
});
