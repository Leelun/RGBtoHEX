//R值
const redRange = document.querySelector("#value-R")
const redNumber = document.querySelector(".number-R")
const redHex = document.querySelector(".hex").children[1]

redRange.addEventListener("input", function(event) {
  redNumber.innerHTML = this.value;
  let numberChangeR = parseInt(redNumber.innerHTML, 10)
  redHex.innerHTML = numberChangeR.toString(16).padStart(2, '0')
})

//G值
const greenRange = document.querySelector("#value-G")
const greenNumber = document.querySelector(".number-G")
const greenHex = document.querySelector(".hex").children[2]

greenRange.addEventListener("input", function(event) {
  greenNumber.innerHTML = this.value;
  let numberChangeG = parseInt(greenNumber.innerHTML, 10)
  greenHex.innerHTML = numberChangeG.toString(16).padStart(2, '0')
})

//B值
const blueRange = document.querySelector("#value-B")
const blueNumber = document.querySelector(".number-B")
const blueHex = document.querySelector(".hex").children[3]

blueRange.addEventListener("input", function(event) {
  blueNumber.innerHTML = this.value;
  let numberChangeB = parseInt(blueNumber.innerHTML, 10)
  blueHex.innerHTML = numberChangeB.toString(16).padStart(2, '0')
})
//同步更新背景色
let background = document.querySelector("#container")
background.addEventListener("input", function(event) {
  let hexNumber = "#" + redHex.textContent + greenHex.textContent + blueHex.textContent
  document.body.style.backgroundColor = hexNumber
})