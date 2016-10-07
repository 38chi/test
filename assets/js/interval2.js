/*js file*/
$(function(){
//divで作成したboxをランダムに動くように処理
//boxを動かすための場所をウィンドウに設定
//ウィンドウの中でランダムboxが動く
  var ID = setInterval(move, 10);

  var box1 = $('.box1');
  var box2 = $('.box2');
  var box3 = $('.box3');
  var box4 = $('.box4');
  var box5 = $('.box5');
  var box6 = $('.box6');

  var speed = 300;

  function move(){
    box1.animate({
      top: Math.floor( Math.random() * $(window).width() ),
      left: Math.floor( Math.random() * $(window).height() )
    });

    box2.animate({
    top: Math.floor( Math.random() * $(window).width() ),
    left: Math.floor( Math.random() * $(window).height() )
    });

    box3.animate({
    top: Math.floor( Math.random() * $(window).width() ),
    left: Math.floor( Math.random() * $(window).height() )
    });

    box4.animate({
    top: Math.floor( Math.random() * $(window).width() ),
    left: Math.floor( Math.random() * $(window).height() )
    });

    box5.animate({
    top: Math.floor( Math.random() * $(window).width() ),
    left: Math.floor( Math.random() * $(window).height() )
    });

    box6.animate({
    top: Math.floor( Math.random() * $(window).width() ),
    left: Math.floor( Math.random() * $(window).height() )
    });
  }




  // var count = 0;
  // var time = 300;
  //
  // function countUP(){
  //   countTxt.text(count++);
  // }
  //
  // var ID = setInterval(countUP, time);
  //
  // stopBtn.click(function(){
  //   clearInterval(ID);
  // })
  //
  // playBtn.click(function(){
  //   ID = setInterval(countUP, time);
  //       clearInterval(ID);
  // })
  //
  // stopBtn.mouseover(function(){
  //   $(this).fadeTo(300,0.5);
  // })
  //
  // stopBtn.mouseout(function(){
  //   $(this).fadeTo(300,1);
  // })









})//end function
