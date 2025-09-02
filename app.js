let boxes = document.getElementsByClassName("box");
let resetBtn = document.getElementById("reset-btn");
let winnerBox = document.getElementById("winner-box");
let buttonCnt = 0;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let turnO = true;
function checkWinner() {
  for (let indexes of winPatterns) {
    if (
      boxes[indexes[0]].innerText === boxes[indexes[1]].innerText &&
      boxes[indexes[2]].innerText === boxes[indexes[0]].innerText &&
      boxes[indexes[0]].innerText !== ""
    ) {
      return true;
    }
  }
}
for (const box of boxes) {
  box.addEventListener("click", function (e) {
    buttonCnt++;
    if (turnO) {
      box.innerText = "O";
      box.style.color = "red";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color = "blue";
      turnO = true;
    }
    box.disabled = true;
    let gotWinner = checkWinner();
    if (gotWinner) {
      disableBtns();
      
      if (box.innerText === "X") {
        winnerBox.innerHTML = "Winner is X";
      } else {
        winnerBox.innerText = "Winner is O";
      }
    }
    if (buttonCnt == 9) {
      winnerBox.innerHTML = "Match Draw";
    }
  });
}
function enableBtns() {
  for (let box of boxes) {
    box.disabled = false;
  }
}
function disableBtns() {
  for (let box of boxes) {
    box.disabled = true;
  }
}
resetBtn.addEventListener("click", function (e) {
  turnO = true;
  for (const box of boxes) {
    box.innerText = "";
    box.disabled = false;
      winnerBox.innerText = "Not Ended";
      buttonCnt = 0;
  }
});
