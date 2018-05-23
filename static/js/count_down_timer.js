const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

countdown = document.getElementById("count_down_timer");

let countDown = new Date('Jun 3, 2018 10:45:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      days = Math.floor(distance / (day));
      hours = Math.floor((distance % (day)) / (hour));
      minutes = Math.floor((distance % (hour)) / (minute));
      seconds = Math.floor((distance % (minute)) / second);

      if (distance < 0) {
          countdown.innerHTML = "<h1 class=\"title general_title big_title\">Just married!</h1>"
      } else {
	    countdown.innerHTML = "<ul class=\"box_block general_title text\">"
            + "<li><span>" + days + "</span>Days</li>"
            + "<li><span>" + hours + "</span>Hours</li>"
            + "<li><span>" + minutes + "</span>Minutes</li>"
            + "<li><span>" + seconds + "</span>Seconds</li>"
            + "</ul>";
      }

    }, second)