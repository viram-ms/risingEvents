$(document).ready(function () {
  
if (screen.width > 768) {
  $('.dmenu').hover(function () {
    $(this).find('.nav-link').attr("aria-expanded", "true");
    $(this).find('.sm-menu').slideDown(150);
  }, function () {
    $(this).find('.nav-link').attr("aria-expanded", "false");
    $(this).find('.sm-menu').slideUp(105);
  });
}

 

});
    
       
    