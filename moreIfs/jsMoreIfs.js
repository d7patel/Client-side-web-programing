/*
 Filename: jsMoreIfs.js
 Written by: Dhruv Patel
 Purpose: Learning about Iff else.
 Date: 13 February 2019
 Modification History:
 13 February 2019 made
*/

$(document).ready(function(){
//pass the value to the div
var cLat = document.getElementById("cLat");
var cLon = document.getElementById("cLon");
var dLat = document.getElementById("dLat");
var dLon = document.getElementById("dLon");
var ifelse = document.getElementById("ifelse");
var switchCase = document.getElementById("switchCase");

//ask queestion to the user
var que1 = "Whats your current latitude matey?";
var ans1 = "30";
//save the ans in this variable
var msg1 ="";
strMsg1 = prompt(que1, ans1);
var intMsg1=parseInt(strMsg1);

//ask queestion to the user
var que2 = "Whats your current longitude matey?";
var ans2 = "30";
//save the ans in this variable
var msg2 ="";
strMsg2 = prompt(que2, ans2);
var intMsg2=parseInt(strMsg2);

//ask queestion to the user
var que3 = "Whats your destination latitude matey?";
var ans3 = "60";
//save the ans in this variable
var msg3 ="";
strMsg3 = prompt(que3, ans3);
var intMsg3=parseInt(strMsg3);

//ask queestion to the user
var que4 = "Whats your destination longitude matey?";
var ans4 = "60";
//save the ans in this variable
var msg4 ="";
strMsg4 = prompt(que4, ans4);
var intMsg4=parseInt(strMsg4);

//connect the user input with string
cLat.textContent="Current Latitude: "+intMsg1;
cLon.textContent="Current Longitude: "+intMsg2;
dLat.textContent="Destination Latitude: "+intMsg3;
dLon.textContent="Destination Longitude: "+intMsg4;

//directions usinf if else 
if(intMsg1>=intMsg3 && intMsg2>=intMsg4)
{
    ifelse.textContent = "Head South West";
}
else if(intMsg1<=intMsg3 && intMsg2<=intMsg4)
{
    ifelse.textContent = "Head North East";
}
else if(intMsg1<=intMsg3 && intMsg2>=intMsg4)
{
    ifelse.textContent = "Head North West";
}
else if(intMsg1>=intMsg3 && intMsg2<=intMsg4)
{
    ifelse.textContent = "Head South East";
}
else
{
    ifelse.textContent = "Land Ho!";
}

//directions using switch case 
switch(true)
{
    case(intMsg1>=intMsg3 && intMsg2>=intMsg4):
    switchCase.textContent = "Head South West";
    break;

    case(intMsg1<=intMsg3 && intMsg2<=intMsg4):
    switchCase.textContent = "Head North East";
    break;

    case(intMsg1<=intMsg3 && intMsg2>=intMsg4):
    switchCase.textContent = "Head North West";
    break;

    case(intMsg1>=intMsg3 && intMsg2<=intMsg4):
    switchCase.textContent = "Head South East";
    break;
    default:
    switchCase.textContent = "Land Ho!";
    break;
}

});