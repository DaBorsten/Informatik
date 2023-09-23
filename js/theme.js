"use strict";
let savedTheme = localStorage.getItem("theme");
let themeSwitcher = document.querySelector('.themeSwitcher');
// Default Light Theme
if (savedTheme === null) {
    localStorage.setItem("theme", "light");
    themeSwitcher.dataset.theme = "light";
}
// Change Button based on saved Value
if (themeSwitcher !== null) {
    if (savedTheme === "light") {
        themeSwitcher.dataset.theme = "light";
        document.body.dataset.theme = "light";
    }
    else if (savedTheme === "dark") {
        themeSwitcher.dataset.theme = "dark";
        document.body.dataset.theme = "dark";
    }
}
// Theme Switcher Functionality
if (themeSwitcher !== null) {
    themeSwitcher.addEventListener('click', () => {
        let localStorageTheme = localStorage.getItem("theme");
        if (localStorageTheme === "light") {
            localStorage.setItem("theme", "dark");
            document.body.dataset.theme = "dark";
            themeSwitcher.dataset.theme = "dark";
        }
        else if (localStorageTheme === "dark") {
            document.body.dataset.theme = "light";
            localStorage.setItem("theme", "light");
            themeSwitcher.dataset.theme = "light";
        }
    });
}
