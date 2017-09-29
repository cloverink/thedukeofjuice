var Main = (function (self) {
  var my = self, func = {};

  func.scrollTo = function(to) {
    $('html, body').animate({
      scrollTop: to
    }, 1000);
  };

  func.initMainNav = function() {
    $("#lnkMainNav").on("click", function(e){
      e.stopPropagation();
      $(this).toggleClass("actived");
    })
    $("#lnkMainNav").parent().on("click", function(e){
      e.stopPropagation();
      $("#lnkMainNav").removeClass("actived");
    });

    $("#lnkHome").on("click", function(){
      func.scrollTo(0);
    });

    $("#lnkAbout").on("click", function(){
      func.scrollTo($("#section-desc").offset().top);
    });

    $("#lnkAccount").on("click", function(){
      func.scrollTo($("#section-login").offset().top);
    });

    $("#lnkContact").on("click", function(){
      func.scrollTo($("#section-contact").offset().top);
    });

    $("#lnkShopping").on("click", function(){
      func.scrollTo($("#section-cart").offset().top);
    });

    $("#lnkStore").on("click", function(){
      func.scrollTo($("#section-location").offset().top);
    });

  };

  func.init = function() {
    func.initMainNav();
  };


  my.init = function() {
    $(document).ready(function(){
      func.init();
    });
  };

  return my;

})(Main || {}).init();