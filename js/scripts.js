//Business
  var countTo = 0;
  var countBy = 0;


//User
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
      countTo = parseInt($("input#count-to").val());
      countBy = parseInt($("input#count-by").val());
    });
});
