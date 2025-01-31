function changeLanguage(language) {
    // Store the selected language in localStorage
    localStorage.setItem('selectedLanguage', language);

    // Redirect to the home page to apply the language change
    window.location.href = "home.html";
}

window.onload = function() {
    // Check if language is stored in localStorage
    const language = localStorage.getItem('selectedLanguage') || 'en';

    // Update the website content based on the selected language
    updateContent(language);
};

function updateContent(language) {
    if (language === 'gu') {
        document.querySelector('h1').textContent = 'ઇસ્લામિક માર્ગદર્શન';
        document.querySelector('p').textContent = 'આપણી ભાષા પસંદ કરો';
        document.querySelector('.card h3:nth-child(1)').textContent = 'તરીક-એ-નમાજ';
        document.querySelector('.card h3:nth-child(2)').textContent = 'હદીથ સંગ્રહ';
        document.querySelector('.card h3:nth-child(3)').textContent = 'ઝકાત, સદકાહ, ફિતરા કેલ્ક્યુલેટર';
    } else {
        document.querySelector('h1').textContent = 'Welcome to Islamic Guidance';
        document.querySelector('p').textContent = 'Select your language';
        document.querySelector('.card h3:nth-child(1)').textContent = 'Tariqa-e-Namaz';
        document.querySelector('.card h3:nth-child(2)').textContent = 'Hadith Collection';
        document.querySelector('.card h3:nth-child(3)').textContent = 'Zakat, Sadaqah, Fitra Calculator';
    }
}
