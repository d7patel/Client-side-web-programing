/*
 Filename: customValidation.js
 Written by: Dhruv Patel
 Purpose: Creating the first website.
 Date: 10 April 2019
 Modification History:
 10 April 2019 made
 14 April 2019
 19 April 2019
 20 April 2019
*/

$(document).ready(function(){// start document.ready

    $( "#accordion" ).accordion();
    var stateList = [
        'Alabama', 'Alaska', 'Arizona', 
        'Arkansas', 'California', 'Colorado', 
        'Connecticut', 'Delaware', 'Florida', 
        'Georgia', 'Hawaii', 'Idaho', 'Illinois', 
        'Indiana', 'Iowa', 'Kansas', 'Kentucky', 
        'Louisiana', 'Maine', 'Maryland', 
        'Massachusetts', 'Michigan', 'Minnesota', 
        'Mississippi', 'Missouri', 'Montana', 
        'Nebraska', 'Nevada', 'New Hampshire', 
        'New Jersey', 'New Mexico', 'New York', 
        'North Carolina', 'North Dakota', 'Ohio', 
        'Oklahoma', 'Oregon', 'Pennsylvania', 
        'Rhode Island', 'South Carolina', 
        'South Dakota', 'Tennessee', 'Texas', 
        'Utah', 'Vermont', 'Virginia', 'Washington', 
        'West Virginia', 'Wisconsin', 'Wyoming'
    ]
    
    $( "#state" ).autocomplete({
		source: stateList
	});

	$( ".button" ).button();
	$( "#button-icon" ).button({
		icon: "ui-icon-gear",
		showLabel: false
	});

$( "#radioset" ).buttonset();

$( "#controlgroup" ).controlgroup();

$( "#tabs" ).tabs();

$( "#dialog" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Ok",
			click: function() {
				$( this ).dialog( "close" );
			}
		},
		{
			text: "Cancel",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});

// Link to open the dialog
$( "#dialog-link" ).click(function( event ) {
	$( "#dialog" ).dialog( "open" );
	event.preventDefault();
});

$( "#datepicker" ).datepicker({
	inline: true
});

$( "#slider" ).slider({
	range: true,
	values: [ 17, 67 ]
});

$( "#progressbar" ).progressbar({
	value: 20
});

$( "#spinner" ).spinner({
        max:5,
        min:0
    }
);

$( "#menu" ).menu();

$( "#tooltip" ).tooltip();

$( "#selectmenu" ).selectmenu();

// Hover states on the static widgets
$( "#dialog-link, #icons li" ).hover(
	function() {
		$( this ).addClass( "ui-state-hover" );
	},
	function() {
		$( this ).removeClass( "ui-state-hover" );
	}
);

	// Print the output with this function
	$.validator.setDefaults({
		submitHandler: function(){
		//Header
		var strGreeting= "<h3>Thank you for sign up:</h2>";
		
		//variables for elements to be output
		var strEmail = new String($('#email').val());
		var strPassword = new String($('#password1').val());
		var strComment = new String($('#msg').val());

		var strSpinner = new String($('#spinner').val());
		var strFname = new String($('#fname').val());
		var strLname = new String($('#lname').val());
		var strDOB = new String($('#datepicker').val());
		var strPhone = new String($('#phone').val());
		var strGender = new Array();
		$('input[name="radio"]:checked').each(function() {
			strGender.push(this.value);
		});	
		var strAddress = new String($('#address').val());
		var strCity = new String($('#city').val());
		var strState = new String($('#state').val());
		var strZip = new String($('#zip').val());

		var strEmail1 = new String($('#email1').val());
		var strPassword2 = new String($('#password2').val());
		var strPassword3 = new String($('#password3').val());
		
		var check;
		if($('#box').is(':checked')){
			check = 'Yes';
		} else {
			check = 'No';
		}

		var strCheck = new Array();
		$('input[name="check"]:checked').each(function() {
			strCheck.push(this.value);
		});
		
		//Create output lines
		var print1 = new String("Email: " + strEmail + "<br/><br/>");
		var print2 = new String("Password: " + strPassword + "<br/><br/>");
		var print3 = new String("Comments: " +strComment+ "<br/><br/>");
		var print4 = new String("Subscribe: " +check+ "<br/><br/>");
		var print5 = new String("Stars(0-5): " +strSpinner+ "<br/><br/>");
		var print6 = new String("First Name: " +strFname+"<br/><br/>");
		var print7 = new String("Last Name: " +strLname+ "<br/><br/>");
		var print8 = new String("Date of birth: " +strDOB+ "<br/><br/>");
		var print9 = new String("Phone Number: " +strPhone+ "<br/><br/>");
		var print10 = new String("Gender: " +strGender+ "<br/><br/>");
		var print11 = new String("How did you here about this website: " +strCheck+ "<br/><br/>");
		var print12 = new String("Address: "+strAddress+ "<br/><br/>");
		var print13 = new String("City: "+strCity+ "<br/><br/>");

		var print14 = new String("State: " +strState+"<br/><br/>");
		var print15 = new String("Zipcode: "+strZip+ "<br/><br/>");

		var print16 = new String("Email: " +strEmail1+ "<br/><br/>");
		var print17 = new String("Password: " +strPassword2+ "<br/><br/>");
		var print18 = new String("Confirm Password: " +strPassword3+ "<br/><br/>");

		//Get the elements
		var outPut = document.getElementById("myOutpt");

		//print the final output
		outPut.innerHTML = strGreeting+print1+print2+print3+print4+print5+print6+print7+print8+print9+print10+print11+print12+print13+print14+print15+print16+print17+print18;
		
		}//end submitOutput

	});// end the function
	
	//validation form 
    $("#target").validate({ignore:[], //rule to not ignore the hidden field
		rules: {//required field
			// 
			email:{
				required: true
			},
			password1:{ 
				required:true
			},
			msg:{
				required: true
			},
			spinner: {
				required: true,
				digits: true
			},
			box:{
				required: true
			},
			fname: {
				required: true
			},
			lname: {
				required: true
			},
			datepicker: {
				required: true
			},
			phone: {
				required: true
			},
			radio: {
				required: true
			},
			check: {
				required: true
			},
			address: {
				required: true
			},
			city: {
				required: true
			},
			state: {
				required: true
			},
			zip: {
				required: true
			},
			email1: {
				required: true
			},
			password2: {
				required: true,
				rangelength:[8, 16]
			},
			password3: {
				required: true,
				rangelength:[8, 16]
			}
		},//end rules
		messages: {//Custom validation message
			email:{
				required: "Please Enter The Email",
				email: "Your email address must be in the format of username@domain.com"
			},
			password1:{ 
				required:"Please Enter A Password",
				password1: "Your email address must be in the format of username@domain.com"
			},
			msg:{
				required: "Please Add A Comments"
			},
			spinner:{
				required: "Please Give Us A Stars From 0 to 5"
			},
			box:"Please Click To The Check Box For Subscribe <br>",
			fname: "Please Enter Your First Name",
			lname: "Please Enter Your Last Name",
			datepicker:"Please Enter A Birth date",
			phone:"Please Enter The Valid Phone Number",
			radio:"Please Select The Gender",
			check:"Please Select At Least One Field <br><br>",
			address:"Please Enter the Address",
			city:"Please Enter the City",
			state:"Please Enter the State",
			zip:"Please Enter the Zipcode",
			email1:{
				required: "Please Enter The Email",
				email: "Your email address must be in the format of username@domain.com"
			},
			password2:"Please Enter A Password",
			password3: "Please Confirm The Password",
		}//end message	
	});//end form validation
});//end document.ready