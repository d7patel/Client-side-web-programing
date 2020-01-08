/*
 Filename: jsLTA.js
 Written by: Dhruv Patel
 Purpose: Learning about Looping Through Arrays.
 Date: 20 February 2019
 Modification History:
 20 February 2019 made
*/

$(document).ready(function(){

//pass the value to the div
var elInput = document.getElementById("inputID");
var elBin = document.getElementById("binary");
var elTF = document.getElementById("tF");


//ask queestion to the user
var que = "Type in a single character matey?";
var defAns = "X";

//save the ans in this variable
var strChar = " ";

//this do while loop run until user enter the only one single character.
do
{
    strChar = prompt(que,defAns);
    if (strChar.length != 1)
    {
        alert("agrahh, only enter the single character!");
    }
}while(strChar.length != 1);

//converting into ascii value
var intChar = parseAscii(strChar);

//converting the ascii value to binary
var strBinary = parseBin(intChar);

// create the empty variable to store the array
var tfArray =[];

//split the binary and store in the array
var binArray = strBinary.split("");

//for loop will store the True false valuse

for(var i =0; i<8; i++)
{
    if(binArray[i] == 0)
    {
        tfArray[i]= "False";
    }
    else
    {
        tfArray[i] = "True";
    }
}

//print line
elInput.textContent = strChar;
elBin.textContent = binArray;
elTF.textContent = tfArray;

/*
Purpose:Get the ASCII value for user's Input

Parameters: single character or letter

Return: ASCII value of user's input in integer form
*/
function parseAscii(chrCharacter)
{
    intAscii = chrCharacter.charCodeAt(0);
    return intAscii;
}

/*
Purpose: converting the ASCII value to the binary in string form

Parameters: single integer representing an ascii value

Return: value of the passed integer ASCII value in binary 
*/

function parseBin(intAscii)
{
    strBin = parseInt(intAscii, 10).toString(2);
    if(strBin.length < 8)
    {
        var intPlaceHolders = 8 - strBin.length;
        for(var i = 0; i < intPlaceHolders; i++)
        {
            strBin = "0" + strBin;
        }
    }
    return strBin;
}


});