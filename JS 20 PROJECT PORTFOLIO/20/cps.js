let clicks = 0;
let clickStartTime = null;
let clickTimeout = null;
let interval = null;

function startClickTest() {
    if (clickStartTime === null) {
        clickStartTime = new Date().getTime();
        clicks = 0;
        document.getElementById('clickButton').innerText = "Cliquez vite!";
        
        clickTimeout = setTimeout(endClickTest, 5000); // 5 seconds timer
        interval = setInterval(updateCPS, 100); // Update CPS every 100ms
    }

    clicks++;
}

function updateCPS() {
    let currentTime = new Date().getTime();
    let timeElapsed = (currentTime - clickStartTime) / 1000; // in seconds
    let cps = (clicks / timeElapsed).toFixed(2);

    document.getElementById('cpsResult').innerText = `Clics par seconde (CPS): ${cps}`;
}

function endClickTest() {
    let timeElapsed = 5; // since we run this after 5 seconds
    let cps = (clicks / timeElapsed).toFixed(2);

    document.getElementById('cpsResult').innerText = `Clics par seconde (CPS): ${cps}`;
    document.getElementById('cps5Result').innerText = `Clics en 5 secondes: ${clicks}`;
    document.getElementById('clickButton').innerText = "Cliquez ici!";
    
    // Reset the test
    clickStartTime = null;
    clicks = 0;
    clearTimeout(clickTimeout);
    clearInterval(interval);
}
