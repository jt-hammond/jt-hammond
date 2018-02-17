// source/javascripts/all.js
//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      if (objectBottom < windowBottom) {
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else {
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll();
});


$(document).ready(function(){
  $(".link").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});


$(document).ready(function(){
  $("#mailto").hover(function() {
    $(this).html("<a href='mailto:jessethammond@gmail.com?Subject=Freelancing' target='_top'><i class='fas fa-envelope'></i></a>");

  }, function() {
    $(this).html("<a href='mailto:jessethammond@gmail.com?Subject=Freelancing' target='_top'><i class='fas fa-envelope'></i> Message Me</a>");
  });
});
