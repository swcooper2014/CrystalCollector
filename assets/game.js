$(document).ready(function(){

var targetNumber = Math.floor(Math.random()*101) +19;
 $('#targetnumber').text(targetNumber);

 console.log(targetnumber);

var number1= Math.floor(Math.random()*11) +1;
var number2= Math.floor(Math.random()*11) +1;
var number3= Math.floor(Math.random()*11) +1;
var number4= Math.floor(Math.random()*11) +1;

var score= 0; 
var wins = 0;
var losses = 0;

$('#Wins').text(wins);
$('#Losses').text(losses);

function reset(){
      targetNumber=Math.floor(Math.random()*101) +19;
       $('#targetnumber').text(targetNumber);
      number1= Math.floor(Math.random()*11) +1;
      number2= Math.floor(Math.random()*11) +1;
      number3= Math.floor(Math.random()*11) +1;
      number4= Math.floor(Math.random()*11) +1;
      score= 0;
      $('#yourscore').text(score);
  }

function win() {

	alert("You win!");
	wins++;
	$('#Wins').text(wins);
	reset();
}



function lose() {

	alert("You lose!");
	losses++;
	$("#Losses").text(losses);
	reset();
}



 $('#button1').on ('click', function(){
    score = score + number1;
    $('#yourscore').text(score);
        if (score == targetNumber){
        win();
      }
        else if (score > targetNumber){
     	lose();
       }   
  });
 
$('#button2').on ('click', function(){
    score = score + number2;
    $('#yourscore').text(score);
       if (score == targetNumber){
        win();
       }
        else if (score > targetNumber){
     	lose();
       }   
  });


 $('#button3').on ('click', function(){
    score = score + number3;
    $('#yourscore').text(score);
       if (score == targetNumber){
        win();
      }
        else if (score > targetNumber){
     	lose();
      }   
  });
 

 $('#button4').on ('click', function(){
    score = score + number4;
   $('#yourscore').text(score); 
      if (score == targetNumber){
        win();
      }
        else if (score > targetNumber){
     	lose();
       }   
  });
 
});