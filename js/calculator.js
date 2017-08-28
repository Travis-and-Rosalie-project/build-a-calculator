"use strict";
console.log("hey");



    var total = document.getElementById("total");
    var numbers = document.getElementsByTagName('button');
    var len = numbers.length;



    for(var i = 0; i < len; i++){
        numbers[i].addEventListener("click", function(){
            console.log('hey!')
             // alert(this);
            console.log(this.innerHTML);
        })
    }
