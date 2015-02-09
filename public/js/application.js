
jQuery(document).ready(function($) {

	$(document).ready(sizeContent);

	//Every resize of window --------------------------------------------------------

	$(window).resize(sizeContent);





	//Dynamically assign height -----------------------------------------------------

	function sizeContent() {
    	var newHeight = $(window).height() - "160" + "px";
    	$(".bg-image-main").css("height", newHeight);

		};


	//Toggle Drop Down for Work Panel Section -----------------------------------------



	$('.project_posts').on('click', function(e) {
		$(this).closest('.project_posts').find('.work_panel').slideDown();

	 });


	$('.project_title').on('click', function(e) {
		e.stopPropagation()
		$(this).closest('.project_posts').find('.work_panel').slideToggle();

	});



	 $('.up').on('click', function(e) {
		e.stopPropagation()
		$(this).closest('.project_posts').find('.work_panel').slideToggle();

	

	 });


	 



});



