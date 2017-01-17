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

    console.log(countTo);
    console.log(countBy);

    if (!(countTo && countBy)){
      alert("Please input a number!");
    } else if (countTo <= 0) {
      alert("The first value may not be negative.")
    } else if (countBy <= 0) {
      alert("The second value may not be negative.")
    } else if (countBy>countTo) {
      alert("The count by number cannot be larger than the count to number")
    } else {
      countOutput();
    };
  });
});
