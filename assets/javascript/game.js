
// Here we are creating a function that generates a random number
function getRndInteger(min, max) 

    {

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // console.log(getRndInteger(19,120));



//===========================================================================================
 
 // variable declarations   (GLOBAL)
var losses = 1;
var wins = 1;
var counter = 0;
var setToZero = 0;
var store =0;

//===========================================================================================

function reset()
  {
    // Here we are declaring the variable store to store the value of generated integer between  19-120;
    store = getRndInteger(19,120);
    // Here in randomnumberbox div, we are calling the function getRndInteger to generate a number betweein 19-120
    $("#randomnumberbox").text(store);

    counter = 0;
    $("#totalscore").text("Your score is reset to: " + counter);
    counter = counter + targetNumber;
    $("#totalscore").text("Your score is increased by " + targetNumber + " so your new score is: " + counter);

  }

//===========================================================================================

$(document).ready(function ()
  
  {

    // Here we are declaring the variable store to store the value of generated integer between  19-120;
    store = getRndInteger(19,120);
    // Here in randomnumberbox div, we are calling the function getRndInteger to generate a number betweein 19-120
    $("#randomnumberbox").text(store);
      
    //========================================================================================

    // Here we created an on-click event that responds to button clicks of the crystal image.
    $(".crystal-image").on("click", function() 

    {

      // Here we establish the "targetNumber" (set to getrndInteger between 1-12).
      var targetNumber = getRndInteger(1,12);
      console.log(targetNumber);

       // Each time the user clicks the crystal the counter goes up by targetNumber which is getRndInteger between 1-12.
      counter = counter + targetNumber;//(counter = counter + targetNumber)

      // We then output the number of times the crystal is clicked.
      $("#totalscore").text("Your score is increased by " + targetNumber + " so your new score is: " + counter);

      //-------------------------------------------------------------------------------------------------------

      if (counter === store) 

      {

       // If the numbers match we'll celebrate the user's win.
        alert("You win!");
        $("#wins").text("Wins: " + wins++);
        $("#totalscore").text("reset to: " + setToZero);
        reset();
       
      }

      else if (counter > store)

      {
        // If the number is more than the genered number, we'll let the user know the loss
        alert("you lose!");
        $("#losses").text("losses: " + losses++);
        $("#totalscore").text("reset to: " + setToZero);
        reset();
        
      }

    //========================================================================================

    });

  //========================================================================================
      
  });
 