"use strict";

var button = document.querySelector(".fa-caret-square-up");

button.addEventListener("click",

    function () {
        let scrollTop = $('html').offset().top;
        $('html, body').animate({ scrollTop: scrollTop }, 600);
    }
    
);