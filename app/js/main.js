$(document).ready(function() {
  var slideSpeed = 500;
  var marginTop = 540;
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
    marginRight = 342 * circle;
    $(".main").animate({"margin-right": "-" + marginRight}, slideSpeed);
  });
}); //end ready
