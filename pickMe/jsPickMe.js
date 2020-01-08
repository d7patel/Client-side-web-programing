/*
 Filename: jsPickMe.js
 Written by: Dhruv Patel
 Purpose: Learning about jQuery.
 Date: 27 March 2019
 Modification History:
 27 March 2019 made
*/

$(document).ready(function(){

    $("#a").click(a)
    $("#b").click(b)
    $("#c").click(c)
    $("#d").click(d)
    $("#e").click(e)
    $("#f").click(f)
    $("#g").click(g)

    //this function will add "!" in each line to the end
    function a(){
        $("li").append("!");
    }

    //this function will change text to "Ahoy!!!" i line 1,3,5,7,9
    function b(){
        $(".one").html("Ahoy!!!");
        $(".three").html("Ahoy!!!");
        $(".five").html("Ahoy!!!");
        $(".seven").html("Ahoy!!!");
        $(".nine").html("Ahoy!!!");
    }

    //this function will add border to the line 1,5,6,10
    function c(){
        $("#idOne").css("border","2px solid black");
        $("#idFive").css("border","2px solid black");
        $("#idSix").css("border","2px solid black");
        $("#idTen").css("border","2px solid black");
    }

    //this functiion will change the color to red and add dotted border to the line 10
    function d(){
        $("#idTen").css({
            color: "red",
            border: "3px dotted red"
        });
    }

    //this funtion will change the text to the all line
    function e(){
        $("li:parent").html("Here I used the html method to replace text");
    }

    //this function will add solid border to the line 2,4,7,9
    function f(){
        $(".two:first").css("border","2px solid green");
        $(".four:first").css("border","2px solid green");
        $(".seven:first").css("border","2px solid green");
        $(".nine:first").css("border","2px solid green");
    }

    //this function will change the color to the line 3 and 8
    function g(){
        $("#idThree:parent").css("color","blue");
        $("#idEight:parent").css("color","blue");
    }
});