<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/jquery.cycle.all.min.js"></script>
<script type="text/javascript" src="js/scripts.js"></script>

$(document).ready(function() {

});

$("#slideshow").css("overflow", "hidden");

$("ul#slides").cycle({
	fx: 'fade',
	pause: 1,
	prev: '#prev',
	next: '#next'
});

$("#slideshow").hover(function() {
	$("ul#nav").fadeIn();
	},
		function() {
	$("ul#nav").fadeOut();
	});
