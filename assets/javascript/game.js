function getRndInteger(min, max) 
		{
    		return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		// console.log(getRndInteger(19,120));
		

$(document).ready(function()
	{
    	$("#randomnumberbox").text(getRndInteger(19,120));

    }
    
    );
