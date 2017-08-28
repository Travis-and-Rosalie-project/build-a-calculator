"Use strict";

window.onload = function() {
    var numberBox = document.getElementById("number-box");
    addEventListener("click", function() {
        num = this.value;
        output = numberBox.innerHTML += num;

    })


}