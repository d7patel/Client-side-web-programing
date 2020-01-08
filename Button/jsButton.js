/*
 Filename: jsButton.js
 Written by: Dhruv Patel
 Purpose: Learning about event.
 Date: 30 January 2019
 Modification History:
 30 January 2019 made
 20 March 2019
*/

$(document).ready(function(){

    var elHandler1 = document.getElementById("btnHandler1");
    var elHandler2 = document.getElementById("btnHandler2");
    var elListener1 = document.getElementById("btnListener1");
    var elListener2 = document.getElementById("btnListener2");
    var elMultiListener = document.getElementById("multiListener");

    var messageOne= " ";
    var messageTwo= " ";

    messageOne = "Here is the";
    messageTwo = "most wanted pirate list.";
    message("one", messageOne, 5, messageTwo);    

    //use event handler
    elHandler1.onclick = function(){
        messageOne = "1. Jack Sparrow, born year";
        messageTwo = "country USA.";
        message("two", messageOne, 1673, messageTwo);
    }
    //use event handler
    elHandler2.onclick = function(){
        messageOne = "2. Calico Jack, born year";
        messageTwo = "country Kingdom of England.";
        message("three", messageOne, 1682, messageTwo);
    }
        
    //use event listener
    elListener1.addEventListener("click", function(){
        messageOne = "3. Anne Bonny, born year";
        messageTwo = "country Ireland.";
        message("four", messageOne, 1702, messageTwo);
    }, false);

    //use event listener
    elListener2.addEventListener("click", function(){
        messageOne = "4. Black Caesar, born year";
        messageTwo = "country West Africa.";
        message("five", messageOne, 1718, messageTwo);
    }, false);

    //use multi function event listener
    elMultiListener.addEventListener("click", function(){
        messageOne = "5. Ching Shih, born year"
        messageTwo = "country China."            
        message("six", messageOne, 1775, messageTwo);
        color();
    }, false);
});

/* 
FUNCTION NAME: message

PURPOSE: connect the id using document.getElementById method first.
         create the varibale and add all string and intger on that varibale. 
         print final message using textContent method.

PARAMETER: ID- connect with div ID.
           strName- connect with first string message that I will call by the function.
           intNum- connect with number that I will call by the function.
           strName2- connect with second string message that I will call by the function.

RETURN VALUE: N/A
*/

//create a function that have 4 parameter. and this function will print final message.
function message(ID, strName, intNum, strName2){
    var elOutput = document.getElementById(ID);
    var strPrint = strName+ " " + intNum+ " " + strName2;
    elOutput.textContent = strPrint;
}

/* 
FUNCTION NAME: color

PURPOSE: Generate a random color.
         div one will get that color.

PARAMETER: N/A

RETURN VALUE: N/A
*/
function color(){
    var one = document.getElementById("one");
    var r = Math.round(Math.random()*255);
    var g = Math.round(Math.random()*255);
    var b = Math.round(Math.random()*255);
    var randomColor = "rgb("+r+","+g+","+b+")";
    one.style.backgroundColor = randomColor;
}