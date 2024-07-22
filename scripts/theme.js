const toggle = document.querySelector("#toggle");
const toggle_ball = document.querySelector("#toggle_ball");
let is_dark = false;
const body = document.querySelector("body");
let all_text = document.querySelectorAll("*");
const search_bar = document.querySelector("#search_bar");
let hidden__font_container = document.querySelector("#hidden__font_container");
const font_styles = document.querySelector("#hidden__font_container > ul");


toggle.addEventListener('click', () => {
    if(!is_dark){
        toggle.style.backgroundColor = "#a445ed";
        toggle_ball.style.marginLeft = "21px";
        is_dark = true;
        body.style.backgroundColor = "#050505";
        all_text.forEach(element => {
            element.style.color = "#fff";
        });
        search_bar.style.backgroundColor = "#1f1f1f"; 
        hidden__font_container.style.backgroundColor = "#050505";
        for (let i = 0; i < font_styles.length; i++) {
            font_styles[i].style.color = "#fff";
        }
        hidden__font_container.style.boxShadow = "#a445ed 0 0 15px";
    }
    else{
        toggle.style.backgroundColor = "#757575";
        toggle_ball.style.marginLeft = "5px";
        is_dark = false;
        body.style.backgroundColor = "#fff";
        all_text.forEach(element => {
            element.style.color = "#000";
        });
        search_bar.style.backgroundColor = "#f4f4f4";
        hidden__font_container.style.backgroundColor = "#fff";
        for (let i = 0; i < font_styles.length; i++) {
            font_styles[i].style.color = "#000";
        }
        hidden__font_container.style.boxShadow = "rgb(193, 193, 193) 0 0 15px"; 
    }
})