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
          tr += '<input type="number" value="1"> ';
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
    var total = 0;
    var gst = 0;
    var $cart = $("#section-cart .cart");
    $cart.find("tbody tr").each(function(k, v) {
        $row = $(v);
        $col = $row.find("td");
    
        price = $col.eq(1)
        price = +price.text().replace("$", "");
        qty = +$col.eq(2).find("input").val();
    
        subtotal = (price * qty);
        total += subtotal;
        $col.eq(3).text("$" + subtotal.toFixed(2));
    });
    gst = total * 7 / 100;


    var $grandTotal = $("#section-cart .grand-total");
    
    $grandTotal.find(".subtotal span").text("$" + total.toFixed(2));
    $grandTotal.find(".incgst span").text("$" + gst.toFixed(2));
    
    $grandTotal.find(".grandtotal span").text("$" + (total + gst).toFixed(2));
  };

  func.aniOnClick = function(target) {
    $(target).addClass("clicked");
    setTimeout(function() {
      $(target).removeClass("clicked");
    }, 100);
  };

  func.initShop = function() {

    $("#btnAddToCartProd").on("click", function(){
      func.buyItem("blue");
      func.aniOnClick(this);
    });

    $("#section-items").find(".brown").on("click", function(){
      func.buyItem("brown");
      func.aniOnClick(this);
    });
    $("#section-items").find(".green").on("click", function(){
      func.buyItem("green");
      func.aniOnClick(this);
    });
    $("#section-items").find(".white").on("click", function(){
      func.buyItem("white");
      func.aniOnClick(this);
    });
    $("#section-items").find(".red").on("click", function(){
      func.buyItem("red");
      func.aniOnClick(this);
    });
    $("#section-items").find(".orange").on("click", function(){
      func.buyItem("orange");
      func.aniOnClick(this);
    });
    $("#section-items").find(".yellow").on("click", function(){
      func.buyItem("yellow");
      func.aniOnClick(this);
    });


    var $cart = $("#section-cart .cart");
    $cart.on("click", ".del" , function() {
      if(!confirm("Delete ?")) return;
      $(this).closest("tr").remove();
      func.calculatePrice();
    });

    $cart.on("click", ".btn-edit" , function() {
      $(this).closest("td").addClass("edit-state");
    });

    $cart.on("click", ".btn-ok" , function() {
      $(this).closest("td").removeClass("edit-state");
      func.calculatePrice();
    });
    
    $cart.on("focus", "form input", function() {
      $(this).closest("td").addClass("edit-state");
    })


    $("#btnUpdateCart").on("click", function(){
      func.calculatePrice();
    });

    $("#btnEmptyCart").on("click", function(){
      if(!confirm("Delete ?")) return;
      $("#section-cart .cart").find("tbody").empty();
      func.calculatePrice();
    })

    func.calculatePrice();

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