$(document).ready(function() {
  var slideSpeed = 500;
  var marginTop = 556;
  $(".comment-btn").on("click", function() {
    $(".main").animate({"marginTop": "-" + marginTop}, slideSpeed);
  }); //end on click
  $(".comment-close").on("click", function() {
    $(".main").animate({"marginTop": 0}, slideSpeed);
  }); //end on click
  $(".circle").on("click", function() {
    var marginRight;
    var circle;
    circle = $(this).index();
    marginRight = 312 * circle;
    $(".circle").removeClass("dark");
    $(this).addClass("dark");
    $(".main").animate({"margin-left": "-" + marginRight}, slideSpeed);
  });
  $(".travel-btn").on("click", function() {
    $(".route").animate({"marginTop": 0}, slideSpeed);
    $("footer").css("z-index", -1);
  });
  $(".choose-btn").on("click", function() {
    $(".route").animate({"marginTop": -556}, slideSpeed);
    $("footer").css("z-index", 5);
  })
}); //end ready
