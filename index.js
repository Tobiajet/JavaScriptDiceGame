var randomNumber = Math.floor(Math.random()* 6);
var randomNumber1 = randomNumber + 1;

var randomDiceImage = "dice" + randomNumber1 +".png";

var randomImage = "images/" + randomDiceImage;

var image1 = document.querySelectorAll(".img2")[0].setAttribute("src", randomImage);  


var randomNumber2 = Math.floor((Math.random()* 6) + 1);
var randomDiceImage2 = "dice" + randomNumber2 +".png";
var randomImage2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll(".img2")[1].setAttribute("src", randomImage2);  




if (randomNumber1 > randomNumber2){
    document.querySelector(".container h1").innerHTML="Player 1 wins";
} else if (randomNumber2 > randomNumber1){
    document.querySelector(".container h1").innerHTML="Player 2 wins";
}else {
    document.querySelector(".container h1").innerHTML="Draw";
}

