var loop = setInterval(checkLoop, 2000);
var input;
var setTime = 0;
var msTime = 0;

function checkLoop() {
	if (window.location.href.indexOf("youtube.com") > -1 || window.location.href.indexOf("twitch.tv") > -1) {
		var a = confirm("Now is not the time!\n[Hit ok to close window, cancel to ignore]");
		if (a == true) {
			window.close();
		} else { 
			stopFunction()
			timer()
		}
	}
}

function timeUp() {
	if (window.location.href.indexOf("youtube.com") > -1 || window.location.href.indexOf("twitch.tv") > -1) {
	alert("Your time is up!");
	window.close();
	}
}
function improperTime() {
		setTime = prompt("Invalid time.\nPlease enter period of time, in minutes, of access [120 or under]:")
		if (setTime == null) { window.close() }
}	

function timer() {
	input = prompt("Please enter period of time, in minutes, of access [120 or under]:")
	if (input != null){
		setTime = input;
		while (msTime == 0) {
			if (setTime <= 120 && setTime >= 1) {
			msTime = setTime*60000;
			setTimeout(function() {timeUp()}, msTime);
			} else {improperTime()}
		}
	} else { window.close() }
}

function stopFunction() {
		clearInterval(loop);
}