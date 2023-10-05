document.getElementById('calculate').addEventListener('click', function () {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = parseFloat(document.getElementById('amount').value);

    // Replace with real exchange rate logic or API call
    const exchangeRate = 83.25; // Example rate
    if (!isNaN(amount)) {
        const convertedAmount = (amount * exchangeRate).toFixed(2);
        document.getElementById('resultText').textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } else {
        document.getElementById('resultText').textContent = 'Please enter a valid amount.';
    }
});
