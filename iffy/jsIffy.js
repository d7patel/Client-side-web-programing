/*
 Filename: jsIffy.js
 Written by: Dhruv Patel
 Purpose: Learning about Iff else.
 Date: 13 February 2019
 Modification History:
 13 February 2019 made
*/

$(document).ready(function(){
//pass the value to the div
var elText = document.getElementById("text");

//ask queestion to the user
var que = "Have you arrived to the port on time?";
var ans = "Yes/No";

//save the ans in this variable
var msg ="";
msg = prompt(que, ans);
msg = msg.toUpperCase(msg)

//if user said yes then it will only go to the if statment. If no the it will go to the else statment.
if (msg=="YES")
{
    elText.textContent = "hoy hoy!!! You earned extra doubloons!!";
}
else if(msg == "NO")
{
    elText.textContent = "ughhh!! Don't show me your face again";
}
else
{
    elText.textContent = "WRONG INPUT: Reload the page and enter only Yes or No!";
}

});