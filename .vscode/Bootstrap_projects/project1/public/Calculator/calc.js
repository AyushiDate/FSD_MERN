function appendToDisplay(value) {
    document.getElementById('display').innerText += value;
}

function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('display').innerText);
        document.getElementById('display').innerText = result;
    } catch {
        document.getElementById('display').innerText = 'Error';
    }
}