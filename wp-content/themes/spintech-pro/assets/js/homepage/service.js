jQuery(function($) {
    // Service Section Load Button Filter
       $(".service-home .st-load-item").slice(0, service_settings.DefaultService).show();
       $(".service-home .st-load-btn").on('click', function (e) {
           e.preventDefault();
           $(".service-home .st-load-btn").addClass("loadspinner");
           $(".service-home .st-load-btn").animate({
                   display: "block"
               }, 2500,
               function () {
                   // Animation complete.                
                   // $(".load-2:hidden").slice(0, 2).slideDown()
                   // .each(function() {
                   //   $('#grid').shuffle('appended', $(this));
                   // });
                   $(".service-home .st-load-item:hidden").slice(0, 3).slideDown();
                   if ($(".service-home .st-load-item:hidden").length === 0) {
                       $(".service-home .st-load-btn").text("No more");
                   }
                   $(".service-home .st-load-btn").removeClass("loadspinner");
               }
           );
       });
});