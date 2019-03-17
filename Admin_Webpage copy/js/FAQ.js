// accordian

   jQuery(document).ready(function($){
        
        // Hide all panels to start
        var panels = $('.accordion > .a').hide();
        
        // Show first panel on load (optional). Remove if you want
        //panels.first().show();
        
        // On click of panel title
        $('.accordion > li > img').click(function() {
          var $this = $(this);
          
          // Slide up all other panels
          panels.slideUp();
          
          //Slide down target panel
          $this.parent().next().slideDown();
          
          return false;


        });
      });




















      /*
	$('li.q').on(action, function() {
		$(this).next();
			.slideToggle(speed);
				.siblings('li.a');
					.slideUp();

	var img = $(this).children('img');


	$('img').not(img).removeClass('rotate');

	img.toggleClass(rotate);
	});
*/