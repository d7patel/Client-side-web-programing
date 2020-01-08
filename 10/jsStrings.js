/*
 Filename: jsStrings.js
 Written by: Dhruv Patel
 Purpose: Learning about string methods.
 Date: 27 February 2019
 Modification History:
 27 February 2019 made
*/

$(document).ready(function(){

    //pass the value to the div
    var elShips = document.getElementById("ships");
    var elName = document.getElementById("name");


    //ask queestion to the user
    var que = "Hey matey! Who does the queen like?";
    var defAns = "Anne Bonny";

    //getting input from the user.
    var strName = prompt(que,defAns);

    // create the empty variable to store the array
    var strShips =[];

    //12 different names with different methods.

    var upperCase = strName.toUpperCase(strName);
    var lowerCase = strName.toLowerCase(strName);
    var firstChar = strName.charAt(0);
    var indexNum = strName.indexOf(" ");
    var subName = strName.substring(indexNum,8); //change number
    var trimName = strName.trim();
    var replaceName = strName.replace(" "," ko ");

    var sliceName = strName.slice(0,indexNum);
    var newReplace = strName.replace(0,"K");
    var newSlice = strName.slice(3,6)+strName.slice(2,5)+firstChar;
    var newReplace2 = lowerCase.replace(" ","D");
    var newSlice2 = subName+ strName.slice(0,indexNum);

    //if there is no space in the name then back-up in this if statement. 
    if (indexNum<0)
    {
        indexNum = 4;
    }

    strShips[0] = upperCase+"'s dhe cap";
    strShips[1] = "Mest de "+lowerCase;
    strShips[2] = "The most cap "+ firstChar;
    strShips[3] = "The queen's of "+indexNum;
    strShips[4] = "World of the "+subName;
    strShips[5] = "The trim  of "+trimName;
    strShips[6] = "The "+ replaceName+"'s cap";
    strShips[7] = "Woker's the "+sliceName;
    strShips[8] = "Trikle of "+newReplace;
    strShips[9] = "master of the "+newSlice;
    strShips[10] = "Captian "+newReplace2;
    strShips[11] = "The main cap's of "+newSlice2;

    //print name
    elName.innerHTML = strName;

    var number = 1;
    //print array
    for (var i=0; i<12; i++)
    {
        elShips.innerHTML += "("+number+") "+strShips[i]+"<br>";
        number++;
    }
});