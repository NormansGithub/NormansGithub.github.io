"use strict";

export const Intro = mobile => {
    setCss(mobile);
    mouseEvents();
};

const setCss = mobile => {
    const referenceWidth = mobile
        ? screen.width
        : $('.button-container').parent().width();
        
    $('.button-container').css('left', (referenceWidth - $('.button-container').width()) / 2);
};

const mouseEvents = _ => {
    $('.btn').click(function() {
        const reference = this.getAttribute('reference');
        const div = $('.' + reference + "-container")[0];
        div.scrollIntoView();
    });
};