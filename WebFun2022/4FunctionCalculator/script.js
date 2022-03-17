var displayDiv = document.querySelector("#display");

function setOP(operator) {
    return operator;
}

function press(num) {
    if (displayDiv.innerText == 0) {
        displayDiv.innerText = num;
    }
    return displayDiv.innerText + num;
} 

// function calculate (num, operator) {
//     var num = press(num);
//     var sym = setOP(operator);
//     var 
//     if (sym == "/") {
//         num /= displayDiv;
//     }
// }