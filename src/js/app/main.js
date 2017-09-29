var Main = (function (self) {
  var my = self, func = {};



  func.initMainNav = function() {
    $("#lnkMainNav").on("click", function(e){
      e.stopPropagation();
      $(this).toggleClass("actived");
    })
    $("#lnkMainNav").parent().on("click", function(e){
      e.stopPropagation();
      $("#lnkMainNav").removeClass("actived");
    });
  }

  func.init = function() {
    func.initMainNav();
  }


  my.init = function() {
    $(document).ready(function(){
      func.init();
    });
  };

  return my;

})(Main || {}).init();