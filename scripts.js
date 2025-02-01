// Market Prices in India (₹ per kg)
const marketPrices = {
    wheat: 29.4,  // ₹ per kg
    rice: 35.0,   // ₹ per kg
    dates: 200.0  // ₹ per kg
};

// Fitra quantity per person (kg)
const fitraQuantities = {
    wheat: 1.75,  // kg per person
    rice: 3.5,    // kg per person
    dates: 3.5    // kg per person
};

// Function to calculate Zakat, Fitra, and Sadaqah
document.getElementById("calculation-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const totalWealth = parseFloat(document.getElementById("total-wealth").value);
    const goldValue = parseFloat(document.getElementById("gold-value").value);
    const income = parseFloat(document.getElementById("income").value);
    const sadaqah = parseFloat(document.getElementById("sadaqah").value);
    const familyMembers = parseInt(document.getElementById("family-members").value);
    const fitraItem = document.getElementById("fitra-item").value;

    // Zakat Calculation (2.5% of wealth)
    const zakat = (totalWealth * 0.025).toFixed(2);

    // Fitra Calculation
    const fitraPerPerson = (fitraQuantities[fitraItem] * marketPrices[fitraItem]).toFixed(2);
    const totalFitra = (familyMembers * fitraPerPerson).toFixed(2);

    // Add the result to the table
    addToResults(totalWealth, goldValue, income, sadaqah, zakat, fitraPerPerson, totalFitra);

    // Store in localStorage
    storeInLocalStorage(totalWealth, goldValue, income, sadaqah, zakat, fitraPerPerson, totalFitra);
});

// Function to add results to the table
function addToResults(totalWealth, goldValue, income, sadaqah, zakat, fitraPerPerson, totalFitra) {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${totalWealth}</td>
        <td>${goldValue}</td>
        <td>${income}</td>
        <td>${sadaqah}</td>
        <td>${zakat}</td>
        <td>${fitraPerPerson}</td>
        <td>${totalFitra}</td>
    `;

    document.getElementById("previous-entries").appendChild(row);
}

// Function to store results in localStorage
function storeInLocalStorage(totalWealth, goldValue, income, sadaqah, zakat, fitraPerPerson, totalFitra) {
    let previousEntries = JSON.parse(localStorage.getItem("zakatEntries")) || [];
    previousEntries.push({ totalWealth, goldValue, income, sadaqah, zakat, fitraPerPerson, totalFitra });
    localStorage.setItem("zakatEntries", JSON.stringify(previousEntries));

    // Load previous entries after adding new one
    loadPreviousEntries();
}

// Function to load previous entries from localStorage
function loadPreviousEntries() {
    let previousEntries = JSON.parse(localStorage.getItem("zakatEntries")) || [];

    previousEntries.forEach(entry => {
        addToResults(entry.totalWealth, entry.goldValue, entry.income, entry.sadaqah, entry.zakat, entry.fitraPerPerson, entry.totalFitra);
    });
}

// Load previous entries when the page loads
loadPreviousEntries();
