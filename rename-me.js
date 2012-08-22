/*



*/

var myLibrary = function()
{

//String Function Phone Number Pattern
	var phoneNum = function(myPhoneNum)
	{
		if(myPhoneNum.charAt(3) === "-" && myPhoneNum.charAt(7) === "-" && myPhoneNum.length == 11)
		{
 			return true;
		}
		else
		{
			return false;
		};
	};


//String Function Email Address



//String Function URL



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
	return
	{
		"phoneNum": phoneNum
	};

};

var newLib = new myLibrary();


newLib.phoneNum("402-981-7446");

