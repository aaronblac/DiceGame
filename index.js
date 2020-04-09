var dice1 = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];

var randomNumber1 = Math.floor(Math.random() * dice1.length);

var dice2 = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];

var randomNumber2 = Math.floor(Math.random() * dice2.length);


  document.querySelector(".img1").setAttribute("src", dice1[randomNumber1]);

  document.querySelector(".img2").setAttribute("src", dice2[randomNumber2]);

  if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerHTML = "🚩 Player 1 Wins!!";
  }
  else if (randomNumber1 < randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Player 2 Wins!! 🚩";
  }
  else if (randomNumber1 === randomNumber2) {
    document.querySelector(".container h1").innerHTML = "✒️ Draw!! 🖋";
  }
