$( document ).ready(function(){

    //The player will be shown a random number at the start of the game.
    //The random number shown at the start of the game should be between 19 - 120.
    //Use function : Math.floor(Math.random() * (max - min + 1) ) + min
    //The player will have to guess the answer (answer is randomNumber variable)
    
    var randomNumber = Math.floor(Math.random()*(120-19+1))+19;
    console.log(randomNumber);
    $("#randomNumber").html(randomNumber);

    //There will be four crystals displayed as buttons on the page.
    //Each crystal should have a random hidden value between 1 - 12
    //Use function : Math.floor(Math.random() * 10) + 1; ---> Gives 1 to 10 
    
    var numBlue= Math.floor(Math.random()* 12) +1;
    var numGreen= Math.floor(Math.random()* 12) +1;
    var numRed= Math.floor(Math.random()* 12) +1;
    var numPurple= Math.floor(Math.random()* 12) +1;
    console.log(numBlue);
    console.log(numGreen);
    console.log(numRed);
    console.log(numPurple);

    
    
    

    //When the player clicks on a crystal, it will add a specific amount of points to the player's total score. --->Use "On Click" JQuery
    //Your game will hide this amount until the player clicks a crystal.
    //When they do click one, update the player's score counter 
    //User score will change each time a crystal is clicked on and the crystal number value will add to user score 
    

    var userScore = 0;
    
    $("#blue").on("click",function(){
        userScore = userScore + numBlue;
        $("#totalScore").html(userScore);
        if (userScore === randomNumber){
            winStatus();
        }   
        if (userScore > randomNumber){
            lossStatus();

        }
        
        
         
    })  
    $("#green").on("click",function(){
        userScore = userScore + numGreen;
        $("#totalScore").html(userScore); 
        if (userScore === randomNumber){
            winStatus();
        }   
        if (userScore > randomNumber){
            lossStatus();

        }
        
        
         
             
      
    })    
    $("#red").on("click",function(){
        userScore = userScore + numRed;
        $("#totalScore").html(userScore); 
        if (userScore === randomNumber){
            winStatus();
        }   
        if (userScore > randomNumber){
            lossStatus();

        }
        
       
         
             
      
    })    
    $("#purple").on("click",function(){
        userScore = userScore + numPurple;
        $("#totalScore").html(userScore); 
        if (userScore === randomNumber){
            winStatus();
        }   
        if (userScore > randomNumber){
            lossStatus();

        }
        
        
         
      
    })    

    //The player wins if their total score matches the random number from the beginning of the game
    //The player loses if their score goes above the random number
    // Define win and loss status Functions
    //Reset after every win and loss

    var win = 0;
    var lose = 0;

    function winStatus (){
     (userScore === randomNumber);
      win++;
      $("#numberWins").html(win);
      reset();
    }
    function lossStatus (){
      (userScore > randomNumber);
      lose++;
      $("#numberLos").html(lose);
      reset();

    }        
    
         
    //When the game begins again, the player should see a new random number. 
    //Also, all the crystals will have four new hidden values. 
    //Of course, the user's score (and score counter) will reset to zero
    //Create Reset Function by calling all the variables defined in the beginning
    //Do not reset win - loss variables 

    function reset () {
        
        userScore = 0;
        $("#totalScore").html(userScore);
        
        randomNumber = Math.floor(Math.random()*(120-19+1))+19;
        $("#randomNumber").html(randomNumber);
        
        numBlue= Math.floor(Math.random()* 12) +1;
        numGreen= Math.floor(Math.random()* 12) +1;
        numRed= Math.floor(Math.random()* 12) +1;
        numPurple= Math.floor(Math.random()* 12) +1;
        
        
    }

   
       



        
})

