// Function to calculate Zakat, Fitra, and Sadaqah
document.getElementById("calculation-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const totalWealth = parseFloat(document.getElementById("total-wealth").value);
    const goldValue = parseFloat(document.getElementById("gold-value").value);
    const income = parseFloat(document.getElementById("income").value);
    const sadaqah = parseFloat(document.getElementById("sadaqah").value);

    // Zakat Calculation (2.5% of wealth)
    const zakat = (totalWealth * 0.025).toFixed(2);

    // Fitra Calculation (based on gold value)
    const fitra = (goldValue * 0.1).toFixed(2);

    // Add the result to the table
    addToResults(totalWealth, goldValue, income, sadaqah, zakat, fitra);

    // Store in localStorage
    storeInLocalStorage(totalWealth, goldValue, income, sadaqah, zakat, fitra);
});

// Function to add results to the table
function addToResults(totalWealth, goldValue, income, sadaqah, zakat, fitra) {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${totalWealth}</td>
        <td>${goldValue}</td>
        <td>${income}</td>
        <td>${sadaqah}</td>
        <td>${zakat}</td>
        <td>${fitra}</td>
    `;

    document.getElementById("previous-entries").appendChild(row);
}

// Function to store results in localStorage
function storeInLocalStorage(totalWealth, goldValue, income, sadaqah, zakat, fitra) {
    let previousEntries = JSON.parse(localStorage.getItem("zakatEntries")) || [];
    previousEntries.push({ totalWealth, goldValue, income, sadaqah, zakat, fitra });
    localStorage.setItem("zakatEntries", JSON.stringify(previousEntries));

    // Load previous entries after adding new one
    loadPreviousEntries();
}

// Function to load previous entries from localStorage
function loadPreviousEntries() {
    let previousEntries = JSON.parse(localStorage.getItem("zakatEntries")) || [];

    previousEntries.forEach(entry => {
        addToResults(entry.totalWealth, entry.goldValue, entry.income, entry.sadaqah, entry.zakat, entry.fitra);
    });
}

// Load previous entries when the page loads
loadPreviousEntries();

