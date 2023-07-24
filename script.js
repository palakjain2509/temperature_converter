function convertToCelsius() {
    const fahrenheitInput = document.getElementById("fahrenheit");
    const celsiusInput = document.getElementById("celsius");
    if (!isNaN(fahrenheitInput.value)) {
        celsiusInput.value = ((parseFloat(fahrenheitInput.value) - 32) * 5 / 9).toFixed(2);
    }
}

function convertToFahrenheit() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    if (!isNaN(celsiusInput.value)) {
        fahrenheitInput.value = ((parseFloat(celsiusInput.value) * 9 / 5) + 32).toFixed(2);
    }
}