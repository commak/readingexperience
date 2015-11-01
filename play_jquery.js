<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
		<meta charset=utf-8 />
		<script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
		<script src="jquery.rotate.js"></script>

		<script src="jquery.js" type="text/javascript"></script>
<script src="jquery-css-transform.js" type="text/javascript"></script>
<script src="jquery-animate-css-rotate-scale.js" type="text/javascript"></script>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js?ver=1.3.2"></script>
<script src="js/animate.js"></script>

// $("#square").animate({rotate: '+=30deg', scale: '-=0.1'}, 1000); 
// function someFunction2() {
 //   $("#square").animate(
    //    {rotation: 360},
   //     {
    //      duration: 500,
     //     step: function(now, fx) {
        //      $(this).css({"transform": "rotate("+now+"deg)"});
   //       }
    //    }
  //  );
// }

$(function() {
	var img = $('img');
	function rotate() {
		img.animate({rotate: '360'}, 2000, 'linear', function() {
			rotate();
		});
	}
	rotate();
});
    
$(document).ready(function(){
    $('#click-me').click(function(){
        $('#rotate-box').css({

        //for firefox
        "-moz-animation-name":"rotatebox",
        "-moz-animation-duration":"0.8s",
        "-moz-animation-iteration-count":"1",
            "-moz-animation-fill-mode":"forwards",

        //for safari & chrome
        "-webkit-animation-name":"rotatebox",
        "-webkit-animation-duration":"0.8s",
        "-webkit-animation-iteration-count":"1",
        "-webkit-animation-fill-mode" : "forwards",

        });
    });
});


$("triangle").hover(function(){
	if (!$(this).hasClass('animated')) {
		$(this).dequeue().stop().animate({ width: "200px" });
	}
}, function() {
    $(this).addClass('animated').animate({ width: "100px" }, "normal", "linear", function() {
		$(this).removeClass('animated').dequeue();
	});
});