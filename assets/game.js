$(document).ready(function(){

var targetNumber = Math.floor(Math.random()*101) +19;
document.querySelector('#targetnumber').innerHTML = targetNumber;


var number1= Math.floor(Math.random()*11) +1;
var number2= Math.floor(Math.random()*11) +1;
var number3= Math.floor(Math.random()*11) +1;
var number4= Math.floor(Math.random()*11) +1;

var score= 0; 
var wins = 0;
var losses = 0;

document.querySelector('#Wins').innerHTML = wins;
document.querySelector('#Losses').innerHTML = losses;

function reset(){
      targetNumber=Math.floor(Math.random()*101) +19;
      document.querySelector('#targetnumber').innerHTML = targetNumber;
      number1= Math.floor(Math.random()*11) +1;
      number2= Math.floor(Math.random()*11) +1;
      number3= Math.floor(Math.random()*11) +1;
      number4= Math.floor(Math.random()*11) +1;
      score= 0;
      document.querySelector('#yourscore').innerHTML =  score;
    
  }

function win() {

	alert("You win!");
	wins++;
    document.querySelector('#Wins').innerHTML = wins;
	reset();
}



function lose() {

	alert("You lose!");
	losses++;
    document.querySelector('#Losses').innerHTML = losses;
	reset();
}



 $('#button1').on ('click', function(){
    score = score + number1;
    document.querySelector('#yourscore').innerHTML = score;
        if (score == targetNumber){
        win();
      }
        else if (score > targetNumber){
     	lose();
       }   
  });
 
$('#button2').on ('click', function(){
    score = score + number2;
    document.querySelector('#yourscore').innerHTML = score;
       if (score == targetNumber){
        win();
       }
        else if (score > targetNumber){
     	lose();
       }   
  });


 $('#button3').on ('click', function(){
    score = score + number3;
    document.querySelector('#yourscore').innerHTML = score;
       if (score == targetNumber){
        win();
      }
        else if (score > targetNumber){
     	lose();
      }   
  });
 

 $('#button4').on ('click', function(){
    score = score + number4;
    document.querySelector('#yourscore').innerHTML = score; 
      if (score == targetNumber){
        win();
      }
        else if (score > targetNumber){
     	lose();
       }   
  });
 
});