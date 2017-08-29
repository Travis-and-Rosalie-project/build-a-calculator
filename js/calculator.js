"use strict";
console.log("hey");

    var leftSide = document.getElementById("left-operand");
    var operators = document.getElementsByClassName("operators");
    var keys = document.getElementsByClassName("keys");
    var middle = document.getElementById("middle");
    var rightSide = document.getElementById("right-operand");
    var clear = document.getElementById("clear");
    var equal = document.getElementById("equal");
    var decimal = document.getElementById('decimal');

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

    clear.addEventListener("click", function(){
        leftSide.innerHTML = "";
        rightSide.innerHTML = "";
        middle.innerHTML = "";
    });

    equal.addEventListener("click", function (){
        if (middle.innerHTML === "/") {
            leftSide.innerHTML = leftSide.innerHTML / rightSide.innerHTML;

        } else if (middle.innerHTML === "*") {
            leftSide.innerHTML = leftSide.innerHTML * rightSide.innerHTML;

        } else if (middle.innerHTML === "+") {
            leftSide.innerHTML = parseInt(leftSide.innerHTML) + parseInt(rightSide.innerHTML);

        } else if (middle.innerHTML === "-") {
            leftSide.innerHTML = leftSide.innerHTML - rightSide.innerHTML;

        } else {
            leftSide.innerHTML = "";
        }

        middle.innerHTML = "";
        rightSide.innerHTML = "";
    });



    decimal.addEventListener("click", function (){
            leftSide.innerHTML += leftSide.innerHTML + ".";
            console.log(leftSide);
            rightSide.innerHTML += rightSide.innerHTML + ".";

    })

