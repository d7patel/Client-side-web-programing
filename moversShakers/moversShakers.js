/*
 Filename: moversShakers.js
 Written by: Dhruv Patel
 Purpose: Learning about jQuery.
 Date: 3 April 2019
 Modification History:
 3 April 2019 made
*/
// tested in google chrome and safari.
// Both result are same.

$(document).ready(function(){


    $("#Hine").click(Hine)
    $("#Show").click(Show)
    $("#Toggle").click(Toggle)
    $("#SlideUp").click(SlideUp)
    $("#SlideDown").click(SlideDown)
    $("#FadeOut").click(FadeOut)
    $("#FadeIn").click(FadeIn)

    //this function will hide the target
    function Hine(){
        $("#target").hide(2000).html("ola olla! Hide the ship.").css({
            fontSize: "20px",
            color : "black"
        });
    }

    //this function will show the target
    function Show(){
        $("#target").show(1000).html("Ahoy, Attack..").css({
            fontSize: "30px",
            color : "red"
        });
    }


    //this function will hide and show the target
    function Toggle(){
        $("#target").toggle(1500).html("Wait for the captain order.").css({
            fontSize: "20px",
            color : "gray"
        });
    }

    //this functiion will slide up the target
    function SlideUp(){
        $("#target").slideUp(2000).html("GO TO THE NORTH!!!").css({
            fontSize: "20px",
            color : "blue"
        });
    }

    //this funtion will slide down the target
    function SlideDown(){
        $("#target").slideDown(1500).html("Fight back...").css({
            fontSize: "30px",
            color : "red"
        });
    }

    //this function will fade out the target
    function FadeOut(){
        $("#target").fadeOut(2000).html("Go invisible..").css({
            fontSize: "30px",
            color : "green"
        });
    }

    //this function will fade in the target
    function FadeIn(){
        $("#target").fadeIn(1500).html("Yehh. We win the fight.").css({
            fontSize: "25px",
            color : "blue"
        });
    }
});