"use strict";

let slideIndex = 0;

export const AboutMe = _ => {
    setCss();
    mouseEvents();
};

const setCss = _ => {
    $(".about-me-slide").each(index => showSlides(index));

    const introHeight = $(".about-me-slide")
        .map((index, slide) => $(slide).height())
        .getMax();

    $('.about-me-slide').each((index, slide) => $(slide).height(introHeight));
    showSlides(0);
};

const mouseEvents = _ => {
    $('.prev').click(_ => showSlides(slideIndex - 1));
    $('.next').click(_ => showSlides(slideIndex + 1));

    $('.dot').click(function() {
        const newIndex = this.getAttribute('index');
        showSlides(newIndex);
    });
};

const showSlides = function(newIndex) {
    const slides = $(".about-me-slide");
    const dots = $(".dot");

    slideIndex = newIndex;
    if (newIndex >= slides.length) { slideIndex = 0; }
    if (newIndex < 0) { slideIndex = slides.length - 1; }

    slides.each((index, slide) => {
        slide.style.display = index == slideIndex
            ? "block"
            : "none";
    });

    dots.each((index, dot) => {
        dot.className = index == slideIndex
            ? "dot active"
            : "dot";
    });
};