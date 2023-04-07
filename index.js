// Your code here
const dodger = document.getElementById("dodger");
console.log("this is the current position of the dodger: ", dodger.style.left)
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  console.log("this is the value of the variable leftNumbers: ", leftNumbers)
  const left = parseInt(leftNumbers, 10);
console.log("this is the value of the var left: ", left)
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
function moveDodgerRight() {
  const rightNumbers = dodger.style.left.replace("px", "");
  console.log("this is the value of the variable rightNumbers: ", rightNumbers)
  const right = parseInt(rightNumbers, 10);
  console.log("this is the value of the var right: ", right)
  if (right < 360) {
    dodger.style.left = `${right + 1}px`;
  }
}


document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});



