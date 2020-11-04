var randomNumber1 = Math.floor(Math.random()*6)+1; //1-6

 var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1-6.png

 var randomImageSource = "images/" + randomDiceImage; //images/dice1.png-...6

 var image1= document.querySelectorAll("img")[0];

image1.setAttributes("src", randomImageSource);
