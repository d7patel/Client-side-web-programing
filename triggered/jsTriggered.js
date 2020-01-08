/*
 Filename: jsTriggered.js
 Written by: Dhruv Patel
 Purpose: Learning about jQuery.
 Date: 3 April 2019
 Modification History:
 3 April 2019 made
*/

$(document).keydown(doThis);

function doThis(){

    //Whenever you any key is down from the keyboard, this function will run 
    $("p").append("<br>Ahoy! Don't press any key...");

}

$(document).mousemove(doThat);

function doThat(){

    //whenever your mouse is move, this function will run 
    $("p").append("<br>Ahoy! don't move your mouse...");

}