"use strict";

class StickyNavigation {

    constructor() {
        this.currentId = null;
        this.currentTab = null;
        this.tabContainerHeight = 56;
        let self = this;

        $('.nav-element').click(function () {
            self.onTabClick($(this));
        });

        $(window).scroll(() => {
            this.onScroll();
        });
    }

    onTabClick(element) {
        let scrollTop = $(element.attr('href')).offset().top;
        $('html, body').animate({ scrollTop: scrollTop }, 600);
    }

    onScroll() {
        this.checkTabContainerPosition();
    }

    checkTabContainerPosition() {
        let offset = $('#home').offset().top + $('#home').height() - this.tabContainerHeight;
        if ($(window).scrollTop() > offset) {
            $('.nav-bar').addClass('nav-bar-top');
        }
        else {
            $('.nav-bar').removeClass('nav-bar-top');
        }
    }

}

new StickyNavigation();

// Retrieved From
// https://codepen.io/ettrics/pen/WRbGRN