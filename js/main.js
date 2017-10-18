//Isotope active js code:
//************************

// Active isotope with jQuery code:

$('.main-iso').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows'
});
// Isotope click function
$('.iso-nav a').click(function(){
	$('.iso-nav a').removeClass('active');
	$(this).addClass('active');

	var selector = $(this).attr('data-filter');
	$('.main-iso').isotope({
		filter: selector
	});
	return false;
});


 $(document).ready(function(){
	 $('.carousel').flickity({
	   // options
	   cellAlign: 'left',
		prevNextButtons: false,
	   contain: true   
                
	 });
     

     

});
