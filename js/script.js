"use strict";

AOS.init();
window.addEventListener('load', AOS.refresh);

// var windowsize = $(window).width();
// $(window).resize(function () {
//     windowsize = $(window).width();
//     if (windowsize < 656) {
//         $(".home-bg").html('<i class="fas fa-compass"></i>');
//         $(".home-bg, .about-me-bg, .my-skills-bg, .projects-bg, .contact-bg").attr("aria-hidden", "true");
//         $(".home-bg-icon, .about-me-bg-icon, .my-skills-bg-icon, .projects-bg-icon, .contact-bg-icon").attr("aria-hidden", "false");
//     }
//     if (windowsize > 656) {
//         $(".home-bg").html('Home');
//         $(".home-bg, .about-me-bg, .my-skills-bg, .projects-bg, .contact-bg").attr("aria-hidden", "false");
//         $(".home-bg-icon, .about-me-bg-icon, .my-skills-bg-icon, .projects-bg-icon, .contact-bg-icon").attr("aria-hidden", "true");
//     }
// });
// Retrieved from
// https://stackoverflow.com/questions/9720294/jquery-how-to-detect-window-width-on-the-fly/


$('.fa-discord').click(function () {
    alert("Discord ID: Mofa#0997");
});

// Retrieved from
// https://www.w3schools.com/jsref/met_win_alert.asp