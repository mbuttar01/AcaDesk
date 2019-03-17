
$(document).ready(function() {
	$('p.moreinfo').each(function() {
		var tis = $(this), state = false, answer = tis.next('p.q').slideUp();
		tis.click(function() {
			state = !state;
			answer.slideToggle(state);
			tis.toggleClass('active',state);
		});
	});
});