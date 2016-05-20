function showblocmenu($this) {
	$($this).show(350);
	$("#blocapplication").animate({left: '9%'}, "300");
	$("#showblocmenu").fadeOut(350);

}

function hideblocmenu($this) {
	$($this).hide(350);
	$("#blocapplication").animate({left: '0%'}, "300");
	$("#showblocmenu").show(350);

}

function backgroundlessblur($this) {
	$($this).css({
		"-webkit-filter": "blur(0px)",
		"-moz-filter": "blur(0px)",
		"-o-filter": "blur(0px)",
		"-ms-filter": "blur(0px)",
		"filter": "blur(0px)",
		"-webkit-transition": "-webkit-filter 1s", /* Safari */
    	"transition": "filter 1s",
	});
}

function backgroundmoreblur($this) {
	$($this).css({
		"-webkit-filter": "blur(3px)",
		"-moz-filter": "blur(3px)",
		"-o-filter": "blur(3px)",
		"-ms-filter": "blur(3px)",
		"filter": "blur(3px)",
		"-webkit-transition": "-webkit-filter 1s", /* Safari */
    	"transition": "filter 1s",
	});
}

function backtoapplication($this) {
	$($this).show(350);
	$("#MyIFrame").hide(350);
}

function iframe1($this) {
	window.location.href = "https://facebook.com/";
}

function iframe2($this) {
	$($this).hide(350);
	$("#MyIFrame").show(350);
	document.getElementById('MyIFrame').src = 'http://www.meteolamer.re/spots.php?spot=stpierre';
	//$("#MyIFrame").load('http://www.meteolamer.re/spots.php?spot=stpierre #map_overlay');
}

function iframe3($this) {
	window.location.href = "https://accounts.google.com";
}

function iframe4($this) {
	$($this).hide(350);
	$("#MyIFrame").show(350);
	document.getElementById('MyIFrame').src = 'calendar';
}

$(document).ready(function(){
	//animation menu	

		var onright=1;
		
	$("#bloc1").click(function() {
		//bloc2
		onright=parseInt(onright)+parseInt(1);
		if (onright%2==0) {
			$("#bloc2").show(150);
			$("#bloc2").animate({left: '5px'});
			$("#arrow1").css({
		        //for firefox
		        "-moz-animation-name":"rotatearrow",
		        "-moz-animation-duration":"0.8s",
		        "-moz-animation-iteration-count":"1",
		            "-moz-animation-fill-mode":"forwards",

		        //for safari & chrome
		        "-webkit-animation-name":"rotatearrow",
		        "-webkit-animation-duration":"0.8s",
		        "-webkit-animation-iteration-count":"1",
		        "-webkit-animation-fill-mode" : "forwards",
        	});
		}
				
		else {
			$("#bloc2").fadeOut();
			$("#bloc2").animate({left:"0px"})

			$("#bloc3").fadeOut();
			$("#bloc3").animate({left:"0px"})
			$("#arrow1").css({
		        //for firefox
		        "-moz-animation-name":"rotatearrow1",
		        "-moz-animation-duration":"1s",
		        "-moz-animation-iteration-count":"1",
		            "-moz-animation-fill-mode":"forwards",

		        //for safari & chrome
		        "-webkit-animation-name":"rotatearrow1",
		        "-webkit-animation-duration":"1s",
		        "-webkit-animation-iteration-count":"1",
		        "-webkit-animation-fill-mode" : "forwards",
        	});

        	$("#arrow2").css({
		        //for firefox
		        "-moz-animation-name":"rotatearrow1",
		        "-moz-animation-duration":"0.8s",
		        "-moz-animation-iteration-count":"1",
		            "-moz-animation-fill-mode":"forwards",

		        //for safari & chrome
		        "-webkit-animation-name":"rotatearrow1",
		        "-webkit-animation-duration":"0.8s",
		        "-webkit-animation-iteration-count":"1",
		        "-webkit-animation-fill-mode" : "forwards",
        	});
			
		};		
	});

	$("#bloc2").click(function() {
		//bloc3
		onright=parseInt(onright)+parseInt(1);
		if (onright%2==0) {
			$("#bloc3").show(150);
			$("#bloc3").animate({left: '10px'});
			$("#bloc2").animate({});
			$("#arrow2").css({
		        //for firefox
		        "-moz-animation-name":"rotatearrow",
		        "-moz-animation-duration":"0.8s",
		        "-moz-animation-iteration-count":"1",
		            "-moz-animation-fill-mode":"forwards",

		        //for safari & chrome
		        "-webkit-animation-name":"rotatearrow",
		        "-webkit-animation-duration":"0.8s",
		        "-webkit-animation-iteration-count":"1",
		        "-webkit-animation-fill-mode" : "forwards",
        	});
			
		}	
		else {
			$("#bloc3").fadeOut();
			$("#bloc3").animate({left:"0px"});
		};		
	});
	
	$("#bloc3").click(function() {
		$("#bloc3").fadeOut();
		$("#bloc3").animate({left:"0px",});
	});

	$("#bloc2").hide();
	$("#bloc3").hide();

});

//mouse event
//bloc
function mouseoverbloc($this) {
	$($this).animate({letterSpacing: "+5px"});
	$($this).css( "color", "white" );
}

function mouseoutbloc($this) {
	$($this).animate({letterSpacing: "0px"});
	$($this).css( "color", "#333333" );

}

//animation 
//application 

/*
    bounce
    flash
    pulse
    rubberBand
    shake
    swing
    tada
    wobble
    jello
    bounceIn
    bounceInDown
    bounceInLeft
    bounceInRight
    bounceInUp
    bounceOut
    bounceOutDown
    bounceOutLeft
    bounceOutRight
    bounceOutUp
    fadeIn
    fadeInDown
    fadeInDownBig
    fadeInLeft
    fadeInLeftBig
    fadeInRight
    fadeInRightBig
    fadeInUp
    fadeInUpBig
    fadeOut
    fadeOutDown
    fadeOutDownBig
    fadeOutLeft
    fadeOutLeftBig
    fadeOutRight
    fadeOutRightBig
    fadeOutUp
    fadeOutUpBig
    flipInX
    flipInY
    flipOutX
    flipOutY
    lightSpeedIn
    lightSpeedOut
    rotateIn
    rotateInDownLeft
    rotateInDownRight
    rotateInUpLeft
    rotateInUpRight
    rotateOut
    rotateOutDownLeft
    rotateOutDownRight
    rotateOutUpLeft
    rotateOutUpRight
    hinge
    rollIn
    rollOut
    zoomIn
    zoomInDown
    zoomInLeft
    zoomInRight
    zoomInUp
    zoomOut
    zoomOutDown
    zoomOutLeft
    zoomOutRight
    zoomOutUp
    slideInDown
    slideInLeft
    slideInRight
    slideInUp
    slideOutDown
    slideOutLeft
    slideOutRight
    slideOutUp
*/
function mouseoverapp($this) {
	$($this).addClass('animated infinite fadeOutRight');
	$($this).removeClass('animated infinite fadeOutRight');
	setTimeout(function(){});
};

function mouseoutapp($this) {
	$($this).addClass('animated fadeInRight');
};
