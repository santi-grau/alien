$(window).bind('click', function(){
	var steps = 50;
	$('.step').remove();
	for (i = 0; i < steps; i++) {
		$('<div class="step" />').appendTo('#container');
	}
	setTimeout(function(){
		$('.step').addClass('show')
	})
})