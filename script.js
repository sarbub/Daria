let localStorage_clickElement = localStorage.getItem("clicked");

// If the theme is not set in localStorage, use a default value (e.g., light theme)
if (localStorage_clickElement === null) {
    localStorage_clickElement = '0'; // Default to light theme
}

const rootStyles = getComputedStyle(document.documentElement);

window.onload = function () {
    changing_elements(); 
}


if (localStorage_clickElement === '1') {
    changing_elements();
}

function theme_function() {
    if (localStorage_clickElement === '1') {
        localStorage_clickElement = '0';
    } else {
        localStorage_clickElement = '1';
    }
    changing_elements();
    localStorage.setItem('clicked', localStorage_clickElement);
}

function changing_elements() {
    document.documentElement.style.setProperty('--white', localStorage_clickElement === '1' ? '#1c1c1c' : '#fff');
    document.documentElement.style.setProperty('--second', localStorage_clickElement === '1' ? '#bd362f' : '#da9673');
    document.documentElement.style.setProperty('--footer', localStorage_clickElement === '1' ? '#2c5f14' : '#9e5c22a1');
    document.documentElement.style.setProperty('--black', localStorage_clickElement === '1' ? '#fff' : '#1c1c1c');
    document.documentElement.style.setProperty('--nav_gray', localStorage_clickElement === '1' ? '#fff' : '#b8b7b7');
}

document.addEventListener("DOMContentLoaded", function () {
    const theme = document.getElementById("theme");
    if (theme) {
        theme.addEventListener("click", theme_function);
    } else {
        console.error("Element with ID 'theme' not found");
    }
});
