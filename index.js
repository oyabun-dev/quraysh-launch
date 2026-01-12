const translations = {
    en: {
        pageTitle: "Quraysh Strategic Holdings - Restructuring Influence",
        systemStatus: "System Construction",
        overline: "Global Strategic Infrastructure",
        headlineMain: "Restructuring",
        headlineAccent: "Influence.",
        desc: "We are engineering the backbone of next-generation commerce.",
        launchDate: "Q1 2026.",
        cta: "Initiate Contact",
        location: "Dakar — Global Operations"
    },
    fr: {
        pageTitle: "Quraysh Strategic Holdings - Restructurer l'Influence",
        systemStatus: "Construction Système",
        overline: "Infrastructure Stratégique Globale",
        headlineMain: "Restructurer",
        headlineAccent: "l'Influence.",
        desc: "Nous concevons l'ossature du commerce de nouvelle génération.",
        launchDate: "T1 2026.",
        cta: "Initier le Contact",
        location: "Dakar — Opérations Globales"
    }
};

let currentLang = 'en';

document.addEventListener('DOMContentLoaded', () => {
    // Determine Language Priority: Saved > Browser > Default
    const savedLang = localStorage.getItem('quraysh_lang');
    const browserLang = navigator.language.substring(0, 2);

    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    } else if (translations[browserLang]) {
        currentLang = browserLang;
    }

    // Apply initial state
    updateContent();
    updateActiveButton();

    // Fade-in animation
    const elements = document.querySelectorAll('.fade-in');
    setTimeout(() => {
        elements.forEach(element => {
            element.classList.add('visible');
        });
    }, 100);

    // Language Toggle logic
    const langOptions = document.querySelectorAll('.lang-option');

    langOptions.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedLang = btn.getAttribute('data-lang');
            if (selectedLang !== currentLang) {
                currentLang = selectedLang;
                localStorage.setItem('quraysh_lang', currentLang);
                updateContent();
                updateActiveButton();
            }
        });
    });
});

function updateActiveButton() {
    document.querySelectorAll('.lang-option').forEach(opt => {
        if (opt.getAttribute('data-lang') === currentLang) {
            opt.classList.add('active');
        } else {
            opt.classList.remove('active');
        }
    });
}

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
}
