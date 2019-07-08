$(document).ready(function() {
  var wins = 0;
  var loses = 0;
  var score = 0;

  let randomIntFromInterval = (minNum, maxNum) => {
    return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
  };

  let generatedNumber = randomIntFromInterval(19, 120);
  $("#generated-number").text(generatedNumber);

  let quartzValue = randomIntFromInterval(1, 20);
  let sapphireValue = randomIntFromInterval(1, 20);
  let squareValue = randomIntFromInterval(1, 20);
  let rhomboidValue = randomIntFromInterval(1, 20);

  console.log(quartzValue);
  console.log(sapphireValue);
  console.log(squareValue);
  console.log(rhomboidValue);

let resetGame = () =>{

  $("#score").text(0);
  generatedNumber = randomIntFromInterval(19, 120);


   quartzValue = randomIntFromInterval(1, 20);
   sapphireValue = randomIntFromInterval(1, 20);
   squareValue = randomIntFromInterval(1, 20);
   rhomboidValue = randomIntFromInterval(1, 20);

}

  $("#quartz-crystal").on("click", ()=> {
    score = score + quartzValue;
    $("#score").text(score);
    if (score == generatedNumber) {
      wins++;
      console.log(wins);
      alert("You Win");
      $("#win").text(wins);
      resetGame();
    } else if (score > generatedNumber) {
      loses++;
      console.log(loses);
      console.log(wins);
      alert("You lost");
      $("#loses").text(loses);
      resetGame();
    }
  });

  $("#sapphire-crystal").on("click", () =>{
    score = score + sapphireValue;
    $("#score").text(score);
    if (score == generatedNumber) {
      wins++;
      console.log(wins);
      alert("You Win");
      $("#win").text(wins);
      resetGame();
    } else if (score > generatedNumber) {
      loses++;
      console.log(loses);
      console.log(wins);
      alert("You lost");
      $("#loses").text(loses);
      resetGame();
    }
  });

  $("#square-crystal").on("click", () =>{
    score = score + squareValue;
    $("#score").text(score);
    if (score == generatedNumber) {
      wins++;
      console.log(wins);
      alert("You Win");
      $("#win").text(wins);
      resetGame();
    } else if (score > generatedNumber) {
      loses++;
      console.log(loses);
      console.log(wins);
      alert("You lost");
      $("#loses").text(loses);
      resetGame();
    }
  });

  $("#rhomboid-crystal").on("click", ()=> {
    score = score + rhomboidValue;
    $("#score").text(score);
    if (score == generatedNumber) {
      wins++;
      console.log(wins);
      alert("You Win");
      $("#win").text(wins);
      resetGame();
    } else if (score > generatedNumber) {
      loses++;
      console.log(loses);
      console.log(wins);
      alert("You lost");
      $("#loses").text(loses);
      resetGame();
    }
  });
});
