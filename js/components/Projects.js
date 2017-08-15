"use strict";

let slideIndex = 0;

export const Projects = _ => {
    setFlexslider(setCss);
    mouseEvents();
};

const setFlexslider = callback => {
    $('.flexslider-static').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 210,
        itemMargin: 5,
        minItems: 2,
        maxItems: 2,
        start: callback
    });

    const resizeWindow = _ => $('.flexslider-static').data('flexslider').resize();
    $(window).bind('resize', _ => setTimeout(resizeWindow, 100));
}

const setCss = _ => {
    const projectsHeight = $('.project-info')
        .map((index, box) => $(box).height())
        .getMax();
        
    const projectBoxes = $('.project-info')
        .merge($('.project-box'));
        
    const marginTop = (projectsHeight - $('.project-name').height()) / 2;

    projectBoxes.each((index, box) => $(box).height(projectsHeight));
    $('.project-name').css('margin-top', marginTop);
};

const mouseEvents = _ => {
    $('.project-toggle').hover(showProject);
    $('.project-toggle').click(showProject);

    $('.projects-container').mouseleave(showMenu);
    $('.projects-container').click(e => e.stopPropagation());
    $(document).click(showMenu);
};

const showProject = function() {
    const project = this.getAttribute('project');

    $('.flexslider-static').hide();
    $('#' + project + '-info').show();
};

const showMenu = _ => {
    $('.projects-container > div').hide();
    $('.flexslider-static').show();
};