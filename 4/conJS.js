/*
 Filename: conJS.js
 Written by: Dhruv Patel
 Purpose: Learning about prompt and alert.
 Date: 24 January 2019
 Modification History:
 24 January 2019 made
*/

$(document).ready(function(){

    // connact data from HTML file.
    var elPrint = document.getElementById('print');

    // making varibales.
    var strName = " ";
    var strQfirst = " What be yer name? ";
    var strDname  = " Calico Jack ";

    //ask user for name
    strName =prompt(strQfirst, strDname);

    var strGreeting = "Ahoy, jolly mornin' "
    var strMessage = strGreeting + strName; 

    //give alert to user.
    alert(strMessage);

    // making varibales.
    var strQsecond = "How many gold doubloons did you plunder?";
    var strDnumber = "1";
    var strNumber = " ";

    // ask user second que..
    strNumber = prompt(strQsecond, strDnumber);

    // set the value and price for doubloons
    const value = 287;
    //converting from string to integer
    var intNumber = parseInt(strNumber);
    var intTotal =intNumber * value;

    //converting from integer to string.
    var strTotal = intTotal.toString();

    // type final message.
    var strPrint = "Ahoy, "+ strName + " congratulation! I be givin' ye $"+ strTotal + " because ye gave me " + strNumber + " doubloons. ";
    elPrint.textContent= strPrint;

}); // document.ready is over