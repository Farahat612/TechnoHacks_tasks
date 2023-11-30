const conversionRates = {
    USD: {
        EUR: 0.85,
        GBP: 0.72,
        JPY: 110
    },
    EUR: {
        USD: 1.18,
        GBP: 0.85,
        JPY: 130
    },
    GBP: {
        USD: 1.38,
        EUR: 1.18,
        JPY: 150
    },
    JPY: {
        USD: 0.0091,
        EUR: 0.0077,
        GBP: 0.0067
    }
};

function convertCurrency() {
    var amount = parseFloat(document.getElementById("amount").value);
    var fromCurrency = document.getElementById("fromCurrency").value;
    var toCurrency = document.getElementById("toCurrency").value;
    var convertedAmount;

    // Perform currency conversion logic here
    if (conversionRates[fromCurrency] && conversionRates[fromCurrency][toCurrency]) {
        convertedAmount = amount * conversionRates[fromCurrency][toCurrency];
    } else {
        console.error("Conversion rate not available.");
        return;
    }

    document.getElementById("convertedAmount").innerHTML = "Converted Amount: " + convertedAmount.toFixed(2) + " " + toCurrency;

    // Update conversion ratio button text
    updateConversionRatio();
}

function updateConversionRatio() {
    var fromCurrency = document.getElementById("fromCurrency").value;
    var toCurrency = document.getElementById("toCurrency").value;
    var conversionRatio;

    // Determine conversion ratio
    if (conversionRates[fromCurrency] && conversionRates[fromCurrency][toCurrency]) {
        conversionRatio = "1 " + fromCurrency + " = " + conversionRates[fromCurrency][toCurrency] + " " + toCurrency;
    } else {
        conversionRatio = "Conversion ratio not available.";
    }

    // Update conversion ratio button text
    document.getElementById("conversionRatioButton").innerText = "Conversion Ratio: " + conversionRatio;
}
