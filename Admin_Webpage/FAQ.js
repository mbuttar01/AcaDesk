// accordian


$(document).ready(function() {
	$('li.q').each(function() {
		var tis = $(this), state = false, answer = tis.next('li.a').slideUp();
		tis.click(function() {
			state = !state;
			answer.slideToggle(state);
			tis.toggleClass('active',state);
		});
	});
});


/*
var action = "click";
var speed = "500";


$(document).ready(function(){

	$('li.q').on(action, function() {
		$(this).next();
			.slideToggle(speed);
				.siblings('li.a');
					.slideUp();

	var img = $(this).children('img');


	$('img').not(img).removeClass('rotate');

	img.toggleClass(rotate)
	});

});
*/