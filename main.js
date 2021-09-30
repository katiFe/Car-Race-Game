const MyGame = new Game();

myGame.startGame();

document.addEventListener("keydown", function(event){
if(event.key === "ArrowLeft") {
    console.log("arrow left presses")
} else if (event.key === "ArrowRight") {
    console.log("arrow right pressed")
}
});