    
    window.addEventListener("DOMContentLoaded", ()=>{

    //theme section variables
    var black_white_theme_button = document.getElementById("button_switch_theme");
    let localStorage_track_theme_click = localStorage.getItem("theme_click_tracker") || '0';

    var switch_variable_tracker = localStorage.getItem("custom_theme_click_tracker");
    console.log(switch_variable_tracker);

function black_theme_change_function() {
    const isDarkTheme = localStorage_track_theme_click === '1';
    document.documentElement.style.setProperty('--white', isDarkTheme ? '#1c1c1c' : '#fff');
    document.documentElement.style.setProperty('--second', isDarkTheme ? '#bd362f' : '#da9673');
    document.documentElement.style.setProperty('--footer', isDarkTheme ? '#2c5f14' : '#9e5c22a1');
    document.documentElement.style.setProperty('--black', isDarkTheme ? '#fff' : '#1c1c1c');
    document.documentElement.style.setProperty('--gray', isDarkTheme ? '#fff' : '#a6a6a6');
    document.documentElement.style.setProperty('--logo-white', isDarkTheme ? '#1c1c1c' : '#fff'); // Include logo-white color
}

function check_if_localStorage_elements_exist() {
    console.log("this is the local switch button");
    if (localStorage_track_theme_click === null) {
        localStorage_track_theme_click = "0";
    }
}



function change_tracker_click_value() {
    localStorage_track_theme_click = localStorage_track_theme_click === '0' ? '1' : '0';
    localStorage.setItem("theme_click_tracker", localStorage_track_theme_click);
}

function check_switch(){
    if(switch_variable_tracker === '1'){
        console.log("this is the 1");
        black_white_theme_button.disabled = true;
                // Set root colors from localStorage

                document.documentElement.style.setProperty('--black', localStorage.getItem("black"));
                document.documentElement.style.setProperty('--white', localStorage.getItem("white"));
                document.documentElement.style.setProperty('--second', localStorage.getItem("second"));
                document.documentElement.style.setProperty('--footer', localStorage.getItem("footer"));
                document.documentElement.style.setProperty('--gray', localStorage.getItem("gray"));
                document.documentElement.style.setProperty('--logo_white', localStorage.getItem("logo_white"));

    }else{
        black_theme_change_function();
    }
}



function main_black_white_theme_function() {
    change_tracker_click_value(localStorage_track_theme_click);
    check_if_localStorage_elements_exist();
    black_theme_change_function();
}



black_white_theme_button.addEventListener("click", main_black_white_theme_function);

window.onload = function(){
    check_switch();
}


    })
    

