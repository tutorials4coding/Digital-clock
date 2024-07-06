function updateClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let periods = "AM";

    if (hours == 0) {
        hours = 12;
    }

    if (hours > 12) {
        hours = hours - 12;
        periods = "PM";
    }

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let time = hours + ":" + minutes + ":" + seconds + " " + periods;
    document.getElementById("digital-clock").textContent = time;

    setTimeout(updateClock, 1000);

}

updateClock();
