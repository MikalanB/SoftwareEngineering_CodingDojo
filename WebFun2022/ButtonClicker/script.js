function loginButton (element) {
    element.innerText = "Logout";
}

// remove element by usign this
function definitionRemove(element) {
    //document.getElementsByClassName('add-def-button').remove();
    element.remove();
}

// like button #1
var button = document.getElementById("likes-button1");
var count1 = 13;
button.onclick = function() {
    alert("Ninja was liked")
    count1 += 1;
    button.innerHTML = count1 + " Likes";
}

// like button 2
var button2 = document.getElementById("likes-button2");
var count2 = 37;
button2.onclick = function() {
    alert("Ninja was liked")
    count2 += 1;
    button2.innerHTML = count2 + " Likes";
}

