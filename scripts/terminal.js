var h1 = 'ITC. Tec. 2024.';
var underscore = document.getElementById('terminal-underscore');
var target = document.getElementById('terminal-title');
consoleText(h1, underscore, target);

function consoleText(h1, underscore, target) {
    var visible = true;
    var letterCount = 1;
    var x = 1;
    var waiting = false;

    window.setInterval(function () {
        if (letterCount === 0 && waiting === false) {
            /* When word finishes */
            waiting = true;
            target.innerHTML = h1.substring(0, letterCount)
            window.setTimeout(function () {
                x = 1;
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (letterCount === h1.length + 1 && waiting === false) {
            /* When word in the middle */
            waiting = true;
            window.setTimeout(function () {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 3000)
        } else if (waiting === false) {
            /* Each letter */
            target.innerHTML = h1.substring(0, letterCount)
            letterCount += x;
        }
    }, 120)
    window.setInterval(function () {
        if (visible === true) {
            underscore.className = 'underscore hidden'
            visible = false;
        } else {
            underscore.className = 'underscore'
            visible = true;
        }
    }, 400)
}