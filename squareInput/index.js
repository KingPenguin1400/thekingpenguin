let square = document.querySelector("div");
let input = document.querySelector("input");

input.addEventListener("input", () =>{
    square.style.borderRadius = input.value;
    square.style.color = input.value;
});