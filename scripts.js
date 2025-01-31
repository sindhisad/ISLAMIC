// Function to change the language
function changeLanguage(language) {
    // Store the selected language in localStorage
    localStorage.setItem('selectedLanguage', language);

    // Redirect to the home page to apply the language change
    window.location.href = "home.html";
}

// Function to update content based on selected language
function updateContent() {
    const language = localStorage.getItem('selectedLanguage') || 'gu'; // Default to Gujarati if not set

    if (language === 'gu') {
        // Update text content for Gujarati language
        document.querySelector('h1').textContent = 'Learn Islam'; // Keep logo in English
        document.querySelector('p').textContent = 'આપણી ભાષા પસંદ કરો';
        document.querySelector('.card:nth-child(1) h3').textContent = 'તરીક-એ-નમાજ';
        document.querySelector('.card:nth-child(2) h3').textContent = 'હદીથ સંગ્રહ';
        document.querySelector('.card:nth-child(3) h3').textContent = 'ઝકાત, સદકાહ, ફિતરા કેલ્ક્યુલેટર';
        document.querySelector('.card:nth-child(1) p').textContent = 'યોગ્ય પ્રાર્થના પદ્ધતિ શીખો';
        document.querySelector('.card:nth-child(2) p').textContent = 'વિશ્વસનીય હદીથનો અભ્યાસ કરો';
        document.querySelector('.card:nth-child(3) p').textContent = 'તમારી ઝકાત, સદકાહ અને ફિતરા ગણતરી કરો';
        document.querySelector('.card:nth-child(1) a').textContent = 'સિખો';
        document.querySelector('.card:nth-child(2) a').textContent = 'સિખો';
        document.querySelector('.card:nth-child(3) a').textContent = 'સિખો';
        document.querySelector('footer p').textContent = 'Created by Sindhi Saad';
    } else {
        // Update text content for English language
        document.querySelector('h1').textContent = 'Learn Islam'; // Keep logo in English
        document.querySelector('p').textContent = 'Select your language';
        document.querySelector('.card:nth-child(1) h3').textContent = 'Tariqa-e-Namaz';
        document.querySelector('.card:nth-child(2) h3').textContent = 'Hadith Collection';
        document.querySelector('.card:nth-child(3) h3').textContent = 'Zakat, Sadaqah, Fitra Calculator';
        document.querySelector('.card:nth-child(1) p').textContent = 'Learn the proper prayer method';
        document.querySelector('.card:nth-child(2) p').textContent = 'Browse through authentic Hadiths';
        document.querySelector('.card:nth-child(3) p').textContent = 'Calculate your Zakat, Sadaqah, and Fitra';
        document.querySelector('.card:nth-child(1) a').textContent = 'Explore';
        document.querySelector('.card:nth-child(2) a').textContent = 'Explore';
        document.querySelector('.card:nth-child(3) a').textContent = 'Explore';
        document.querySelector('footer p').textContent = 'Created by Sindhi Saad';
    }
}

// Call updateContent on page load
window.onload = updateContent;

