/*
 Filename: jsFunction.js
 Written by: Dhruv Patel
 Purpose: Learning about function.
 Date: 30 January 2019
 Modification History:
 30 January 2019 made
*/

$(document).ready(function(){
var messageOne= " ";
var messageTwo= " ";

messageOne = "Here is the";
messageTwo = "most wanted pirate list.";

    message("one", messageOne, 5, messageTwo);

messageOne = "1. Jack Sparrow, born year";
messageTwo = "country USA.";
    
    message("two", messageOne, 1673, messageTwo);

messageOne = "2. Calico Jack, born year";
messageTwo = "country Kingdom of England.";
    
    message("three", messageOne, 1682, messageTwo);

messageOne = "3. Anne Bonny, born year";
messageTwo = "country Ireland.";
        
    message("four", messageOne, 1702, messageTwo);

messageOne = "4. Black Caesar, born year";
messageTwo = "country West Africa.";
        
    message("five", messageOne, 1718, messageTwo);
    
messageOne = "5. Ching Shih, born year"
messageTwo = "country China."
        
    message("six", messageOne, 1775, messageTwo);
        
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
