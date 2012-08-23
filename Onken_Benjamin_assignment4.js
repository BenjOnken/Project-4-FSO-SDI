/*



*/
var myLibrary = function()
{

//String Function Phone Number Pattern

	var phoneNum = function(myPhoneNum)
	{
		var whiteSpace = myPhoneNum.indexOf(" ");
		if(whiteSpace >= 0)
		{
			spaceOrNot = true;
		}
		else
		{
			spaceOrNot = false;
		};

		if(spaceOrNot == false && myPhoneNum.charAt(3) === "-" && myPhoneNum.charAt(7) === "-" && myPhoneNum.length == 12 && !isNaN(myPhoneNum.substring(0,2)) && !isNaN(myPhoneNum.substring(4,6)) && !isNaN(myPhoneNum.substring(8,11)))
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
		check = /^[a-zA-Z0-9._%+-]+@{1}[a-zA-Z0-9-]+\.[a-zA-Z]{2,11}$/;
		emailChecker = check.test(inputEmail);

		return emailChecker;
	};


//String Function URL

	var urlChecker = function(inputURL)
	{
		if(inputURL.substring(0,6) == "https:" || inputURL.substring(0,5) == "http:")
		{
			return urlVerify = true;
		}
		else
		{
			return urlVerify = false;
		};
	};
	

//String Function Title-Case

	var titleCaseString = function(inputString)
	{
    	stringManipulate = inputString.split(" ");
    	for(var numOfWords = 0; numOfWords < stringManipulate.length; numOfWords++)
    	{
        	var whichWord = stringManipulate[numOfWords].charAt(0).toUpperCase();
        	stringManipulate[numOfWords] = whichWord + stringManipulate[numOfWords].substring(1);
    	};
    	return stringManipulate.join(" ");
	};


//String Function 



//Number Function

	var decimalPlace = function(decimalNumber)
	{
		decimalReturn = decimalNumber.toFixed(2);
		return decimalReturn;
	};


//Number Function



//Number Function



//Number Function



//Array Function



//Array Function



//Array Function

//Returns
	return {
		"phoneNum": phoneNum,
		"emailAdd": emailAdd,
		"urlChecker": urlChecker,
		"titleCaseString": titleCaseString,
		"decimalPlace": decimalPlace
	};

};

var newLib = new myLibrary();


newLib.phoneNum("402-981-7446");
console.log("Phone Number = " + phoneVerify);
newLib.emailAdd("benj.o_nken@gmail.com");
console.log("Email Address = " + emailChecker);
newLib.urlChecker("https://www.google.com");
console.log("URL Address = " + urlVerify);
newLib.decimalPlace(129.9344);
console.log("The number to 2 decimal places is " + decimalReturn);
newLib.titleCaseString("hello i am a pretty sweet coder");
console.log(stringManipulate);

