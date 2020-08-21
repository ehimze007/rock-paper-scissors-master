const body = document.body;
const rulesCancelButton = document.querySelector(".rulesCancelButton");
const rulesImage = document.querySelector(".rulesImage");
const rulesControlButton = document.querySelector(".rulesButton");
const icons = document.querySelectorAll(".icon");
const pentagonContainer = document.querySelector("#pentagonContainer");
const resultDiv = document.querySelector("#resultDiv");
const pickedDiv = document.querySelector("#myPick2");
const randomDiv = document.querySelector("#oppPick2");
const winOrLose = document.querySelector("#winOrLose");
const scoreElement = document.querySelector("#scoreValue");
const playAgainButton = document.querySelector(".playAgainButton");
const innerScore = document.querySelector("#scoreValue");


// Basic appearance and disappearance
rulesCancelButton.addEventListener("click", () => {
  body.removeAttribute("class");
  rulesImage.style.display = "none";
});

// Control background apperance when rule image is displayed
rulesControlButton.addEventListener("click", () => {
  rulesImage.style.display = "block";
  body.setAttribute("class", "bodyStyle");
});

// Play again Control
playAgainButton.addEventListener("click", () => {
  pentagonContainer.style.display = "block";
  resultDiv.style.display = "none";
  document.querySelector("#winOrLose").style.display = "none";
  randomDiv.setAttribute("class", "oppPick");
});

// selecting my icon
let score = 0;
innerScore.innerText = score;
for (let i = 0; i < 6; i++) {
  icons[i].addEventListener("click", () => {
    pentagonContainer.style.display = "none";
    resultDiv.style.display = "flex";
    if (icons[i] === document.querySelector("#icon1")) {
      pickedDiv.setAttribute("class", "icon01");
      setTimeout(() => {
        let randomNumberSelection = Math.floor((Math.random() * 5) + 1);
        randomDiv.setAttribute("class", "icon0" + randomNumberSelection);

        if (pickedDiv.getAttribute("class") == randomDiv.getAttribute("class")) {
          winOrLose.style.display = "block";
          winOrLose.firstElementChild.innerText = "DRAW";
        } else if (randomDiv.getAttribute("class") == "icon02" || randomDiv.getAttribute("class") == "icon03") {
          winOrLose.style.display = "block";
          winOrLose.firstElementChild.innerText = "YOU WIN";
          pickedDiv.style.animation = "icon01 2s linear infinite"
          score++;
          innerScore.innerText = score;
        } else {
          winOrLose.style.display = "block";
          winOrLose.firstElementChild.innerText = "YOU LOSE";
          randomDiv.style.animation = "icon01 2s linear infinite"
          score--;
          innerScore.innerText = score;
        }
      }, 1000);

    } else if (icons[i] === document.querySelector("#icon2")) {
      pickedDiv.setAttribute("class", "icon02");

      setTimeout(() => {
        let randomNumberSelection = Math.floor((Math.random() * 5) + 1);
        randomDiv.setAttribute("class", "icon0" + randomNumberSelection);

        if (pickedDiv.getAttribute("class") == randomDiv.getAttribute("class")) {
          winOrLose.style.display = "block";
          winOrLose.firstElementChild.innerText = "DRAW";
        } else if (randomDiv.getAttribute("class") == "icon05" || randomDiv.getAttribute("class") == "icon04") {
          winOrLose.style.display = "block";
          winOrLose.firstElementChild.innerText = "YOU WIN";
          pickedDiv.style.animation = "icon02 2s linear infinite"
          score++;
          innerScore.innerText = score;
        } else {
          winOrLose.style.display = "block";
          winOrLose.firstElementChild.innerText = "YOU LOSE";
          randomDiv.style.animation = "icon02 2s linear infinite"
          score--;
          innerScore.innerText = score;
        }
      }, 1000);

    } else if (icons[i] === document.querySelector("#icon3")) {
      pickedDiv.setAttribute("class", "icon03");
      setTimeout(() => {
        let randomNumberSelection = Math.floor((Math.random() * 5) + 1);
        randomDiv.setAttribute("class", "icon0" + randomNumberSelection);

        if (pickedDiv.getAttribute("class") == randomDiv.getAttribute("class")) {
          winOrLose.style.display = "block";
          winOrLose.firstElementChild.innerText = "DRAW";
        } else if (randomDiv.getAttribute("class") == "icon02" || randomDiv.getAttribute("class") == "icon04") {
          winOrLose.style.display = "block";
          winOrLose.firstElementChild.innerText = "YOU WIN";
          pickedDiv.style.animation = "icon03 2s linear infinite"
          score++;
          innerScore.innerText = score;
        } else {
          winOrLose.style.display = "block";
          winOrLose.firstElementChild.innerText = "YOU LOSE";
          randomDiv.style.animation = "icon03 2s linear infinite"
          score--;
          innerScore.innerText = score;
        }
      }, 1000);

    } else if (icons[i] === document.querySelector("#icon4")) {
      pickedDiv.setAttribute("class", "icon04");
      setTimeout(() => {
        let randomNumberSelection = Math.floor((Math.random() * 5) + 1);
        randomDiv.setAttribute("class", "icon0" + randomNumberSelection);

        if (pickedDiv.getAttribute("class") == randomDiv.getAttribute("class")) {
          winOrLose.style.display = "block";
          winOrLose.firstElementChild.innerText = "DRAW";
        } else if (randomDiv.getAttribute("class") == "icon01" || randomDiv.getAttribute("class") == "icon05") {
          winOrLose.style.display = "block";
          winOrLose.firstElementChild.innerText = "YOU WIN";
          pickedDiv.style.animation = "icon04 2s linear infinite"
          score++;
          innerScore.innerText = score;
        } else {
          winOrLose.style.display = "block";
          winOrLose.firstElementChild.innerText = "YOU LOSE";
          randomDiv.style.animation = "icon04 2s linear infinite"
          score--;
          innerScore.innerText = score;
        }
      }, 1000);

    } else {
      pickedDiv.setAttribute("class", "icon05");
      setTimeout(() => {
        let randomNumberSelection = Math.floor((Math.random() * 5) + 1);
        randomDiv.setAttribute("class", "icon0" + randomNumberSelection);

        if (pickedDiv.getAttribute("class") == randomDiv.getAttribute("class")) {
          winOrLose.style.display = "block";
          winOrLose.firstElementChild.innerText = "DRAW";
        } else if (randomDiv.getAttribute("class") == "icon01" || randomDiv.getAttribute("class") == "icon03") {
          winOrLose.style.display = "block";
          winOrLose.firstElementChild.innerText = "YOU WIN";
          pickedDiv.style.animation = "icon05 2s linear infinite"
          score++;
          innerScore.innerText = score;
        } else {
          winOrLose.style.display = "block";
          winOrLose.firstElementChild.innerText = "YOU LOSE";
          randomDiv.style.animation = "icon05 2s linear infinite"
          score--;
          innerScore.innerText = score;
        }
      }, 1000);
    }
    randomDiv.style.animation = "none"
    pickedDiv.style.animation = "none"
  });
}
