//Business
var countTo = 0;
var countBy = 0;

var countOutput = function() {
  for (var currentNumber = 0; currentNumber <= countTo; currentNumber += countBy) {
    $("#output").append(currentNumber + ", ");
    console.log(currentNumber);
  };
};



//User
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    countTo = parseInt($("input#count-to").val());
    countBy = parseInt($("input#count-by").val());
    if (countTo && countBy){
      countOutput();
    } else {
      alert("blah!");
    };

  });
});
