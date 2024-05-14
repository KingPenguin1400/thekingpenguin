let welcomemsg = document.getElementById("welcome");
//let submitname = document.getElementById("submitname");
//let nameinput = document.getElementById("nameinput");
const reset = document.getElementById("resetbtn");
const addone = document.getElementById("addonebtn");
const subtractone = document.getElementById("subtractonebtn");
const countertext = document.getElementById("counter");
let count = 0;

function message() {
    welcomemsg.textContent = "Welcome to my website";
}

/*function name() {
    nameinput.value = "no";
    console.log(nameinput);
    //welcome.textContent = welcome.textContent + ", " + nameinput;
}*/

function addonefunction(){
    count++;
    console.log(count);
    countertext.textContent = count;
}