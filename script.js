var money = 10.00;
var coke = 1.5;
var chips = 1.25;
let cokeCount = 0;
let chipCount = 0;
$(".buy").click(function() {
  let userInput = $(".input").val();
 if (userInput === "coke" && money >= 1.5) {
   money = money - coke
   cokeCount = cokeCount + 1
   $(".money").text("I have $"+money+".");
   $(".message").text("I bought one coke. I have "+money+"$ left. I bought "+cokeCount+" cokes in total");
 }
else if (userInput === "chips" && money >= 1.25) {
   money = money - chips
   chipCount = chipCount + 1
  $(".money").text("I have $"+money+".");
    $(".message").text("I bought chips. I have "+money+"$ left. I bought "+chipCount+" chips in total.");
  
 }
  else {
    $(".message").text("I only have "+money+"$ left. I don't have enough to buy this.")
  }
});
$(".refund").click(function(){
  let userInput = $(".input").val();
  if (userInput === "coke" && cokeCount > 0) {
    cokeCount = cokeCount - 1
    money = money + 1.5
    $(".money").text("I have $"+money+".");
    $(".message").text("You successfully refunded a coke and received 1.5$ back. You now have "+money+"$.");
  }
  else if (userInput === "chips" && chipCount > 0){
    chipCount = chipCount - 1
    money = money + 1.25
    $(".money").text("I have $"+money+".");
    $(".message").text("You successfully refunded a bag of chips and received 1.25$ back. You now have "+money+"$.");
  }
  else {
    $(".message").text("You have not purchased this item.");
  }
});
$(".bigRefund").click(function(){
  money = 10
  cokeCount = 0
  chipCount = 0
  $(".money").text("I have $"+money+".");
  $(".message").text("You have successfully refunded every purchase you made. You now have "+money+"$.");
});