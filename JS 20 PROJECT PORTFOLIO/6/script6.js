function convertToPounds() {
    const kgInput = document.getElementById('kgInput').value;
    const lbInput = document.getElementById('lbInput');
    const conversionResult = document.getElementById('conversionResult');

    if (kgInput === "") {
        conversionResult.innerText = "Please enter a value in Kilograms.";
    } else {
        const pounds = (kgInput * 2.20462).toFixed(2);
        lbInput.value = pounds;
        conversionResult.innerText = `${kgInput} KGs is equal to ${pounds} LBs.`;
    }
}

function convertToKilograms() {
    const lbInput = document.getElementById('lbInput').value;
    const kgInput = document.getElementById('kgInput');
    const conversionResult = document.getElementById('conversionResult');

    if (lbInput === "") {
        conversionResult.innerText = "Please enter a value in Pounds.";
    } else {
        const kilograms = (lbInput / 2.20462).toFixed(2);
        kgInput.value = kilograms;
        conversionResult.innerText = `${lbInput} LBs is equal to ${kilograms} KGs.`;
    }
}
