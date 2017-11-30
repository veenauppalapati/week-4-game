function getRndInteger(min, max) 
		{
    		return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		// console.log(getRndInteger(19,120));
		

$(document).ready(function()
	{
		var losses = 0;
		var wins = 0;
		var store = getRndInteger(19,120);
    	$("#randomnumberbox").text(store);
    	
    	//========================================================================================

    	
  		// Here we created a counter, we'll be using this to track the user's total.
  		var counter = 0;

  		// Here we created an on-click event that responds to button clicks of the crystal image.
  		$(".crystal-image").on("click", function() {

  		// Here we establish the "targetNumber" (set to getrndInteger between 1-12).
  		var targetNumber = getRndInteger(1,12);
  		console.log(targetNumber);

   		 // Each time the user clicks the crystal the counter goes up by targetNumber which is getRndInteger between 1-12.
    	counter += targetNumber;

    	// We then output the number of times the crystal is clicked.
    	$("#totalscore").text("Your score is increased by " + targetNumber + " so your new score is: " + counter);

    	if (counter === store) {

     	 // If the numbers match we'll celebrate the user's win.
      		alert("You win!");
      		$("#wins").text(wins++);

   		 }

   		 else if (counter> store)
    	{
    		// If the number is more than the genered number, we'll let the user know the loss
    		alert("you lose!");
    		$("#losses").text(losses++);
    		
    	}


  });
    	
    }
    
    );
 