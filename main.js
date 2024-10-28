
let throwDice = function(){
//for the first dice 
let randomNumber1 = Math.ceil(Math.random()*6);

let randomDiceImageSource =   "images/" + "dice" + randomNumber1 + ".png";

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDiceImageSource);




//for the second dice
let randomNumber2 = Math.ceil(Math.random()*6);

let randomDiceImageSource2 =   "images/" + "dice" + randomNumber2 + ".png";

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomDiceImageSource2);




// to decide who did win -result section

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins!!!";
    
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins!!!";
}else{
    document.querySelector("h1").innerHTML = "Draw!";

};

};

let btn = document.querySelector("button");

btn.addEventListener('click',throwDice);
