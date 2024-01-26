// Variables declaration
let localStorage_clickElement = localStorage.getItem("clicked") || '0';
let switch_click_tracker = localStorage.getItem("switch_local") || '0';
let customize_switch_button, theme, button_switch_theme, inside_dot, save_items_color_btn;
let custom_white = document.getElementById("white");
let custom_black = document.getElementById("black");
let custom_footer = document.getElementById("footer");
let custom_second = document.getElementById("second");
let save_items_button;


// Functions to check and set default values for localStorage variables
function checking_if_localVariables_are_null() {
    if (localStorage_clickElement === null) {
        localStorage_clickElement = '0'; // Default to light theme
    }
    if (switch_click_tracker === null) {
        switch_click_tracker = '0'; // Default to light theme
    }
}
// Event listener for DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function () {
    // Element assignments
    theme = document.getElementById("theme");
    customize_switch_button = document.getElementById("custom_switch");
    inside_dot = document.getElementById("inside_dot");
    button_switch_theme = document.getElementById("button_switch_theme");

    // Event listeners
    if (theme) theme.addEventListener("click", theme_function);
    else console.error("Element with ID 'theme' not found");

    if (customize_switch_button) customize_switch_button.addEventListener("click", switch_function);
    else console.log("Element with ID 'custom_switch' not found");
});

// Event listener for window.onload event
window.onload = function () {
    // Check if elements exist before accessing their properties
    if (custom_white && custom_black && custom_second && custom_footer) {
        custom_white.value = localStorage.getItem("custom_white");
        custom_black.value = localStorage.getItem("custom_black");
        custom_second.value = localStorage.getItem("custom_second");
        custom_footer.value = localStorage.getItem("custom_footer");
    } else {
        console.error("One or more elements not found in the DOM.");
    }

    // Ensure elements exist before calling functions that use them
    if (custom_white && custom_black && custom_second && custom_footer) {
        changing_elements_custom();
        changing_elements(); 
        if (switch_click_tracker === '1') {
            //getting the values here
            changing_elements_custom();
        }
    } else {
        console.error("One or more elements not found in the DOM.");
    }
}


// Function to handle theme switching
function theme_function() {
    localStorage_clickElement = localStorage_clickElement === '1' ? '0' : '1';
    changing_elements();
    localStorage.setItem('clicked', localStorage_clickElement);
}

// Function to handle switch toggling
function switch_function() {
    if(switch_click_tracker === '1'){
        localStorage.setItem("custom_white", custom_white.value);
        localStorage.setItem("custom_footer", custom_footer.value);
        localStorage.setItem("custom_black", custom_black.value);
        localStorage.setItem("custom_second", custom_second.value);
        changing_elements();
    }else{
        changing_elements_custom();
    }
    inside_dot.style.transform = switch_click_tracker === '0' ? "translateX(55px)" : "translateX(0px)";
    inside_dot.style.background = switch_click_tracker === '0' ? "#1d4a97" : "#ac2525";
    customize_switch_button.style.background = switch_click_tracker === '0' ? "#ccccc" : "#989898";
    button_switch_theme.disabled = switch_click_tracker === '0' ? true : false;
    switch_click_tracker = switch_click_tracker === '0' ? '1' : '0';
    localStorage.setItem("switch_local", switch_click_tracker);
}

// Function to change theme colors
function changing_elements() {
    const isDarkTheme = localStorage_clickElement === '1';
    document.documentElement.style.setProperty('--white', isDarkTheme ? '#1c1c1c' : '#fff');
    document.documentElement.style.setProperty('--second', isDarkTheme ? '#bd362f' : '#da9673');
    document.documentElement.style.setProperty('--footer', isDarkTheme ? '#2c5f14' : '#9e5c22a1');
    document.documentElement.style.setProperty('--black', isDarkTheme ? '#fff' : '#1c1c1c');
}



// Function to change custom theme colors
function changing_elements_custom() {
    let get_white_from_local = localStorage.getItem("custom_white");
    let get_second_from_local = localStorage.getItem("custom_second");
    let get_footer_from_local = localStorage.getItem("custom_footer");
    let get_black_from_local = localStorage.getItem("custom_black");
    document.documentElement.style.setProperty('--white', get_white_from_local);
    document.documentElement.style.setProperty('--second', get_second_from_local);
    document.documentElement.style.setProperty('--footer', get_footer_from_local);
    document.documentElement.style.setProperty('--black', get_black_from_local);
}
