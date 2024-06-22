const nameInputELMNT = document.getElementById("nameInput");
let paragraph = document.getElementById("paragraph");
//let paragraphText = "";
let submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", event =>{
    paragraph.textContent = (nameInputELMNT.value === "") ? "Enter A Name!!" : `Hello, ${nameInputELMNT.value}!`;
})
/*function submit(){
    paragraph.textContent = `Hello`;
    //console.log("it works!");
}
function changeParagraph(){
    paragraph.textContent = paragraphText;
}
changeParagraph();
setInterval(changeParagraph(), 1000);*/