

var gBoard = getBoard(16)
var gNextNum = 1
var gInterval
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;


function initGame() {
    renderBoard(gBoard)
}

function renderBoard(copyBoard) {


    var strHTML = ''
    var copyBoard = gBoard.slice()

    for (var i = 0; i < Math.sqrt(gBoard.length); i++) {
        strHTML += `<tr>`
        for (var j = 0; j < Math.sqrt(gBoard.length); j++) {
            var cell = copyBoard.splice(0, 1)

            strHTML += `<td onclick="onClickCell(this,${cell})">${cell}</td>`
        }
        strHTML += `</tr>\n`
    }
    var board = document.querySelector('table tbody')
    board.innerHTML = strHTML
}

function getBoard(bordNums) {
    var nums = []
    for (var i = 0; i < bordNums; i++) {
        nums.push(i + 1)
    }
    return shuffle(nums)
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function onClickCell(elCell, elNum) {
    var elNextNum = document.querySelector('.next-num ')


    if (elNum === gNextNum) {
        elCell.classList.add("cell")
        gNextNum++
    }
    if (elNum === 1) {
        gInterval = setInterval(setTime, 1000)
    }

    if (elNum) {
        elNextNum.innerText = 'the next num is :' + gNextNum
    }
    if (elNum === gBoard.length) {
        elNextNum.innerText = ''
        gNextNum = 1
        clearInterval(gInterval)
    }

}

function levelCheck(elBtm, num) {
    var nums = []
    for (var i = 0; i < num; i++) {
        nums.push(i + 1)
    }
    shuffle(nums)
    gBoard = getBoard(num)
    renderBoard(gBoard)

}

function nextNum() {

}

function setTime() {
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}