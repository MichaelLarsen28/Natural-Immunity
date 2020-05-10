(function( $ ) {
$(function(){
    $("#sideMenu a").bind("click", function(){
        $("#sideMenu a").removeClass("clicked"); // Remove all highlights
        $(this).addClass("clicked"); // Add the class only for actually clicked element
    });
});

//Home highlighted when the PatientDashbaord page is loaded
/*
$(document).ready(function() {
    $("#sideMenu a").slice(0,1,2,3,4,5,6).css({"background": "white", "border-bottom": "3px solid rgba(82, 179, 217, 1)",
    "padding": "1.2%", "width": "80%", "transition": "0s"});
});*/
})(jQuery);
