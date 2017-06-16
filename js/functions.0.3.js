
function io_class_toggle(cls,tgl) {
    jQuery(cls).toggleClass(tgl);
}

if(lowerie){
	document.documentElement.innerHTML = 'Update your browser please!<br><a href="http://outdatedbrowser.com" target="_blank">Check available browsers</a>';
}


function iohk_video_modal_update() {
  jQuery(".iohk_video_load_modal").each(function(){
    var url = jQuery(this).attr('rel');
    jQuery(this).click(function(e){
      e.preventDefault();
      //$("#videomodal iframe").attr('src','https://www.youtube.com/embed/'+url+'?autoplay=1');
      jQuery("#videomodal iframe").attr('src','https://www.youtube.com/embed/'+url+'');
      jQuery('#videomodal').modal();
    });
  });
}

;(function($) {
  

	$(window).resize(function(){

	});

	$(window).load(function(){

	});

	$(document).ready(function() {
    iohk_video_modal_update();

		if(window.location.hash == '#policy'){
			$("#dpp_body").addClass('in');
			setTimeout(function() {
				$("#policy_wrap").addClass('flash');
				setTimeout(function() {
					$("#policy_wrap").removeClass('flash');
				},1000);
			},500);
		}




	});

  var header = $(".scrolledtop");

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 140) {

        header.removeClass('scrolledtop').addClass("scrolled");
    } else {
        header.removeClass("scrolled").addClass('scrolledtop');
    }

    var footerHeight = $('#footer-wrap').height()
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
    if (scrollHeight - scrollPosition < footerHeight ) {
       $('.navbar-side.scrolled').css("bottom", footerHeight)
    }
});
jQuery('.icon-img-wrap').matchHeight();
jQuery('.icon-text-wrap').matchHeight();
})(jQuery);
