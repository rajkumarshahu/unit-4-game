$(document).ready(function(){

let randomIntFromInterval = ( minNum, maxNum ) => {
  return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
};

let generatedNumber = (randomIntFromInterval(19, 120));
$("#generated-number").text(generatedNumber);


    let quartzValue = randomIntFromInterval(1, 20);
    let sapphireValue = randomIntFromInterval(1, 20);
    let squareValue = randomIntFromInterval(1, 20);
    let rhomboidValue = randomIntFromInterval(1, 20);

    console.log(quartzValue);
    console.log(sapphireValue);
    console.log(squareValue);
    console.log(rhomboidValue);

    $('.card-img').on('click', function(){
      let sum = generatedNumber+quartzValue+sapphireValue+squareValue+rhomboidValue;
      console.log(sum);
    });

    // $('#quartz-crystal').on('click', function(){
    //     let sum = generatedNumber+quartzValue;
    //     console.log(sum);
    //   });

    //   $('#sapphire-crystal').on('click', function(){
    //     let sum = generatedNumber+sapphireValue;
    //     console.log(sum);
    //   });

    //   $('#square-crystal').on('click', function(){
    //     let sum = generatedNumber+squareValue;
    //     console.log(sum);
    //   });

    //   $('#rhomboid-crystal').on('click', function(){
    //     let sum = generatedNumber+rhomboidValue;
    //     console.log(sum);
    //   });
  });