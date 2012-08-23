/*



*/
var whiteSpace = 0;
var myLibrary = function()
{

//String Function Phone Number Pattern
	var phoneNum = function(myPhoneNum)
	{
		whiteSpace = myPhoneNum.indexOf(" ");
		if(whiteSpace = 0 && myPhoneNum.charAt(3) === "-" && myPhoneNum.charAt(7) === "-" && myPhoneNum.length == 12 && !isNaN(myPhoneNum.substring(0,2)) && !isNaN(myPhoneNum.substring(4,6)) && !isNaN(myPhoneNum.substring(8,11)))
		{
 			return phoneVerify = true;
		}
		else
		{
			return phoneVerify = false;
		};
	};


//String Function Email Address

	var emailAdd = function(inputEmail)
	{

	//	var lengthOfEmail = inputEmail.length+1;
		check = /^[a-zA-Z0-9._%+-]+@{1}[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/;
		emailChecker = check.test(inputEmail);

		return emailChecker;
	};


//String Function URL
/*
	var urlChecker = function(inputURL)
	{

	}
	*/

//String Function Title-Case



//String Function 



//Number Function



//Number Function



//Number Function



//Number Function



//Array Function



//Array Function



//Array Function

//Returns
	return {
		"phoneNum": phoneNum,
		"emailAdd": emailAdd
	};

};

var newLib = new myLibrary();


newLib.phoneNum("402-981-7446");
console.log("Phone number = " + phoneVerify);
newLib.emailAdd("benj.o_nken@gmail.com");
console.log("Email Address = " + emailChecker);

