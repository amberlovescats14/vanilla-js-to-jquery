// two of dice have the same points, like 3 6 5 6 1 - called pair;
// three of dice have the same points, like 2 4 5 4 4 - called three;
// four of dice have the same points, like 1 4 1 1 1 - called four;
// all five dice have the same points, like 2 2 2 2 2 - called yacht;
// two pairs at once, like 3 6 5 3 5 - called two-pairs;
// pair and three at once, like 1 6 6 1 6 - called full-house;
// sequence from 1 to 5, like 2 4 3 5 1 - called small-straight;
// sequence from 2 to 6, like 6 3 4 2 5 - called big-straight.

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
  report()
}

// report on dice 
function report () {
  clearReportBox()
  //get values of dice
  var allDice = document.querySelectorAll('.die')
  var allDiceValues = []
  // console.log('allDice:', allDice)
  allDice.forEach(die => {
    // console.log('die:', die)
    var dieValue = die.getAttribute('data-roll')
    // console.log('dieValue:', dieValue)
    allDiceValues.push(dieValue)
  })
  // console.log('allDiceValues:', allDiceValues)

  // find duplicates
  var duplicates = {}
  allDiceValues.forEach(dieVal => {
    console.log('dieVal:', dieVal)
    duplicates[dieVal] = (duplicates[dieVal] || 0) + 1

    // print duplicates
    if (duplicates[dieVal] === 5) reportBox.innerHTML += `You have a yacht of ${dieVal}s<br>` 
    if (duplicates[dieVal] === 4) reportBox.innerHTML += `There are four of ${dieVal}s<br>`
    if (duplicates[dieVal] === 3) reportBox.innerHTML += `There are three of ${dieVal}s<br>`
    
    if (duplicates[dieVal] === 2) {
      count++
      if ( count >= 2 ) {
        reportBox.innerHTML += `you have two pairs </br>`
      } else {
        reportBox.innerHTML += `there are a pair of ${dieVal} </br>`
      }
    }

  })
  console.log(duplicates)
}

// clear reportBox
function clearReportBox() {
  
  reportBox.innerHTML = " "
  count = 0
}