/*
Benjamin Onken
8/23/2012
Project 4
Library
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
    	stringC = stringManipulate.join(" ");
    	return stringC;
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

	var stringToNum = function(stringOfNum)
	{
		if(isNaN(stringOfNum))
		{
			convertedNumber = "Cannot convert, not all items in the string are numbers.";
		}
		else
		{
			convertedNumber = Number(stringOfNum);
		};
		return convertedNumber;
	};


//Array Function



//Array Function
	var arrayAddUp = function(inputArray) 
	{
        arrayTotal = 0;
        for (var a = 0; a < inputArray.length; a++) 
        {
            if(isNaN(inputArray[a]) || inputArray[a] == true || inputArray[a] == false) 
           	{
             	arrayTotal += 0;   
			}
            else
            {
            	arrayTotal += inputArray[a];
            };
        };
        arrayOutput = arrayTotal;
        return arrayOutput;
    };


//Array Function

//Returns
	return {
		"phoneNum": phoneNum,
		"emailAdd": emailAdd,
		"urlChecker": urlChecker,
		"titleCaseString": titleCaseString,
		"decimalPlace": decimalPlace,
		"stringToNum": stringToNum,
		"arrayAddUp": arrayAddUp
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
console.log(stringC);
newLib.stringToNum("99021");
console.log(convertedNumber);
newLib.arrayAddUp([29, 4, 2, 5, true, false, "hello", true]);
console.log(arrayOutput);

