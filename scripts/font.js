let inner__font_container = document.querySelector("#inner__font_container");
[font1, font2, font3] = [document.querySelector("#font1"), document.querySelector("#font2"), document.querySelector("#font3")];
let all_elements = document.querySelector("*");
let inner__font_container_text = document.querySelector("#inner__font_container > p");
let [font_f1, font_f2, font_f3] = ["Inter", "Lora", "Inconsolata"];
let [font_F1, font_F2, font_F3] = ["Sans Serif", "Serif", "Mono"];


inner__font_container.addEventListener("click", () => {
    hidden__font_container.classList.toggle("active");
});

all_elements.style.fontFamily = font_f1;
font1.addEventListener("click", () => {
    all_elements.style.fontFamily = font_f1;
    search_bar.style.fontFamily = font_f1;
    inner__font_container_text.textContent = font_F1;
})

font2.addEventListener("click", () => {
    all_elements.style.fontFamily = font_f2;
    search_bar.style.fontFamily = font_f2;
    inner__font_container_text.textContent = font_F2;
})

font3.addEventListener("click", () => {
    all_elements.style.fontFamily = font_f3;
    search_bar.style.fontFamily = font_f3;
    inner__font_container_text.textContent = font_F3;
})
font1.style.fontFamily = font_f1;
font2.style.fontFamily = font_f2;
font3.style.fontFamily = font_f3;