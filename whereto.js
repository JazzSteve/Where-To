// Clickable Search Button on Navbar
$(function(){
	$("#search-button, #search-icon").click(function(e){
	 e.preventDefault();
		 $("#search-form").toggle();
		 $(".search").toggleClass("search-expand");
	});
})


// Navbar scroll change height
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 50) {
	    $(".mainnavbar").css("height", "90px");
	    $(".mainnavbar").css("transition", "height 500ms");
	    $("#search-button").css("top", "20px");
	  }

	  else{
		  $(".mainnavbar").css("height", "116px");
		  $("#search-button").css("top", "30px");
		  $("#search-button").css("transition", "top 500ms");	
	  }
  });
});