let dieChar = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"]
let reportBox = document.querySelector("#report")
let count = 0

// roll the dice
function roll () {
  document.querySelector("#dice").innerHTML = "";
  for (let i = 0; i < 5; i++) {
    // gimme random number and do it 5 times
    let roll = Math.floor(Math.random() * 6) + 1;

    // create dice with random number
    document.querySelector("#dice").innerHTML += `<span class="die" data-roll="${roll}">${dieChar[roll - 1]}</span>`;
  }
  report();
}
function report () {
  clearReportBox()
  let allDice = document.querySelectorAll('.die')
  let allDiceValues = []

  // get values of dice
  allDice.forEach(die => {
    let dieValue = die.getAttribute('data-roll')
    allDiceValues.push(dieValue)
  })
  // find duplicates
  let duplicates = {}
  allDiceValues.forEach(dieVal => {
    duplicates[dieVal] = (duplicates[dieVal]||0) + 1

    //print duplicates
    if (duplicates[dieVal] === 5) reportBox.innerHTML += `You have a yacht of ${dieVal}s<br>` 
    if (duplicates[dieVal] === 4) reportBox.innerHTML += `There are four of ${dieVal}s<br>`
    if (duplicates[dieVal] === 3) reportBox.innerHTML += `There are three of ${dieVal}s<br>`
    if (duplicates[dieVal] === 2) {
      count++
      if (count >= 2) {
        clearReportBox()
        reportBox.innerHTML += `There are a twoPairs<br>`
      } else {
        reportBox.innerHTML += `There are a pair of ${dieVal}s<br>`
      }
    }
    // count = 0
  })
}
function clearReportBox () {
  reportBox.innerHTML = " "
  count = 0
}
