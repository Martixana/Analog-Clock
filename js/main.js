//Give the appropriate greeting for the time of day
    var today = new Date ();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18){
        greeting ='Good Evening ';
    }else if (hourNow > 12){
        greeting ='Good Afternoon ';
    }else if (hourNow > 0){
        greeting ='Good Morning ';
    }else{
        greeting ='Hello! ';
    }

document.getElementById('timeOfDay').innerText = greeting;


//Get the day of the week
    var weekDay = today.getDay();
    var msg;

//once we know what day of the week it is, display the matching message
    if (weekDay === 0){
      msg = "It's Sunday Funday!";
    }else if (weekDay === 1){
        msg = "It's Manic Monday!";
    } else if (weekDay === 2){
        msg = "It's Taco Tuesday!";
    }else if (weekDay ===3){
        msg = " It's Wednesday! You're half way through";
    }else if (weekDay === 4){
        msg = "Welcome to Throwback Thursday!";
    }else if (weekDay === 5){
        msg = 'TGIF!';
    }else if (weekDay === 6){
        msg = "It's the SaturDaze!";
    }

    document.getElementById('message').innerText = msg;


//Display a working clock on the screen using the Date() object, and onload() instead of onclick()
function startTime() {
    var currentTime = new Date();
    var h = currentTime.getHours();	
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
 
    //change military time to standard time
    if (h > 12) {
        h -= 12;
    } else if (h === 0) {
       h = 12;
    }

    // add a zero in front of numbers < 10
    function checkTime(i) {
	    if (i < 10) {
	        i = "0" + i;
	    }
	    return i;
	}
    m = checkTime(m);
    s = checkTime(s);

    //display the clock on the screen
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;

    //iterate throught the time, 1 second at a time
    setTimeout(function () {
        startTime()
    }, 1000);
}

var clockStart = document.getElementById('time');
clockStart.onload = startTime();



