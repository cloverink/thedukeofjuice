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

  func.buyItem = function(productName) {

    var tr = "";
    tr += '<tr> ';
      tr += '<td>' + productName + ' heaven</td> ';
      tr += '<td>$12.50</td> ';
      tr += '<td> ';
        tr += '<form>';
          tr += '<input type="text" value="1" readonly="true">';
        tr += '</form>';
        tr += '<a href="#!" class="btn btn-sky btn-ok">OK</a>';
        tr += '<a href="#!" class="btn-edit"><i class="fa fa-pencil-square-o"></i></a> ';
      tr += '</td> ';
      tr += '<td>$12.50</td> ';
      tr += '<td> <a href="#!" class="del"></a> </td> ';
    tr += '</tr>';
    $("#section-cart .cart").find("tbody").append(tr);
    func.calculatePrice();

  };

  func.calculatePrice = function() {

  };

  func.initShop = function() {

    $("#section-items").find(".brown").on("click", function(){
      func.buyItem("brown");
    });
    $("#section-items").find(".green").on("click", function(){
      func.buyItem("green");
    });
    $("#section-items").find(".white").on("click", function(){
      func.buyItem("white");
    });
    $("#section-items").find(".red").on("click", function(){
      func.buyItem("red");
    });
    $("#section-items").find(".orange").on("click", function(){
      func.buyItem("orange");
    });
    $("#section-items").find(".yellow").on("click", function(){
      func.buyItem("yellow");
    });


    var $cart = $("#section-cart .cart");
    $cart.on("click", ".del" , function() {
      if(!confirm("Delete ?")) return;
      $(this).closest("tr").remove();
    });

    $cart.on("click", ".btn-edit" , function() {
      $(this).closest("td").addClass("edit-state");
    });

    



  };

  

  func.init = function() {
    func.initMainNav();
    func.initShop();
  };


  my.init = function() {
    $(document).ready(function(){
      func.init();
    });
  };

  return my;

})(Main || {}).init();