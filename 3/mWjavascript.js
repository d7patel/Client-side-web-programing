/*
 Filename: multiWrites.html
 Written by: Dhruv Patel
 Purpose: l.........
 Date: 23 January 2019
 Modification History:
 23 January 2019 made
*/

// this is document.write() formating.
document.write("1. 'ay, this here be Dhruv Patel. I be likin' codin' so farrr in this here class. But I 'ave lots o' assignment in this here class.");

$(document).ready(function()
{
    //this is .textContent formating.

    var myMajor= " 2. Me major be computer science.";
    var elMajor = document.getElementById('one');
    elMajor.textContent = myMajor;

    //this is .innerHTML formating.
    var aboutMe=" 3. I be a vegetarian. ";
    var elMe = document.getElementById('two');
    elMe.innerHTML = aboutMe;

});


