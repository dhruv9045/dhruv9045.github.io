
	
	 	var count = new Date("2019-09-17 00:00:00").getTime();
		var x = setInterval(function(){
		var now = new Date().getTime();
		console.log(now)
		console.log(count)
		var distance =  count - now;

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	  	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		
		document.getElementById("days").innerHTML = days;
		document.getElementById("hours").innerHTML = hours;
		document.getElementById("minutes").innerHTML = minutes;
		document.getElementById("seconds").innerHTML = seconds;

		if (distance <= 0) {
			clearInterval(x);
		}

	},1000);
		