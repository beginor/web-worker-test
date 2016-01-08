/**
 * Created by zhang on 1/7/16.
 */

var i = 0;
var msg;

var intervalId = 0;

function startTimer() {
    intervalId = setInterval(function () {
        i++;
        if (msg) {
            postMessage(msg);
            msg = null;
        }
        else {
            postMessage(i);
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(intervalId);
    intervalId = 0;
    i = 0;
}

this.onmessage = function (e) {
    if (e.data == "ToggleTimer") {
        if (intervalId > 0) {
            stopTimer();
        }
        else {
            startTimer();
        }
    }
    msg = e.data;
    console.log(e);
}