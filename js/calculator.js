"use strict";
console.log("hey");



    var leftSide = document.getElementById("left-operand");
    var operators = document.getElementsByClassName("operators");
    var keys = document.getElementsByClassName("keys");
    var middle = document.getElementById("middle")
    var rightSide = document.getElementById("right-operand");




    for(var i = 0; i < keys.length; i++){
        keys[i].addEventListener("click", function(){

            if (rightSide.innerHTML === "" && middle.innerHTML === "") {
                leftSide.innerHTML += this.innerHTML;
            } else {
                rightSide.innerHTML += this.innerHTML;
            }
            // console.log(this.innerHTML);
        })
    }

    for(var i = 0; i < operators.length; i++) {
        operators[i].addEventListener("click", function(){

            middle.innerHTML = this.innerHTML;
            console.log(this);
        })
    }

