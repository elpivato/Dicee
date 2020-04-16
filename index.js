var randomNumber1 = Math.floor(1 + 6 * Math.random());
var randomNumber2 = Math.floor(1 + 6 * Math.random());

var image = document.querySelectorAll("img");
var h_title = document.querySelector("h1");

image[0].setAttribute("src",`images/dice${randomNumber1}.png`);
image[1].setAttribute("src",`images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2){
    h_title.innerHTML = "🚩Player 1 ganha!"
}

if(randomNumber1 < randomNumber2){
    h_title.innerHTML = "Player 2 ganha!🚩"
}

if (randomNumber1 === randomNumber2){
    h_title.innerHTML = "🚩Empate!🚩"
}