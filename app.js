(function ($) {

    $(".menu li.menu-link").each(function (i, v) {
      $(this).click(function () {
        $(".menu li.menu-link").removeClass("active");
        $(this).addClass("active");
      });
    });
  
})(jQuery);
