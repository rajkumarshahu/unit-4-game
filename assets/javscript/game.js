$(() => {
  const crystal = [
    { name: "quartz-crystal", url: "assets/images/quartz-crystal.png" },
    { name: "sapphire-crystal", url: "assets/images/saphaire.jpeg" },
    { name: "square-crystal", url: "assets/images/square-crystal.jpeg" },
    { name: "rhomboid-crystal", url: "assets/images/rhomboid-crystal.png" },
  ];

  // Displaying crystal images
  for (let i = 0; i < crystal.length; i++) {
    $(".images").append(
      '<div class="col-lg-3 col-sm-6">' +
        '<div class="card m-3">' +
        '<img src="' +
        crystal[i].url +
        '" id="' +
        crystal[i].name +
        '" class = "card-img" />' +
        "</div>" +
        "</div>"
    );
  }
// Global variables
  let wins = 0;
  let loses = 0;
  let score = 0;

  //Function to generate random number
  let randomNumBetweenMaxMin = (minNum, maxNum) => {
    return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
  };

  // Random numbers to be matched
  let generatedNumber = randomNumBetweenMaxMin(19, 120);

  let quartzValue = randomNumBetweenMaxMin(1, 12);
  let sapphireValue = randomNumBetweenMaxMin(1, 12);
  let squareValue = randomNumBetweenMaxMin(1, 12);
  let rhomboidValue = randomNumBetweenMaxMin(1, 12);

  // Displaying score to match
  $("#generated-number").text(generatedNumber);

  // Reset function
  let resetGame = () => {
    score = 0;
    $("#score").text(score);
    generatedNumber = randomNumBetweenMaxMin(19, 120);
    $("#generated-number").text(generatedNumber);
    quartzValue = randomNumBetweenMaxMin(1, 12);
    sapphireValue = randomNumBetweenMaxMin(1, 12);
    squareValue = randomNumBetweenMaxMin(1, 12);
    rhomboidValue = randomNumBetweenMaxMin(1, 12);
  };

//Function to decide win or lose cases
  let winOrLose = ()=>{
    $(".alert").html(`<div class="alert alert-info h5">You are collecting crystals ...</div>`);
    if (score == generatedNumber) {
      ++wins;
      $("#wins").text(wins);
      $(".alert").html(`<div class="alert alert-success h5">You Win !!!</div>`);
      resetGame();
    } else if (score > generatedNumber) {
      ++loses;
      $("#loses").text(loses);
      $(".alert").html(`<div class="alert alert-danger h5">You Lost !!!</div`);
      resetGame();
    }
  }

// Attaching click event to quartz cystal image
  $("#quartz-crystal").on("click", () => {
    score = score + quartzValue;
    $("#score").text(score);
    winOrLose();
  });

  // Attaching click event to sapphire cystal image
  $("#sapphire-crystal").on("click", () => {
    score = score + sapphireValue;
    $("#score").text(score);
    winOrLose();
  });

  // Attaching click event to square cystal image
  $("#square-crystal").on("click", () => {
    score = score + squareValue;
    $("#score").text(score);
    winOrLose();
  });

// Attaching click event to rhomboid cystal image
  $("#rhomboid-crystal").on("click", () => {
    score = score + rhomboidValue;
    $("#score").text(score);
    winOrLose();
  });
});
