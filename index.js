    // The data/time we want to countdown to
    let countDownDate = new Date("Feb 22, 2022 00:00:00").getTime();

    // Run myfunc every second
    let myfunc = setInterval(function() {

    let now = new Date().getTime();
    let timeleft = countDownDate - now;

    // Calculating the days, hours, minutes and seconds left
    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    // Result is output to the specific element
    document.getElementById("dayss").innerHTML = days.toString();
    document.getElementById("hourss").innerHTML = hours.toString();
    document.getElementById("minutess").innerHTML = minutes.toString();
    document.getElementById("secondss").innerHTML = seconds.toString();

    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("dayss").innerHTML = ""
        document.getElementById("hourss").innerHTML = ""
        document.getElementById("minutess").innerHTML = ""
        document.getElementById("secondss").innerHTML = ""
        document.getElementById("title").innerHTML = "Countdown Ended."
    }
    }, 1000);