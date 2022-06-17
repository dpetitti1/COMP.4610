var today = new Date(); //given
var hourNow = today.getHours(); //given
var greeting; //given

//Display “Good morning!” in the morning (between hours of 0 to 12)
if (hourNow < 12) {
  greeting = "Good Morning!"
//Display “Good afternoon” in the afternoon (between hours of 12 to 18)
} else if (hourNow >= 12 && hourNow < 18) {
  greeting = "Good Afternoon"
//Display “Good evening!” in the evening (between hours of 18 to 24)
} else if (hourNow >= 18 &&  hourNow < 24) {
  greeting = "Good Evening!"
//Display “Welcome”, otherwise (in special case system time is not working etc.)
} else {
  greeting = "Welcome"
}

document.write('<h3>' + greeting + '</h3>');
