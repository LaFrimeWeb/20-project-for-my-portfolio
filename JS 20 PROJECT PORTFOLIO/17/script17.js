function playC() {
    playSound('C');
}

function playCC() {
    playSound('CC');
}

function playD() {
    playSound('D');
}

function playDD() {
    playSound('DD');
}

function playE() {
    playSound('E');
}

function playF() {
    playSound('F');
}

function playFF() {
    playSound('FF');
}

function playG() {
    playSound('G');
}

function playGG() {
    playSound('GG');
}

function playA() {
    playSound('A');
}

function playAA() {
    playSound('AA');
}

function playB() {
    playSound('B');
}

function playC2() {
    playSound('C2');
}

function playSound(note) {
    const audio = new Audio(`sounds/${note}.mp3`);
    audio.play();
}
