/**
* single-page-nav
* https://github.com/ChrisWojcik/single-page-nav
*/
$('#anhors').singlePageNav({
	easing: 'easeInOutExpo',
	speed: 1250,
	currentClass: 'active',
	offset: 86,
});


/**
* navbar collapse on scroll
*/
// $(window).scroll(function() {
// 	if ($("#anhors-fixed").offset().top > 580) {
// 		$("#anhors-fixed").addClass("anhors-fixed");
// 	} else {
// 		$("#anhors-fixed").removeClass("anhors-fixed");
// 	}
// });


/**
* OwlCarousel
* http://owlgraphic.com/owlcarousel/
*/
$(function() {
	$("#table .owl-carousel").owlCarousel({
		pagination: false,
		navigation : true,
		navigationText: false,
		slideSpeed : 300,
		singleItem: true,
		// paginationSpeed : 400,
		// lazyLoad: true,
	});
	$("#hiw .owl-carousel").owlCarousel({
		pagination: false,
		navigation : true,
		navigationText: false,
		slideSpeed : 300,
		singleItem: true,
	});
	$("#game .owl-carousel").owlCarousel({
		pagination: false,
		navigation : true,
		navigationText: false,
		slideSpeed : 300,
		singleItem: true,
	});
});


/**
* waypoint
* https://github.com/imakewebthings/waypoints
*/
var $head = $( '#anhors' );
$('.waypoint').each( function(i) {
	var $el = $( this ),
		animClassDown = $el.data( 'animateDown' ),
		animClassUp = $el.data( 'animateUp' );
	$el.waypoint( function( direction ) {
		if( direction === 'down' && animClassDown ) {
			$head.attr('class', 'waypoint anhors ' + animClassDown);
		}
		else if( direction === 'up' && animClassUp ){
			$head.attr('class', 'waypoint anhors ' + animClassUp);
		}
	}, { offset: '0' } );
});


/**
* parallax.js
* https://github.com/pixelcog/parallax.js
*/
// $(document).ready(function() {
// 	if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
// 		$('#ios-notice').removeClass('hidden');
// 		$('.parallax-container').height( $(window).height() * 0.5 | 0 );
// 	} else {
// 		$(window).resize(function(){
// 			var parallaxHeight = Math.max($(window).height() * 0.7, 200) | 0;
// 			$('.parallax-container').height(parallaxHeight);
// 		}).trigger('resize');
// 	}
// });

