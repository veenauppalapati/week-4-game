
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

var crystal1Img = '../images/crystal-image-1.jpg';
var crystal2Img = '../images/crystal-image-2.jpg';
var crystal3Img = '../images/crystal-image-3.jpg';
var crystal4Img = '../images/crystal-image-4.jpg';
// var num =10;

var imgArray = [crystal1Img, crystal2Img, crystal3Img, crystal4Img];
console.log(imgArray[0]);
console.log(imgArray[1]);
console.log(imgArray[2]);
console.log(imgArray[3]);
console.log(typeof (imgArray[0]));
console.log(typeof (imgArray[1]));
console.log(typeof (imgArray[2]));
console.log(typeof (imgArray[3]));
// var randomWord = "";

// We begin by expanding our array to include four options.
// var array = [10, 5, 3, 7];



//===========================================================================================

// function randomWordInArray()
//   {
//     randomWord = array[Math.floor(Math.random() * array.length)];
//     for(var i = 0; i < array.length; i++)
//       {
//         var x = randomWord(i);
//         var y = randomWord(i);
//       }   
//       x!= y 
    
//   }
//   randomWordInArray();
   

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

     // grab the value of the image which has the attibute of crystalValue
     var val = $(this).attr("crystalValue"); 
     console.log(val);
     console.log(typeof (val));
     // turn the string into a number so we can add points
     val = parseInt(val);
     console.log(typeof (val));

     // var val = $(this).attr(crystalValue)
     // val = getRndInteger(1, 12);
      
      //add number to score
      $("")
       // Each time the user clicks the crystal the counter goes up by targetNumber which is getRndInteger between 1-12.
      counter = counter + val;//(counter = counter + targetNumber)

      // We then output the number of times the crystal is clicked.
      $("#totalscore").text("Your score is increased by " + val + " so your new score is: " + counter);

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
 