const toggleSwitch = document.getElementById('check');
const toggleIcon = document.getElementById('toggle-icon');

// Dark Mode
function darkMode() {
    toggleIcon.children[0].classList.replace('fa-sun', 'fa-moon');
    toggleIcon.children[1].classList.replace('fa-toggle-on', 'fa-toggle-off');
}

// Light Mode
function lightMode() {
    // boxSocialMediaDarkMode.style.color = '#6c63ff';
    toggleIcon.children[0].classList.replace('fa-moon', 'fa-sun');
    toggleIcon.children[1].classList.replace('fa-toggle-off', 'fa-toggle-on');

}

// Switch theme 
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();

    } else {
        document.documentElement.setAttribute('data-theme', 'root');
        localStorage.setItem('theme', 'root');
        lightMode()
    }
}

// Check local storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkMode();
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);