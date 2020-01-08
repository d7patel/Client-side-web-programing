/*
 Filename: jsjQuery.js
 Written by: Dhruv Patel
 Purpose: Learning about jQuery.
 Date: 27 March 2019
 Modification History:
 27 March 2019 made
*/

$(document).ready(function(){


    //this function will add append to the line 
    $("#one").click(function(){
        $("div").append("<br>Ahoy! Appending here.");
    });

    // this function will remove the append and add "Rewritting here" line.
    $("#two").click(function(){
        $("div").html("<br>Ahoy!!! Rewritting here");
    });


});