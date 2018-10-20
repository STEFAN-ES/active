jQuery(function ($) {
  $(".input-two").mask("+7(999) 999-99-99");
});
$(".main-arrow__link").on("click", function (event) {

  var id = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({
    scrollTop: top
  }, 1000);
});