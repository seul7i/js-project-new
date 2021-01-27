var character = document.getElementById("character");
var block = document.getElementById("block");

function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function remove() {
        character.classList.remove("animate");
    }, 500);
}
var score = 0;
var checkDead = setInterval(function () {

    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("Game Over");
    }
    score++;

}, 10);

function printScore() {
    var score = 0;
    document.getElementById("score").innerHTML = score;
}




