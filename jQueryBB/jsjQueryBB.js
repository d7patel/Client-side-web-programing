/*
 Filename: jsjQueryBB.js
 Written by: Dhruv Patel
 Purpose: Learning about jQuery.
 Date: 27 March 2019
 Modification History:
 27 March 2019 made
 27 March 2019
*/

$(document).ready(function(){


    //this function will add append to the line 
    $("#one").click(function(){
        $("p").append("<br>Ahoy! Appending here.");
    });

    // this function will remove the append and add "Rewritting here" line.
    $("#two").click(function(){
        $("p").html("<br>Ahoy!!! Rewritting here");
    });

    //this function will change the fount size of the text
    $("#three").click(function(){
        $("p").css("fontSize","25px");
    });


});