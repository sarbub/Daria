window.addEventListener("DOMContentLoaded", () => {
    //getting the color pickers here
    let white_picker_color = document.getElementById("white");
    let black_picker_color = document.getElementById("black");
    let second_picker_color = document.getElementById("second");
    let footer_picker_color = document.getElementById("footer");
    let gray_picker_color = document.getElementById("gray");
    let logo_white_picker_color = document.getElementById("logo_white");

    //getting the root colors

    var rootStyles = getComputedStyle(document.documentElement);

    // Extract and store each color value in individual variables
    var black_root = rootStyles.getPropertyValue('--black');
    var white_root = rootStyles.getPropertyValue('--white');
    var second_root = rootStyles.getPropertyValue('--second');
    var footer_root = rootStyles.getPropertyValue('--footer');
    var gray_root = rootStyles.getPropertyValue('--gray');
    var logo_white_root = rootStyles.getPropertyValue('--logo-white');


    //theme section variables
    var black_white_theme_button = document.getElementById("button_switch_theme");
    let localStorage_track_theme_click = localStorage.getItem("theme_click_tracker") || '0';


    //custom theme section variables
    var custom_theme_switch_button = document.getElementById("custom_switch");
    var custom_theme_switch_dot_on_button = document.getElementById("inside_dot");
    let localStorage_track_custom_theme_click = localStorage.getItem("custom_theme_click_tracker") || '0';
    //check if local storage elements exist, if not, create them

    function check_if_localStorage_elements_exist() {
        console.log("this is the local switch button");
        if (localStorage_track_theme_click === null) {
            localStorage_track_theme_click = "0";
        }
    }

    function check_if_localStorage_custom_element_exist() {
        console.log("this is the local custom switch button");
        if (localStorage_track_custom_theme_click === null) {
            localStorage_track_custom_theme_click = "0";
        }
    }



    //changing colors theme 
    function black_theme_change_function() {
        console.log("this is the black theme change function");
        console.log("the click trigger is ", localStorage_track_theme_click);
        const isDarkTheme = localStorage_track_theme_click === '1';
        document.documentElement.style.setProperty('--white', isDarkTheme ? '#1c1c1c' : '#fff');
        document.documentElement.style.setProperty('--second', isDarkTheme ? '#bd362f' : '#da9673');
        document.documentElement.style.setProperty('--footer', isDarkTheme ? '#2c5f14' : '#9e5c22a1');
        document.documentElement.style.setProperty('--black', isDarkTheme ? '#fff' : '#1c1c1c');
        document.documentElement.style.setProperty('--gray', isDarkTheme ? '#fff' : '#a6a6a6');
        document.documentElement.style.setProperty('--logo-white', isDarkTheme ? '#1c1c1c' : '#fff'); // Include logo-white color
    }
    

    //function that will change the localStorage_track_theme_click value when its clicked

    function change_tracker_click_value() {
        localStorage_track_theme_click = localStorage_track_theme_click === '0' ? '1' : '0';
        localStorage.setItem("theme_click_tracker", localStorage_track_theme_click);
    }

    //custom value

    function toggle_custom_tracker_click_value() {
        localStorage_track_custom_theme_click = localStorage_track_custom_theme_click === '0' ? '1' : '0';
        localStorage_track_custom_theme_click === '1' ? black_white_theme_button.disabled = true : black_white_theme_button.disabled = false;
        localStorage_track_custom_theme_click === '1' ? save_colors_in_local_storage() : null;
        localStorage_track_custom_theme_click === '1' ? change_root_colors_to_new_custom_ones() : null;
        localStorage_track_custom_theme_click === '0' ? black_theme_change_function():null;
        localStorage.setItem("custom_theme_click_tracker", localStorage_track_custom_theme_click);
    }


    //main black_theme_function 

    function main_black_white_theme_function() {
        change_tracker_click_value(localStorage_track_theme_click);
        check_if_localStorage_elements_exist();
        black_theme_change_function();
    }


    black_white_theme_button.addEventListener("click", main_black_white_theme_function);

    // biggest function

    function big_main_function() {
        change_color_picker_value_to_selected();
        if (localStorage_track_custom_theme_click === '1') {
            custom_theme_switch_on_click_css_changes(custom_theme_switch_dot_on_button);
            change_root_colors_to_new_custom_ones();
            //disable the theme button
            black_white_theme_button.disabled = true;
        } else {
            black_white_theme_button.disabled = false;
            black_theme_change_function();
        }
    }


    window.onload = function () {
        big_main_function();
    }

    //===================================================================CUSTOM THEME SECTION=======================================================================

    function save_colors_in_local_storage(){
        localStorage.setItem("white",white_picker_color.value);
        localStorage.setItem("black",black_picker_color.value);
        localStorage.setItem("footer",footer_picker_color.value);
        localStorage.setItem("second",second_picker_color.value);
        localStorage.setItem("gray",gray_picker_color.value);
        localStorage.setItem("logo_white",logo_white_picker_color.value);
    }

    function change_color_picker_value_to_selected(){
        white_picker_color.value = localStorage.getItem("white");
        black_picker_color.value = localStorage.getItem("black");
        footer_picker_color.value = localStorage.getItem("footer");
        second_picker_color.value = localStorage.getItem("second");
        gray_picker_color.value = localStorage.getItem("gray");
        logo_white_picker_color.value = localStorage.getItem("logo_white");
    }

    
    function change_root_colors_to_new_custom_ones(){
        // Set root colors from localStorage
        document.documentElement.style.setProperty('--black', localStorage.getItem("black"));
        document.documentElement.style.setProperty('--white', localStorage.getItem("white"));
        document.documentElement.style.setProperty('--second', localStorage.getItem("second"));
        document.documentElement.style.setProperty('--footer', localStorage.getItem("footer"));
        document.documentElement.style.setProperty('--gray', localStorage.getItem("gray"));
        document.documentElement.style.setProperty('--logo_white', localStorage.getItem("logo_white"));
    
        // Set picker values from localStorage
        white_picker_color.value = localStorage.getItem("white");
        black_picker_color.value = localStorage.getItem("black");
        footer_picker_color.value = localStorage.getItem("footer");
        second_picker_color.value = localStorage.getItem("second");
        gray_picker_color.value = localStorage.getItem("gray");
        logo_white_picker_color.value = localStorage.getItem("logo_white");
    }
    
    
    


    function custom_theme_switch_on_click_css_changes(element) {
        if (localStorage_track_custom_theme_click === '1') {
            element.style.background = "#0e61a0";
            element.style.transform = "translateX(50px)";
        } else {
            element.style.background = "#ac2525";
            element.style.transform = "translateX(0px)";
        }
    }

    function main_switch_button_function() {
        toggle_custom_tracker_click_value();
        check_if_localStorage_custom_element_exist();
        custom_theme_switch_on_click_css_changes(custom_theme_switch_dot_on_button);
    }



    custom_theme_switch_button.addEventListener("click", main_switch_button_function);

})
