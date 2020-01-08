/*
 Filename: jsRand.js
 Written by: Dhruv Patel
 Purpose: Learning about object, properties and methodes.
 Date: 5 February 2019
 Modification History:
 5 February 2019 made
*/

$(document).ready(function(){
    
    //declaring the object
    function pirate(rank,favoriteNum,id) {

        //made three properties
        this.strRank = rank; 
        this.intFavoriteNum =favoriteNum
        this.elOutput = document.getElementById(id);

        //made two methods
        
        /* 
        FUNCTION NAME: this.randNum

        PURPOSE: This function will generate the random number between 1 to 10.

        PARAMETER: none

        RETURN VALUE: return the random number between 1 to 10. return this.intFavoriteNum
        */
        this.randNum = function(){
            this.intFavoriteNum = (Math.floor(Math.random()*10)+1);
            return this.intFavoriteNum;
        };

        /* 
        FUNCTION NAME: message

        PURPOSE:connect all the parameters and other properties togather and will make one whole sentence.

        PARAMETER: ID- connect with div ID.
                strOne- connect with 1st that I will write after this object.
                strTwo- connect with 2nd string that I will write after this object.
                strThree- connect with 3rd string that I will write after this object.

        RETURN VALUE: none
        */
        this.speak = function(strOne, strTwo, strThree){
            this.elOutput.innerHTML = strOne+ this.strRank + strTwo+ this.intFavoriteNum + strThree;

        };
    };

    //create the new variables for the pirate talk
    var captain = new pirate("Captain Jean Lafitte:", 1, "captain");
    var pirateOne = new pirate("Calico Jack ", 1, "pirate1");
    var pirateTwo = new pirate("Anne Bonny ", 1, "pirate2");
    var pirateThree = new pirate("Black Caesar ", 1, "pirate3");
    var won = new pirate("","","won");

    //run the speak and randNum function
    captain.speak("Ahoy! "," Let's play a bottle game!! I am choosing a random number between ", " and 10 The winner will get my bottle o' grog! ");
    var lucky =captain.randNum();

    var one =pirateOne.randNum();
    pirateOne.speak("My name is ","and I choose number "," hayoo heyo!!");
    
    var two = pirateTwo.randNum();
    pirateTwo.speak("My name is ","and I choose number ", " ola olaa!");
    
    var three = pirateThree.randNum();
    pirateThree.speak("My name is ","and I choose number "," hoy hoy!");

    

    // compare all the pirate guesses and announce the winner for the price.
    if (lucky==one && lucky==two && lucky==three){
        won.speak("Ohh no!! You all are the winner, ","I only have two bottle o' grog, you have to play again. ","Winning number is "+lucky);
    }
    else if (lucky==one && lucky==two){
        won.speak("olaa!! Calico Jack and Anne Bonny are the winner, ","you guys can take this bottle o' grog."," Winning number is "+lucky);
    }
    else if (lucky==two && lucky==three){
        won.speak("olaa!! Black Caesar and Anne Bonny are the winner, ","you guys can take this bottle o' grog."," Winning number is "+lucky);
    }
    else if(lucky==three && lucky==one){
        won.speak("olaa!! Calico Jack and Black Caesar are the winner, ","you guys can take this bottle o' grog."," Winning number is "+lucky);
    }
    else if (lucky==three){
        won.speak("Ahoyyo!! Black Caesar is the winner, ","you can take this bottle o' grog."," Winning number is "+lucky);
    }
    else if(lucky==two){
        won.speak("Ahoyyo!! Anne Bonny is the winner, ","you can take this bottle o' grog."," Winning number is "+lucky);
    }
    else if (lucky==one){
        won.speak("Ahoyyo!! Calico Jack is the winner,  ","you can take this bottle o' grog."," Winning number is "+lucky);
    }
    else{
        won.speak("Opppssss!! you all are lost, ","no one will get this bottle o' grog."," Winning number is "+lucky);
        
    }

    });
    
   