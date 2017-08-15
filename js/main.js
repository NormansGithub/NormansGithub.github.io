import { Clock } from './components/Clock.js';
import { Intro } from './components/Intro.js';
import { AboutMe } from './components/About-me.js';
import { Projects } from './components/Projects.js'

"use strict";

const mobileWidth = 992;
const mobile = screen.width < mobileWidth;

jQuery.fn.extend({
    getMax: function() {
        return Math.max.apply(null, this);
    },

    merge: function(selector) {
        return $.merge(this, selector);
    }
});

$(".clock-container").load("./../components/clock.html", Clock);
$(".intro-container").load("./../components/intro.html", _ => Intro(mobile));
$(".about-me-container").load("./../components/about-me.html", AboutMe);
$(".projects-container").load("./../components/projects.html", Projects);
$(".contact-container").load("./../components/contact.html");