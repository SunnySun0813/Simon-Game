var pointer = 0;
var game = 1;
var level = 1;
var array = [];

$(document).keypress(function () {
    if (game === 0) {
        return;
    }
    level = 0;
    array = [];
    pointer = 0;
    game = 0;
    getRandom();
});

function getRandom() {
    level += 1;
    var random = Math.floor(Math.random() * 4 + 1);
    array.push(random);
    if (random === 1) {
        playSound('sounds/red.mp3');
        $("#red").fadeOut(100).fadeIn(100);
    }
    else if (random === 2) {
        playSound('sounds/green.mp3');
        $("#green").fadeOut(100).fadeIn(100);
    }
    else if (random === 3) {
        playSound('sounds/yellow.mp3');
        $("#yellow").fadeOut(100).fadeIn(100);
    }
    else if (random === 4) {
        playSound('sounds/blue.mp3');
        $("#blue").fadeOut(100).fadeIn(100);
    }
    $("#level-title").text("Level " + level);
}

function restart() {
    playSound('sounds/wrong.mp3');
    $("#level-title").text("Game Over, Press Any Key to Restart");
    game = 1;
    level = 0;
    array = [];
    pointer = 0;
    $("body").addClass("game-over");
    setTimeout(function () { $("body").removeClass("game-over") }, 100 );
}

function playSound(colorSound) {
    var sound = new Audio(colorSound);
    sound.play();
}

function clickEvent(soundText, number, classText) {
    $(classText).addClass("pressed");
    setTimeout(function () { $(classText).removeClass("pressed"); }, 100);
    playSound(soundText);
    if (pointer >= array.length) {
        restart();
    }
    else {
        if (array[pointer] !== number) {
            restart();
        }
        else {
            pointer++;
            if (pointer === array.length) {
                pointer = 0;
                setTimeout(function () { getRandom();}, 1000);
                
            }
            else {

            }
        }
    }
}

$("#red").click(function () { clickEvent('sounds/red.mp3', 1, '#red') });
$("#yellow").click(function () { clickEvent('sounds/yellow.mp3', 3, '#yellow') });
$("#blue").click(function () { clickEvent('sounds/blue.mp3', 4, '#blue') });
$("#green").click(function () { clickEvent('sounds/green.mp3', 2, '#green') });
