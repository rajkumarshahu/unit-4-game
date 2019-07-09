$(() => {
  const crystal = [
    { name: "quartz-crystal", url: "assets/images/quartz-crystal.png" },
    { name: "sapphire-crystal", url: "assets/images/saphaire.jpeg" },
    { name: "square-crystal", url: "assets/images/square-crystal.jpeg" },
    { name: "rhomboid-crystal", url: "assets/images/rhomboid-crystal.png" },
  ];

  for (let i = 0; i < crystal.length; i++) {
    $(".images").append(
      '<div class="col-3">' +
        '<div class="card m-3 ">' +
        '<img src="' +
        crystal[i].url +
        '" id="' +
        crystal[i].name +
        '" class = "card-img" />' +
        "</div>" +
        "</div>"
    );
  }

  var wins = 0;
  var loses = 0;
  var score = 0;

  let randomIntFromInterval = (minNum, maxNum) => {
    return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
  };

  let generatedNumber = randomIntFromInterval(19, 120);
  let quartzValue = randomIntFromInterval(1, 20);
  let sapphireValue = randomIntFromInterval(1, 20);
  let squareValue = randomIntFromInterval(1, 20);
  let rhomboidValue = randomIntFromInterval(1, 20);

  $("#generated-number").text(generatedNumber);

  var resetGame = () => {
    score = 0;
    $("#score").text(score);
    generatedNumber = randomIntFromInterval(19, 120);
    $("#generated-number").text(generatedNumber);
    quartzValue = randomIntFromInterval(1, 20);
    sapphireValue = randomIntFromInterval(1, 20);
    squareValue = randomIntFromInterval(1, 20);
    rhomboidValue = randomIntFromInterval(1, 20);

    console.log(quartzValue);
    console.log(sapphireValue);
    console.log(squareValue);
    console.log(rhomboidValue);
  };

  let winOrLose = ()=>{
    if (score == generatedNumber) {
      ++wins;
      $("#wins").text(wins);
      $(".alert").html('<div class="alert alert-success">You Win</div');
      resetGame();
    } else if (score > generatedNumber) {
      ++loses;
      $("#loses").text(loses);
      $(".alert").html('<div class="alert alert-danger">You lost</div');
      resetGame();
    }
  }


  $("#quartz-crystal").on("click", () => {
    score = score + quartzValue;
    $("#score").text(score);
    winOrLose();
  });

  $("#sapphire-crystal").on("click", () => {
    score = score + sapphireValue;
    $("#score").text(score);
    winOrLose();
  });

  $("#square-crystal").on("click", () => {
    score = score + squareValue;
    $("#score").text(score);
    winOrLose();
  });

  $("#rhomboid-crystal").on("click", () => {
    score = score + rhomboidValue;
    $("#score").text(score);
    winOrLose();
  });
});
