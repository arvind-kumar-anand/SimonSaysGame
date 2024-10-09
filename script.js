let gameSequence = [];
let userSequence = [];
let btnsColors = ["yellow", "red", "green", "purple"];
let started = false;
let level = 0;
let heading2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if (started == false) {
        // console.log("Game Started");
        started = true;
        levelUp();
    }
});
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 100);
}
function userFlash(btn) {
    btn.classList.add("user");
    setTimeout(function () {
        btn.classList.remove("user");
    }, 100);
}
function levelUp() {
    userSequence = [];
    level++;
    heading2.innerText = `Level ${level}`;
    //random button choose
    let randomIdx = Math.floor(4 * Math.random());
    let randomColor = btnsColors[randomIdx];
    let randomButtons = document.querySelector(`.${randomColor}`);
    // console.log(randomIdx);
    // console.log(randomColor);
    // console.log(randomButtons);
    gameSequence.push(randomColor);
    console.log(gameSequence);
    gameFlash(randomButtons);
}
function checkAns(index) {
    // console.log(level);
    // let index = level - 1;
    if (gameSequence[index] === userSequence[index]) {
        if (gameSequence.length == userSequence.length) {
            setTimeout(levelUp, 1000);;
        }
    } else {
        heading2.innerHTML = `Game Over Your Score = <b>${level}</b> </br> Press Any Key to Re-start the Game`;
        // let body = document.querySelector("body");
        // body.style.backgroundColor = "pink";
        setTimeout(function () {
            let body = document.querySelector("body");
            body.style.backgroundColor = "white";
        }, 50);
        reset();
    }
}
function btnPress() {
    let btn = this;
    userFlash(btn);
    let usercolor = btn.getAttribute("id");
    userSequence.push(usercolor);
    console.log(userSequence);
    checkAns(userSequence.length - 1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
function reset() {
    started = false;
    gameSequence = [];
    userSequence = [];
    level = 0;
}