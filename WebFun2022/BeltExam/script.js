function cartStatus () {
    alert('Your cart is empty!')
}

var plantImg = document.querySelector(".succulents");
function switchImg(element) {
    plantImg.src = "images/succulents-2.jpg";
}

function currentImg(element) {
    plantImg.src = "images/succulents-1.jpg";
}

function removeAlert(element) {
    element = document.querySelector("#alert-message");
    element.remove();

}