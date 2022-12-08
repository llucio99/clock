var hour = document.querySelector(".hour");
var minute = document.querySelector(".minute");
var second = document.querySelector(".second");

function time() {
    var time = new Date();

    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    var hoursAngle = (hours / 12) * 360;
    var minutesAngle = (minutes / 60) * 360;
    var secondsAngle = (seconds / 60) * 360;

    hour.style.transform = `rotate(${hoursAngle}deg)`;
    minute.style.transform = `rotate(${minutesAngle}deg)`;
    second.style.transform = `rotate(${secondsAngle}deg)`;
}

time();
setInterval(time, 1000);
