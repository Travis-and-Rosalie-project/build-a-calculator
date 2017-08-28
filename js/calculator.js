"use strict";

window.onload = function() {
    var numberBox = document.getElementById("number-box");
    addEventListener("click", function() {
        var num = this.value;
        var output = numberBox.innerHTML += num;

    });
};
