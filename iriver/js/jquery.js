





$(function(){

    function hello(){
        console.log('hello 함수입니다.');
    }

    hello();


    var $box = $('.box'); // 전역변수

    var nickName = 33;



    $('.box').mouseenter(function(){ //마우스 올렸을때

        $('.box').css('background','blue');

    });


    $('.box').mouseleave(function(){ //마우스 떠났을때

        $('.box').css('background','orange');

    });


    function leftFunc(){
        console.log('L - 클릭!!');
        // $box.fadeOut();
        // $box.css('left','0px');
        $box.removeClass('active');

    }

    $('.left').click(leftFunc);

    //
    // var s = document.getElementById('thing').style;
    // s.opacity = 1;
    // (function fade(){(s.opacity-=.1)<0?s.display="none":setTimeout(fade,40)})();
    //
    //



    function rightFunc(){
        // $box.fadeIn();
        console.log('R -클릭!!');
        // $box.css('left','1000px');
        $box.addClass('active');
    }

    $('.right').click(rightFunc);





});





