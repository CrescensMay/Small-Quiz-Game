var endTime = 30;
function setClock() {
    endTime--;
    var m = parseInt( endTime / 60 );
    var s = parseInt(endTime % 60);
    if(endTime == -1){
      // clearInterval(endTime);
      $(".timer").css({
        'background-color':'red',
        'color' : '#000'
      });
      return;
    }
    var result = "Time left => " + m + " : " + s;
    document.querySelector('.timer').innerHTML = result;
    setTimeout(setClock, 1000);
}
setClock();
